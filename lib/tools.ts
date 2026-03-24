export type PricingPlan = {
  name: string
  price: string
  features: string[]
  highlighted?: boolean
}

export type InstallStep = {
  title: string
  description: string
  code?: string
}

export type UsageExample = {
  title: string
  description: string
  prompt?: string
  result?: string
}

export type Tool = {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  category: string
  pricing: 'free' | 'freemium' | 'paid'
  pricingDetail: string
  pricingPlans: PricingPlan[]
  rating: number
  users: string
  upvotes: number
  tags: string[]
  emoji: string
  color: string
  url: string
  featured?: boolean
  pros: string[]
  cons: string[]
  installationSteps: InstallStep[]
  usageExamples: UsageExample[]
  alternatives: string[]
}

export const categories = [
  { slug: 'all', label: 'Tous' },
  { slug: 'writing', label: 'Rédaction' },
  { slug: 'image', label: 'Image' },
  { slug: 'video', label: 'Vidéo' },
  { slug: 'code', label: 'Code' },
  { slug: 'audio', label: 'Audio' },
  { slug: 'business', label: 'Business' },
  { slug: 'finance', label: 'Finance' },
  { slug: 'hr', label: 'RH & Formation' },
  { slug: 'health', label: 'Santé' },
  { slug: 'data', label: 'Data & IA' },
  { slug: 'misc', label: 'Autres' },
]

