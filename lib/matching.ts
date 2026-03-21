import type { CatalogTool } from './catalog-types'
type Tool = CatalogTool

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

// Synonym groups — any word in a group matches any other
const SYNONYM_GROUPS: string[][] = [
  ['video', 'clip', 'film', 'animation', 'montage', 'reels', 'youtube', 'tiktok', 'shorts'],
  ['image', 'photo', 'visuel', 'illustration', 'picture', 'img', 'graphique', 'thumbnail'],
  ['logo', 'marque', 'brand', 'identite', 'branding'],
  ['email', 'mail', 'newsletter', 'courriel', 'mailing', 'campagne'],
  ['code', 'developpement', 'programmation', 'script', 'api', 'debug', 'bug'],
  ['audio', 'son', 'musique', 'podcast', 'voix', 'speech', 'tts'],
  ['article', 'blog', 'contenu', 'post', 'texte', 'redaction'],
  ['resume', 'synthese', 'sommaire', 'recap', 'synthese'],
  ['data', 'donnees', 'analyse', 'statistiques', 'chiffres', 'base'],
  ['chat', 'chatbot', 'assistant', 'conversation', 'bot', 'support'],
  ['design', 'interface', 'ui', 'ux', 'graphisme', 'maquette', 'wireframe'],
  ['marketing', 'publicite', 'campagne', 'conversion', 'ads', 'pub'],
  ['seo', 'referencement', 'google', 'positionnement'],
  ['transcription', 'sous-titres', 'sous titres', 'retranscription', 'caption'],
  ['presentation', 'slides', 'powerpoint', 'pitch', 'deck'],
  ['social', 'reseaux', 'instagram', 'twitter', 'linkedin', 'tiktok'],
  ['reunion', 'meeting', 'standup', 'call', 'conference'],
  ['recherche', 'paper', 'article', 'scientifique', 'academique'],
  ['couleur', 'palette', 'charte', 'couleurs'],
  ['traduction', 'translation', 'langue'],
]

function expandTokens(tokens: string[]): Set<string> {
  const expanded = new Set(tokens)
  for (const token of tokens) {
    for (const group of SYNONYM_GROUPS) {
      if (group.some((g) => g.includes(token) || token.includes(g))) {
        group.forEach((g) => expanded.add(g))
        break
      }
    }
  }
  return expanded
}

export type MatchResult = {
  tool: CatalogTool
  score: number
  matchedTags: string[]
  explanation: string
}

function buildExplanation(tool: CatalogTool, matchedTags: string[], score: number): string {
  if (matchedTags.length === 0) return `${tool.name} correspond à votre recherche.`
  const tag = matchedTags[0]
  if (score >= 70) return `${tool.name} est parfaitement adapté pour ${tag}.`
  if (score >= 45) return `${tool.name} correspond bien à votre besoin de ${tag}.`
  return `${tool.name} peut vous aider pour ${tag}.`
}

export function findBestMatches(query: string, allTools: CatalogTool[], limit = 3): MatchResult[] {
  const rawTokens = tokenize(query)
  if (rawTokens.length === 0) return []

  const expandedTokens = expandTokens(rawTokens)

  const scored = allTools.map((tool) => {
    const tagNorms = tool.tags.map((t) => ({ original: t, norm: normalize(t) }))
    const nameNorm = normalize(tool.name)
    const taglineNorm = normalize(tool.tagline)
    const descNorm = normalize(tool.description)

    let score = 0
    const matchedTags: string[] = []

    // Tags (highest weight: 30 pts per matching token per tag)
    for (const { original, norm } of tagNorms) {
      let tagScore = 0
      for (const token of expandedTokens) {
        if (norm.includes(token)) tagScore += 30
      }
      if (tagScore > 0) {
        score += tagScore
        if (!matchedTags.includes(original)) matchedTags.push(original)
      }
    }

    // Name (15 pts)
    for (const token of expandedTokens) {
      if (nameNorm.includes(token)) score += 15
    }

    // Tagline (8 pts)
    for (const token of expandedTokens) {
      if (taglineNorm.includes(token)) score += 8
    }

    // Description (4 pts)
    for (const token of expandedTokens) {
      if (descNorm.includes(token)) score += 4
    }

    // Normalize: max possible = all tokens match 3 tags = tokens * 3 * 30
    const maxScore = Math.max(expandedTokens.size * 3 * 30, 1)
    const percentage = Math.min(97, Math.round((score / maxScore) * 100))

    return {
      tool,
      score: percentage,
      matchedTags: matchedTags.slice(0, 3),
      explanation: buildExplanation(tool, matchedTags, percentage),
    }
  })

  return scored
    .filter((r) => r.score >= 12)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}
