import { allCatalogTools } from './tools-index'
import type { CatalogTool } from './catalog-types'

export const PROFESSIONS = [
  { id: 'Entrepreneur',            emoji: '🚀', label: 'Entrepreneur' },
  { id: 'Créateur de contenu',     emoji: '🎬', label: 'Créateur de contenu' },
  { id: 'Développeur',             emoji: '💻', label: 'Développeur' },
  { id: 'Étudiant',                emoji: '📚', label: 'Étudiant' },
  { id: 'Marketing/Communication', emoji: '📢', label: 'Marketing / Communication' },
  { id: 'Santé',                   emoji: '🏥', label: 'Santé' },
  { id: 'Droit/Juridique',         emoji: '⚖️',  label: 'Droit / Juridique' },
  { id: 'Finance/Comptabilité',    emoji: '💰', label: 'Finance / Comptabilité' },
  { id: 'Enseignant/Formation',    emoji: '🎓', label: 'Enseignant / Formation' },
  { id: 'Artiste/Design',          emoji: '🎨', label: 'Artiste / Design' },
  { id: 'Journaliste',             emoji: '✍️',  label: 'Journaliste' },
  { id: 'RH/Recrutement',          emoji: '👥', label: 'RH / Recrutement' },
  { id: 'Commerce/Vente',          emoji: '🛍️',  label: 'Commerce / Vente' },
  { id: 'Autre',                   emoji: '✨', label: 'Autre' },
] as const

export type ProfessionId = (typeof PROFESSIONS)[number]['id']

export const LEVELS = [
  {
    id: 'Débutant complet',
    emoji: '🌱',
    label: 'Débutant complet',
    description: 'Je ne connais presque rien à l\'IA',
  },
  {
    id: 'J\'ai déjà testé quelques outils',
    emoji: '🌿',
    label: 'J\'ai déjà testé',
    description: 'J\'ai utilisé ChatGPT ou quelques outils',
  },
  {
    id: 'Utilisateur régulier',
    emoji: '🌳',
    label: 'Utilisateur régulier',
    description: 'J\'utilise l\'IA dans mon quotidien',
  },
]

export const OBJECTIVES = [
  { id: 'Gagner du temps',           emoji: '⏱️' },
  { id: 'Créer du contenu',          emoji: '✍️' },
  { id: 'Automatiser des tâches',    emoji: '🤖' },
  { id: 'Apprendre l\'IA',           emoji: '📖' },
  { id: 'Développer mon business',   emoji: '📈' },
  { id: 'Améliorer ma productivité', emoji: '⚡' },
  { id: 'Trouver des idées',         emoji: '💡' },
  { id: 'Autre',                     emoji: '🎯' },
]

const PROFESSION_CATEGORIES: Record<string, string[]> = {
  'Entrepreneur':            ['business', 'writing', 'generaliste'],
  'Créateur de contenu':     ['video', 'image', 'audio'],
  'Développeur':             ['code', 'data', 'generaliste'],
  'Étudiant':                ['generaliste', 'writing', 'data'],
  'Marketing/Communication': ['business', 'writing', 'image'],
  'Santé':                   ['health', 'generaliste', 'data'],
  'Droit/Juridique':         ['finance', 'writing', 'generaliste'],
  'Finance/Comptabilité':    ['finance', 'data', 'generaliste'],
  'Enseignant/Formation':    ['hr', 'writing', 'generaliste'],
  'Artiste/Design':          ['image', 'video', 'misc'],
  'Journaliste':             ['writing', 'generaliste', 'data'],
  'RH/Recrutement':          ['hr', 'business', 'generaliste'],
  'Commerce/Vente':          ['business', 'generaliste', 'writing'],
  'Autre':                   ['generaliste', 'writing', 'business'],
}

export function getToolsForProfession(profession: string, limit = 6): CatalogTool[] {
  const categories = PROFESSION_CATEGORIES[profession] ?? ['generaliste']
  const seen = new Set<string>()
  const result: CatalogTool[] = []

  for (const cat of categories) {
    allCatalogTools
      .filter((t) => t.category === cat)
      .sort((a, b) => b.upvotes - a.upvotes)
      .slice(0, 3)
      .forEach((t) => { if (!seen.has(t.slug)) { seen.add(t.slug); result.push(t) } })
  }

  return result.sort((a, b) => b.upvotes - a.upvotes).slice(0, limit)
}