export const tools: Tool[] = [
  // ── CHAT / DATA ───────────────────────────────────────────────────────────
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'Le chatbot IA le plus utilisé au monde',
    description: 'Assistant conversationnel d\'OpenAI capable de rédiger, coder, analyser et répondre à toutes vos questions.',
    longDescription:
      'ChatGPT est l\'assistant IA d\'OpenAI lancé en novembre 2022. Basé sur les modèles GPT-4o (version payante) et GPT-4o mini (version gratuite), il permet de rédiger des textes, générer du code, analyser des documents, traduire, résumer et bien plus. Avec plus de 200 millions d\'utilisateurs actifs, c\'est l\'outil IA le plus adopté au monde. La version Plus donne accès à GPT-4o, DALL-E, la navigation web et des GPTs personnalisés.',
    category: 'data',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (GPT-4o mini), Plus à 20$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['GPT-4o mini', 'Accès web limité', 'DALL-E limité', '~40 messages/jour'] },
      { name: 'Plus', price: '20$/mois', features: ['GPT-4o illimité', 'DALL-E 3', 'Navigation web', 'GPTs personnalisés', 'Analyse de fichiers'], highlighted: true },
      { name: 'Team', price: '30$/utilisateur/mois', features: ['Tout Plus', 'Espace de travail partagé', 'Pas de formation sur vos données', 'Console admin'] },
    ],
    rating: 4.9,
    users: '200M+',
    upvotes: 15420,
    tags: ['chatbot', 'questions-réponses', 'rédaction assistée', 'génération de code', 'analyse de documents', 'traduction', 'résumé automatique'],
    emoji: '🤖',
    color: '#10a37f',
    url: 'https://chat.openai.com',
    featured: true,
    pros: [
      'Modèle GPT-4o extrêmement puissant et polyvalent',
      'Interface simple et intuitive',
      'Accès à DALL-E, navigation web et plugins',
      'API robuste pour les développeurs',
      'Mises à jour très fréquentes',
    ],
    cons: [
      'Version gratuite limitée en nombre de messages',
      'Peut halluciner des informations incorrectes',
      'Connaissance coupée à une date donnée (sans navigation)',
      'Données potentiellement utilisées pour l\'entraînement',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Rédiger un email professionnel', description: 'Demandez à ChatGPT de rédiger un email de relance client en précisant le contexte.', prompt: 'Rédige un email de relance pour un client qui n\'a pas répondu à mon devis depuis 2 semaines. Ton professionnel mais chaleureux.' },
      { title: 'Déboguer du code', description: 'Collez votre code et demandez une explication de l\'erreur et la correction.', prompt: 'Voici mon code Python qui génère une erreur TypeError. Explique pourquoi et corrige-le.' },
      { title: 'Résumer un document', description: 'Uploadez un PDF et obtenez un résumé structuré en bullet points.', prompt: 'Résume ce document en 5 points clés, puis liste les actions recommandées.' },
    ],
    alternatives: ['claude-ai', 'gemini', 'perplexity'],
  },

  {
    slug: 'claude-ai',
    name: 'Claude',
    tagline: 'L\'IA d\'Anthropic, experte en raisonnement et longs textes',
    description: 'Assistant IA d\'Anthropic, excellent pour analyser de longs documents, rédiger avec nuance et raisonner étape par étape.',
    longDescription:
      'Claude est l\'assistant IA d\'Anthropic, conçu avec un focus sur la sécurité et l\'alignement. Le modèle Claude 3.5 Sonnet excelle dans l\'analyse de documents longs (jusqu\'à 200 000 tokens de contexte), la rédaction de qualité, le raisonnement complexe et le code. Claude se distingue par sa capacité à refuser poliment les requêtes problématiques tout en restant très utile. Utilisé par des entreprises comme Notion, Slack et Quora.',
    category: 'data',
    pricing: 'freemium',
    pricingDetail: 'Gratuit limité, Pro à 20$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['Claude 3 Haiku', 'Limite de messages quotidienne', 'Projets basiques'] },
      { name: 'Pro', price: '20$/mois', features: ['Claude 3.5 Sonnet & Opus', 'Usage 5× plus élevé', 'Projets avancés', 'Artefacts visuels', 'Priorité d\'accès'], highlighted: true },
      { name: 'Team', price: '30$/utilisateur/mois', features: ['Tout Pro', 'Espace collaboratif', 'Pas d\'entraînement sur vos données', 'Admin centralisé'] },
    ],
    rating: 4.8,
    users: '10M+',
    upvotes: 9870,
    tags: ['chatbot', 'analyse de documents longs', 'rédaction nuancée', 'raisonnement', 'code', 'résumé', 'questions-réponses'],
    emoji: '🧠',
    color: '#b8620a',
    url: 'https://claude.ai',
    featured: true,
    pros: [
      'Fenêtre de contexte très large (200K tokens)',
      'Excellent pour les longs documents et analyses',
      'Rédaction naturelle et nuancée',
      'Très fort en raisonnement étape par étape',
      'Refus poli des requêtes dangereuses',
    ],
    cons: [
      'Moins de plugins/intégrations que ChatGPT',
      'Pas de génération d\'images native',
      'Quota gratuit plus restrictif',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Analyser un contrat PDF', description: 'Uploadez un contrat et demandez à Claude d\'identifier les clauses importantes et les risques.', prompt: 'Analyse ce contrat de prestation. Liste les clauses inhabituelles, les obligations principales et les points de vigilance.' },
      { title: 'Rédiger un rapport détaillé', description: 'Demandez un rapport structuré sur un sujet complexe avec sources et recommandations.', prompt: 'Rédige un rapport de 1500 mots sur l\'impact de l\'IA sur le marché du travail en France, avec introduction, 3 parties et conclusion.' },
    ],
    alternatives: ['chatgpt', 'gemini', 'perplexity'],
  },

  {
    slug: 'gemini',
    name: 'Gemini',
    tagline: 'L\'IA multimodale de Google, intégrée à tout l\'écosystème Google',
    description: 'Assistant IA de Google avec accès en temps réel au web, intégration Google Workspace et compréhension d\'images et de vidéos.',
    longDescription:
      'Gemini est l\'assistant IA de Google, disponible sur gemini.google.com et intégré à Gmail, Docs, Sheets et Meet via Google Workspace. Le modèle Gemini 1.5 Pro offre une fenêtre de contexte d\'un million de tokens et une compréhension multimodale (texte, images, audio, vidéo). Gemini Advanced (abonnement Google One) donne accès aux dernières capacités dont Gemini 2.0 Flash.',
    category: 'data',
    pricing: 'freemium',
    pricingDetail: 'Gratuit, Advanced inclus dans Google One à 21,99€/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['Gemini 1.5 Flash', 'Recherche web temps réel', 'Compréhension d\'images', 'Intégration Gmail basique'] },
      { name: 'Advanced', price: '21,99€/mois', features: ['Gemini 1.5 Pro & 2.0', 'Contexte 1M tokens', 'Workspace profond (Docs, Sheets, Meet)', '2 To Google Drive'], highlighted: true },
    ],
    rating: 4.7,
    users: '50M+',
    upvotes: 8340,
    tags: ['chatbot', 'recherche web temps réel', 'intégration Google', 'multimodal', 'résumé d\'emails', 'analyse d\'images'],
    emoji: '✨',
    color: '#4285f4',
    url: 'https://gemini.google.com',
    featured: true,
    pros: [
      'Accès en temps réel à la recherche Google',
      'Intégration native Gmail/Docs/Sheets/Meet',
      'Multimodal (texte, images, audio, vidéo)',
      'Contexte très long (1M tokens sur Pro)',
      'Gratuit et très accessible',
    ],
    cons: [
      'Moins fort que GPT-4o sur la génération de code',
      'Advanced coûteux (bundle Google One)',
      'Qualité variable selon les langues',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Résumer ses emails Gmail', description: 'Demandez à Gemini (dans Gmail) de résumer vos échanges importants de la semaine.', prompt: 'Résume les 10 derniers emails non lus dans ma boîte et classe-les par priorité.' },
      { title: 'Analyser une image ou une capture', description: 'Uploadez une image et posez des questions dessus.', prompt: 'Regarde ce graphique de ventes. Quelles sont les tendances principales et que recommandes-tu ?' },
    ],
    alternatives: ['chatgpt', 'claude-ai', 'perplexity'],
  },

  {
    slug: 'perplexity',
    name: 'Perplexity AI',
    tagline: 'Le moteur de recherche IA avec sources vérifiées en temps réel',
    description: 'Moteur de recherche basé sur l\'IA qui répond à vos questions avec des sources citées, en temps réel.',
    longDescription:
      'Perplexity AI est un moteur de recherche conversationnel qui combine la puissance des LLMs avec la recherche web en temps réel. Chaque réponse est sourcée avec des citations cliquables, ce qui rend l\'information vérifiable. Il indexe le web en permanence et permet d\'interroger des documents, des vidéos YouTube et des repositories GitHub. Idéal pour la recherche académique, la veille et les questions factuelles.',
    category: 'data',
    pricing: 'freemium',
    pricingDetail: 'Gratuit, Pro à 20$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['Recherche illimitée', 'Sources citées', '5 recherches Pro/jour', 'Accès mobile'] },
      { name: 'Pro', price: '20$/mois', features: ['Recherches illimitées avec GPT-4/Claude', 'Mode Focus (Reddit, Academic...)', 'Upload de fichiers', 'API incluse'], highlighted: true },
    ],
    rating: 4.7,
    users: '15M+',
    upvotes: 7650,
    tags: ['recherche web', 'sources vérifiées', 'veille', 'questions factuelles', 'résumé d\'actualités', 'recherche académique'],
    emoji: '🔍',
    color: '#20b2aa',
    url: 'https://perplexity.ai',
    featured: true,
    pros: [
      'Sources citées et cliquables pour vérifier',
      'Informations en temps réel (pas de date de coupure)',
      'Modes Focus (Academic, Reddit, YouTube)',
      'Interface propre et rapide',
      'Disponible sur mobile',
    ],
    cons: [
      'Moins fort pour la génération créative',
      'Peut mal interpréter des questions ambiguës',
      'Limite quotidienne sur le plan gratuit',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Recherche sur un sujet récent', description: 'Posez une question sur un événement récent et obtenez une réponse avec les sources.', prompt: 'Quelles sont les dernières avancées en IA générative en 2025 ? Cite tes sources.' },
      { title: 'Comparaison de produits', description: 'Demandez une comparaison objective entre plusieurs outils ou produits.', prompt: 'Compare Notion, Obsidian et Roam Research pour la prise de notes. Sources récentes uniquement.' },
    ],
    alternatives: ['chatgpt', 'claude-ai', 'you-com'],
  },

  // ── RÉDACTION ─────────────────────────────────────────────────────────────
  {
    slug: 'jasper-ai',
    name: 'Jasper AI',
    tagline: 'La plateforme de création de contenu IA pour les équipes marketing',
    description: 'Assistant de rédaction IA spécialisé pour le marketing : articles, emails, publicités, posts réseaux sociaux.',
    longDescription:
      'Jasper (anciennement Jarvis) est la référence des outils de rédaction IA pour les équipes marketing. Il propose plus de 50 templates optimisés (articles de blog, descriptions produit, emails de prospection, scripts vidéo...) et un assistant de marque qui apprend votre ton et votre style. Jasper intègre Surfer SEO pour l\'optimisation et dispose d\'une API pour les workflows automatisés.',
    category: 'writing',
    pricing: 'paid',
    pricingDetail: 'À partir de 49$/mois',
    pricingPlans: [
      { name: 'Creator', price: '49$/mois', features: ['1 siège', 'Voix de marque', '50+ templates', 'Chrome extension'] },
      { name: 'Pro', price: '69$/mois', features: ['5 sièges', 'Jasper Art', 'Collaboration', 'API access', 'Intégration Surfer SEO'], highlighted: true },
      { name: 'Business', price: 'Sur devis', features: ['Sièges illimités', 'SSO', 'Formation dédiée', 'Support prioritaire'] },
    ],
    rating: 4.7,
    users: '105K+',
    upvotes: 4230,
    tags: ['rédaction marketing', 'articles de blog', 'copywriting', 'emails marketing', 'descriptions produit', 'réseaux sociaux', 'SEO'],
    emoji: '✍️',
    color: '#6366f1',
    url: 'https://jasper.ai',
    featured: true,
    pros: [
      '50+ templates marketing prêts à l\'emploi',
      'Apprentissage du ton et de la voix de marque',
      'Intégration native avec Surfer SEO',
      'Mode campagne pour créer du contenu cohérent',
      'Collaboration en équipe',
    ],
    cons: [
      'Cher pour les indépendants (pas de plan gratuit)',
      'Qualité variable selon les templates',
      'Moins polyvalent que ChatGPT pour les tâches non-marketing',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Article de blog optimisé SEO', description: 'Utilisez le template Blog Post pour créer un article de 1500 mots avec plan et introduction.', prompt: 'Sujet : "Comment utiliser l\'IA pour automatiser son marketing". Audience : PME françaises. Ton : Expert mais accessible.' },
      { title: 'Email de cold outreach', description: 'Générez une séquence d\'emails de prospection personnalisés.', prompt: 'Email de prospection pour une agence web qui cible des restaurants. Objet accrocheur, 150 mots max, CTA clair.' },
    ],
    alternatives: ['copy-ai', 'writesonic', 'notion-ai'],
  },

  {
    slug: 'grammarly-ai',
    name: 'Grammarly AI',
    tagline: 'L\'assistant d\'écriture IA pour corriger, améliorer et adapter votre style',
    description: 'Outil de correction grammaticale et d\'amélioration de texte avec IA, disponible partout sur le web.',
    longDescription:
      'Grammarly est l\'outil de correction d\'écriture le plus utilisé au monde avec plus de 30 millions d\'utilisateurs quotidiens. Son IA analyse en temps réel la grammaire, le style, la clarté, le ton et la cohérence de vos textes. Grammarly Business ajoute des guides de style d\'entreprise et l\'analyse de la tonalité. Disponible comme extension Chrome, application desktop et API.',
    category: 'writing',
    pricing: 'freemium',
    pricingDetail: 'Gratuit, Premium à 12€/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['Correction grammaticale de base', 'Extension Chrome', 'App desktop'] },
      { name: 'Premium', price: '12€/mois', features: ['Suggestions de style avancées', 'Détection de plagiat', 'Réécriture de phrases', 'Ajustement du ton'], highlighted: true },
      { name: 'Business', price: '15€/utilisateur/mois', features: ['Tout Premium', 'Guide de style d\'équipe', 'Tableau de bord admin', 'Intégrations SSO'] },
    ],
    rating: 4.8,
    users: '30M+',
    upvotes: 6780,
    tags: ['correction grammaticale', 'amélioration de style', 'clarté du texte', 'ton professionnel', 'rédaction en anglais', 'emails'],
    emoji: '✅',
    color: '#15c39a',
    url: 'https://grammarly.com',
    featured: true,
    pros: [
      'Correction en temps réel dans tous les éditeurs',
      'Extension disponible partout (Gmail, Docs, Slack...)',
      'Suggestions de style et de clarté très pertinentes',
      'Détection de ton (formel/informel)',
      'Version gratuite très utile',
    ],
    cons: [
      'Principalement orienté anglais (français limité)',
      'Peut parfois suggérer des reformulations qui dénaturent le sens',
      'Fonctionnalités IA avancées réservées au Premium',
    ],
    installationSteps: [
      { title: 'Installer l\'extension Chrome', description: 'Ajoutez Grammarly à Chrome depuis le Chrome Web Store. Il s\'active automatiquement sur tous les champs de texte.' },
      { title: 'Créer un compte', description: 'Inscrivez-vous gratuitement sur grammarly.com pour sauvegarder vos paramètres et accéder à l\'historique.' },
    ],
    usageExamples: [
      { title: 'Corriger un email professionnel', description: 'Rédigez votre email dans Gmail — Grammarly souligne les erreurs et propose des améliorations en temps réel.' },
      { title: 'Adapter le ton d\'un texte', description: 'Utilisez la fonctionnalité "Tone Detector" pour vérifier si votre message paraît professionnel, amical ou confiant.' },
    ],
    alternatives: ['quillbot', 'wordtune', 'deepl-write'],
  },

  {
    slug: 'notion-ai',
    name: 'Notion AI',
    tagline: 'L\'IA intégrée à votre espace de travail Notion',
    description: 'Assistant IA natif dans Notion pour rédiger, résumer, traduire et organiser vos notes et documents.',
    longDescription:
      'Notion AI est directement intégré dans l\'espace de travail Notion. Il permet de générer du contenu, résumer des pages longues, corriger et améliorer des textes, traduire, créer des plans et remplir des tableaux automatiquement. Pas besoin de quitter Notion : l\'IA s\'active avec "/" n\'importe où. Idéal pour les équipes qui utilisent déjà Notion comme hub de connaissance.',
    category: 'writing',
    pricing: 'freemium',
    pricingDetail: 'Add-on à 10$/mois (inclus dans les plans payants)',
    pricingPlans: [
      { name: 'Add-on Gratuit', price: '0$ (limité)', features: ['20 réponses IA gratuites', 'Génération de texte basique', 'Résumé de pages'] },
      { name: 'Notion AI', price: '10$/mois', features: ['Réponses illimitées', 'Q&R sur toute votre workspace', 'Remplissage de tableaux', 'Traduction', 'Correction avancée'], highlighted: true },
    ],
    rating: 4.7,
    users: '30M+',
    upvotes: 5890,
    tags: ['prise de notes', 'résumé de documents', 'rédaction dans Notion', 'organisation', 'traduction', 'plan de projet'],
    emoji: '📝',
    color: '#6b7280',
    url: 'https://notion.so/product/ai',
    featured: true,
    pros: [
      'Intégration native — pas besoin de changer d\'outil',
      'Résume automatiquement n\'importe quelle page Notion',
      'Q&R sur l\'ensemble de votre workspace',
      'Remplissage automatique de bases de données',
      'Idéal pour les équipes déjà sur Notion',
    ],
    cons: [
      'Inutile si vous n\'utilisez pas Notion',
      'Coût additionnel à l\'abonnement Notion',
      'Moins puissant que ChatGPT pour les tâches complexes',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Résumer une réunion', description: 'Après avoir pris vos notes de réunion, tapez "/" et sélectionnez "Summarize" pour obtenir un résumé en bullet points.', prompt: 'Résume cette page de notes en 5 points d\'action clairs.' },
      { title: 'Générer un plan de projet', description: 'Décrivez votre projet en une phrase et demandez à Notion AI de créer un plan structuré avec étapes et deadlines.', prompt: 'Crée un plan de projet pour lancer une newsletter tech mensuelle. Inclus les étapes, responsables et délais sur 3 mois.' },
    ],
    alternatives: ['jasper-ai', 'copy-ai', 'chatgpt'],
  },

  {
    slug: 'deepl',
    name: 'DeepL',
    tagline: 'Le traducteur IA le plus précis, meilleur que Google Translate',
    description: 'Service de traduction automatique neuronal reconnu pour sa précision et la naturalité de ses traductions.',
    longDescription:
      'DeepL est le traducteur automatique le plus apprécié des professionnels grâce à ses traductions nettement plus naturelles que les concurrents. Il supporte 33 langues, permet la traduction de documents Word/PowerPoint/PDF avec mise en forme préservée, et propose DeepL Write pour améliorer la rédaction dans votre langue. DeepL Pro offre une confidentialité totale (aucune donnée stockée) et une API robuste.',
    category: 'writing',
    pricing: 'freemium',
    pricingDetail: 'Gratuit limité, Pro à partir de 8,99€/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['500 000 caractères/mois', 'Traduction de texte', '3 documents/mois', '33 langues'] },
      { name: 'Pro Starter', price: '8,99€/mois', features: ['Caractères illimités', 'Documents illimités', 'Confidentialité totale', 'API incluse'], highlighted: true },
      { name: 'Pro Advanced', price: '28,99€/mois', features: ['Tout Starter', 'Glossaires illimités', 'Formater les fichiers CAT', 'Gestion d\'équipe'] },
    ],
    rating: 4.9,
    users: '100M+',
    upvotes: 7120,
    tags: ['traduction automatique', 'traduction de documents', 'traduction professionnelle', 'anglais vers français', 'localisation'],
    emoji: '🌐',
    color: '#0066ff',
    url: 'https://deepl.com',
    featured: true,
    pros: [
      'Traductions nettement plus naturelles que Google Translate',
      'Traduction de documents avec mise en forme conservée',
      'Confidentialité Pro : données non stockées',
      'Glossaires personnalisés pour le vocabulaire métier',
      'API fiable et bien documentée',
    ],
    cons: [
      'Moins de langues que Google Translate',
      'Version gratuite limitée en volume',
      'Moins fort pour les langues asiatiques peu communes',
    ],
    installationSteps: [
      { title: 'Installer l\'app desktop', description: 'Téléchargez DeepL pour Windows/Mac pour traduire n\'importe quel texte sélectionné avec Ctrl+C+C.' },
    ],
    usageExamples: [
      { title: 'Traduire un contrat anglais', description: 'Uploadez votre document Word et obtenez la traduction avec la mise en forme préservée en moins d\'une minute.' },
      { title: 'Améliorer un texte avec DeepL Write', description: 'Utilisez DeepL Write pour reformuler vos phrases en français ou en anglais pour les rendre plus naturelles et professionnelles.' },
    ],
    alternatives: ['google-translate', 'microsoft-translator', 'deepl-write'],
  },

  // ── IMAGE ─────────────────────────────────────────────────────────────────
  {
    slug: 'midjourney',
    name: 'Midjourney',
    tagline: 'Le générateur d\'images IA aux résultats artistiques les plus époustouflants',
    description: 'Outil de génération d\'images IA réputé pour la qualité artistique exceptionnelle de ses créations.',
    longDescription:
      'Midjourney est le standard de référence en génération d\'images IA pour la qualité artistique. Sa version 6.1 produit des images photoréalistes et artistiques d\'une qualité remarquable. L\'outil fonctionne principalement via Discord (et depuis 2024 via une interface web alpha). Il permet un contrôle fin via des paramètres (--ar pour le ratio, --style pour le style, --chaos pour la variation). Utilisé par des designers, illustrateurs et créatifs du monde entier.',
    category: 'image',
    pricing: 'paid',
    pricingDetail: 'À partir de 10$/mois',
    pricingPlans: [
      { name: 'Basic', price: '10$/mois', features: ['~200 images/mois (GPU limité)', 'Accès Discord', 'Interface web basique'] },
      { name: 'Standard', price: '30$/mois', features: ['15h GPU/mois (fast)', 'GPU relax illimité', 'Mode stealth désactivé'], highlighted: true },
      { name: 'Pro', price: '60$/mois', features: ['30h GPU fast', 'Mode stealth (images privées)', '12 jobs simultanés'] },
    ],
    rating: 4.8,
    users: '20M+',
    upvotes: 11230,
    tags: ['génération d\'images', 'art numérique', 'illustration', 'concept art', 'photographie IA', 'design créatif'],
    emoji: '🎨',
    color: '#1a1a2e',
    url: 'https://midjourney.com',
    featured: true,
    pros: [
      'Qualité artistique inégalée parmi les générateurs IA',
      'Style très reconnaissable et cohérent',
      'Grande communauté et galerie d\'inspiration',
      'Contrôle fin via paramètres avancés',
      'Version 6.1 photoréaliste impressionnante',
    ],
    cons: [
      'Pas de version gratuite (seulement des essais limités)',
      'Interface Discord peu intuitive pour les débutants',
      'Difficile de reproduire exactement un style précis',
      'Moins bon pour le texte dans les images',
    ],
    installationSteps: [
      { title: 'Rejoindre le serveur Discord', description: 'Allez sur midjourney.com et cliquez "Join the Beta". Vous serez redirigé vers le serveur Discord officiel.' },
      { title: 'Choisir un plan', description: 'Dans Discord, tapez /subscribe pour choisir votre abonnement et accéder aux canaux de génération.' },
    ],
    usageExamples: [
      { title: 'Illustration pour un article', description: 'Générez une image unique pour illustrer un article ou une présentation.', prompt: '/imagine a minimalist flat design illustration of a robot reading books, pastel colors, 16:9 aspect ratio --ar 16:9 --v 6' },
      { title: 'Concept art de produit', description: 'Visualisez un concept de produit ou d\'interface avant de le développer.', prompt: '/imagine futuristic smartwatch product shot, clean white background, studio lighting, ultra detailed --ar 1:1 --v 6' },
    ],
    alternatives: ['dalle-3', 'adobe-firefly', 'leonardo-ai'],
  },

  {
    slug: 'dalle-3',
    name: 'DALL-E 3',
    tagline: 'Le générateur d\'images d\'OpenAI, intégré à ChatGPT',
    description: 'Modèle de génération d\'images d\'OpenAI, accessible via ChatGPT Plus et l\'API, excellent pour suivre les instructions précises.',
    longDescription:
      'DALL-E 3 est le modèle de génération d\'images d\'OpenAI, lancé en octobre 2023. Accessible via ChatGPT Plus (sans surcoût), il se distingue par sa capacité à suivre très précisément les prompts complexes, notamment pour inclure du texte lisible dans les images. Il génère des images en 1024×1024 et 1792×1024 pixels. L\'API DALL-E 3 permet l\'intégration dans des applications tierces.',
    category: 'image',
    pricing: 'freemium',
    pricingDetail: 'Inclus dans ChatGPT Plus (20$/mois) ou via API',
    pricingPlans: [
      { name: 'ChatGPT Plus', price: '20$/mois', features: ['DALL-E 3 intégré', '~40 images/jour', 'Édition d\'images', 'ChatGPT GPT-4o inclus'], highlighted: true },
      { name: 'API', price: '0,040$ par image 1024×1024', features: ['Intégration directe', 'Qualité standard ou HD', 'Batch génération', 'Pas d\'abonnement'] },
    ],
    rating: 4.7,
    users: '100M+',
    upvotes: 8900,
    tags: ['génération d\'images', 'texte dans les images', 'illustration', 'bannières', 'logos', 'intégration ChatGPT'],
    emoji: '🖼️',
    color: '#10a37f',
    url: 'https://openai.com/dall-e-3',
    featured: true,
    pros: [
      'Excellent pour inclure du texte lisible dans les images',
      'Suit très précisément les instructions complexes',
      'Intégré directement dans ChatGPT (pas de compte séparé)',
      'API bien documentée',
      'Édition d\'images (inpainting) via ChatGPT',
    ],
    cons: [
      'Résolution maximale inférieure à Midjourney',
      'Style moins "artistique" que Midjourney',
      'Filtres de sécurité parfois trop restrictifs',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Créer une bannière avec texte', description: 'Demandez une image avec votre slogan intégré lisiblement — DALL-E 3 excelle à ça.', prompt: 'Crée une bannière 16:9 pour une startup fintech avec le texte "PayFlow" en grands caractères, style moderne bleu et blanc.' },
      { title: 'Illustrer un concept abstrait', description: 'Traduisez une idée abstraite en visuel pour une présentation.', prompt: 'Illustration minimaliste représentant la collaboration humain-IA, style icône vectorielle, fond blanc.' },
    ],
    alternatives: ['midjourney', 'adobe-firefly', 'stable-diffusion'],
  },

  {
    slug: 'adobe-firefly',
    name: 'Adobe Firefly',
    tagline: 'La génération d\'images IA intégrée à Photoshop et Creative Cloud',
    description: 'Modèle d\'IA générative d\'Adobe, entraîné sur des images sous licence, intégré à Photoshop, Illustrator et Express.',
    longDescription:
      'Adobe Firefly est le moteur d\'IA générative d\'Adobe, pensé pour un usage commercial sans risque légal (entraîné exclusivement sur Adobe Stock et contenus sous licence). Il alimente la Remplissage génératif de Photoshop, la Recoloration IA d\'Illustrator et les fonctionnalités IA d\'Adobe Express. Firefly propose aussi un outil standalone sur firefly.adobe.com pour générer des images, des effets de texte et des recolorations.',
    category: 'image',
    pricing: 'freemium',
    pricingDetail: '25 crédits gratuits/mois, Creative Cloud inclus dans les plans Adobe',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['25 crédits génération/mois', 'Accès firefly.adobe.com', 'Images en watermark (hors CC)'] },
      { name: 'Firefly Premium', price: '5,49€/mois', features: ['100 crédits/mois', 'Images sans watermark', 'Résolution HD'], highlighted: true },
      { name: 'Creative Cloud', price: 'Inclus dans CC', features: ['Crédits selon le plan CC', 'Photoshop Generative Fill', 'Illustrator AI', 'Express AI'] },
    ],
    rating: 4.6,
    users: '10M+',
    upvotes: 5670,
    tags: ['génération d\'images', 'Photoshop IA', 'remplissage génératif', 'usage commercial sécurisé', 'retouche photo', 'Adobe Creative Cloud'],
    emoji: '🔥',
    color: '#ea1b24',
    url: 'https://firefly.adobe.com',
    featured: true,
    pros: [
      'Entraîné sur contenus licenciés — sécurisé pour usage commercial',
      'Intégration native dans Photoshop (Remplissage génératif)',
      'Résultats très cohérents avec le style Adobe',
      'Idéal pour les designers déjà sur Creative Cloud',
      'Gratuit avec 25 crédits/mois',
    ],
    cons: [
      'Moins "créatif" que Midjourney sur les styles artistiques',
      'Crédits limités sur les plans de base',
      'Nécessite souvent Creative Cloud pour la pleine puissance',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Remplissage génératif dans Photoshop', description: 'Sélectionnez une zone dans Photoshop, appuyez sur Remplissage génératif et décrivez ce que vous voulez ajouter ou supprimer.' },
      { title: 'Effet de texte stylisé', description: 'Sur firefly.adobe.com, utilisez Text Effects pour transformer votre titre en typographie vivante (feu, nature, métal...).', prompt: 'Apply a "neon cyberpunk" texture effect to the text "FUTURE" on a dark background.' },
    ],
    alternatives: ['midjourney', 'dalle-3', 'canva-ai'],
  },

  {
    slug: 'canva-ai',
    name: 'Canva AI',
    tagline: 'Design graphique IA pour tout le monde, même sans compétences créatives',
    description: 'Suite de création graphique en ligne avec des outils IA puissants : génération d\'images, rédaction, suppression de fonds et plus.',
    longDescription:
      'Canva est la plateforme de design en ligne la plus populaire au monde avec 170 millions d\'utilisateurs. Ses fonctionnalités IA incluent : Magic Media (génération d\'images et vidéos), Magic Write (rédaction de texte), Magic Eraser (suppression d\'éléments), Background Remover, Magic Resize et Magic Design (création automatique de présentations). Idéal pour créer des visuels de réseaux sociaux, présentations, flyers et documents sans être designer.',
    category: 'image',
    pricing: 'freemium',
    pricingDetail: 'Gratuit, Pro à 14,99€/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['250 000+ templates', 'Export PNG/PDF', 'Outils IA basiques', '5 Go stockage'] },
      { name: 'Pro', price: '14,99€/mois', features: ['Fonctionnalités IA complètes', 'Magic Media illimité', 'Background Remover', 'Brand Kit', '1 To stockage'], highlighted: true },
      { name: 'Teams', price: '29,99€/équipe/mois', features: ['Tout Pro', 'Collaboration temps réel', 'Approbations de contenu', 'Gestion des marques'] },
    ],
    rating: 4.8,
    users: '170M+',
    upvotes: 9450,
    tags: ['création graphique', 'posts réseaux sociaux', 'présentations', 'flyers', 'suppression de fond', 'génération d\'images', 'design sans compétences'],
    emoji: '🎨',
    color: '#7209b7',
    url: 'https://canva.com',
    featured: true,
    pros: [
      'Accessible sans aucune compétence en design',
      'Bibliothèque immense de templates professionnels',
      'Outils IA très pratiques (suppression fond, Magic Write)',
      'Collaboration en temps réel avec l\'équipe',
      'Version gratuite très complète',
    ],
    cons: [
      'Moins de contrôle créatif que des outils pro (Photoshop)',
      'Qualité génération d\'images IA inférieure à Midjourney',
      'Exportations avancées réservées au Pro',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Post Instagram en 2 minutes', description: 'Choisissez un template Instagram, remplacez le texte et l\'image, utilisez Magic Write pour le caption.', prompt: 'Génère un post Instagram pour annoncer le lancement d\'une application mobile de fitness. Ton motivant.' },
      { title: 'Présentation automatique', description: 'Utilisez Magic Design : décrivez votre sujet et Canva génère une présentation complète avec visuels et textes.' },
    ],
    alternatives: ['adobe-firefly', 'dalle-3', 'microsoft-designer'],
  },

  {
    slug: 'leonardo-ai',
    name: 'Leonardo AI',
    tagline: 'Génération d\'images IA haute qualité avec contrôle avancé et modèles personnalisés',
    description: 'Plateforme de génération d\'images IA avec des modèles spécialisés, du contrôle de cohérence et des outils créatifs avancés.',
    longDescription:
      'Leonardo AI est une plateforme de génération d\'images qui se distingue par la richesse de ses modèles spécialisés (Phoenix, Kino XL pour le cinéma, Anime Pastel Dream...) et ses outils créatifs avancés comme Alchemy (rendu haute qualité), Motion (animation), Universal Upscaler et la génération de personnages cohérents entre images. Très populaire dans la communauté gaming, animation et concept art.',
    category: 'image',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (150 crédits/jour), payant à partir de 12$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['150 tokens/jour', 'Accès aux modèles publics', 'Galerie publique'] },
      { name: 'Apprentice', price: '12$/mois', features: ['8 500 tokens/mois', 'Générations privées', 'Priorité de génération', 'Accès Alchemy'], highlighted: true },
      { name: 'Artisan', price: '30$/mois', features: ['25 000 tokens/mois', 'Entraînement de modèles', 'API access'] },
    ],
    rating: 4.7,
    users: '5M+',
    upvotes: 5120,
    tags: ['génération d\'images', 'concept art', 'gaming', 'cohérence de personnages', 'animation', 'modèles IA spécialisés'],
    emoji: '🎭',
    color: '#f59e0b',
    url: 'https://leonardo.ai',
    featured: true,
    pros: [
      'Modèles spécialisés pour chaque style (cinéma, anime, réaliste...)',
      'Cohérence de personnage entre plusieurs images',
      'Plan gratuit généreux (150 crédits/jour)',
      'Outils d\'animation intégrés (Motion)',
      'Entraînement de modèles personnalisés',
    ],
    cons: [
      'Interface plus complexe pour les débutants',
      'Crédits consommés rapidement avec Alchemy',
      'Moins connu que Midjourney',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Créer un personnage cohérent', description: 'Utilisez la fonction Character Consistency pour générer votre personnage sous différents angles et poses.', prompt: 'Female warrior character, armor, medieval fantasy, front view, side view, 3/4 view, consistent design --style Kino XL' },
    ],
    alternatives: ['midjourney', 'dalle-3', 'stable-diffusion'],
  },

  // ── VIDÉO ─────────────────────────────────────────────────────────────────
  {
    slug: 'runway-ml',
    name: 'Runway ML',
    tagline: 'La suite de création vidéo IA la plus avancée pour les créatifs',
    description: 'Plateforme de génération et d\'édition vidéo IA avec des modèles Gen-3 Alpha, suppression d\'arrière-plan, tracking et plus.',
    longDescription:
      'Runway est la référence professionnelle en génération vidéo IA. Son modèle Gen-3 Alpha Turbo génère des vidéos jusqu\'à 10 secondes à partir de texte ou d\'image. La suite inclut aussi : suppression d\'arrière-plan vidéo, inpainting vidéo, motion tracking, interpolation d\'images et un éditeur vidéo complet. Runway est utilisé par des studios hollywoodiens (Everything Everywhere All at Once) et des créateurs professionnels.',
    category: 'video',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (125 crédits), payant à partir de 12$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['125 crédits one-time', 'Gen-3 Alpha', 'Résolution 720p max', 'Filigrane Runway'] },
      { name: 'Standard', price: '12$/mois', features: ['625 crédits/mois', '1080p', 'Sans filigrane', 'Upscaling 4K'], highlighted: true },
      { name: 'Pro', price: '28$/mois', features: ['2 250 crédits/mois', 'Génération illimitée (relax)', 'Assets privés', 'Accès prioritaire'] },
    ],
    rating: 4.7,
    users: '3M+',
    upvotes: 7890,
    tags: ['génération vidéo IA', 'texte vers vidéo', 'image vers vidéo', 'édition vidéo IA', 'suppression de fond vidéo', 'effets spéciaux'],
    emoji: '🎬',
    color: '#6366f1',
    url: 'https://runwayml.com',
    featured: true,
    pros: [
      'Modèle Gen-3 Alpha parmi les meilleurs en génération vidéo',
      'Suite complète d\'outils vidéo (pas seulement génération)',
      'Utilisé dans des productions professionnelles',
      'Suppression d\'arrière-plan vidéo en temps réel',
      'API disponible pour les développeurs',
    ],
    cons: [
      'Crédits consommés rapidement sur les plans de base',
      'Générations limitées à 10 secondes',
      'Moins fort que Kling/Pika sur certains styles',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Générer une courte vidéo depuis une image', description: 'Uploadez une image statique et demandez à Runway de l\'animer avec un mouvement de caméra.', prompt: 'Animate this product photo with a slow zoom-out and soft bokeh effect. Camera: slow dolly backward.' },
      { title: 'Supprimer un arrière-plan vidéo', description: 'Utilisez Remove Background sur n\'importe quelle vidéo sans fond vert pour isoler le sujet.' },
    ],
    alternatives: ['pika-labs', 'kling-ai', 'sora-openai'],
  },

  {
    slug: 'heygen',
    name: 'HeyGen',
    tagline: 'Créez des vidéos avec des avatars IA réalistes qui parlent en 40+ langues',
    description: 'Plateforme de génération de vidéos avec des avatars humains numériques, utilisée pour les formations, le marketing et les communications.',
    longDescription:
      'HeyGen est la plateforme leader pour créer des vidéos présentées par des avatars IA ultraréalistes. Elle permet de créer votre propre avatar à partir d\'une courte vidéo de vous-même, de faire parler vos avatars en 40+ langues avec synchronisation labiale, et de traduire n\'importe quelle vidéo tout en conservant votre voix et votre image. Très utilisé pour les formations e-learning, les vidéos marketing et les communications d\'entreprise.',
    category: 'video',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (3 vidéos), Creator à 24$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['3 vidéos (1 min max)', 'Avatars publics', 'Filigrane HeyGen'] },
      { name: 'Creator', price: '24$/mois', features: ['15 crédits vidéo/mois', 'Sans filigrane', '40+ langues', 'Clone vocal'], highlighted: true },
      { name: 'Business', price: '72$/mois', features: ['30 crédits/mois', 'Avatar personnalisé (vous)', 'Traduction vidéo', 'API access'] },
    ],
    rating: 4.7,
    users: '40K+',
    upvotes: 6340,
    tags: ['avatars IA', 'vidéos de présentation', 'traduction vidéo', 'e-learning', 'marketing vidéo', 'multilangue', 'clone vocal'],
    emoji: '🎭',
    color: '#3b82f6',
    url: 'https://heygen.com',
    featured: true,
    pros: [
      'Avatars ultraréalistes très convaincants',
      'Traduction vidéo avec synchronisation labiale (40+ langues)',
      'Création de son propre avatar personnalisé',
      'Parfait pour les formations sans avoir à se filmer',
      'Clone vocal inclus dans les plans payants',
    ],
    cons: [
      'Crédits vidéo limités même en payant',
      'Qualité variable selon les avatars publics',
      'Cher pour un usage intensif',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Vidéo de formation multilingue', description: 'Rédigez votre script en français, sélectionnez votre avatar et générez la vidéo en 5 langues différentes automatiquement.' },
      { title: 'Traduire une vidéo YouTube', description: 'Uploadez le lien de votre vidéo et HeyGen la traduit en conservant votre visage et votre voix synchronisés.' },
    ],
    alternatives: ['synthesia', 'd-id', 'capcut-ai'],
  },

  {
    slug: 'synthesia',
    name: 'Synthesia',
    tagline: 'Créez des vidéos de formation professionnelle avec des avatars IA en minutes',
    description: 'Plateforme de création de vidéos d\'entreprise avec avatars IA, idéale pour les formations, onboarding et communications internes.',
    longDescription:
      'Synthesia est la plateforme de vidéo IA de référence pour les entreprises. Elle propose 230+ avatars professionnels, le support de 140+ langues, des templates de formation et un éditeur vidéo complet. Elle est utilisée par Heineken, Reuters, Zoom et des milliers d\'équipes L&D pour créer des formations vidéo sans caméra. Les vidéos sont générées en quelques minutes depuis un script.',
    category: 'video',
    pricing: 'paid',
    pricingDetail: 'À partir de 18$/mois (annuel)',
    pricingPlans: [
      { name: 'Starter', price: '18$/mois', features: ['10 vidéos/mois', '230+ avatars', '140+ langues', 'Templates basiques'] },
      { name: 'Creator', price: '64$/mois', features: ['30 vidéos/mois', 'Avatar personnalisé', 'Collaboration', 'Suppression filigrane'], highlighted: true },
      { name: 'Enterprise', price: 'Sur devis', features: ['Vidéos illimitées', 'SSO', 'Contrats sur mesure', 'Support dédié'] },
    ],
    rating: 4.6,
    users: '50K+',
    upvotes: 4870,
    tags: ['vidéos de formation', 'e-learning', 'communication interne', 'onboarding', 'avatars professionnels', 'multilangue entreprise'],
    emoji: '📹',
    color: '#6366f1',
    url: 'https://synthesia.io',
    featured: true,
    pros: [
      '230+ avatars professionnels de haute qualité',
      '140+ langues pour un déploiement mondial',
      'Pas besoin de caméra ni de studio',
      'Mise à jour facile : changez le script, la vidéo se met à jour',
      'Très adapté aux équipes formation et RH',
    ],
    cons: [
      'Cher pour les petites structures',
      'Moins bon pour les vidéos créatives/marketing',
      'Avatars parfois un peu robotiques',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Formation onboarding employés', description: 'Créez une vidéo de bienvenue de 3 minutes avec un avatar professionnel, dans la langue de chaque nouvel employé.' },
    ],
    alternatives: ['heygen', 'd-id', 'descript'],
  },

  {
    slug: 'capcut-ai',
    name: 'CapCut AI',
    tagline: 'L\'éditeur vidéo IA de ByteDance, gratuit et ultra-populaire',
    description: 'Application de montage vidéo avec des outils IA puissants : sous-titres automatiques, suppression de fond, effets et plus.',
    longDescription:
      'CapCut est l\'éditeur vidéo développé par ByteDance (TikTok). Avec 500 millions d\'utilisateurs, c\'est l\'application de montage vidéo mobile la plus téléchargée au monde. Ses fonctionnalités IA incluent : sous-titres automatiques (multi-langues), suppression d\'arrière-plan vidéo, changement de voix, CapCut AI (génération vidéo), avatar vidéo IA et une suite complète d\'effets tendance. Disponible sur mobile, web et desktop.',
    category: 'video',
    pricing: 'freemium',
    pricingDetail: 'Gratuit, Pro à 9,99$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['Montage vidéo complet', 'Sous-titres auto', 'Suppression de fond', 'Templates tendance'] },
      { name: 'Pro', price: '9,99$/mois', features: ['Exports sans filigrane CapCut', 'Assets premium exclusifs', 'Génération vidéo IA avancée', 'Stockage cloud'], highlighted: true },
    ],
    rating: 4.6,
    users: '500M+',
    upvotes: 8120,
    tags: ['montage vidéo mobile', 'sous-titres automatiques', 'TikTok', 'Reels Instagram', 'suppression de fond vidéo', 'effets vidéo tendance'],
    emoji: '✂️',
    color: '#1f2937',
    url: 'https://capcut.com',
    featured: true,
    pros: [
      'Gratuit avec des fonctionnalités IA très complètes',
      'Sous-titres automatiques en plusieurs langues',
      'Interface très intuitive pour les débutants',
      'Excellent pour le contenu TikTok/Reels/Shorts',
      'Disponible sur mobile, tablette et desktop',
    ],
    cons: [
      'Appartient à ByteDance (préoccupations données)',
      'Filigrane CapCut sur la version gratuite',
      'Moins puissant que Premiere Pro pour un montage professionnel',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Sous-titres automatiques pour une vidéo', description: 'Importez votre vidéo, cliquez sur "Auto Captions" et obtenez des sous-titres stylisés en moins d\'une minute.' },
      { title: 'Créer un Reel Instagram depuis un long contenu', description: 'Uploadez votre vidéo longue et utilisez CapCut AI pour générer automatiquement les meilleurs extraits de 30 secondes.' },
    ],
    alternatives: ['descript', 'opus-clip', 'runway-ml'],
  },

  // ── AUDIO ─────────────────────────────────────────────────────────────────
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    tagline: 'La synthèse vocale IA la plus réaliste — clonez n\'importe quelle voix',
    description: 'Plateforme de synthèse vocale IA avec des voix ultraréalistes, clonage vocal et support de 29+ langues.',
    longDescription:
      'ElevenLabs est la référence mondiale en synthèse vocale IA. Sa technologie produit des voix indiscernables d\'une voix humaine, avec clonage vocal à partir de 30 secondes d\'audio. L\'outil supporte 29 langues, propose une bibliothèque de 1000+ voix et intègre des fonctionnalités avancées : contrôle des émotions, audiobooks, dubbing automatique de vidéos et API pour les développeurs. Utilisé par Duolingo, Warner Bros et des milliers de créateurs.',
    category: 'audio',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (10 000 caractères/mois), Creator à 11$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['10 000 caractères/mois', '3 voix personnalisées', '29 langues', 'API limitée'] },
      { name: 'Creator', price: '11$/mois', features: ['100 000 caractères/mois', '30 voix personnalisées', 'Clonage vocal Pro', 'Dubbing de vidéos'], highlighted: true },
      { name: 'Pro', price: '99$/mois', features: ['500 000 caractères/mois', '160 voix personnalisées', 'Accès prioritaire', 'Usage commercial'] },
    ],
    rating: 4.8,
    users: '1M+',
    upvotes: 8760,
    tags: ['synthèse vocale', 'voix IA réaliste', 'clonage vocal', 'doublage', 'audiobook', 'podcast', 'text-to-speech 29 langues'],
    emoji: '🎙️',
    color: '#f59e0b',
    url: 'https://elevenlabs.io',
    featured: true,
    pros: [
      'Voix les plus réalistes du marché',
      'Clonage vocal à partir de 30 secondes d\'audio',
      'Contrôle des émotions et du rythme',
      'Dubbing automatique de vidéos avec synchro labiale',
      'API très bien documentée',
    ],
    cons: [
      'Quota faible sur le plan gratuit (10 000 caractères)',
      'Coût élevé pour une utilisation intensive',
      'Peut être utilisé de façon malveillante (deepfakes vocaux)',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Créer une voix pour un podcast', description: 'Uploadez 2 minutes de votre voix, laissez ElevenLabs cloner votre timbre, puis utilisez-le pour générer des segments en tapant simplement votre texte.' },
      { title: 'Doubler une vidéo YouTube', description: 'Utilisez AI Dubbing pour traduire et doubler votre vidéo en anglais, espagnol, français... en conservant votre voix originale.' },
    ],
    alternatives: ['murf-ai', 'play-ht', 'lovo-ai'],
  },

  {
    slug: 'suno-ai',
    name: 'Suno AI',
    tagline: 'Générez des chansons complètes avec paroles et musique en 30 secondes',
    description: 'Outil de génération musicale IA capable de créer des chansons complètes (voix + instruments) à partir d\'un prompt texte.',
    longDescription:
      'Suno AI est le générateur de musique IA le plus populaire. En décrivant simplement le style et le thème souhaité, Suno génère une chanson complète avec paroles, voix et accompagnement musical en 30 secondes. Sa version 4 produit des chansons de qualité professionnelle dans tous les genres (pop, rock, jazz, hip-hop, classique...). Chaque génération produit 2 variantes de ~2 minutes. Très utilisé par les créateurs de contenu, jeux et applications.',
    category: 'audio',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (50 crédits/jour), Pro à 10$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['50 crédits/jour', '10 chansons/jour', 'Usage non-commercial', 'Qualité standard'] },
      { name: 'Pro', price: '10$/mois', features: ['2 500 crédits/mois', 'Usage commercial', 'Génération prioritaire', 'Chansons privées', 'Téléchargement audio'], highlighted: true },
      { name: 'Premier', price: '30$/mois', features: ['10 000 crédits/mois', 'Tout Pro', 'Accès beta aux nouveaux modèles'] },
    ],
    rating: 4.7,
    users: '12M+',
    upvotes: 7230,
    tags: ['génération musicale', 'création de chansons', 'musique IA', 'background music', 'paroles automatiques', 'tous genres musicaux'],
    emoji: '🎵',
    color: '#7c3aed',
    url: 'https://suno.com',
    featured: true,
    pros: [
      'Génère des chansons complètes (voix + musique) en 30 secondes',
      'Qualité musicale impressionnante sur tous les genres',
      'Version gratuite généreuse (50 crédits/jour)',
      'Contrôle du style, du tempo et des paroles',
      'Idéal pour la musique de fond de vidéos',
    ],
    cons: [
      'Pas de contrôle précis sur les arrangements',
      'Paroles parfois incohérentes en français',
      'Questions légales sur les données d\'entraînement',
      'Chansons limitées à ~2 minutes',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Jingle pour une publicité', description: 'Décrivez votre produit, le style musical voulu et le ton, et obtenez 2 propositions de jingle en 30 secondes.', prompt: 'Upbeat pop jingle for a French coffee brand, energetic, 30 seconds, positive lyrics about morning energy. Style: pop commercial.' },
      { title: 'Musique de fond pour une vidéo YouTube', description: 'Générez une musique de fond instrumentale dans le bon mood pour votre vidéo sans risque de copyright.', prompt: 'Calm lo-fi hip hop instrumental, no lyrics, relaxed study music, 2 minutes.' },
    ],
    alternatives: ['udio', 'mubert', 'soundraw'],
  },

  {
    slug: 'murf-ai',
    name: 'Murf AI',
    tagline: 'Studio de voix off IA professionnel pour présentations et formations',
    description: 'Plateforme de text-to-speech IA avec 120+ voix professionnelles, éditeur de studio et synchronisation avec des présentations.',
    longDescription:
      'Murf AI est un studio de voix off IA destiné aux professionnels : créateurs de contenus, équipes L&D, marketeurs. Il propose 120+ voix dans 20 langues, un éditeur de studio avec synchronisation vidéo, contrôle du pitch/vitesse/emphase, et des intégrations avec Canva et Google Slides. La fonctionnalité de voix off synchronisée permet d\'ajouter une narration professionnelle à n\'importe quelle présentation en quelques minutes.',
    category: 'audio',
    pricing: 'freemium',
    pricingDetail: 'Gratuit limité, Creator à 29$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['10 min de voix/mois', '120+ voix', 'Pas d\'export audio'] },
      { name: 'Creator', price: '29$/mois', features: ['2h de voix/mois', 'Téléchargement audio', 'Synchronisation vidéo', 'Intégration Canva'], highlighted: true },
      { name: 'Business', price: '99$/mois', features: ['5h de voix/mois', 'Voix de marque', '5 utilisateurs', 'API access'] },
    ],
    rating: 4.6,
    users: '2M+',
    upvotes: 3870,
    tags: ['voix off IA', 'text-to-speech professionnel', 'narration de présentation', 'e-learning audio', 'studio vocal IA', '20 langues'],
    emoji: '🔊',
    color: '#3b82f6',
    url: 'https://murf.ai',
    featured: false,
    pros: [
      '120+ voix très naturelles dans 20 langues',
      'Studio d\'édition complet avec synchronisation vidéo',
      'Intégration Canva et Google Slides',
      'Contrôle précis du pitch, vitesse et emphase',
      'Idéal pour créer des voix off de présentations',
    ],
    cons: [
      'Quota très limité sur la version gratuite',
      'Moins fort que ElevenLabs pour le clonage vocal',
      'Export audio non disponible sur le plan gratuit',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Ajouter une narration à une présentation PowerPoint', description: 'Importez votre présentation, ajoutez du texte à narrer sur chaque slide, choisissez une voix et exportez la vidéo finale.' },
    ],
    alternatives: ['elevenlabs', 'play-ht', 'lovo-ai'],
  },

  {
    slug: 'krisp',
    name: 'Krisp',
    tagline: 'Supprimez le bruit de fond en temps réel pendant vos appels',
    description: 'Application IA qui supprime le bruit de fond, les voix parasites et l\'écho en temps réel dans tous vos outils de communication.',
    longDescription:
      'Krisp utilise l\'IA pour supprimer en temps réel tous les bruits parasites lors de vos appels (bruit de clavier, chien qui aboie, bruit de rue...). Il fonctionne avec toutes les applications (Zoom, Teams, Meet, Discord, Webex...) en s\'insérant comme microphone virtuel. Krisp propose aussi une transcription automatique des réunions avec résumé IA et notes d\'action. Très utile pour le télétravail et les appels en open space.',
    category: 'audio',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (60 min/semaine), Pro à 8$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['60 min de suppression bruit/semaine', 'Compatible toutes apps', 'Transcription basique'] },
      { name: 'Pro', price: '8$/mois', features: ['Suppression bruit illimitée', 'Transcription illimitée', 'Résumé de réunion IA', 'Notes d\'action auto'], highlighted: true },
      { name: 'Enterprise', price: 'Sur devis', features: ['Tout Pro', 'SSO', 'Admin centralisé', 'Support prioritaire'] },
    ],
    rating: 4.7,
    users: '800K+',
    upvotes: 4120,
    tags: ['suppression de bruit', 'qualité audio appels', 'télétravail', 'Zoom', 'Teams', 'transcription de réunion', 'résumé IA'],
    emoji: '🎤',
    color: '#7c3aed',
    url: 'https://krisp.ai',
    featured: false,
    pros: [
      'Suppression de bruit en temps réel sur toutes les applications',
      'Fonctionne sans modifier les paramètres Zoom/Teams',
      'Transcription et résumé de réunion automatiques',
      'Léger sur les ressources système',
      'Fonctionne hors ligne (traitement local)',
    ],
    cons: [
      'Version gratuite très limitée (60 min/semaine)',
      'Peut légèrement dégrader la qualité vocale',
      'Pas de version Linux',
    ],
    installationSteps: [
      { title: 'Télécharger Krisp', description: 'Allez sur krisp.ai et téléchargez l\'application pour Mac ou Windows.' },
      { title: 'Configurer dans Zoom/Teams', description: 'Dans les paramètres audio de votre application, sélectionnez "Krisp Microphone" comme source d\'entrée.' },
    ],
    usageExamples: [
      { title: 'Appel depuis un café', description: 'Activez Krisp et passez vos appels depuis n\'importe quel endroit bruyant sans que votre interlocuteur n\'entende le bruit de fond.' },
      { title: 'Transcription et résumé de réunion', description: 'Activez la transcription dans Krisp avant votre réunion et obtenez automatiquement un résumé avec les points de décision et actions.' },
    ],
    alternatives: ['adobe-podcast', 'cleanvoice-ai', 'audo-ai'],
  },

  // ── CODE ──────────────────────────────────────────────────────────────────
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'L\'assistant de code IA de GitHub et Microsoft, intégré dans votre IDE',
    description: 'Assistant de programmation IA qui suggère du code en temps réel dans VS Code, JetBrains, Visual Studio et plus.',
    longDescription:
      'GitHub Copilot est l\'assistant de code IA développé par GitHub et Microsoft en partenariat avec OpenAI. Intégré directement dans VS Code, JetBrains, Visual Studio et Neovim, il suggère des lignes ou blocs de code entiers en temps réel basé sur le contexte de votre fichier. Copilot Chat permet de lui poser des questions sur le code, déboguer, refactoriser et générer des tests. Plus de 1,3 million de développeurs payants l\'utilisent quotidiennement.',
    category: 'code',
    pricing: 'freemium',
    pricingDetail: 'Gratuit pour étudiants et open-source, 10$/mois pour les autres',
    pricingPlans: [
      { name: 'Gratuit', price: '0$ (étudiants/open-source)', features: ['Toutes les fonctionnalités', 'Via GitHub Student Pack', 'Open source maintainers'] },
      { name: 'Individual', price: '10$/mois', features: ['Complétion de code illimitée', 'Copilot Chat', 'Tous les IDEs supportés', 'Filtrage de suggestions'], highlighted: true },
      { name: 'Business', price: '19$/utilisateur/mois', features: ['Tout Individual', 'Gestion d\'organisation', 'Politiques d\'utilisation', 'Audit logs'] },
    ],
    rating: 4.8,
    users: '1.3M+',
    upvotes: 10230,
    tags: ['autocomplétion code', 'génération de code', 'VS Code', 'JetBrains', 'débogage IA', 'génération de tests', 'tous langages'],
    emoji: '🤖',
    color: '#1f2937',
    url: 'https://github.com/features/copilot',
    featured: true,
    pros: [
      'Intégration native dans les IDEs les plus populaires',
      'Suggestions en temps réel très pertinentes',
      'Copilot Chat pour poser des questions sur le code',
      'Support de 30+ langages de programmation',
      'Gratuit pour les étudiants et les projets open-source',
    ],
    cons: [
      'Abonnement payant pour les professionnels',
      'Suggestions parfois incorrectes à vérifier',
      'Données envoyées sur les serveurs GitHub',
      'Moins bon que Cursor pour l\'édition de fichiers entiers',
    ],
    installationSteps: [
      { title: 'Installer l\'extension VS Code', description: 'Ouvrez VS Code, allez dans Extensions et installez "GitHub Copilot" et "GitHub Copilot Chat".' },
      { title: 'Connecter votre compte GitHub', description: 'Cliquez sur le logo Copilot en bas à droite de VS Code et connectez votre compte GitHub pour activer votre abonnement.' },
    ],
    usageExamples: [
      { title: 'Générer une fonction depuis un commentaire', description: 'Écrivez un commentaire décrivant la fonction que vous voulez et Copilot génère l\'implémentation complète.', prompt: '// Function that takes an array of objects and groups them by a given key, returns a Map', result: 'GitHub Copilot génère la fonction TypeScript complète avec types et gestion des cas limites.' },
      { title: 'Écrire des tests unitaires', description: 'Ouvrez Copilot Chat, sélectionnez votre fonction et demandez "/tests" pour générer automatiquement les tests Jest/Pytest correspondants.' },
    ],
    alternatives: ['cursor', 'codeium', 'tabnine'],
  },

  {
    slug: 'cursor',
    name: 'Cursor',
    tagline: 'L\'IDE IA qui comprend votre codebase entière pour coder 10× plus vite',
    description: 'Éditeur de code basé sur VS Code avec IA intégrée capable de modifier des fichiers entiers, naviguer dans le code et générer des fonctionnalités complexes.',
    longDescription:
      'Cursor est un fork de VS Code qui place l\'IA au centre du workflow de développement. Contrairement à GitHub Copilot, Cursor peut indexer l\'ensemble de votre codebase et répondre à des questions comme "comment fonctionne l\'authentification dans ce projet ?". Son mode Composer permet de créer ou modifier plusieurs fichiers en une seule instruction. Utilisé par des ingénieurs chez Stripe, Vercel et de nombreuses startups tech.',
    category: 'code',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (limité), Pro à 20$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['2 000 complétion IA', '50 requêtes slow Cursor', 'Indexation codebase', 'VS Code extensions compatibles'] },
      { name: 'Pro', price: '20$/mois', features: ['Requêtes illimitées GPT-4/Claude', 'Cursor Composer illimité', '10 requêtes o1/jour', 'Cursor Tab illimité'], highlighted: true },
      { name: 'Business', price: '40$/utilisateur/mois', features: ['Tout Pro', 'Pas d\'entraînement sur vos données', 'Admin console', 'SSO'] },
    ],
    rating: 4.8,
    users: '500K+',
    upvotes: 9870,
    tags: ['IDE IA', 'génération de code', 'refactorisation', 'compréhension de codebase', 'VS Code', 'Composer multi-fichiers', 'debug IA'],
    emoji: '💻',
    color: '#7c3aed',
    url: 'https://cursor.sh',
    featured: true,
    pros: [
      'Compréhension de l\'ensemble de la codebase (pas seulement le fichier ouvert)',
      'Composer pour modifier plusieurs fichiers en une instruction',
      'Compatible avec toutes les extensions VS Code',
      'Modèles Claude et GPT-4 au choix',
      'Context window très large',
    ],
    cons: [
      'Abonnement plus cher que Copilot',
      'Peut être lent sur de grandes codebases',
      'Données envoyées sur les serveurs Cursor',
    ],
    installationSteps: [
      { title: 'Télécharger Cursor', description: 'Allez sur cursor.sh et téléchargez Cursor pour votre OS. Il s\'installe comme un éditeur de code classique.' },
      { title: 'Importer vos paramètres VS Code', description: 'Au premier lancement, Cursor propose d\'importer vos extensions, thèmes et keybindings depuis VS Code en un clic.' },
    ],
    usageExamples: [
      { title: 'Ajouter une fonctionnalité à votre projet', description: 'Ouvrez Composer (Cmd+Shift+I), décrivez la fonctionnalité à implémenter et Cursor modifie automatiquement tous les fichiers concernés.', prompt: 'Ajoute l\'authentification JWT à mon API Express. Crée les middleware, les routes /login et /register et mets à jour le README.' },
      { title: 'Naviguer dans une nouvelle codebase', description: 'Ouvrez un projet inconnu, indexez-le (Cmd+Shift+P > "Index Codebase") et posez des questions en langage naturel pour comprendre l\'architecture.' },
    ],
    alternatives: ['github-copilot', 'codeium', 'aider-ai'],
  },

  {
    slug: 'replit-ai',
    name: 'Replit AI',
    tagline: 'Codez, hébergez et collaborez en ligne avec une IA intégrée',
    description: 'Environnement de développement cloud avec IA intégrée pour coder dans le navigateur sans aucune installation.',
    longDescription:
      'Replit est la plateforme de développement en ligne la plus populaire, avec 20 millions d\'utilisateurs. Son IA (Ghostwriter) génère du code, debug, explique et complète automatiquement. Replit permet de coder, héberger et déployer des applications directement dans le navigateur, sans configuration. Très utilisé pour l\'apprentissage du code, les hackathons et le prototypage rapide. Replit Agent peut créer des applications complètes depuis une description.',
    category: 'code',
    pricing: 'freemium',
    pricingDetail: 'Gratuit, Core à 20$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['Projets publics illimités', 'Ghostwriter basique', '512 MB RAM', 'Hébergement inclus'] },
      { name: 'Core', price: '20$/mois', features: ['Ghostwriter Pro (GPT-4)', 'Projets privés', '2 GB RAM', 'Replit Agent', 'Déploiements boostés'], highlighted: true },
      { name: 'Teams', price: '20$/utilisateur/mois', features: ['Tout Core', 'Collaboration synchrone', 'Contrôle accès', 'Facturation centralisée'] },
    ],
    rating: 4.6,
    users: '20M+',
    upvotes: 6780,
    tags: ['IDE en ligne', 'apprentissage du code', 'prototypage rapide', 'hébergement gratuit', 'collaboration', 'tous langages', 'déploiement one-click'],
    emoji: '🔧',
    color: '#f97316',
    url: 'https://replit.com',
    featured: true,
    pros: [
      'Aucune installation — coder directement dans le navigateur',
      'Hébergement et déploiement inclus gratuitement',
      'Parfait pour apprendre à coder avec l\'IA',
      '50+ langages supportés',
      'Collaboration en temps réel',
    ],
    cons: [
      'Performances limitées sur les projets complexes',
      'Replit Agent moins puissant que Cursor/Bolt',
      'Dépendant d\'une connexion internet',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Créer un chatbot en 5 minutes', description: 'Ouvrez un nouveau Repl Python, demandez à Ghostwriter de créer un chatbot Flask simple et déployez-le en un clic.' },
    ],
    alternatives: ['bolt-new', 'cursor', 'github-copilot'],
  },

  {
    slug: 'bolt-new',
    name: 'Bolt.new',
    tagline: 'Créez et déployez des applications web complètes depuis votre navigateur avec l\'IA',
    description: 'Environnement de développement IA full-stack dans le navigateur, capable de créer des applications React/Node complètes en quelques minutes.',
    longDescription:
      'Bolt.new est un environnement de développement IA créé par StackBlitz. Il combine un éditeur de code dans le navigateur avec une IA (Claude Sonnet) capable de créer des applications web complètes — React, Next.js, Vite, Node.js — depuis une description textuelle. Les applications sont exécutées en temps réel dans le navigateur et peuvent être déployées sur Netlify d\'un clic. Idéal pour le prototypage ultra-rapide et les MVPs.',
    category: 'code',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (tokens limités), Pro à 20$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['Tokens IA limités/mois', 'Éditeur complet', 'Preview en temps réel', 'Export code'] },
      { name: 'Pro', price: '20$/mois', features: ['10M tokens/mois', 'Claude Sonnet illimité', 'Déploiement Netlify', 'Projets privés'], highlighted: true },
    ],
    rating: 4.7,
    users: '1M+',
    upvotes: 7120,
    tags: ['création d\'applications web', 'no-code IA', 'prototypage', 'React', 'Next.js', 'déploiement one-click', 'full-stack IA'],
    emoji: '⚡',
    color: '#f59e0b',
    url: 'https://bolt.new',
    featured: true,
    pros: [
      'Crée des applications web complètes en quelques minutes',
      'Aucune installation — tout dans le navigateur',
      'Preview en temps réel des modifications',
      'Déploiement Netlify d\'un clic',
      'Export du code propre et réutilisable',
    ],
    cons: [
      'Quota de tokens épuisé rapidement sur le plan gratuit',
      'Moins adapté aux applications très complexes',
      'Dépendant d\'une connexion internet',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Créer une landing page en 2 minutes', description: 'Décrivez votre produit et le style voulu — Bolt génère une landing page React complète avec animations et formulaire de contact.', prompt: 'Crée une landing page pour une app de gestion de finances personnelles. Style moderne dark mode, hero section, 3 features, CTA et footer. Utilise Tailwind CSS.' },
      { title: 'Prototyper un dashboard', description: 'Décrivez les métriques à afficher et Bolt crée un dashboard interactif avec graphiques et données mockées prêt à montrer à vos investisseurs.' },
    ],
    alternatives: ['replit-ai', 'v0-dev', 'lovable-dev'],
  },

  // ── BUSINESS ──────────────────────────────────────────────────────────────
  {
    slug: 'hubspot-ai',
    name: 'HubSpot AI',
    tagline: 'La plateforme CRM tout-en-un avec IA pour le marketing, les ventes et le support',
    description: 'Suite CRM complète avec des fonctionnalités IA pour automatiser le marketing, qualifier les leads et gérer le service client.',
    longDescription:
      'HubSpot est la plateforme CRM la plus populaire pour les PME, avec plus de 200 000 clients dans 120 pays. Son moteur d\'IA (Breeze AI) génère du contenu marketing, qualifie automatiquement les leads, prédit le comportement des prospects et automatise les workflows. HubSpot AI comprend : ChatSpot (assistant IA conversationnel), la génération de contenu, le résumé d\'emails et des insights prédictifs sur les ventes.',
    category: 'business',
    pricing: 'freemium',
    pricingDetail: 'CRM gratuit, Marketing Hub à partir de 18€/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['CRM complet', 'Contacts illimités', 'ChatSpot basique', 'Formulaires et landing pages'] },
      { name: 'Starter', price: '18€/mois', features: ['Email marketing', 'Automation basique', 'Intégrations avancées', 'Support email'], highlighted: true },
      { name: 'Professional', price: '800€/mois', features: ['Marketing automation avancé', 'IA prédictive', 'ABM', 'Reporting avancé', 'Teams'] },
    ],
    rating: 4.6,
    users: '200K+',
    upvotes: 5890,
    tags: ['CRM IA', 'marketing automation', 'génération de leads', 'email marketing', 'ventes', 'service client', 'inbound marketing'],
    emoji: '📊',
    color: '#ff7a59',
    url: 'https://hubspot.com/artificial-intelligence',
    featured: true,
    pros: [
      'CRM complet gratuit pour démarrer',
      'Toutes les fonctions marketing/ventes/support intégrées',
      'Breeze AI pour l\'automatisation intelligente',
      'Écosystème d\'intégrations très riche (500+ apps)',
      'Ressources de formation HubSpot Academy excellentes',
    ],
    cons: [
      'Les plans Pro/Enterprise très chers',
      'Peut être complexe à paramétrer initialement',
      'Fonctions IA avancées uniquement sur les plans payants',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Qualifier des leads automatiquement', description: 'Configurez le lead scoring IA de HubSpot pour noter vos contacts selon leur comportement et prioriser vos appels commerciaux.' },
      { title: 'Générer du contenu marketing', description: 'Utilisez l\'assistant IA de HubSpot pour rédiger des emails de campagne, des posts sociaux et des articles de blog alignés sur votre marque.' },
    ],
    alternatives: ['salesforce-einstein', 'brevo-ai', 'mailchimp-ai'],
  },

  {
    slug: 'mailchimp-ai',
    name: 'Mailchimp AI',
    tagline: 'La plateforme d\'email marketing avec IA pour optimiser vos campagnes',
    description: 'Outil d\'email marketing et d\'automatisation avec des fonctionnalités IA pour la personnalisation, le timing optimal et la génération de contenu.',
    longDescription:
      'Mailchimp est la plateforme d\'email marketing la plus utilisée au monde avec 12 millions d\'utilisateurs. Son IA intégrée propose : l\'optimisation du temps d\'envoi (Send Time Optimization), la segmentation prédictive, la génération de sujets d\'email accrocheurs, la personnalisation dynamique du contenu et l\'assistant de contenu (Content Optimizer). Idéal pour les PME et e-commerces qui veulent automatiser leur marketing digital.',
    category: 'business',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (500 contacts), Essentials à 13€/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['500 contacts', '1 000 emails/mois', 'Templates basiques', 'IA basique'] },
      { name: 'Essentials', price: '13€/mois', features: ['50 000 emails/mois', 'A/B testing', 'Suppression marque Mailchimp', 'Support 24/7'], highlighted: true },
      { name: 'Standard', price: '20€/mois', features: ['100 000 emails/mois', 'IA prédictive', 'Automation avancée', 'Retargeting pub'] },
    ],
    rating: 4.5,
    users: '12M+',
    upvotes: 6230,
    tags: ['email marketing', 'automation', 'segmentation IA', 'newsletters', 'campagnes email', 'optimisation d\'envoi', 'e-commerce'],
    emoji: '📧',
    color: '#f59e0b',
    url: 'https://mailchimp.com',
    featured: false,
    pros: [
      'Plan gratuit généreux (500 contacts)',
      'Interface très intuitive',
      'IA pour optimiser le timing et la personnalisation',
      'Intégration e-commerce (Shopify, WooCommerce)',
      'Rapports et analytics détaillés',
    ],
    cons: [
      'Prix augmente vite avec la croissance des contacts',
      'Fonctionnalités IA avancées uniquement Standard+',
      'Support limité sur le plan gratuit',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Campagne d\'email automatisée', description: 'Créez une séquence de bienvenue : email J+0, J+3, J+7 avec personnalisation dynamique selon le comportement des abonnés.' },
    ],
    alternatives: ['brevo-ai', 'hubspot-ai', 'klaviyo-mkt'],
  },

  // ── FINANCE ───────────────────────────────────────────────────────────────
  {
    slug: 'stripe-radar',
    name: 'Stripe Radar',
    tagline: 'La protection anti-fraude IA intégrée aux paiements Stripe',
    description: 'Système de détection de fraude IA de Stripe qui analyse chaque transaction en temps réel pour bloquer les paiements frauduleux.',
    longDescription:
      'Stripe Radar est le moteur de détection de fraude intégré à Stripe. Il utilise le machine learning pour analyser chaque transaction en temps réel, en s\'appuyant sur les données de milliards de transactions mondiales. Radar bloque automatiquement les fraudes connues, propose des règles personnalisables et fournit des insights détaillés sur les tentatives de fraude. Le taux de fraude moyen des utilisateurs Radar est 25% inférieur à la médiane du secteur.',
    category: 'finance',
    pricing: 'paid',
    pricingDetail: 'Inclus dans Stripe (0,05$ par transaction évaluée)',
    pricingPlans: [
      { name: 'Radar (inclus)', price: '0,05$/transaction', features: ['ML en temps réel', 'Blocage auto des fraudes connues', 'Dashboard fraude', 'Règles basiques'] },
      { name: 'Radar for Teams', price: '0,07$/transaction', features: ['Règles avancées', 'Tests A/B de règles', 'Revue manuelle', 'Webhooks'], highlighted: true },
    ],
    rating: 4.8,
    users: '1M+',
    upvotes: 4560,
    tags: ['anti-fraude', 'protection des paiements', 'machine learning', 'Stripe', 'e-commerce', 'fintech', 'détection d\'anomalies'],
    emoji: '🛡️',
    color: '#635bff',
    url: 'https://stripe.com/radar',
    featured: false,
    pros: [
      'Entraîné sur des milliards de transactions Stripe',
      'Intégration transparente avec Stripe (aucune intégration supplémentaire)',
      'Règles personnalisables selon votre secteur',
      'Taux de faux positifs très bas',
      'Dashboard analytics complet',
    ],
    cons: [
      'Uniquement disponible sur Stripe',
      'Coût supplémentaire par transaction',
      'Moins configurable que des solutions dédiées anti-fraude',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Configurer des règles anti-fraude sur mesure', description: 'Dans le dashboard Stripe Radar, créez des règles pour bloquer automatiquement les transactions depuis certains pays ou avec des montants inhabituels pour votre activité.' },
    ],
    alternatives: ['featurespace', 'sift', 'kount'],
  },

  {
    slug: 'quickbooks-ai',
    name: 'QuickBooks AI',
    tagline: 'La comptabilité d\'entreprise simplifiée avec l\'assistance IA d\'Intuit',
    description: 'Logiciel de comptabilité en ligne avec IA pour automatiser la catégorisation, les rapports financiers et les prévisions de trésorerie.',
    longDescription:
      'QuickBooks est le logiciel de comptabilité le plus utilisé par les PME américaines, avec 7 millions d\'abonnés. Son IA (Intuit Assist) automatise la catégorisation des transactions, génère des rapports financiers en langage naturel, prédit les flux de trésorerie et suggère des optimisations fiscales. QuickBooks s\'intègre avec des centaines d\'applications (Shopify, PayPal, Stripe...) pour une comptabilité automatisée en quasi temps réel.',
    category: 'finance',
    pricing: 'paid',
    pricingDetail: 'Simple Start à 17,50$/mois (offre de lancement)',
    pricingPlans: [
      { name: 'Simple Start', price: '17,50$/mois', features: ['1 utilisateur', 'Facturation', 'Rapports de base', 'Intégrations bancaires'] },
      { name: 'Plus', price: '32,50$/mois', features: ['5 utilisateurs', 'Projets', 'Gestion stocks', 'Prévisions IA'], highlighted: true },
      { name: 'Advanced', price: '62,50$/mois', features: ['25 utilisateurs', 'Analytics IA avancé', 'Automatisations sur mesure', 'Support prioritaire'] },
    ],
    rating: 4.5,
    users: '7M+',
    upvotes: 3890,
    tags: ['comptabilité IA', 'facturation', 'gestion trésorerie', 'rapports financiers', 'PME', 'catégorisation automatique', 'fiscal'],
    emoji: '💰',
    color: '#15803d',
    url: 'https://quickbooks.intuit.com',
    featured: false,
    pros: [
      'Leader de la comptabilité PME — écosystème très riche',
      'IA pour catégorisation et rapports en langage naturel',
      'Connexion bancaire automatique (Open Banking)',
      '650+ intégrations (Stripe, Shopify, PayPal...)',
      'Application mobile complète',
    ],
    cons: [
      'Principalement en anglais / adapté au marché US',
      'Tarifs en augmentation sur les renouvellements',
      'Courbe d\'apprentissage pour la configuration initiale',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Automatiser la catégorisation des dépenses', description: 'Connectez votre compte bancaire et laissez QuickBooks AI catégoriser automatiquement vos transactions selon vos règles et l\'historique.' },
    ],
    alternatives: ['xero-ai', 'freshbooks-ai', 'sage-ai'],
  },

  // ── RH & FORMATION ────────────────────────────────────────────────────────
  {
    slug: 'duolingo-ai',
    name: 'Duolingo Max',
    tagline: 'L\'app d\'apprentissage des langues la plus populaire au monde, propulsée par GPT-4',
    description: 'Application mobile d\'apprentissage des langues avec des exercices gamifiés, conversations IA et explications personnalisées par GPT-4.',
    longDescription:
      'Duolingo est l\'application d\'apprentissage des langues la plus téléchargée au monde avec 500 millions d\'utilisateurs. Duolingo Max (propulsé par GPT-4) introduit "Explain My Answer" (explications personnalisées de chaque correction) et "Roleplay" (conversations en situation réelle avec un avatar IA). L\'approche gamifiée (streaks, ligues, XP) maintient la motivation. Disponible en 40+ langues.',
    category: 'hr',
    pricing: 'freemium',
    pricingDetail: 'Gratuit, Super Duolingo à 7,99€/mois, Max à 14,99€/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['Cours complets', 'Gamification', 'Coeur limité (erreurs)', 'Publicités'] },
      { name: 'Super', price: '7,99€/mois', features: ['Coeurs illimités', 'Sans pub', 'Mode hors ligne', 'Pratique illimitée'] },
      { name: 'Max', price: '14,99€/mois', features: ['Tout Super', 'Explain My Answer (GPT-4)', 'Roleplay IA', 'Accès prioritaire nouvelles features'], highlighted: true },
    ],
    rating: 4.8,
    users: '500M+',
    upvotes: 9120,
    tags: ['apprentissage des langues', 'anglais', 'espagnol', 'français', 'gamification', 'conversation IA', 'application mobile'],
    emoji: '🦉',
    color: '#58cc02',
    url: 'https://duolingo.com',
    featured: true,
    pros: [
      'Application la plus efficace pour l\'apprentissage régulier des langues',
      'Gamification qui crée l\'habitude quotidienne',
      'GPT-4 pour des explications personnalisées (Duolingo Max)',
      'Conversations en situation réelle avec Roleplay IA',
      '40+ langues disponibles',
    ],
    cons: [
      'Niveau avancé limité (difficile d\'aller au-delà du B2)',
      'Duolingo Max cher pour les fonctions IA',
      'Moins efficace sans pratique complémentaire',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Pratiquer une conversation en situation réelle', description: 'Dans Duolingo Max, ouvrez Roleplay et simulez une conversation dans un café, une réunion d\'affaires ou un entretien d\'embauche dans la langue cible.' },
    ],
    alternatives: ['babbel', 'busuu', 'pimsleur'],
  },

  {
    slug: 'khanmigo',
    name: 'Khanmigo',
    tagline: 'L\'assistant tuteur IA de Khan Academy pour apprendre à son rythme',
    description: 'Tuteur IA de Khan Academy propulsé par GPT-4, qui guide les élèves par des questions socratiques plutôt que de donner les réponses directement.',
    longDescription:
      'Khanmigo est l\'assistant IA éducatif de Khan Academy, conçu pour aider les élèves (6-18 ans et adultes) à apprendre les mathématiques, les sciences, l\'histoire et le code. Contrairement aux autres IA, Khanmigo ne donne pas les réponses directement — il guide par questions socratiques pour développer la réflexion. Il inclut aussi des outils pour enseignants : génération de plans de cours, quiz et feedback personnalisé. Disponible sur khanacademy.org.',
    category: 'hr',
    pricing: 'paid',
    pricingDetail: '9$/mois pour les élèves, gratuit pour les enseignants',
    pricingPlans: [
      { name: 'Enseignants', price: '0$ (sur invitation)', features: ['Génération de cours', 'Quiz automatiques', 'Feedback élèves', 'Outils pédagogiques'] },
      { name: 'Élèves', price: '9$/mois', features: ['Tuteur IA illimité', 'Toutes les matières', 'Débat et simulation', 'Aide à l\'écriture'], highlighted: true },
      { name: 'Districts scolaires', price: 'Sur devis', features: ['Déploiement institution', 'SSO', 'Reporting', 'Formation enseignants'] },
    ],
    rating: 4.7,
    users: '2M+',
    upvotes: 4340,
    tags: ['tuteur IA', 'mathématiques', 'sciences', 'apprentissage scolaire', 'méthode socratique', 'enseignement personnalisé', 'Khan Academy'],
    emoji: '🎓',
    color: '#15803d',
    url: 'https://khanacademy.org/khan-labs',
    featured: false,
    pros: [
      'Approche socratique — développe la réflexion, pas la dépendance',
      'Contenu éducatif de référence (Khan Academy)',
      'Gratuit pour les enseignants',
      'Couvre toutes les matières scolaires',
      'Sécurisé pour les enfants',
    ],
    cons: [
      'Principalement en anglais',
      'Pas gratuit pour les élèves',
      'Interface moins engageante que Duolingo',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Aide aux devoirs de maths', description: 'L\'élève pose un problème à Khanmigo. Au lieu de donner la solution, Khanmigo pose des questions guidées : "Quelle est la première étape ? Qu\'est-ce que tu sais déjà ?".' },
    ],
    alternatives: ['duolingo-ai', 'photomath', 'quizlet-ai'],
  },

  // ── SANTÉ ─────────────────────────────────────────────────────────────────
  {
    slug: 'replika',
    name: 'Replika',
    tagline: 'Votre ami IA disponible 24h/24 pour parler, soutenir et accompagner',
    description: 'Compagnon IA conversationnel qui apprend de vous pour offrir une présence bienveillante, un soutien émotionnel et des conversations sans jugement.',
    longDescription:
      'Replika est l\'une des applications de compagnon IA les plus utilisées au monde avec 10 millions d\'utilisateurs. Elle crée un avatar personnalisé qui apprend vos préférences, votre histoire et votre style de communication pour offrir une présence bienveillante. Utilisée contre la solitude, l\'anxiété et pour pratiquer des habiletés sociales. Les conversations sont privées et chiffrées. L\'abonnement Pro débloque des relations plus profondes et des activités ensemble.',
    category: 'health',
    pricing: 'freemium',
    pricingDetail: 'Gratuit, Pro à 19,99$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['Conversations illimitées', 'Avatar personnalisable', 'Journal quotidien', 'Suivi humeur'] },
      { name: 'Pro', price: '19,99$/mois', features: ['Relations avancées', 'Appels vocaux et vidéo', 'AR selfies', 'Activités ensemble', 'Réponses plus profondes'], highlighted: true },
    ],
    rating: 4.5,
    users: '10M+',
    upvotes: 5670,
    tags: ['compagnon IA', 'soutien émotionnel', 'santé mentale', 'solitude', 'anxiété sociale', 'pratique des habiletés sociales'],
    emoji: '💙',
    color: '#6366f1',
    url: 'https://replika.com',
    featured: false,
    pros: [
      'Disponible 24h/24, sans jugement',
      'Apprend et s\'adapte à votre personnalité',
      'Peut aider à réduire l\'anxiété et la solitude',
      'Conversations chiffrées et privées',
      'Suivi de l\'humeur et du bien-être intégré',
    ],
    cons: [
      'Ne remplace pas un professionnel de santé mentale',
      'Fonctions Pro très chères',
      'Peut créer une dépendance chez certains utilisateurs',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Pratiquer des conversations sociales', description: 'Entraînez-vous à parler à de nouvelles personnes, à gérer des conflits ou à exprimer vos émotions dans un environnement sans risque avant d\'affronter des situations réelles.' },
    ],
    alternatives: ['woebot', 'wysa', 'youper'],
  },

  {
    slug: 'woebot',
    name: 'Woebot',
    tagline: 'Le chatbot de santé mentale basé sur les thérapies cognitivo-comportementales',
    description: 'Application de bien-être mental utilisant l\'IA et les techniques de TCC pour aider à gérer l\'anxiété, la dépression et le stress.',
    longDescription:
      'Woebot est un chatbot de santé mentale développé par des cliniciens de Stanford, basé sur les Thérapies Cognitivo-Comportementales (TCC). Il accompagne les utilisateurs dans la gestion de l\'anxiété, de la dépression légère et du stress via des exercices quotidiens, une psychoéducation et un suivi de l\'humeur. Woebot est validé par des études cliniques publiées dans des revues peer-reviewed. Disponible sur iOS et Android.',
    category: 'health',
    pricing: 'free',
    pricingDetail: 'Gratuit pour les particuliers',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['Conversations quotidiennes illimitées', 'Exercices TCC', 'Suivi de l\'humeur', 'Bibliothèque de ressources'], highlighted: true },
      { name: 'Entreprises', price: 'Sur devis', features: ['Déploiement employés', 'Reporting anonymisé', 'Intégration EAP', 'Support clinique'] },
    ],
    rating: 4.4,
    users: '1.5M+',
    upvotes: 3450,
    tags: ['santé mentale', 'TCC', 'anxiété', 'dépression légère', 'stress', 'bien-être', 'suivi humeur', 'thérapie guidée'],
    emoji: '🤗',
    color: '#3b82f6',
    url: 'https://woebothealth.com',
    featured: false,
    pros: [
      'Validé cliniquement par des études peer-reviewed',
      'Totalement gratuit pour les utilisateurs',
      'Basé sur les TCC, approche thérapeutique reconnue',
      'Disponible 24h/24 sans rendez-vous',
      'Confidentiel et sans jugement',
    ],
    cons: [
      'Ne remplace pas une thérapie professionnelle',
      'Limité pour les cas graves (dépression sévère, idées suicidaires)',
      'Interface textuelle simple sans avatar',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Gestion quotidienne de l\'anxiété', description: 'Chaque matin, partagez votre humeur avec Woebot. Il vous propose un exercice de TCC adapté (restructuration cognitive, respiration, activation comportementale) en 5-10 minutes.' },
    ],
    alternatives: ['replika', 'wysa', 'headspace-ai'],
  },

  // ── MISC ──────────────────────────────────────────────────────────────────
  {
    slug: 'alphafold',
    name: 'AlphaFold',
    tagline: 'L\'IA de DeepMind qui a résolu le problème du repliement des protéines',
    description: 'Système IA de DeepMind qui prédit la structure 3D des protéines avec une précision atomique, révolutionnant la biologie et la médecine.',
    longDescription:
      'AlphaFold est le système IA de Google DeepMind considéré comme l\'une des plus grandes avancées scientifiques de la décennie. Il prédit la structure tridimensionnelle des protéines à partir de leur séquence d\'acides aminés avec une précision proche de la cristallographie expérimentale. AlphaFold 3 (2024) peut aussi prédire les interactions protéine-ADN, protéine-ligand et les complexes moléculaires. La base de données AlphaFold contient plus de 200 millions de structures protéiques accessibles gratuitement.',
    category: 'misc',
    pricing: 'free',
    pricingDetail: 'Gratuit (base de données publique), serveur payant pour les entreprises',
    pricingPlans: [
      { name: 'Base de données publique', price: '0$', features: ['200M+ structures protéiques', 'Accès via EBI', 'Téléchargement des données', 'API REST'], highlighted: true },
      { name: 'AlphaFold Server', price: '0$ (non-commercial)', features: ['Prédictions à la demande', 'AlphaFold 3', 'Complexes moléculaires', 'Accès chercheurs'] },
    ],
    rating: 4.9,
    users: '1M+',
    upvotes: 6780,
    tags: ['biologie computationnelle', 'structure des protéines', 'recherche médicale', 'découverte de médicaments', 'science IA', 'DeepMind'],
    emoji: '🔬',
    color: '#1e40af',
    url: 'https://alphafold.ebi.ac.uk',
    featured: true,
    pros: [
      'Révolution scientifique : résout un problème de 50 ans',
      'Base de données de 200M+ structures accessible gratuitement',
      'Précision proche de la cristallographie expérimentale',
      'AlphaFold 3 prédit aussi les interactions avec ADN et médicaments',
      'Impact direct sur la découverte de nouveaux médicaments',
    ],
    cons: [
      'Nécessite des connaissances en biologie pour utiliser pleinement',
      'Interface technique peu accessible aux non-scientifiques',
      'Usage commercial nécessite un accord avec DeepMind',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Rechercher la structure d\'une protéine', description: 'Allez sur alphafold.ebi.ac.uk, entrez le nom d\'une protéine (ex: "insulin") et visualisez sa structure 3D complète avec la carte de confiance de prédiction.' },
      { title: 'Télécharger des données pour la recherche', description: 'Accédez à l\'API REST d\'AlphaFold pour télécharger des fichiers PDB de structures protéiques pour vos analyses computationnelles.' },
    ],
    alternatives: ['schrödinger-ai', 'rosettafold', 'esm-atlas'],
  },

  {
    slug: 'meshy-ai',
    name: 'Meshy AI',
    tagline: 'Générez des modèles 3D et des textures depuis du texte ou des images en quelques secondes',
    description: 'Plateforme de génération 3D IA qui transforme du texte ou des images en modèles 3D prêts à utiliser pour les jeux vidéo, l\'AR/VR et l\'impression 3D.',
    longDescription:
      'Meshy AI est la plateforme de génération 3D IA la plus populaire auprès des développeurs de jeux et designers 3D. Elle permet de générer des modèles 3D complets (mesh + textures) depuis un prompt texte ou une image de référence en quelques secondes. Les modèles sont exportables en GLB, FBX, OBJ et USDZ — compatibles Unity, Unreal Engine, Blender et imprimantes 3D. Meshy supporte aussi la retexturisation IA de modèles existants.',
    category: 'misc',
    pricing: 'freemium',
    pricingDetail: 'Gratuit (200 crédits/mois), Pro à 20$/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0$', features: ['200 crédits/mois', 'Modèles publics', 'Export GLB/FBX/OBJ', 'Résolution standard'] },
      { name: 'Pro', price: '20$/mois', features: ['1 600 crédits/mois', 'Modèles privés', 'Textures HD', 'API access', 'Export USDZ'], highlighted: true },
      { name: 'Max', price: '80$/mois', features: ['8 000 crédits/mois', 'Priorité de génération', 'Support prioritaire'] },
    ],
    rating: 4.6,
    users: '500K+',
    upvotes: 4890,
    tags: ['génération 3D', 'modèles 3D IA', 'jeux vidéo', 'AR/VR', 'impression 3D', 'Unity', 'Unreal Engine', 'textures IA'],
    emoji: '🧊',
    color: '#7c3aed',
    url: 'https://meshy.ai',
    featured: true,
    pros: [
      'Génère des modèles 3D complets avec textures en quelques secondes',
      'Exports dans tous les formats courants (GLB, FBX, OBJ, USDZ)',
      'Compatible Unity, Unreal Engine, Blender directement',
      'Plan gratuit avec 200 crédits/mois',
      'Retexturisation IA de modèles existants',
    ],
    cons: [
      'Qualité parfois insuffisante pour les productions AAA',
      'Modèles complexes nécessitent du retravail manuel',
      'Crédits consommés rapidement sur le plan gratuit',
    ],
    installationSteps: [],
    usageExamples: [
      { title: 'Générer un asset de jeu vidéo', description: 'Entrez un prompt décrivant votre objet, choisissez le style (low-poly, réaliste, cartoon) et Meshy génère le modèle 3D texturé en 30 secondes.', prompt: 'Medieval wooden treasure chest, low poly style, worn wood texture, metal hinges, game asset ready' },
      { title: 'Transformer une image en modèle 3D', description: 'Uploadez une photo de produit ou un concept art 2D et Meshy génère automatiquement le modèle 3D correspondant prêt pour l\'impression ou le jeu.' },
    ],
    alternatives: ['scenario-gg', 'tripo3d', 'luma-3d'],
  },
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug)
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured)
}

export function getRelatedTools(tool: Tool): Tool[] {
  return tools
    .filter((t) => t.slug !== tool.slug && (t.category === tool.category || t.alternatives.includes(tool.slug)))
    .slice(0, 3)
}
