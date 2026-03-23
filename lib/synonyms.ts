// Natural language intents → { categories, tags }
// Used by the search engine to expand user queries

export type SynonymEntry = {
  intent: string          // Display label for auto-suggestions
  keywords: string[]     // Trigger words (normalized, no accents)
  categories: string[]   // Exact category values in catalog
  tags: string[]         // Tags to boost in scoring
}

export const SYNONYM_ENTRIES: SynonymEntry[] = [
  // ── Vidéo ──────────────────────────────────────────────────────────────
  {
    intent: 'créer une vidéo de présentation',
    keywords: ['video', 'clip', 'film', 'reels', 'shorts', 'youtube', 'tiktok', 'vlog'],
    categories: ['Vidéo', 'Video'],
    tags: ['vidéo', 'video', 'création vidéo', 'montage'],
  },
  {
    intent: 'faire du montage vidéo',
    keywords: ['montage', 'editing', 'edit', 'couper', 'coupes'],
    categories: ['Vidéo', 'Video'],
    tags: ['montage', 'édition vidéo', 'video editing'],
  },
  {
    intent: 'animer des personnages en vidéo',
    keywords: ['animation', 'anime', 'personnage', 'avatar', 'talking', 'deepfake'],
    categories: ['Vidéo', 'Video'],
    tags: ['animation', 'avatar vidéo', 'lip sync'],
  },
  {
    intent: "générer une vidéo avec l'IA",
    keywords: ['generer', 'generate', 'genere', 'txt2vid', 'text-to-video'],
    categories: ['Vidéo', 'Video'],
    tags: ['génération vidéo', 'text-to-video'],
  },

  // ── Image & Design ──────────────────────────────────────────────────────
  {
    intent: 'générer des images réalistes',
    keywords: ['image', 'photo', 'picture', 'img', 'visuel', 'illustration'],
    categories: ['Image', 'Design'],
    tags: ['génération image', 'image IA', 'text-to-image'],
  },
  {
    intent: 'créer un logo professionnel',
    keywords: ['logo', 'marque', 'brand', 'branding', 'identite', 'logotype'],
    categories: ['Design', 'Image'],
    tags: ['logo', 'branding', 'identité visuelle'],
  },
  {
    intent: 'faire du design graphique',
    keywords: ['design', 'graphique', 'graphisme', 'ui', 'ux', 'interface'],
    categories: ['Design'],
    tags: ['design', 'graphisme', 'interface'],
  },
  {
    intent: 'créer des visuels pour les réseaux sociaux',
    keywords: ['banniere', 'cover', 'post', 'stories', 'thumbnail', 'miniature'],
    categories: ['Design', 'Image', 'Marketing'],
    tags: ['réseaux sociaux', 'social media', 'visuel'],
  },
  {
    intent: 'retoucher et améliorer une photo',
    keywords: ['retouche', 'retoucher', 'ameliorer', 'upscale', 'restaurer', 'recadrer'],
    categories: ['Image'],
    tags: ['retouche photo', 'upscaling', 'amélioration image'],
  },
  {
    intent: 'choisir une palette de couleurs',
    keywords: ['couleur', 'palette', 'charte', 'couleurs', 'color', 'hexadecimal'],
    categories: ['Design'],
    tags: ['couleurs', 'palette', 'charte graphique'],
  },
  {
    intent: 'créer des maquettes et wireframes',
    keywords: ['maquette', 'wireframe', 'prototype', 'figma', 'mockup'],
    categories: ['Design'],
    tags: ['maquette', 'wireframe', 'prototype'],
  },

  // ── Audio & Musique ─────────────────────────────────────────────────────
  {
    intent: "créer de la musique avec l'IA",
    keywords: ['musique', 'music', 'melodie', 'son', 'beat', 'jingle', 'instrumental'],
    categories: ['Audio', 'Musique'],
    tags: ['musique IA', 'génération musicale', 'composition'],
  },
  {
    intent: 'créer une voix off ou synthèse vocale',
    keywords: ['voix', 'voice', 'tts', 'speech', 'narration', 'voixoff', 'parole'],
    categories: ['Audio'],
    tags: ['text-to-speech', 'voix off', 'synthèse vocale'],
  },
  {
    intent: 'transcrire un podcast ou une réunion en texte',
    keywords: ['transcription', 'transcrire', 'retranscription', 'caption', 'sous-titre', 'sous-titres', 'sous titres'],
    categories: ['Audio', 'Vidéo'],
    tags: ['transcription', 'sous-titres', 'speech-to-text'],
  },
  {
    intent: 'enregistrer et éditer un podcast',
    keywords: ['podcast', 'podcasting', 'episode', 'micro'],
    categories: ['Audio'],
    tags: ['podcast', 'audio', 'enregistrement'],
  },
  {
    intent: 'supprimer le bruit de fond audio',
    keywords: ['bruit', 'noise', 'suppression', 'denoising', 'nettoyer', 'propre'],
    categories: ['Audio'],
    tags: ['réduction bruit', 'audio propre', 'denoising'],
  },

  // ── Écriture & Contenu ──────────────────────────────────────────────────
  {
    intent: 'rédiger des articles de blog',
    keywords: ['article', 'blog', 'blog post', 'billet', 'contenu', 'redaction'],
    categories: ['Écriture', 'Marketing'],
    tags: ['blog', 'rédaction', 'contenu long'],
  },
  {
    intent: 'écrire des posts LinkedIn',
    keywords: ['linkedin', 'personal-branding', 'professionnel'],
    categories: ['Marketing', 'Écriture'],
    tags: ['LinkedIn', 'réseau professionnel', 'personal branding'],
  },
  {
    intent: 'rédiger des emails marketing',
    keywords: ['email', 'mail', 'newsletter', 'courriel', 'mailing', 'campagne', 'emailing'],
    categories: ['Marketing', 'Écriture'],
    tags: ['email', 'newsletter', 'campagne email'],
  },
  {
    intent: 'écrire un script vidéo ou podcast',
    keywords: ['script', 'scenario', 'dialogue', 'storyboard'],
    categories: ['Écriture', 'Vidéo'],
    tags: ['script', 'scénario', 'storytelling'],
  },
  {
    intent: 'résumer un document ou un texte long',
    keywords: ['resumer', 'resume', 'synthese', 'sommaire', 'recap', 'synthétiser'],
    categories: ['Productivité', 'Écriture'],
    tags: ['résumé', 'synthèse', 'summarization'],
  },
  {
    intent: 'générer du contenu en masse',
    keywords: ['contenu', 'bulk', 'automatique', 'automatiser', 'masse', 'scalable'],
    categories: ['Marketing', 'Écriture'],
    tags: ['génération contenu', 'automatisation', 'content marketing'],
  },
  {
    intent: 'améliorer et corriger un texte',
    keywords: ['corriger', 'corrector', 'grammatical', 'orthographe', 'grammaire', 'relire', 'ameliorer'],
    categories: ['Écriture'],
    tags: ['correction', 'grammaire', 'orthographe'],
  },
  {
    intent: 'créer un roman ou une histoire',
    keywords: ['roman', 'histoire', 'fiction', 'conte', 'livre', 'narratif'],
    categories: ['Écriture'],
    tags: ['fiction', 'storytelling', 'roman'],
  },

  // ── Code & Développement ────────────────────────────────────────────────
  {
    intent: 'créer un site web',
    keywords: ['site', 'website', 'siteweb', 'landing', 'page', 'web'],
    categories: ['Code', 'Développement'],
    tags: ['site web', 'développement web', 'no-code'],
  },
  {
    intent: 'développer une application mobile',
    keywords: ['application', 'appli', 'mobile', 'ios', 'android', 'app'],
    categories: ['Code', 'Développement'],
    tags: ['application mobile', 'développement mobile'],
  },
  {
    intent: "écrire du code avec l'IA",
    keywords: ['code', 'coder', 'codegeneration', 'programmer', 'programmation', 'developer'],
    categories: ['Code'],
    tags: ['génération de code', 'assistant code', 'copilot'],
  },
  {
    intent: 'déboguer et corriger du code',
    keywords: ['debug', 'debogage', 'bug', 'erreur', 'fix', 'corriger', 'probleme'],
    categories: ['Code'],
    tags: ['débogage', 'bug fix', 'code review'],
  },
  {
    intent: 'créer une API ou un backend',
    keywords: ['api', 'backend', 'serveur', 'base-de-donnees', 'database', 'sql', 'rest'],
    categories: ['Code'],
    tags: ['API', 'backend', 'base de données'],
  },
  {
    intent: 'automatiser des tâches répétitives',
    keywords: ['automatiser', 'automatisation', 'automation', 'workflow', 'bot', 'script', 'zap'],
    categories: ['Productivité', 'Code'],
    tags: ['automatisation', 'workflow', 'no-code'],
  },
  {
    intent: 'faire un portfolio en ligne',
    keywords: ['portfolio', 'cv', 'showcase', 'presentation-personnelle'],
    categories: ['Code', 'Design'],
    tags: ['portfolio', 'CV en ligne', 'personal branding'],
  },

  // ── Marketing & SEO ─────────────────────────────────────────────────────
  {
    intent: 'améliorer le référencement SEO',
    keywords: ['seo', 'referencement', 'google', 'positionnement', 'ranking', 'mots-cles'],
    categories: ['Marketing', 'SEO'],
    tags: ['SEO', 'référencement', 'Google'],
  },
  {
    intent: 'gérer les réseaux sociaux',
    keywords: ['reseaux', 'social', 'instagram', 'twitter', 'facebook', 'tiktok', 'sociaux'],
    categories: ['Marketing'],
    tags: ['réseaux sociaux', 'social media', 'community management'],
  },
  {
    intent: 'créer des publicités en ligne',
    keywords: ['publicite', 'publicites', 'ads', 'pub', 'adwords', 'facebook-ads', 'annonce'],
    categories: ['Marketing'],
    tags: ['publicité', 'ads', 'conversion'],
  },
  {
    intent: 'analyser les performances marketing',
    keywords: ['analytics', 'statistiques', 'performance', 'kpi', 'metrics', 'rapport'],
    categories: ['Marketing', 'Data'],
    tags: ['analytics', 'performances', 'reporting'],
  },
  {
    intent: 'créer une page de vente ou landing page',
    keywords: ['landing-page', 'conversion', 'vente', 'funnel', 'leads'],
    categories: ['Marketing'],
    tags: ['landing page', 'conversion', 'vente'],
  },

  // ── Data & Analyse ──────────────────────────────────────────────────────
  {
    intent: 'analyser des données sans coder',
    keywords: ['donnees', 'data', 'analyse', 'statistiques', 'chiffres', 'excel', 'tableau', 'sql'],
    categories: ['Data', 'Analyse'],
    tags: ['analyse de données', 'data viz', 'business intelligence'],
  },
  {
    intent: 'créer des graphiques et visualisations',
    keywords: ['graphique', 'graphiques', 'visualisation', 'chart', 'dataviz', 'dashboard', 'courbe'],
    categories: ['Data', 'Design'],
    tags: ['data visualisation', 'graphiques', 'dashboard'],
  },
  {
    intent: 'nettoyer et préparer des données',
    keywords: ['nettoyer', 'nettoyage', 'preparation', 'preparer', 'cleaning', 'scraping', 'csv'],
    categories: ['Data'],
    tags: ['nettoyage données', 'data prep', 'ETL'],
  },
  {
    intent: "faire des prédictions avec l'IA",
    keywords: ['prediction', 'forecast', 'machine-learning', 'ml', 'modele', 'classification'],
    categories: ['Data', 'IA'],
    tags: ['machine learning', 'prédiction', 'modèle IA'],
  },

  // ── Business & Productivité ─────────────────────────────────────────────
  {
    intent: 'créer des présentations PowerPoint',
    keywords: ['presentation', 'slides', 'powerpoint', 'pitch', 'deck', 'diaporama'],
    categories: ['Productivité', 'Business'],
    tags: ['présentation', 'slides', 'PowerPoint'],
  },
  {
    intent: 'gérer des projets et des équipes',
    keywords: ['projet', 'gestion', 'equipe', 'team', 'management', 'taches', 'kanban', 'agile'],
    categories: ['Productivité', 'Business'],
    tags: ['gestion de projet', 'équipe', 'collaboration'],
  },
  {
    intent: 'créer un chatbot pour mon site',
    keywords: ['chatbot', 'chat', 'bot', 'assistant', 'conversation', 'support', 'service-client'],
    categories: ['Business', 'IA'],
    tags: ['chatbot', 'service client', 'automatisation'],
  },
  {
    intent: 'prendre des notes et organiser ses idées',
    keywords: ['notes', 'note', 'noter', 'organiser', 'pkm', 'wiki', 'knowledge', 'idees'],
    categories: ['Productivité'],
    tags: ['prise de notes', 'organisation', 'PKM'],
  },
  {
    intent: 'transcrire et résumer une réunion',
    keywords: ['reunion', 'meeting', 'standup', 'call', 'conference', 'rendez-vous', 'compte-rendu'],
    categories: ['Productivité'],
    tags: ['réunion', 'meeting', 'compte-rendu'],
  },
  {
    intent: 'rédiger des contrats et documents légaux',
    keywords: ['contrat', 'legal', 'juridique', 'document', 'formulaire', 'facture'],
    categories: ['Business', 'Juridique'],
    tags: ['contrat', 'document légal', 'juridique'],
  },
  {
    intent: 'traduire des documents',
    keywords: ['traduction', 'traduire', 'translation', 'langue', 'multilangue', 'anglais', 'espagnol'],
    categories: ['Écriture', 'Productivité'],
    tags: ['traduction', 'multilangue', 'localisation'],
  },
  {
    intent: 'faire de la recherche et trouver des informations',
    keywords: ['recherche', 'paper', 'scientifique', 'academique', 'litterature', 'sources', 'veille'],
    categories: ['Productivité', 'Recherche'],
    tags: ['recherche', 'veille', 'information'],
  },

  // ── RH & Recrutement ────────────────────────────────────────────────────
  {
    intent: "rédiger des offres d'emploi",
    keywords: ['offre', 'emploi', 'recrutement', 'recruter', 'rh', 'hr', 'poste'],
    categories: ['RH', 'Business'],
    tags: ['recrutement', 'offre emploi', 'RH'],
  },
  {
    intent: 'créer un CV ou une lettre de motivation',
    keywords: ['cv', 'lettre', 'motivation', 'candidature', 'job', 'emploi'],
    categories: ['RH', 'Écriture'],
    tags: ['CV', 'lettre de motivation', 'candidature'],
  },
  {
    intent: 'former et onboarder des employés',
    keywords: ['formation', 'former', 'onboarding', 'learning', 'e-learning', 'tutoriel'],
    categories: ['RH', 'Éducation'],
    tags: ['formation', 'e-learning', 'onboarding'],
  },

  // ── Finance ─────────────────────────────────────────────────────────────
  {
    intent: 'gérer la comptabilité et les finances',
    keywords: ['comptabilite', 'finance', 'comptable', 'tresorerie', 'budget', 'depenses'],
    categories: ['Finance'],
    tags: ['comptabilité', 'finance', 'budget'],
  },
  {
    intent: 'créer des factures et devis',
    keywords: ['facture', 'devis', 'invoicing', 'facturer', 'paiement'],
    categories: ['Finance', 'Business'],
    tags: ['facturation', 'devis', 'paiement'],
  },

  // ── Santé & Bien-être ───────────────────────────────────────────────────
  {
    intent: 'améliorer sa santé et son bien-être',
    keywords: ['sante', 'bien-etre', 'bienetre', 'medecine', 'medical', 'fitness', 'sport'],
    categories: ['Santé'],
    tags: ['santé', 'bien-être', 'médical'],
  },
  {
    intent: 'gérer la santé mentale et la productivité',
    keywords: ['mental', 'stress', 'anxiete', 'meditation', 'focus', 'concentration'],
    categories: ['Santé', 'Productivité'],
    tags: ['santé mentale', 'meditation', 'focus'],
  },
]

