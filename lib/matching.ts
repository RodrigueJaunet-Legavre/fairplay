import type { CatalogTool } from './catalog-types'
import { getMatchingEntries } from './synonyms'

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['']/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
}

const STOP_WORDS = new Set([
  'je', 'veux', 'besoin', 'pour', 'une', 'un', 'des', 'de', 'du', 'le', 'la',
  'les', 'et', 'ou', 'avec', 'en', 'faire', 'creer', 'generer', 'ecrire', 'ai',
  'ma', 'mon', 'mes', 'qui', 'que', 'quoi', 'comment', 'outil', 'logiciel',
  'application', 'app', 'utiliser', 'peut', 'sur', 'par', 'dans', 'que', 'son',
  'ses', 'leur', 'nous', 'vous', 'ils', 'elles', 'est', 'sont', 'avoir', 'etre',
  'tout', 'tres', 'plus', 'bien', 'bon', 'bonne', 'nouveau', 'nouvelle',
])

function tokenize(str: string): string[] {
  return normalize(str)
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w))
}

export type MatchResult = {
  tool: CatalogTool
  score: number
  matchedTags: string[]
  explanation: string
}

function buildExplanation(tool: CatalogTool, matchedTags: string[], score: number): string {
  if (matchedTags.length > 0) {
    const tag = matchedTags[0]
    if (score >= 6) return `${tool.name} est parfaitement adapté pour ${tag}.`
    if (score >= 3) return `${tool.name} correspond bien à votre besoin de ${tag}.`
    return `${tool.name} peut vous aider pour ${tag}.`
  }
  return `${tool.name} correspond à votre recherche.`
}

export function findBestMatches(query: string, allTools: CatalogTool[], limit = 6): MatchResult[] {
  const rawTokens = tokenize(query)
  if (rawTokens.length === 0) return []

  // Expand with synonym entries
  const matchedEntries = getMatchingEntries(rawTokens)
  const expandedCategories = new Set<string>(matchedEntries.flatMap((e) => e.categories.map(normalize)))
  const expandedTags = new Set<string>(matchedEntries.flatMap((e) => e.tags.map(normalize)))

  // Also add the raw tokens themselves as additional search terms
  const allTokens = new Set([...rawTokens])

  const scored = allTools.map((tool) => {
    const nameNorm = normalize(tool.name)
    const categoryNorm = normalize(tool.category)
    const tagNorms = tool.tags.map((t) => normalize(t))

    let score = 0
    const matchedTags: string[] = []

    // +3 if any query token appears in the tool name
    for (const token of allTokens) {
      if (nameNorm.includes(token)) {
        score += 3
        break
      }
    }

    // +2 if tool category matches a synonym-expanded category
    if (expandedCategories.has(categoryNorm)) {
      score += 2
    } else {
      // partial category match with raw tokens
      for (const token of allTokens) {
        if (categoryNorm.includes(token)) { score += 2; break }
      }
    }

    // +1 per matching tag (from expanded synonym tags or raw tokens)
    for (let i = 0; i < tool.tags.length; i++) {
      const tagNorm = tagNorms[i]
      let tagMatched = false

      // Check expanded synonym tags
      for (const st of expandedTags) {
        if (tagNorm.includes(st) || st.includes(tagNorm)) { tagMatched = true; break }
      }
      // Check raw tokens
      if (!tagMatched) {
        for (const token of allTokens) {
          if (tagNorm.includes(token)) { tagMatched = true; break }
        }
      }

      if (tagMatched) {
        score += 1
        if (!matchedTags.includes(tool.tags[i])) matchedTags.push(tool.tags[i])
      }
    }

    // Also check tagline/description for raw tokens (+0.5 each, using fractional scoring)
    const taglineNorm = normalize(tool.tagline)
    for (const token of allTokens) {
      if (taglineNorm.includes(token)) { score += 0.5; break }
    }

    return {
      tool,
      score,
      matchedTags: matchedTags.slice(0, 3),
      explanation: buildExplanation(tool, matchedTags, score),
    }
  })

  return scored
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}
