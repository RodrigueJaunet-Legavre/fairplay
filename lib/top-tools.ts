import { allCatalogTools } from './tools-index'
import type { CatalogTool } from './catalog-types'

export type EnrichedTool = CatalogTool & {
  ease_of_use: number      // 1-5
  results_quality: number  // 1-5
  french_support: boolean
  ideal_for: string
}

export const TOP_CATEGORIES = [
  { slug: 'writing',    label: 'Rédaction' },
  { slug: 'image',      label: 'Image' },
  { slug: 'video',      label: 'Vidéo' },
  { slug: 'code',       label: 'Code' },
  { slug: 'business',   label: 'Marketing' },
  { slug: 'generaliste',label: 'Productivité' },
  { slug: 'finance',    label: 'Business' },
  { slug: 'misc',       label: 'Design' },
  { slug: 'audio',      label: 'Audio' },
  { slug: 'data',       label: 'Recherche' },
] as const

// Enrichment data: slug → extra fields
// ease_of_use & results_quality on a 1-5 scale
// french_support: does the tool have a proper French UI/output?
// ideal_for: target user type
const ENRICHMENT: Record<string, { ease_of_use: number; results_quality: number; french_support: boolean; ideal_for: string }> = {
  // ── Writing ──────────────────────────────────────────────────────
  'jasper':           { ease_of_use: 4, results_quality: 5, french_support: true,  ideal_for: 'Marketeurs' },
  'copy-ai':          { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Entrepreneurs' },
  'writesonic':       { ease_of_use: 4, results_quality: 4, french_support: true,  ideal_for: 'Rédacteurs web' },
  'grammarly':        { ease_of_use: 5, results_quality: 5, french_support: false, ideal_for: 'Tous niveaux' },
  'quillbot':         { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Étudiants' },
  'notion-ai':        { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Professionnels' },
  'rytr':             { ease_of_use: 5, results_quality: 3, french_support: true,  ideal_for: 'Débutants' },
  'wordtune':         { ease_of_use: 5, results_quality: 4, french_support: false, ideal_for: 'Rédacteurs' },
  'sudowrite':        { ease_of_use: 4, results_quality: 5, french_support: false, ideal_for: 'Auteurs fiction' },
  'anyword':          { ease_of_use: 4, results_quality: 4, french_support: true,  ideal_for: 'Équipes marketing' },

  // ── Image ─────────────────────────────────────────────────────────
  'midjourney':       { ease_of_use: 3, results_quality: 5, french_support: false, ideal_for: 'Artistes' },
  'dall-e-3':         { ease_of_use: 5, results_quality: 5, french_support: true,  ideal_for: 'Tous niveaux' },
  'stable-diffusion': { ease_of_use: 2, results_quality: 5, french_support: false, ideal_for: 'Développeurs' },
  'adobe-firefly':    { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Designers' },
  'ideogram':         { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Créateurs contenu' },
  'leonardo-ai':      { ease_of_use: 4, results_quality: 5, french_support: false, ideal_for: 'Artistes pro' },
  'canva-ai':         { ease_of_use: 5, results_quality: 3, french_support: true,  ideal_for: 'Débutants' },
  'playground-ai':    { ease_of_use: 4, results_quality: 4, french_support: false, ideal_for: 'Amateurs' },
  'adobe-photoshop-ai':{ ease_of_use: 3, results_quality: 5, french_support: true, ideal_for: 'Professionnels' },
  'removebg':         { ease_of_use: 5, results_quality: 5, french_support: true,  ideal_for: 'Tous niveaux' },

  // ── Video ─────────────────────────────────────────────────────────
  'runway-ml':        { ease_of_use: 4, results_quality: 5, french_support: false, ideal_for: 'Créatifs' },
  'pika-labs':        { ease_of_use: 5, results_quality: 4, french_support: false, ideal_for: 'Créateurs' },
  'heygen':           { ease_of_use: 5, results_quality: 5, french_support: true,  ideal_for: 'Marketeurs' },
  'synthesia':        { ease_of_use: 5, results_quality: 5, french_support: true,  ideal_for: 'Entreprises' },
  'descript':         { ease_of_use: 4, results_quality: 4, french_support: false, ideal_for: 'Podcasteurs' },
  'capcut-ai':        { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Réseaux sociaux' },
  'veed-io':          { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Débutants' },
  'invideo-ai':       { ease_of_use: 4, results_quality: 4, french_support: true,  ideal_for: 'Marketeurs' },
  'pictory':          { ease_of_use: 4, results_quality: 3, french_support: true,  ideal_for: 'Blogueurs' },
  'opus-clip':        { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Créateurs courts' },

  // ── Code ─────────────────────────────────────────────────────────
  'github-copilot':   { ease_of_use: 5, results_quality: 5, french_support: true,  ideal_for: 'Développeurs' },
  'cursor':           { ease_of_use: 4, results_quality: 5, french_support: true,  ideal_for: 'Développeurs pro' },
  'tabnine':          { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Dev équipes' },
  'codeium':          { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Étudiants dev' },
  'bolt-new':         { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'No-code' },
  'v0':               { ease_of_use: 4, results_quality: 5, french_support: true,  ideal_for: 'Dev frontend' },
  'replit-ai':        { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Débutants dev' },
  'aider':            { ease_of_use: 3, results_quality: 5, french_support: true,  ideal_for: 'Dev avancés' },
  'warp':             { ease_of_use: 4, results_quality: 4, french_support: true,  ideal_for: 'Dev terminal' },

  // ── Business / Marketing ─────────────────────────────────────────
  'hubspot-ai':       { ease_of_use: 4, results_quality: 5, french_support: true,  ideal_for: 'Équipes vente' },
  'adcreative-ai':    { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Publicité' },
  'hootsuite-ai':     { ease_of_use: 4, results_quality: 4, french_support: true,  ideal_for: 'Gestionnaires SM' },
  'taplio':           { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'LinkedIn' },
  'predis-ai':        { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Petites marques' },
  'klaviyo':          { ease_of_use: 3, results_quality: 5, french_support: true,  ideal_for: 'E-commerce' },
  'instantly-ai':     { ease_of_use: 4, results_quality: 4, french_support: false, ideal_for: 'Sales' },
  'lavender-ai':      { ease_of_use: 5, results_quality: 4, french_support: false, ideal_for: 'Commercial' },
  'buffer-ai':        { ease_of_use: 5, results_quality: 3, french_support: true,  ideal_for: 'Solopreneurs' },
  'flick-ai':         { ease_of_use: 5, results_quality: 3, french_support: false, ideal_for: 'Influenceurs' },

  // ── Generaliste / Productivité ───────────────────────────────────
  'chatgpt':          { ease_of_use: 5, results_quality: 5, french_support: true,  ideal_for: 'Tous' },
  'claude':           { ease_of_use: 5, results_quality: 5, french_support: true,  ideal_for: 'Professionnels' },
  'gemini':           { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Utilisateurs Google' },
  'le-chat':          { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Francophones' },
  'microsoft-copilot':{ ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Utilisateurs Office' },
  'poe':              { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Explorateurs IA' },
  'pi-ai':            { ease_of_use: 5, results_quality: 3, french_support: true,  ideal_for: 'Bien-être' },
  'you-com':          { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Tous niveaux' },
  'grok':             { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Utilisateurs X' },
  'meta-ai':          { ease_of_use: 5, results_quality: 3, french_support: true,  ideal_for: 'Réseaux sociaux' },

  // ── Finance / Business ──────────────────────────────────────────
  'alphasense':       { ease_of_use: 3, results_quality: 5, french_support: false, ideal_for: 'Analystes' },
  'harvey-ai':        { ease_of_use: 4, results_quality: 5, french_support: true,  ideal_for: 'Avocats' },
  'quickbooks-ai':    { ease_of_use: 4, results_quality: 4, french_support: true,  ideal_for: 'TPE/PME' },
  'xero-ai':          { ease_of_use: 4, results_quality: 4, french_support: true,  ideal_for: 'Comptables' },
  'stripe-radar':     { ease_of_use: 3, results_quality: 5, french_support: true,  ideal_for: 'E-commerce' },
  'donotpay':         { ease_of_use: 5, results_quality: 3, french_support: false, ideal_for: 'Particuliers' },
  'lemonade-ai':      { ease_of_use: 5, results_quality: 4, french_support: false, ideal_for: 'Assurés' },
  'casetext-ai':      { ease_of_use: 4, results_quality: 5, french_support: false, ideal_for: 'Juristes' },
  'taxjar-ai':        { ease_of_use: 4, results_quality: 4, french_support: false, ideal_for: 'Fiscalistes' },
  'lawgeex':          { ease_of_use: 4, results_quality: 4, french_support: false, ideal_for: 'Entreprises' },

  // ── Misc / Design ───────────────────────────────────────────────
  'looka':            { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Startups' },
  'khroma':           { ease_of_use: 5, results_quality: 4, french_support: false, ideal_for: 'Designers' },
  'brandmark':        { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Auto-entrepreneurs' },
  'artbreeder':       { ease_of_use: 4, results_quality: 4, french_support: false, ideal_for: 'Artistes' },
  'designs-ai':       { ease_of_use: 5, results_quality: 3, french_support: true,  ideal_for: 'Non-designers' },
  'adobe-express':    { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Polyvalents' },
  'wombo-ai':         { ease_of_use: 5, results_quality: 3, french_support: false, ideal_for: 'Amateurs' },
  'microsoft-designer':{ ease_of_use: 5, results_quality: 4, french_support: true, ideal_for: 'Utilisateurs Office' },
  'neural-love':      { ease_of_use: 4, results_quality: 4, french_support: false, ideal_for: 'Créatifs' },

  // ── Audio ────────────────────────────────────────────────────────
  'elevenlabs':       { ease_of_use: 4, results_quality: 5, french_support: true,  ideal_for: 'Podcasteurs' },
  'suno':             { ease_of_use: 5, results_quality: 5, french_support: true,  ideal_for: 'Créateurs musique' },
  'murf-ai':          { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'E-learning' },
  'udio':             { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Amateurs musique' },
  'adobe-podcast':    { ease_of_use: 5, results_quality: 5, french_support: true,  ideal_for: 'Podcasteurs' },
  'mubert':           { ease_of_use: 5, results_quality: 3, french_support: false, ideal_for: 'Créateurs vidéo' },
  'play-ht':          { ease_of_use: 4, results_quality: 4, french_support: true,  ideal_for: 'Voix off' },
  'krisp':            { ease_of_use: 5, results_quality: 5, french_support: true,  ideal_for: 'Télétravail' },
  'soundraw':         { ease_of_use: 5, results_quality: 4, french_support: false, ideal_for: 'YouTubeurs' },
  'aiva':             { ease_of_use: 4, results_quality: 4, french_support: true,  ideal_for: 'Compositeurs' },

  // ── Data / Recherche ─────────────────────────────────────────────
  'perplexity-research': { ease_of_use: 5, results_quality: 5, french_support: true, ideal_for: 'Tous' },
  'julius-ai':        { ease_of_use: 4, results_quality: 5, french_support: true,  ideal_for: 'Analystes data' },
  'elicit':           { ease_of_use: 4, results_quality: 5, french_support: false, ideal_for: 'Chercheurs' },
  'consensus':        { ease_of_use: 5, results_quality: 4, french_support: false, ideal_for: 'Académiques' },
  'chatpdf':          { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Étudiants' },
  'semantic-scholar': { ease_of_use: 4, results_quality: 5, french_support: false, ideal_for: 'Chercheurs' },
  'pandas-ai':        { ease_of_use: 3, results_quality: 5, french_support: true,  ideal_for: 'Data scientists' },
  'rows-ai':          { ease_of_use: 5, results_quality: 4, french_support: true,  ideal_for: 'Analystes' },
  'obviously-ai':     { ease_of_use: 4, results_quality: 4, french_support: false, ideal_for: 'Business analysts' },
  'explainpaper':     { ease_of_use: 5, results_quality: 4, french_support: false, ideal_for: 'Chercheurs' },
}

const DEFAULT_ENRICHMENT = { ease_of_use: 3, results_quality: 3, french_support: false, ideal_for: 'Professionnels' }

export function getTop10ForCategory(categorySlug: string): EnrichedTool[] {
  const tools = allCatalogTools
    .filter((t) => t.category === categorySlug)
    .sort((a, b) => b.upvotes - a.upvotes)
    .slice(0, 10)

  return tools.map((t) => ({
    ...t,
    ...(ENRICHMENT[t.slug] ?? DEFAULT_ENRICHMENT),
  }))
}