// Build a quick lookup: normalized keyword → matching entries
const _index = new Map<string, SynonymEntry[]>()
for (const entry of SYNONYM_ENTRIES) {
  for (const kw of entry.keywords) {
    const existing = _index.get(kw) ?? []
    existing.push(entry)
    _index.set(kw, existing)
  }
}

/** Return all synonym entries whose keywords overlap with any of the given tokens */
export function getMatchingEntries(tokens: string[]): SynonymEntry[] {
  const seen = new Set<SynonymEntry>()
  for (const token of tokens) {
    for (const [kw, entries] of _index) {
      if (kw.includes(token) || token.includes(kw)) {
        entries.forEach((e) => seen.add(e))
      }
    }
  }
  return [...seen]
}

/** Return suggestion labels whose keywords partially match the input string */
export function getSuggestions(input: string, max = 5): string[] {
  if (input.trim().length < 2) return []
  const norm = input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim()

  const words = norm.split(/\s+/).filter((w) => w.length >= 2)
  if (words.length === 0) return []

  const scored: Array<{ intent: string; score: number }> = []

  for (const entry of SYNONYM_ENTRIES) {
    let score = 0
    for (const word of words) {
      for (const kw of entry.keywords) {
        if (kw.startsWith(word) || word.startsWith(kw)) score += 2
        else if (kw.includes(word) || word.includes(kw)) score += 1
      }
      // Also check if the intent label itself contains the word
      const intentNorm = entry.intent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      if (intentNorm.includes(word)) score += 1
    }
    if (score > 0) scored.push({ intent: entry.intent, score })
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((s) => s.intent)
}
