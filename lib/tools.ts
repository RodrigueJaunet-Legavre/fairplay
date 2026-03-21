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
  { slug: 'marketing', label: 'Marketing' },
  { slug: 'productivity', label: 'Productivité' },
  { slug: 'research', label: 'Recherche' },
  { slug: 'chat', label: 'Chat' },
  { slug: 'design', label: 'Design' },
]

export const tools: Tool[] = [
  // ── RÉDACTION ─────────────────────────────────────────────────────────────
  {
    slug: 'lumina-write',
    name: 'Lumina Write',
    tagline: 'Rédigez des contenus percutants en 10x moins de temps',
    description: 'Assistant de rédaction IA pour articles, blogs et contenus marketing.',
    longDescription:
      'Lumina Write est un assistant de rédaction IA de nouvelle génération. Il génère des articles de blog, newsletters, scripts et descriptions produit en s\'adaptant à votre ton et votre secteur. Son moteur comprend le contexte sémantique pour produire des contenus cohérents, optimisés SEO et prêts à publier. Idéal pour les content managers, freelances et équipes marketing.',
    category: 'writing',
    pricing: 'freemium',
    pricingDetail: 'Gratuit jusqu\'à 10 000 mots/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['10 000 mots/mois', '10 templates', 'Export TXT/MD'] },
      { name: 'Pro', price: '19€/mois', features: ['Mots illimités', '80+ templates', 'SEO intégré', 'Export multi-format'], highlighted: true },
      { name: 'Team', price: '49€/mois', features: ['Tout Pro', '5 sièges', 'Workspace partagé', 'API access'] },
    ],
    rating: 4.7,
    users: '2.3M',
    upvotes: 1243,
    tags: ['écrire des articles de blog', 'rédiger du contenu marketing', 'créer des descriptions produit', 'générer des titres accrocheurs', 'rédaction SEO', 'améliorer un texte'],
    emoji: '✍️',
    color: '#7C3AED',
    url: 'https://example.com/lumina-write',
    featured: true,
    pros: ['Interface intuitive, prise en main en 5 minutes', 'Qualité de sortie exceptionnelle', 'Supporte 25+ langues', 'Templates pour tous les formats'],
    cons: ['Limite stricte sur le plan gratuit', 'Pas de génération d\'images intégrée', 'Nécessite des révisions sur les niches très techniques'],
    installationSteps: [
      { title: 'Créer un compte', description: 'Inscrivez-vous sur le site avec votre email ou Google. Aucune carte bancaire requise pour le plan gratuit.' },
      { title: 'Configurer votre profil de marque', description: 'Dans Paramètres → Marque, décrivez votre ton, votre secteur et votre audience cible. Lumina Write s\'adaptera à chaque génération.' },
      { title: 'Choisir un template', description: 'Sélectionnez parmi 80+ templates : article de blog, email, description produit, post LinkedIn...' },
      { title: 'Générer et affiner', description: 'Entrez votre brief, générez, puis utilisez l\'éditeur intégré pour peaufiner. Le bouton "Améliorer" reformule les passages faibles.' },
    ],
    usageExamples: [
      { title: 'Article de blog SEO', description: 'Générer un article complet avec structure H2/H3.', prompt: 'Écris un article de 1000 mots sur "les meilleurs outils IA pour entrepreneurs en 2026", ton expert mais accessible, 4 sous-titres H2, inclus une intro et une conclusion avec CTA.', result: 'Article structuré de 1050 mots, optimisé pour le mot-clé principal, avec méta-description suggérée.' },
      { title: 'Description produit e-commerce', description: 'Descriptions qui convertissent pour votre boutique.', prompt: 'Décris ce casque Bluetooth premium pour audiophiles. Mets en avant la qualité sonore Hi-Res, 40h d\'autonomie, ANC, et le design minimaliste. Ton premium, 120 mots.', result: 'Titre accrocheur + 120 mots de description + 5 bullet points bénéfices.' },
    ],
    alternatives: ['copygenius', 'novapen', 'emailflow'],
  },
  {
    slug: 'copygenius',
    name: 'CopyGenius',
    tagline: 'Publicités et landing pages qui convertissent vraiment',
    description: 'Générateur de copy marketing optimisé pour la conversion : ads, landing pages, emails.',
    longDescription:
      'CopyGenius est spécialisé dans la rédaction persuasive et la conversion. Il maîtrise les frameworks marketing éprouvés (AIDA, PAS, Before/After/Bridge) et génère des accroches publicitaires, des pages de vente et des séquences d\'emails qui transforment les visiteurs en clients. Connecté nativement à Meta Ads et Google Ads.',
    category: 'writing',
    pricing: 'paid',
    pricingDetail: 'À partir de 29€/mois',
    pricingPlans: [
      { name: 'Starter', price: '29€/mois', features: ['50 générations/mois', 'Ads & landing pages', 'Frameworks AIDA/PAS'] },
      { name: 'Growth', price: '79€/mois', features: ['Générations illimitées', 'A/B testing copy', 'Intégration Meta & Google Ads', 'Analytics conversion'], highlighted: true },
      { name: 'Agency', price: '199€/mois', features: ['Tout Growth', 'Comptes clients illimités', 'White label', 'Support dédié'] },
    ],
    rating: 4.5,
    users: '890K',
    upvotes: 987,
    tags: ['écrire des publicités Facebook', 'créer des landing pages', 'rédiger des emails de vente', 'optimiser les conversions', 'accroches publicitaires', 'copywriting persuasif', 'Google Ads'],
    emoji: '🎯',
    color: '#EF4444',
    url: 'https://example.com/copygenius',
    pros: ['Spécialisé conversion, résultats mesurables', 'Intégration directe avec les plateformes ads', 'Frameworks marketing éprouvés', 'A/B testing intégré'],
    cons: ['Pas de plan gratuit', 'Moins polyvalent pour le contenu long', 'Courbe d\'apprentissage pour les non-marketeurs'],
    installationSteps: [
      { title: 'S\'inscrire et choisir un plan', description: 'Créez votre compte et sélectionnez un plan. Essai 7 jours gratuit disponible.' },
      { title: 'Connecter vos comptes ads', description: 'Dans Intégrations, connectez Meta Business Manager et/ou Google Ads pour importer vos campagnes existantes.' },
      { title: 'Décrire votre offre', description: 'Renseignez votre produit, cible, avantage unique et objections courantes. CopyGenius s\'en sert comme base pour tous vos copies.' },
      { title: 'Générer et tester', description: 'Générez 10 variantes d\'accroche, publiez-les en A/B test, et laissez les données choisir le gagnant.' },
    ],
    usageExamples: [
      { title: 'Accroche Facebook Ads', description: 'Générer 5 variantes d\'accroches pour un produit SaaS.', prompt: 'Produit : outil de facturation pour freelances. Cible : développeurs web 25-40 ans. Douleur : perdre du temps sur l\'admin. Génère 5 accroches Facebook de 30 mots max, format AIDA.', result: '5 accroches testables avec hooks différents : question, statistique, douleur, social proof, curiosité.' },
      { title: 'Email de vente', description: 'Séquence email pour un lancement produit.', prompt: 'Écris l\'email n°1 d\'une séquence de lancement pour un cours en ligne sur le copywriting. Prix : 297€. Bénéfice principal : doubler son taux de conversion en 30 jours.', result: 'Email de 350 mots avec objet A/B testé, storytelling, preuve sociale et CTA fort.' },
    ],
    alternatives: ['lumina-write', 'adgenius', 'emailflow'],
  },
  {
    slug: 'novapen',
    name: 'NovaPen',
    tagline: 'De la nouvelle au roman — écrivez avec une IA qui comprend la narration',
    description: 'Compagnon d\'écriture créative pour auteurs : romans, scénarios, nouvelles.',
    longDescription:
      'NovaPen est conçu pour les écrivains sérieux. Il comprend les arcs narratifs, les personnages, les intrigues et les genres littéraires. Il peut développer vos personnages, générer des scènes entières dans votre style, surmonter les blocages créatifs et maintenir la cohérence sur des manuscrits de plusieurs centaines de pages. Dispose d\'une mémoire longue context de 200K tokens.',
    category: 'writing',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 3 projets max',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['3 projets', '20 000 mots/mois', 'Outils de base'] },
      { name: 'Auteur', price: '24€/mois', features: ['Projets illimités', 'Mots illimités', 'Mémoire contexte étendue', 'Analyse de style'], highlighted: true },
      { name: 'Pro', price: '59€/mois', features: ['Tout Auteur', 'Collaboration', 'Export ePub/PDF', 'Analyse de marché éditoriale'] },
    ],
    rating: 4.6,
    users: '340K',
    upvotes: 742,
    tags: ['écrire un roman', 'créer des personnages', 'rédiger des dialogues', 'surmonter le syndrome de la page blanche', 'écrire un scénario', 'développer une intrigue', 'fiction créative'],
    emoji: '📖',
    color: '#8B5CF6',
    url: 'https://example.com/novapen',
    pros: ['Compréhension narrative exceptionnelle', 'Maintient la cohérence sur de longs textes', 'Styles littéraires variés', 'Outils dédiés aux auteurs (timeline, personnages)'],
    cons: ['Moins adapté au contenu marketing', 'Interface parfois lente sur gros projets', 'Nécessite un brief détaillé pour de bons résultats'],
    installationSteps: [
      { title: 'Créer votre espace auteur', description: 'Inscrivez-vous et créez votre premier projet. Donnez-lui un titre, un genre et un résumé.' },
      { title: 'Définir vos personnages', description: 'Dans l\'onglet Personnages, créez vos protagonistes : nom, traits, motivations, backstory. NovaPen les intégrera naturellement dans le texte.' },
      { title: 'Structurer votre récit', description: 'Utilisez le Planificateur d\'intrigue pour définir vos actes, chapitres et points de retournement.' },
      { title: 'Écrire en collaboration', description: 'Activez le mode Co-écriture : vous rédigez une phrase, NovaPen suggère la suite. Ou demandez-lui d\'écrire une scène entière depuis votre plan.' },
    ],
    usageExamples: [
      { title: 'Développement d\'un personnage', description: 'Créer un antagoniste complexe et crédible.', prompt: 'Mon antagoniste est un chirurgien brillant devenu trafiquant d\'organes. Développe sa psychologie, ses motivations profondes, ses contradictions morales, et 3 scènes révélatrices de son caractère.', result: 'Fiche personnage de 600 mots + 3 scènes de 200 mots chacune, ton littéraire adapté au thriller médical.' },
      { title: 'Scène de tension', description: 'Générer une confrontation dramatique.', prompt: 'Chapitre 12 : première confrontation entre Marie et son père qu\'elle croyait mort. Contexte : appartement parisien, nuit de pluie. Ton : réalisme émotionnel, dialogue tendu, 500 mots.', result: 'Scène de 520 mots avec didascalies, dialogue authentique et cliffhanger final.' },
    ],
    alternatives: ['lumina-write', 'summabot'],
  },
  {
    slug: 'emailflow',
    name: 'EmailFlow',
    tagline: 'Des emails qui s\'ouvrent, se lisent et convertissent',
    description: 'Spécialiste de la rédaction d\'emails marketing, transactionnels et cold outreach.',
    longDescription:
      'EmailFlow est dédié à l\'email : newsletters, séquences d\'onboarding, cold emails B2B, relances panier. Il analyse les meilleures pratiques de délivrabilité, optimise les objets pour le taux d\'ouverture, et personnalise le contenu à l\'échelle. Intégré avec Mailchimp, Brevo, HubSpot et Klaviyo.',
    category: 'writing',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 20 emails/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['20 emails/mois', 'Templates de base', 'Optimisation objet'] },
      { name: 'Growth', price: '22€/mois', features: ['200 emails/mois', 'Séquences automatiques', 'Score délivrabilité', 'A/B test objets'], highlighted: true },
      { name: 'Scale', price: '69€/mois', features: ['Emails illimités', 'Personnalisation IA', 'Intégrations ESP', 'Analytics avancés'] },
    ],
    rating: 4.4,
    users: '1.1M',
    upvotes: 876,
    tags: ['écrire des emails marketing', 'rédiger des newsletters', 'cold email B2B', 'séquences email automatiques', 'améliorer le taux d\'ouverture', 'email de bienvenue', 'relance panier abandonné'],
    emoji: '📧',
    color: '#06B6D4',
    url: 'https://example.com/emailflow',
    pros: ['Spécialisé email, résultats concrets sur les KPIs', 'Intégrations natives avec les ESP majeurs', 'Optimisation délivrabilité intégrée', 'Templates testés et performants'],
    cons: ['Limité à l\'email, pas polyvalent', 'Plan gratuit restrictif', 'Moins créatif que les rédacteurs généralistes'],
    installationSteps: [
      { title: 'Créer un compte et connecter votre ESP', description: 'Inscrivez-vous et connectez votre plateforme d\'emailing (Mailchimp, Brevo, Klaviyo...) via OAuth.' },
      { title: 'Importer votre historique', description: 'Laissez EmailFlow analyser vos 100 derniers emails pour apprendre votre style et identifier ce qui performe.' },
      { title: 'Choisir un type d\'email', description: 'Sélectionnez : newsletter, séquence onboarding, cold email, relance panier, email transactionnel...' },
      { title: 'Générer et envoyer', description: 'Entrez votre objectif et votre audience. EmailFlow génère l\'email complet avec objet, preview text et corps. Envoyez directement depuis l\'interface.' },
    ],
    usageExamples: [
      { title: 'Séquence de bienvenue', description: '5 emails pour onboarder un nouvel inscrit.', prompt: 'Crée une séquence de 5 emails de bienvenue pour un SaaS de gestion de projet. Jours 0, 1, 3, 7, 14. Objectif : activer l\'utilisateur et l\'amener à inviter son équipe.', result: '5 emails avec objets A/B, structure progressive vers l\'activation, ton chaleureux et professionnel.' },
      { title: 'Cold email B2B', description: 'Prospection pour une agence web.', prompt: 'Cold email pour cibler les DSI de PME manufacturières (50-200 salariés). Offre : refonte de leur ERP. Pain point : systèmes legacy coûteux à maintenir. 150 mots max, 1 CTA clair.', result: 'Email de 140 mots avec hook personnalisé, valeur ajoutée claire et CTA de 15 minutes calendrier.' },
    ],
    alternatives: ['lumina-write', 'copygenius', 'socialcraft'],
  },

  // ── IMAGE ─────────────────────────────────────────────────────────────────
  {
    slug: 'pixelforge',
    name: 'PixelForge',
    tagline: 'Générez des visuels époustouflants en quelques secondes',
    description: 'Génération d\'images photoréalistes et artistiques par IA — le plus polyvalent du marché.',
    longDescription:
      'PixelForge utilise un modèle de diffusion de dernière génération pour générer des images dans tous les styles : photoréaliste, illustration, concept art, pixel art, peinture à l\'huile, 3D render. Il supporte les éditions inpainting/outpainting, les variations et la génération depuis une image de référence. API disponible pour l\'intégration dans vos apps.',
    category: 'image',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 50 images/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['50 images/mois', 'Résolution 1024px', 'Filigrane discret'] },
      { name: 'Creator', price: '15€/mois', features: ['500 images/mois', 'Haute résolution 4K', 'Sans filigrane', 'Inpainting/outpainting'], highlighted: true },
      { name: 'Pro', price: '49€/mois', features: ['Images illimitées', 'API access', 'Génération batch', 'Styles personnalisés'] },
    ],
    rating: 4.8,
    users: '5.2M',
    upvotes: 2187,
    tags: ['générer des images réalistes', 'créer des illustrations', 'concept art', 'générer des photos de produits', 'créer des visuels pour réseaux sociaux', 'art numérique', 'générer des fonds d\'écran'],
    emoji: '🎨',
    color: '#EC4899',
    url: 'https://example.com/pixelforge',
    featured: true,
    pros: ['Qualité visuelle au niveau professionnel', 'Styles très variés', 'Inpainting/outpainting puissant', 'API bien documentée'],
    cons: ['Plan gratuit avec filigrane', 'Génération parfois lente en heures de pointe', 'Prompt engineering nécessaire pour les meilleurs résultats'],
    installationSteps: [
      { title: 'Créer un compte', description: 'Inscrivez-vous gratuitement. 50 crédits offerts dès l\'inscription.' },
      { title: 'Explorer les styles', description: 'Dans la galerie des styles, testez les presets : Photoréaliste, Anime, Aquarelle, 3D Render... Chaque style a ses paramètres optimaux.' },
      { title: 'Apprendre le prompting', description: 'Utilisez le guide de prompts intégré : sujet + style + éclairage + composition + qualité. Ex: "Portrait d\'une femme scientifique, éclairage cinématique, style hyperréaliste, 8K".' },
      { title: 'Intégrer via API (optionnel)', description: 'Générez une clé API dans votre profil et intégrez PixelForge dans vos workflows.', code: 'curl -X POST https://api.pixelforge.ai/v1/generate \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"prompt": "...", "style": "photorealistic", "width": 1024, "height": 1024}\'' },
    ],
    usageExamples: [
      { title: 'Photo produit e-commerce', description: 'Générer des photos produit sans shooting photo.', prompt: 'Professional product photo of a minimalist leather wallet, dark oak wood background, soft studio lighting, 8K, commercial photography style, no shadows', result: 'Image 4K photoréaliste prête pour une fiche produit Amazon ou Shopify.' },
      { title: 'Visuel pour réseaux sociaux', description: 'Créer des visuels Instagram engageants.', prompt: 'Flat lay of a morning coffee ritual, ceramic cup, notebook, plants, warm golden hour light, minimal aesthetic, top view, Instagram style', result: 'Composition esthétique adaptée au format carré Instagram.' },
    ],
    alternatives: ['dreamcanvas', 'logogen', 'designpilot'],
  },
  {
    slug: 'dreamcanvas',
    name: 'DreamCanvas',
    tagline: 'L\'IA artistique pour les créatifs qui veulent sortir du lot',
    description: 'Génération d\'images artistiques et illustratives avec contrôle stylistique avancé.',
    longDescription:
      'DreamCanvas se distingue par son contrôle stylistique exceptionnel. Uploadez une image de référence pour en capturer le style, mixez jusqu\'à 3 styles différents, et guidez la composition via des ControlNets (pose, contours, profondeur). Idéal pour les illustrateurs, directeurs artistiques et studios créatifs.',
    category: 'image',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 30 créations/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['30 créations/mois', 'Styles de base', 'Export 720p'] },
      { name: 'Artist', price: '19€/mois', features: ['300 créations/mois', 'Style transfer', 'ControlNet', 'Export 4K'], highlighted: true },
      { name: 'Studio', price: '89€/mois', features: ['Illimité', 'Modèles privés', 'API', 'Priorité GPU'] },
    ],
    rating: 4.6,
    users: '1.8M',
    upvotes: 1654,
    tags: ['créer des illustrations artistiques', 'style transfer', 'illustration pour livre', 'créer des personnages de BD', 'art génératif', 'concept art jeu vidéo', 'créer un univers visuel'],
    emoji: '🖼️',
    color: '#F59E0B',
    url: 'https://example.com/dreamcanvas',
    pros: ['Contrôle stylistique le plus avancé du marché', 'Style transfer depuis une image de référence', 'ControlNet pour compositions précises', 'Communauté créative active'],
    cons: ['Interface plus complexe que les concurrents', 'Courbe d\'apprentissage pour les débutants', 'Génération plus lente (traitement plus fin)'],
    installationSteps: [
      { title: 'S\'inscrire et explorer la galerie', description: 'Créez un compte et parcourez la galerie communautaire pour vous inspirer et copier les prompts qui vous plaisent.' },
      { title: 'Choisir votre workflow', description: 'Text-to-Image pour partir de zéro, Image-to-Image pour modifier une image existante, ou Style Transfer pour appliquer un style à votre composition.' },
      { title: 'Maîtriser le style mixing', description: 'Dans le panneau Style, ajoutez jusqu\'à 3 références visuelles avec un poids pour chacune (ex: 70% Monet + 30% pop art).' },
      { title: 'Affiner avec ControlNet', description: 'Uploadez une esquisse ou une silhouette pour guider la composition. DreamCanvas respectera la structure tout en appliquant votre style.' },
    ],
    usageExamples: [
      { title: 'Illustration de couverture', description: 'Couverture de roman graphique dans un style unique.', prompt: 'A lone samurai standing on a cliff at sunset, cyberpunk Tokyo in the background, style: [ref: Moebius comics 0.6] + [ref: Blade Runner poster 0.4], dramatic lighting, panel art composition', result: 'Illustration cinématique unique fusionnant les deux références visuelles.' },
    ],
    alternatives: ['pixelforge', 'logogen', 'designpilot'],
  },
  {
    slug: 'logogen',
    name: 'LogoGen',
    tagline: 'Votre logo professionnel en 30 secondes, sans designer',
    description: 'Génération de logos et d\'identités visuelles par IA, avec export vectoriel.',
    longDescription:
      'LogoGen crée des logos professionnels en SVG vectoriel à partir de votre nom de marque, secteur et valeurs. Il propose 12 variations dans des styles différents (moderne, minimaliste, vintage, géométrique) que vous pouvez personnaliser via un éditeur intégré. Livré avec le guide d\'identité visuelle complet : palette, typographies, usages.',
    category: 'image',
    pricing: 'paid',
    pricingDetail: 'À partir de 15€ par logo',
    pricingPlans: [
      { name: 'Logo Simple', price: '15€', features: ['1 logo final', '12 variations', 'Export PNG/SVG', 'Utilisation commerciale'] },
      { name: 'Pack Identité', price: '39€', features: ['Logo + variations', 'Palette de couleurs', 'Guide typographique', 'Favicon & icônes'], highlighted: true },
      { name: 'Brand Kit', price: '79€', features: ['Tout Pack Identité', 'Templates réseaux sociaux', 'Mockups', 'Révisions illimitées 30j'] },
    ],
    rating: 4.3,
    users: '670K',
    upvotes: 654,
    tags: ['créer un logo', 'identité visuelle de marque', 'logo pour startup', 'logo minimaliste', 'refonte de logo', 'favicon', 'branding'],
    emoji: '🖌️',
    color: '#D946EF',
    url: 'https://example.com/logogen',
    pros: ['Export SVG vectoriel de qualité professionnelle', 'Livré avec le guide d\'identité', 'Paiement unique, pas d\'abonnement', 'Revisions via éditeur intégré'],
    cons: ['Modèles parfois similaires entre secteurs', 'Moins de contrôle que Adobe Illustrator', 'Pas adapté aux logos très complexes'],
    installationSteps: [
      { title: 'Décrire votre marque', description: 'Entrez votre nom, secteur d\'activité, 3 valeurs clés et le style souhaité (moderne, vintage, luxe...).' },
      { title: 'Explorer les 12 propositions', description: 'LogoGen génère 12 variations en moins de 30 secondes. Faites défiler et sélectionnez votre préféré.' },
      { title: 'Personnaliser', description: 'Dans l\'éditeur, modifiez couleurs, typographie, espacement et proportions.' },
      { title: 'Télécharger le pack', description: 'Exportez en SVG, PNG (transparent, fond blanc, fond coloré) et récupérez votre guide d\'identité visuelle en PDF.' },
    ],
    usageExamples: [
      { title: 'Logo pour SaaS B2B', description: 'Logo minimaliste pour une startup tech.', prompt: 'Marque : "FlowSync". Secteur : logiciel de gestion de projet. Valeurs : efficacité, clarté, collaboration. Style : moderne et minimaliste, pas de mascotte, couleur bleue/violet.', result: '12 propositions vectorielles, recommandation principale avec monogramme FS stylisé.' },
    ],
    alternatives: ['dreamcanvas', 'designpilot', 'colorgenius'],
  },
  {
    slug: 'facestudio',
    name: 'FaceStudio',
    tagline: 'Portraits professionnels et avatars IA en 2 minutes',
    description: 'Transformez vos selfies en portraits professionnels, avatars et illustrations.',
    longDescription:
      'FaceStudio prend vos photos et génère des portraits professionnels (LinkedIn, CV), des avatars stylisés (anime, illustration, cartoon) et des photos de profil pour toutes vos plateformes. Il entraîne un micro-modèle sur votre visage pour une ressemblance parfaite. Idéal pour les professionnels, créateurs de contenu et équipes.',
    category: 'image',
    pricing: 'paid',
    pricingDetail: 'Pack de 40 portraits pour 19€',
    pricingPlans: [
      { name: 'Solo', price: '19€', features: ['40 portraits', '8 styles', 'Haute résolution', '1 personne'] },
      { name: 'Team', price: '9€/personne', features: ['40 portraits/personne', '12 styles', 'Batch processing', 'Usage commercial'], highlighted: true },
      { name: 'Illimité', price: '29€/mois', features: ['Portraits illimités', 'Tous styles', 'API', 'Formation modèle personnalisé'] },
    ],
    rating: 4.4,
    users: '2.1M',
    upvotes: 1432,
    tags: ['créer un avatar professionnel', 'photo LinkedIn IA', 'portrait professionnel', 'avatar anime', 'photo de profil stylisée', 'headshot professionnel'],
    emoji: '📸',
    color: '#14B8A6',
    url: 'https://example.com/facestudio',
    pros: ['Ressemblance faciale excellente', 'Variété de styles impressionnante', 'Livraison rapide (15 min)', 'Usage commercial inclus'],
    cons: ['Paiement par pack, pas d\'abonnement modulable', 'Qualité variable selon la photo source', 'Pas de retouche manuelle possible'],
    installationSteps: [
      { title: 'Uploader vos photos', description: 'Fournissez 10 à 20 photos de vous sous différents angles et éclairages. Evitez les selfies flous ou trop proches.' },
      { title: 'Sélectionner vos styles', description: 'Choisissez parmi les styles disponibles : Corporate, Casual, Anime, Oil Painting, Superhero...' },
      { title: 'Patienter 15 minutes', description: 'FaceStudio entraîne un modèle sur votre visage. Vous recevez une notification quand vos portraits sont prêts.' },
      { title: 'Télécharger et utiliser', description: 'Sélectionnez vos meilleurs portraits et téléchargez en haute résolution. Prêts pour LinkedIn, CV, réseaux sociaux.' },
    ],
    usageExamples: [
      { title: 'Portraits LinkedIn pour une équipe', description: 'Harmoniser les photos de profil d\'une équipe de 20 personnes.', prompt: 'Style : Corporate professionnel, fond uni gris clair, costume/veste, éclairage studio, expression souriante et approchable.', result: '40 portraits par personne, cohérents visuellement, prêts pour le site web et LinkedIn.' },
    ],
    alternatives: ['pixelforge', 'dreamcanvas'],
  },

  // ── VIDÉO ─────────────────────────────────────────────────────────────────
  {
    slug: 'clipmaster',
    name: 'ClipMaster',
    tagline: 'Transformez vos longs contenus en clips viraux automatiquement',
    description: 'Découpe automatique de vidéos longues en clips courts optimisés pour les réseaux sociaux.',
    longDescription:
      'ClipMaster analyse vos podcasts, interviews, webinaires et conférences pour en extraire les moments les plus engageants. Il recadre automatiquement au format vertical, ajoute des sous-titres animés et propose un habillage graphique adapté à chaque plateforme (TikTok, Reels, Shorts). La détection de moments viraux utilise une IA entraînée sur 10M de clips.',
    category: 'video',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 3 vidéos/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['3 vidéos/mois', '30 min max', 'Filigrane', 'Export 720p'] },
      { name: 'Creator', price: '29€/mois', features: ['30 vidéos/mois', '3h max', 'Sans filigrane', 'Export 4K', 'Sous-titres animés'], highlighted: true },
      { name: 'Agency', price: '99€/mois', features: ['Illimité', 'Multi-comptes', 'API', 'White label', 'Analytics'] },
    ],
    rating: 4.5,
    users: '1.4M',
    upvotes: 1567,
    tags: ['créer des clips TikTok', 'découper une vidéo longue', 'sous-titres automatiques', 'Reels Instagram depuis podcast', 'YouTube Shorts', 'repurposing de contenu', 'monter des vidéos'],
    emoji: '🎬',
    color: '#EF4444',
    url: 'https://example.com/clipmaster',
    featured: true,
    pros: ['Détection automatique des moments viraux', 'Recadrage vertical intelligent', 'Sous-titres animés de qualité', 'Publication directe sur les plateformes'],
    cons: ['Qualité dépend de la qualité audio source', 'Détection parfois trop conservatrice', 'Export limité sur plan gratuit'],
    installationSteps: [
      { title: 'Uploader votre vidéo', description: 'Importez depuis votre ordinateur, YouTube, ou connectez votre compte Zoom/Riverside pour importer directement.' },
      { title: 'Laisser l\'IA analyser', description: 'ClipMaster analyse votre vidéo (environ 1 min pour 60 min de contenu) et identifie les 10-20 meilleurs moments.' },
      { title: 'Valider et personnaliser', description: 'Révisez les clips suggérés, ajustez les points d\'entrée/sortie, choisissez un template graphique et une police de sous-titres.' },
      { title: 'Exporter ou publier', description: 'Téléchargez en MP4 ou publiez directement sur TikTok, Instagram, YouTube Shorts depuis l\'interface.' },
    ],
    usageExamples: [
      { title: 'Podcast → 10 clips TikTok', description: 'Extraire le meilleur d\'un podcast de 60 minutes.', prompt: 'Podcast : interview de 58 min avec un entrepreneur. Extraire les moments les plus inspirants, chiffres marquants et anecdotes. Format : vertical 9:16, sous-titres jaunes, 45-90 secondes par clip.', result: '12 clips identifiés, 8 approuvés, sous-titrés et recadrés. Publié sur TikTok en 1 clic.' },
    ],
    alternatives: ['videogenius', 'animastudio', 'transcribot'],
  },
  {
    slug: 'videogenius',
    name: 'VideoGenius',
    tagline: 'Créez des vidéos complètes depuis un texte ou une idée',
    description: 'Génération de vidéos marketing et explicatives depuis un simple brief textuel.',
    longDescription:
      'VideoGenius génère des vidéos complètes de 30 secondes à 5 minutes depuis un script ou une description. Il choisit automatiquement les visuels, la musique, la voix off et les animations. Idéal pour les présentations produit, tutoriels, publicités vidéo et vidéos de formation. 50+ templates sectoriels disponibles.',
    category: 'video',
    pricing: 'paid',
    pricingDetail: 'À partir de 39€/mois',
    pricingPlans: [
      { name: 'Starter', price: '39€/mois', features: ['10 vidéos/mois', '5 min max', 'HD 1080p', '50 templates'] },
      { name: 'Business', price: '99€/mois', features: ['40 vidéos/mois', '15 min max', '4K', 'Voix off clonée', 'Branding personnalisé'], highlighted: true },
      { name: 'Enterprise', price: '299€/mois', features: ['Illimité', 'Acteurs IA', 'API', 'Rendu prioritaire'] },
    ],
    rating: 4.3,
    users: '560K',
    upvotes: 1120,
    tags: ['créer une vidéo de présentation', 'vidéo marketing automatique', 'publicité vidéo', 'tutoriel vidéo', 'vidéo explicative', 'vidéo de formation', 'générer une animation'],
    emoji: '🎥',
    color: '#6366F1',
    url: 'https://example.com/videogenius',
    pros: ['Vidéos complètes depuis un texte, sans compétence vidéo', 'Large bibliothèque de visuels et musiques', 'Voix off naturelles en 20 langues', 'Export direct pour toutes plateformes'],
    cons: ['Moins de contrôle créatif qu\'un vrai montage', 'Qualité inégale selon les templates', 'Rendu parfois lent (5-15 min)'],
    installationSteps: [
      { title: 'Créer un compte Business', description: 'Inscrivez-vous et choisissez votre plan. Essai 7 jours gratuit avec 3 vidéos offertes.' },
      { title: 'Entrer votre script ou brief', description: 'Rédigez votre script ou décrivez votre vidéo en quelques phrases. VideoGenius peut aussi générer le script depuis votre URL de produit.' },
      { title: 'Choisir un template et personnaliser', description: 'Sélectionnez un template adapté à votre secteur. Modifiez couleurs, logo, typographie pour votre branding.' },
      { title: 'Choisir la voix off', description: 'Sélectionnez parmi 40 voix IA réalistes ou clonez votre propre voix (plan Business). Ajustez vitesse et intonation.' },
    ],
    usageExamples: [
      { title: 'Vidéo de lancement produit', description: 'Présenter un nouveau SaaS en 60 secondes.', prompt: 'Crée une vidéo de 60s pour lancer notre outil de signature électronique. Ton : professionnel et dynamique. Points clés : rapidité, conformité RGPD, intégration facile. Public : directeurs juridiques.', result: 'Vidéo 60s avec visuels animés, voix off masculine posée, musique corporate, CTA final "Essai gratuit 14 jours".' },
    ],
    alternatives: ['clipmaster', 'animastudio'],
  },
  {
    slug: 'animastudio',
    name: 'AnimaStudio',
    tagline: 'Vidéos animées et explainers professionnels sans After Effects',
    description: 'Création de vidéos animées (motion design, whiteboard, 2D) avec IA.',
    longDescription:
      'AnimaStudio permet de créer des vidéos animées de qualité agence sans aucune compétence technique. Choisissez parmi 3 styles d\'animation (motion design vectoriel, whiteboard, 2D cartoon), personnalisez vos personnages et laissez l\'IA animer votre script. Idéal pour les startups qui ont besoin d\'une vidéo d\'explication mémorable.',
    category: 'video',
    pricing: 'paid',
    pricingDetail: 'À partir de 59€/mois',
    pricingPlans: [
      { name: 'Studio', price: '59€/mois', features: ['5 vidéos/mois', '3 styles animation', '1080p', 'Personnages customisables'] },
      { name: 'Pro', price: '149€/mois', features: ['20 vidéos/mois', 'Tous styles', '4K', 'Personnages avancés', 'Export source'], highlighted: true },
    ],
    rating: 4.2,
    users: '230K',
    upvotes: 743,
    tags: ['créer une vidéo explicative animée', 'vidéo whiteboard', 'motion design', 'animation 2D', 'vidéo de formation animée', 'explainer vidéo startup', 'créer des animations'],
    emoji: '🎞️',
    color: '#F97316',
    url: 'https://example.com/animastudio',
    pros: ['Résultat de qualité agence sans compétences', 'Personnages et décors très customisables', 'Styles variés (whiteboard, 2D, motion design)', 'Synchronisation lip-sync automatique'],
    cons: ['Coût élevé pour un usage occasionnel', 'Pas de style 3D', 'Révisions limitées par plan'],
    installationSteps: [
      { title: 'Créer votre projet', description: 'Nommez votre vidéo, choisissez le style d\'animation et la durée cible (30s à 3 min recommandé).' },
      { title: 'Entrer votre script', description: 'Collez votre script ou laissez AnimaStudio le générer depuis votre description. Chaque phrase devient une scène.' },
      { title: 'Personnaliser les scènes', description: 'Pour chaque scène, choisissez le personnage, le décor et l\'animation. L\'IA suggère des correspondances automatiques.' },
      { title: 'Ajouter voix off et musique', description: 'Choisissez une voix IA ou uploadez votre propre voix. La synchronisation animée se fait automatiquement.' },
    ],
    usageExamples: [
      { title: 'Explainer vidéo pour landing page', description: 'Vidéo d\'explication de 90 secondes pour une startup FinTech.', prompt: 'Script : "Chaque année, les PME perdent en moyenne 15 heures par semaine à gérer leur comptabilité manuellement. FlowBooks automatise tout ça en 3 clics..." Style : motion design, couleurs bleues corporate.', result: 'Vidéo 90s animée avec personnage comptable, graphiques animés, voix off et musique légère.' },
    ],
    alternatives: ['videogenius', 'clipmaster'],
  },

  // ── AUDIO ─────────────────────────────────────────────────────────────────
  {
    slug: 'voicelab',
    name: 'VoiceLab',
    tagline: 'Clonez et synthétisez n\'importe quelle voix avec une précision bluffante',
    description: 'Synthèse vocale ultra-réaliste et clonage de voix à partir de 30 secondes d\'audio.',
    longDescription:
      'VoiceLab offre la synthèse vocale la plus naturelle du marché. Clonez votre voix depuis 30 secondes d\'enregistrement, choisissez parmi 300 voix pré-entraînées en 29 langues, ou créez des voix entièrement nouvelles. Utilisé par des podcasteurs, créateurs YouTube, studios d\'animation et applications d\'accessibilité.',
    category: 'audio',
    pricing: 'paid',
    pricingDetail: 'À partir de 22€/mois',
    pricingPlans: [
      { name: 'Creator', price: '22€/mois', features: ['100 000 caractères/mois', '30 voix', '29 langues', 'Clone de voix'] },
      { name: 'Pro', price: '99€/mois', features: ['500 000 caractères/mois', '300 voix', 'API illimitée', 'Voix personnalisées'], highlighted: true },
    ],
    rating: 4.7,
    users: '1.2M',
    upvotes: 1876,
    tags: ['cloner une voix', 'text to speech réaliste', 'voix off pour vidéo', 'podcast IA', 'créer une voix personnalisée', 'accessibilité lecture', 'synchronisation labiale', 'doublage automatique'],
    emoji: '🎙️',
    color: '#F59E0B',
    url: 'https://example.com/voicelab',
    pros: ['Naturalité des voix sans égale', 'Clonage de voix avec 30 secondes d\'audio', '29 langues et dialectes', 'API bien documentée'],
    cons: ['Pas de plan gratuit généreux', 'Clonage peut poser des questions éthiques', 'Latence sur les textes très longs'],
    installationSteps: [
      { title: 'S\'inscrire et choisir votre cas d\'usage', description: 'Créez un compte et indiquez votre usage principal (contenu, accessibilité, applications...) pour recevoir des recommendations.' },
      { title: 'Cloner votre voix (optionnel)', description: 'Dans l\'onglet Clone de Voix, enregistrez 30 secondes de votre voix ou uploadez un fichier audio propre. Résultat en 5 minutes.' },
      { title: 'Configurer via API', description: 'Générez votre clé API et intégrez VoiceLab dans votre workflow.', code: 'import voicelab\n\nclient = voicelab.Client(api_key="YOUR_KEY")\naudio = client.generate(\n  text="Bonjour, bienvenue sur Fairplay",\n  voice_id="fr-marie-warm",\n  model="eleven-multilingual-v3"\n)\naudio.save("output.mp3")' },
      { title: 'Ajuster les paramètres', description: 'Contrôlez la stabilité, la similarité et l\'expressivité de la voix selon vos besoins.' },
    ],
    usageExamples: [
      { title: 'Voix off YouTube en 5 langues', description: 'Doubler une vidéo en anglais, espagnol, allemand, japonais et arabe.', prompt: 'Texte source FR, durée cible 2min30. Adapter le rythme pour correspondre à la durée de la vidéo originale. Voix : neutre et professionnelle.', result: '5 fichiers audio synchronisés, prêts à remplacer la piste audio originale.' },
    ],
    alternatives: ['transcribot', 'soundcraft'],
  },
  {
    slug: 'transcribot',
    name: 'Transcribot',
    tagline: 'Transcription audio et vidéo ultra-précise en 99 langues',
    description: 'Transcription automatique de haute précision avec identification des locuteurs.',
    longDescription:
      'Transcribot transcrit vos fichiers audio et vidéo avec 98% de précision grâce à des modèles spécialisés par domaine : médical, juridique, journalistique, corporate. Il identifie automatiquement les locuteurs, ajoute des timestamps et exporte en Word, SRT, JSON ou directement dans Notion et Confluence.',
    category: 'audio',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 60 min/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['60 min/mois', '10 langues', 'Export TXT'] },
      { name: 'Pro', price: '17€/mois', features: ['600 min/mois', '99 langues', 'Identification locuteurs', 'Export multi-format'], highlighted: true },
      { name: 'Business', price: '0.07€/min', features: ['Pay-as-you-go', 'Tous formats', 'API', 'Modèles spécialisés'] },
    ],
    rating: 4.6,
    users: '2.8M',
    upvotes: 1789,
    tags: ['transcrire une réunion', 'sous-titres automatiques', 'retranscrire un podcast', 'noter les minutes d\'une réunion', 'transcrire une interview', 'sous-titres vidéo', 'retranscription médicale'],
    emoji: '📝',
    color: '#10B981',
    url: 'https://example.com/transcribot',
    pros: ['Précision 98%+ même avec des accents', 'Identification automatique des locuteurs', '99 langues et dialectes', 'Export vers toutes les plateformes'],
    cons: ['Précision réduite sur les enregistrements bruités', 'Prix à la minute peut vite monter', 'Modèles spécialisés réservés au plan Business'],
    installationSteps: [
      { title: 'Uploader votre fichier', description: 'Glissez-déposez votre fichier audio (MP3, WAV, M4A) ou vidéo (MP4, MOV, AVI). Ou fournissez un lien YouTube/Vimeo.' },
      { title: 'Configurer les options', description: 'Sélectionnez la langue, le nombre de locuteurs et le modèle (standard ou spécialisé). Ajoutez un dictionnaire de termes techniques si besoin.' },
      { title: 'Vérifier et corriger', description: 'La transcription apparaît en quelques minutes. Cliquez sur un mot pour entendre l\'audio correspondant et corriger les erreurs.' },
      { title: 'Exporter', description: 'Choisissez votre format de sortie : TXT, Word, SRT/VTT (sous-titres), JSON avec timestamps, ou envoyez directement vers Notion.' },
    ],
    usageExamples: [
      { title: 'Minutes de réunion automatiques', description: 'Transcription et résumé d\'un standup de 30 minutes.', prompt: 'Réunion de 28 min, 4 locuteurs (Marie, Thomas, Rayan, Sofia). Identifier chaque locuteur, extraire les décisions prises et les actions assignées.', result: 'Transcription complète avec horodatage, tableau des 3 locuteurs identifiés, liste des 7 actions avec responsable.' },
    ],
    alternatives: ['voicelab', 'meetingpal'],
  },
  {
    slug: 'soundcraft',
    name: 'SoundCraft',
    tagline: 'Générez de la musique et des effets sonores sur mesure',
    description: 'Génération de musique originale et d\'effets sonores par IA, sans droits.',
    longDescription:
      'SoundCraft génère de la musique originale libre de droits pour vos vidéos, podcasts, jeux et applications. Décrivez l\'ambiance souhaitée, la durée et le tempo, et obtenez une composition unique. La bibliothèque d\'effets sonores couvre 10 000 sons générant à la volée. Aucun risque de copyright claim sur YouTube.',
    category: 'audio',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 10 générations/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['10 générations/mois', 'Durée 60s max', 'Usage personnel'] },
      { name: 'Creator', price: '16€/mois', features: ['100 générations/mois', '10 min max', 'Licence commerciale', 'Tiges multi-pistes'], highlighted: true },
      { name: 'Pro', price: '49€/mois', features: ['Illimité', 'Personnalisation avancée', 'API', 'Isolation vocale'] },
    ],
    rating: 4.3,
    users: '780K',
    upvotes: 932,
    tags: ['créer de la musique de fond', 'musique sans droits pour YouTube', 'effets sonores pour jeu', 'jingle publicitaire', 'ambiance musicale pour podcast', 'bande son de film'],
    emoji: '🎵',
    color: '#A855F7',
    url: 'https://example.com/soundcraft',
    pros: ['Musique 100% originale et sans droits', 'Très grande variété de styles musicaux', 'Effets sonores générés à la demande', 'Exporté en FLAC/WAV de haute qualité'],
    cons: ['Pas de contrôle sur notes spécifiques', 'Qualité variable selon les genres', 'Génération peut prendre 2-3 minutes'],
    installationSteps: [
      { title: 'Décrire votre besoin musical', description: 'Entrez une description en langage naturel : "musique épique orchestrale pour trailer de jeu vidéo, tempo rapide, 90 secondes".' },
      { title: 'Affiner avec les paramètres', description: 'Ajustez le genre (orchestral, électronique, jazz, lo-fi...), le tempo (BPM), l\'énergie et les instruments principaux.' },
      { title: 'Générer et sélectionner', description: 'SoundCraft génère 3 variations. Écoutez-les et sélectionnez votre préférée ou demandez de nouvelles variations.' },
      { title: 'Télécharger et utiliser', description: 'Exportez en MP3 (standard) ou WAV/FLAC (qualité maximale). La licence commerciale est incluse dans les plans payants.' },
    ],
    usageExamples: [
      { title: 'Générique de podcast', description: 'Jingle d\'intro de 15 secondes.', prompt: 'Générique podcast tech optimiste, 15 secondes, démarrage fort puis fondu. Style : électronique moderne avec touches acoustiques, énergie positive.', result: 'Composition 15s avec intro percutante, montée progressive et fadeout naturel en MP3 320kbps.' },
    ],
    alternatives: ['voicelab', 'transcribot'],
  },

  // ── CODE ─────────────────────────────────────────────────────────────────
  {
    slug: 'codebuddy',
    name: 'CodeBuddy',
    tagline: 'Votre pair programmer IA disponible 24h/24, 7j/7',
    description: 'Assistant de développement IA qui code, débogue et explique dans 40+ langages.',
    longDescription:
      'CodeBuddy intègre un LLM spécialisé dans le code avec accès à votre codebase entier. Il génère du code, explique les fonctions complexes, refactorise, écrit des tests unitaires et détecte les vulnérabilités de sécurité. Compatible VS Code, JetBrains, Neovim et Cursor. Revue de code automatique sur vos PR GitHub/GitLab.',
    category: 'code',
    pricing: 'freemium',
    pricingDetail: 'Gratuit pour l\'open source',
    pricingPlans: [
      { name: 'Open Source', price: '0€', features: ['Repos publics', 'Complétion de base', 'Chat IA'] },
      { name: 'Dev', price: '20€/mois', features: ['Repos privés illimités', 'Complétion avancée', 'Revue de PR', 'Tests auto'], highlighted: true },
      { name: 'Team', price: '35€/siège/mois', features: ['Tout Dev', 'Base de code partagée', 'Standards d\'équipe', 'Dashboard qualité'] },
    ],
    rating: 4.8,
    users: '4.1M',
    upvotes: 3421,
    tags: ['écrire du code', 'déboguer un programme', 'refactoriser du code', 'générer des tests unitaires', 'expliquer du code complexe', 'revue de code automatique', 'autocomplétion intelligente'],
    emoji: '💻',
    color: '#06B6D4',
    url: 'https://example.com/codebuddy',
    featured: true,
    pros: ['Compréhension du contexte codebase entier', 'Supporte 40+ langages et frameworks', 'Intégration IDE native', 'Détection de vulnérabilités'],
    cons: ['Nécessite une connexion internet', 'Parfois trop "confiant" sur des solutions incorrectes', 'Performances dégradées sur très gros codebases'],
    installationSteps: [
      { title: 'Installer l\'extension VS Code', description: 'Cherchez "CodeBuddy" dans le marketplace VS Code et installez l\'extension. Compatible aussi JetBrains et Neovim.', code: 'code --install-extension codebuddy.codebuddy-vscode' },
      { title: 'Se connecter', description: 'Cliquez sur l\'icône CodeBuddy dans la barre latérale et connectez-vous avec votre compte GitHub ou email.' },
      { title: 'Configurer votre projet', description: 'Ouvrez votre projet et laissez CodeBuddy indexer votre codebase. Le premier index prend 2-3 minutes selon la taille.' },
      { title: 'Commencer à coder', description: 'La complétion s\'active automatiquement. Ouvrez le chat avec Cmd+Shift+C pour des questions complexes ou des générations de fonctions entières.' },
    ],
    usageExamples: [
      { title: 'Génération d\'endpoint API', description: 'Créer un endpoint REST complet avec validation.', prompt: 'Crée un endpoint POST /api/users en Express.js avec : validation Zod (email, password min 8 chars, name), hash bcrypt du mot de passe, création en base Prisma, retour JWT. Gestion des erreurs complète.', result: 'Endpoint complet 80 lignes avec types TypeScript, validation, hash, token JWT, middleware d\'erreur et tests Jest.' },
      { title: 'Débogage d\'une race condition', description: 'Identifier et corriger un bug asynchrone subtil.', prompt: 'Ce code cause une race condition lors de requêtes concurrentes : [code collé]. Explique le problème et propose une solution avec mutex ou patterns appropriés.', result: 'Explication de la race condition, solution avec AsyncMutex et tests pour reproduire/valider le fix.' },
    ],
    alternatives: ['bugzapper', 'docucode'],
  },
  {
    slug: 'bugzapper',
    name: 'BugZapper',
    tagline: 'Détectez et corrigez les bugs avant qu\'ils n\'atteignent la production',
    description: 'Analyse statique IA qui détecte bugs, vulnérabilités et anti-patterns dans votre code.',
    longDescription:
      'BugZapper scanne votre codebase pour détecter bugs logiques, vulnérabilités OWASP, fuites mémoire, anti-patterns et code mort. Contrairement aux linters classiques, il comprend l\'intention du code et détecte des bugs que les règles statiques ne voient pas. Intégré directement dans votre pipeline CI/CD.',
    category: 'code',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — repos publics',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['Repos publics', '10 scans/mois', 'Rapport basique'] },
      { name: 'Dev', price: '25€/mois', features: ['Repos privés', 'Scans illimités', 'CI/CD intégré', 'Corrections suggérées'], highlighted: true },
      { name: 'Enterprise', price: 'Sur devis', features: ['Self-hosted', 'Règles custom', 'Conformité SOC2/ISO27001', 'SLA garanti'] },
    ],
    rating: 4.5,
    users: '890K',
    upvotes: 1234,
    tags: ['détecter des bugs automatiquement', 'audit de sécurité du code', 'vulnérabilités OWASP', 'code review automatisé', 'qualité du code', 'fuites mémoire', 'analyse statique'],
    emoji: '🐛',
    color: '#EF4444',
    url: 'https://example.com/bugzapper',
    pros: ['Détecte des bugs invisibles aux linters classiques', 'Intégration CI/CD native', 'Explications claires + corrections suggérées', 'Couverture OWASP Top 10'],
    cons: ['Faux positifs sur du code très idiomatique', 'Scan initial lent sur gros projets', 'Interface de rapport perfectible'],
    installationSteps: [
      { title: 'Connecter votre repository', description: 'Autorisez BugZapper sur GitHub, GitLab ou Bitbucket. Sélectionnez les repos à surveiller.' },
      { title: 'Configurer le scan', description: 'Choisissez les catégories à analyser : sécurité, performance, maintenabilité. Excluez les dossiers vendor/test si besoin.' },
      { title: 'Intégrer dans la CI/CD', description: 'Ajoutez BugZapper à votre pipeline pour bloquer les PRs avec des bugs critiques.', code: '# .github/workflows/bugzapper.yml\n- name: BugZapper Scan\n  uses: bugzapper/action@v2\n  with:\n    api-key: ${{ secrets.BUGZAPPER_KEY }}\n    fail-on: critical,high' },
      { title: 'Traiter les rapports', description: 'Chaque bug détecté inclut : explication, impact potentiel, correction suggérée et lien vers la documentation.' },
    ],
    usageExamples: [
      { title: 'Audit sécurité avant déploiement', description: 'Scanner un projet Node.js avant mise en production.', prompt: 'Scan complet d\'un backend Express de 15 000 lignes. Focus : injections SQL, XSS, CSRF, secrets en clair, dépendances vulnérables.', result: '3 vulnérabilités critiques (injection SQL), 7 high (XSS potentiel), 12 medium (headers HTTP manquants). Rapport PDF + corrections.' },
    ],
    alternatives: ['codebuddy', 'docucode'],
  },
  {
    slug: 'docucode',
    name: 'DocuCode',
    tagline: 'Documentation technique générée automatiquement depuis votre code',
    description: 'Génère de la documentation technique, des READMEs et des guides API depuis votre codebase.',
    longDescription:
      'DocuCode analyse votre code source et génère automatiquement : README complet, documentation d\'API interactive (style Swagger), guides pour développeurs, changelog et commentaires JSDoc/docstring. La documentation est maintenue synchronisée avec votre code via un hook Git.',
    category: 'code',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 1 projet',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['1 projet', 'README basique', 'Docstrings auto'] },
      { name: 'Dev', price: '18€/mois', features: ['5 projets', 'Doc API complète', 'Sync Git', 'Site docs hébergé'], highlighted: true },
      { name: 'Team', price: '49€/mois', features: ['Projets illimités', 'Branding custom', 'API', 'Versioning docs'] },
    ],
    rating: 4.4,
    users: '420K',
    upvotes: 876,
    tags: ['générer de la documentation', 'documenter une API', 'écrire un README', 'docstrings automatiques', 'guide développeur', 'documentation technique'],
    emoji: '📚',
    color: '#3B82F6',
    url: 'https://example.com/docucode',
    pros: ['Sync automatique avec le code', 'Documentation API interactive', 'README professionnels en 1 clic', 'Support JSDoc, docstring Python, GoDoc'],
    cons: ['Qualité dépend de la qualité du code source', 'Moins performant sur le code très complexe', 'Site docs limité en personnalisation'],
    installationSteps: [
      { title: 'Connecter votre repo', description: 'Liez votre dépôt GitHub/GitLab et sélectionnez la branche principale.' },
      { title: 'Lancer l\'analyse', description: 'DocuCode analyse votre code et génère une première version de documentation en 5-10 minutes.' },
      { title: 'Réviser et compléter', description: 'Utilisez l\'éditeur pour compléter les sections manquantes ou corriger les descriptions générées.' },
      { title: 'Activer la synchronisation', description: 'Installez le hook Git pour que la documentation se mette à jour automatiquement à chaque commit.', code: 'npx docucode install-hook\n# Ajoute un hook post-commit qui synchronise la doc' },
    ],
    usageExamples: [
      { title: 'README pour un projet open source', description: 'Générer un README complet pour une librairie NPM.', prompt: 'Génère le README complet pour cette librairie de validation de données TypeScript. Inclus : badges, description, installation, API Reference, exemples, contributing guide.', result: 'README de 500 lignes avec tous les composants, exemples de code testés et badges GitHub Actions.' },
    ],
    alternatives: ['codebuddy', 'bugzapper'],
  },

  // ── MARKETING ─────────────────────────────────────────────────────────────
  {
    slug: 'adgenius',
    name: 'AdGenius',
    tagline: 'Créez des campagnes publicitaires complètes en 10 minutes',
    description: 'Génération de visuels et copies publicitaires pour Meta, Google et TikTok Ads.',
    longDescription:
      'AdGenius génère simultanément les visuels, textes et ciblages pour vos campagnes Meta Ads, Google Ads et TikTok Ads. Il analyse vos meilleures performances passées pour extraire ce qui convertit et l\'applique à vos nouvelles campagnes. Connecté à vos comptes ads pour lancer directement sans quitter la plateforme.',
    category: 'marketing',
    pricing: 'paid',
    pricingDetail: 'À partir de 59€/mois',
    pricingPlans: [
      { name: 'Starter', price: '59€/mois', features: ['50 créations/mois', 'Meta Ads', 'Copy + visuels'] },
      { name: 'Growth', price: '149€/mois', features: ['200 créations/mois', 'Meta + Google + TikTok', 'Analyse performance', 'A/B testing auto'], highlighted: true },
      { name: 'Scale', price: '399€/mois', features: ['Illimité', 'Toutes plateformes', 'Gestion campagnes auto', 'Attribution'] },
    ],
    rating: 4.4,
    users: '340K',
    upvotes: 1102,
    tags: ['créer des publicités Facebook', 'Google Ads automatisés', 'TikTok Ads', 'visuels publicitaires', 'campagne marketing digitale', 'générer des bannières pub', 'ROI publicité'],
    emoji: '📢',
    color: '#EF4444',
    url: 'https://example.com/adgenius',
    pros: ['Génération simultanée visuels + copy', 'Intégration directe avec les plateformes', 'Apprentissage de vos performances passées', 'Gros gain de temps sur la production créative'],
    cons: ['Prix élevé pour les petits budgets', 'Moins adapté aux niches très spécialisées', 'Contrôle créatif limité'],
    installationSteps: [
      { title: 'Connecter vos comptes publicitaires', description: 'Autorisez AdGenius sur Meta Business et/ou Google Ads. Importation des campagnes existantes.' },
      { title: 'Créer votre brief', description: 'Décrivez votre produit, audience cible, message clé, budget et objectif (notoriété, conversion, trafic).' },
      { title: 'Générer les créations', description: 'AdGenius génère 5-10 variantes de visuels et de textes pour chaque format publicitaire.' },
      { title: 'Lancer et optimiser', description: 'Sélectionnez vos meilleures créations et lancez directement. AdGenius monitore les performances et suggère des optimisations.' },
    ],
    usageExamples: [
      { title: 'Lancement produit e-commerce', description: 'Campagne complète pour un nouveau produit.', prompt: 'Produit : serum anti-âge naturel 79€. Cible : femmes 35-55 ans, CSP+. Objectif : 50 ventes en 2 semaines. Budget : 500€. Générer campagne Meta Ads complète.', result: '8 visuels (carousel, vidéo, story, feed), 12 textes variantes, structure de campagne recommandée avec audiences.' },
    ],
    alternatives: ['copygenius', 'socialcraft', 'seomaster'],
  },
  {
    slug: 'socialcraft',
    name: 'SocialCraft',
    tagline: 'Un mois de contenu réseaux sociaux en une heure',
    description: 'Générateur de contenu pour réseaux sociaux : posts, légendes, hashtags, stratégie.',
    longDescription:
      'SocialCraft planifie et génère tout votre contenu social media : posts LinkedIn, tweets, threads, légendes Instagram, descriptions TikTok, hashtags optimisés. Il adapte automatiquement le même message à chaque plateforme et propose un calendrier éditorial cohérent. Publication automatique intégrée.',
    category: 'marketing',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 10 posts/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['10 posts/mois', '2 plateformes', 'Templates de base'] },
      { name: 'Creator', price: '24€/mois', features: ['100 posts/mois', 'Toutes plateformes', 'Calendrier éditorial', 'Publication auto'], highlighted: true },
      { name: 'Agency', price: '99€/mois', features: ['Illimité', '10 comptes clients', 'Analytics', 'Approbation workflow'] },
    ],
    rating: 4.5,
    users: '1.9M',
    upvotes: 1543,
    tags: ['créer des posts LinkedIn', 'légendes Instagram automatiques', 'contenu TikTok', 'calendrier éditorial', 'hashtags optimisés', 'thread Twitter', 'stratégie réseaux sociaux'],
    emoji: '📱',
    color: '#EC4899',
    url: 'https://example.com/socialcraft',
    pros: ['Adaptation automatique par plateforme', 'Calendrier éditorial généré en 1 clic', 'Publication directe intégrée', 'Hashtag optimizer très performant'],
    cons: ['Ton parfois trop générique', 'Moins adapté aux niches très techniques', 'Analytics basiques sur les plans inférieurs'],
    installationSteps: [
      { title: 'Connecter vos réseaux sociaux', description: 'Autorisez SocialCraft sur LinkedIn, Instagram, Twitter/X, TikTok et Facebook en 2 minutes.' },
      { title: 'Définir votre stratégie de contenu', description: 'Renseignez votre secteur, valeurs, audience et objectifs. SocialCraft génère un calendrier éditorial mensuel.' },
      { title: 'Générer votre contenu', description: 'Pour chaque thème du calendrier, cliquez sur "Générer" pour obtenir 3-5 variantes adaptées à chaque plateforme.' },
      { title: 'Planifier et publier', description: 'Sélectionnez et modifiez vos posts préférés, choisissez vos horaires optimaux (suggérés par l\'IA) et planifiez.' },
    ],
    usageExamples: [
      { title: 'Contenu mensuel pour une startup SaaS', description: 'Générer 30 posts sur le thème de la productivité.', prompt: 'Startup SaaS gestion de projet. 30 posts pour novembre : 10 LinkedIn (conseils pro), 10 Twitter (engagement), 10 Instagram (culture d\'entreprise). Ton : expert accessible.', result: 'Calendrier complet 30 posts, adaptés par plateforme, avec variantes A/B et hashtags optimisés par plateforme.' },
    ],
    alternatives: ['adgenius', 'emailflow', 'seomaster'],
  },
  {
    slug: 'seomaster',
    name: 'SEOMaster',
    tagline: 'Atteignez la première page Google avec du contenu IA optimisé',
    description: 'Outil SEO complet : recherche de mots-clés, rédaction optimisée et audit technique.',
    longDescription:
      'SEOMaster combine la recherche de mots-clés, la rédaction de contenu SEO et l\'audit technique. Il analyse le top 10 de vos concurrents pour chaque mot-clé cible, extrait leur stratégie et génère un article qui les surpasse selon les critères Google. Inclut le suivi de positions et les recommandations techniques.',
    category: 'marketing',
    pricing: 'paid',
    pricingDetail: 'À partir de 49€/mois',
    pricingPlans: [
      { name: 'Solo', price: '49€/mois', features: ['5 projets', '50 articles/mois', 'Recherche mots-clés', 'Audit on-page'] },
      { name: 'Agency', price: '149€/mois', features: ['20 projets', '200 articles/mois', 'Suivi positions', 'Rapport clients white label'], highlighted: true },
    ],
    rating: 4.4,
    users: '450K',
    upvotes: 1087,
    tags: ['optimisation SEO', 'rédaction SEO', 'recherche de mots-clés', 'audit SEO technique', 'contenu pour Google', 'augmenter le trafic organique', 'positionnement Google'],
    emoji: '🔍',
    color: '#10B981',
    url: 'https://example.com/seomaster',
    pros: ['Analyse concurrentielle très complète', 'Contenu SEO optimisé avec score E-E-A-T', 'Suivi de positions intégré', 'Recommandations techniques actionnables'],
    cons: ['Prix élevé pour un usage personnel', 'Nécessite des connaissances SEO de base', 'Parfois trop axé sur la densité de mots-clés'],
    installationSteps: [
      { title: 'Créer un projet et connecter Search Console', description: 'Créez un projet pour votre domaine et connectez Google Search Console pour importer vos données de trafic existantes.' },
      { title: 'Identifier vos mots-clés cibles', description: 'Entrez votre thématique principale. SEOMaster génère une liste de 50-200 mots-clés avec volume, concurrence et opportunité.' },
      { title: 'Générer les articles', description: 'Sélectionnez un mot-clé et lancez la génération. SEOMaster analyse les 10 premiers résultats Google et produit un article qui les surpasse.' },
      { title: 'Publier et suivre', description: 'Publiez l\'article sur votre CMS (WordPress, Webflow intégrés) et suivez l\'évolution des positions dans le tableau de bord.' },
    ],
    usageExamples: [
      { title: 'Article pilier pour une agence comptable', description: 'Positionner sur "comptabilité freelance" (3 400 req/mois).', prompt: 'Mot-clé : "comptabilité freelance". Volume : 3 400/mois. Génère un article pilier de 2 500 mots qui surpasse les 5 premiers résultats Google. Inclure FAQ, tableaux, schéma de structure.', result: 'Article de 2 650 mots avec 5 sections H2, 12 H3, FAQ 8 questions, 2 tableaux comparatifs, score SEO : 91/100.' },
    ],
    alternatives: ['adgenius', 'socialcraft', 'lumina-write'],
  },

  // ── PRODUCTIVITÉ ─────────────────────────────────────────────────────────
  {
    slug: 'mindmap-ai',
    name: 'MindMap AI',
    tagline: 'Structurez vos idées en cartes mentales instantanément',
    description: 'Génération de cartes mentales depuis un texte, URL, PDF ou enregistrement vocal.',
    longDescription:
      'MindMap AI génère des cartes mentales détaillées depuis n\'importe quelle source : texte, URL, PDF, fichier audio ou image. Il identifie les concepts clés, les hiérarchies et les relations pour créer une structure visuelle claire. Export vers Miro, Figma, Notion, Confluence et formats image/PDF.',
    category: 'productivity',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 5 cartes/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['5 cartes/mois', 'Sources texte uniquement', 'Export PNG'] },
      { name: 'Pro', price: '14€/mois', features: ['50 cartes/mois', 'Toutes sources', 'Export multi-format', 'Collaboration temps réel'], highlighted: true },
      { name: 'Team', price: '39€/mois', features: ['Illimité', 'Workspace partagé', 'Templates équipe', 'Historique illimité'] },
    ],
    rating: 4.5,
    users: '1.3M',
    upvotes: 943,
    tags: ['créer une carte mentale', 'organiser ses idées', 'brainstorming visuel', 'structurer un projet', 'préparer une présentation', 'résumer un livre en mind map', 'planifier'],
    emoji: '🧠',
    color: '#8B5CF6',
    url: 'https://example.com/mindmap-ai',
    pros: ['Génération depuis n\'importe quelle source', 'Export vers tous les outils de travail', 'Collaboration temps réel', 'Templates par secteur disponibles'],
    cons: ['Interface d\'édition manuelle basique', 'Limite de 5 cartes sur le gratuit', 'Pas d\'application mobile native'],
    installationSteps: [
      { title: 'Créer votre compte', description: 'Inscrivez-vous gratuitement. 5 cartes offertes sans carte bancaire.' },
      { title: 'Choisir votre source', description: 'Collez un texte, une URL d\'article, uploadez un PDF ou un fichier audio. MindMap AI extrait automatiquement le contenu.' },
      { title: 'Laisser l\'IA structurer', description: 'En 10-30 secondes, votre carte mentale apparaît avec nœuds hiérarchiques et connexions. Modifiez en cliquant sur n\'importe quel nœud.' },
      { title: 'Exporter et partager', description: 'Exportez en PNG/PDF ou envoyez directement vers Miro, Figma ou Notion via les intégrations.' },
    ],
    usageExamples: [
      { title: 'Mind map depuis un livre', description: 'Structurer les concepts clés d\'un livre de management.', prompt: 'Génère une carte mentale depuis ce PDF du livre "Good to Great" de Jim Collins. Structure : 5 niveaux max, grouper par chapitres, faire ressortir les concepts actionables.', result: 'Carte mentale à 5 niveaux, 8 branches principales (une par chapitre), 45 sous-nœuds, 12 connexions transversales.' },
    ],
    alternatives: ['summabot', 'meetingpal', 'researchpal'],
  },
  {
    slug: 'summabot',
    name: 'SummaBot',
    tagline: 'Résumez n\'importe quel contenu en bullet points actionnables',
    description: 'Résumé intelligent de documents, articles, vidéos YouTube et podcasts.',
    longDescription:
      'SummaBot résume automatiquement des articles de presse, rapports PDF, emails, vidéos YouTube et podcasts. Il extrait les points clés, les décisions et les actions à prendre. Compatible avec 50+ sources (Notion, Slack, Gmail, YouTube, Spotify Podcasts) via intégrations natives.',
    category: 'productivity',
    pricing: 'free',
    pricingDetail: 'Gratuit avec fonctions premium',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['Résumés illimités', '5 sources', 'Export TXT'] },
      { name: 'Premium', price: '9€/mois', features: ['50+ sources', 'Digest email quotidien', 'API', 'Résumés en équipe'], highlighted: true },
    ],
    rating: 4.6,
    users: '3.8M',
    upvotes: 3876,
    tags: ['résumer un article', 'résumé de réunion', 'synthèse de document', 'résumer une vidéo YouTube', 'extraire les points clés', 'newsletter résumée', 'digest quotidien'],
    emoji: '⚡',
    color: '#14B8A6',
    url: 'https://example.com/summabot',
    featured: true,
    pros: ['Complètement gratuit pour l\'usage de base', 'Compatible avec 50+ sources', 'Résumés actionnables (pas juste descriptifs)', 'Extension Chrome pour résumer en 1 clic'],
    cons: ['Résumés parfois trop courts sur contenu dense', 'API réservée au plan payant', 'Pas de résumé de pages protégées'],
    installationSteps: [
      { title: 'Installer l\'extension Chrome', description: 'Ajoutez l\'extension SummaBot depuis le Chrome Web Store. Fonctionnel immédiatement, sans compte requis.' },
      { title: 'Créer un compte (optionnel)', description: 'Créez un compte gratuit pour sauvegarder vos résumés et accéder à l\'historique.' },
      { title: 'Résumer en 1 clic', description: 'Sur n\'importe quelle page web ou article, cliquez sur l\'icône SummaBot. Le résumé apparaît en sidebar en 5 secondes.' },
      { title: 'Connecter vos sources', description: 'Dans Paramètres → Sources, connectez Gmail, Notion, Slack pour résumer automatiquement les longs messages et documents.' },
    ],
    usageExamples: [
      { title: 'Résumer une veille quotidienne', description: 'Synthétiser 20 articles de presse en 5 minutes.', prompt: 'Résume ces 20 articles sur l\'IA (liens collés). Format : 1 phrase par article, groupé par thème, 5 bullet points clés globaux, tendances de la semaine.', result: 'Digest de 400 mots : 20 résumés d\'une ligne, 4 thèmes identifiés, 5 tendances majeures, 3 signaux à surveiller.' },
    ],
    alternatives: ['mindmap-ai', 'researchpal', 'meetingpal'],
  },
  {
    slug: 'meetingpal',
    name: 'MeetingPal',
    tagline: 'Fini les notes de réunion — l\'IA s\'en charge pour vous',
    description: 'Assistant IA pour réunions : transcription, résumé, décisions et actions en temps réel.',
    longDescription:
      'MeetingPal rejoint vos réunions Zoom, Teams et Google Meet pour transcrire, identifier les locuteurs, extraire les décisions et générer un compte-rendu structuré avec actions et responsables. Le résumé est disponible 2 minutes après la fin de la réunion. Intégré à Slack, Notion, Jira et Linear.',
    category: 'productivity',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 5 réunions/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['5 réunions/mois', '45 min max', 'Transcription + résumé'] },
      { name: 'Pro', price: '19€/mois', features: ['Illimité', '4h max', 'Identification locuteurs', 'Intégrations', 'Recherche historique'], highlighted: true },
      { name: 'Team', price: '14€/siège/mois', features: ['Tout Pro', 'Dashboard équipe', 'Analytics réunions', 'Templates custom'] },
    ],
    rating: 4.7,
    users: '2.1M',
    upvotes: 2134,
    tags: ['notes de réunion automatiques', 'compte-rendu automatique', 'résumer une réunion Zoom', 'extraire les actions d\'une réunion', 'transcription Teams', 'Google Meet notes'],
    emoji: '🤝',
    color: '#3B82F6',
    url: 'https://example.com/meetingpal',
    pros: ['Rejoint automatiquement les réunions', 'Identification précise des locuteurs', 'Actions et responsables extraits automatiquement', 'Intégrations Slack/Notion/Jira'],
    cons: ['Nécessite une autorisation dans la réunion', 'Limité sur les accents très marqués', 'Historique de recherche limité sur le plan gratuit'],
    installationSteps: [
      { title: 'Créer un compte et connecter votre agenda', description: 'Inscrivez-vous et autorisez l\'accès à Google Calendar ou Outlook. MeetingPal voit vos réunions à venir.' },
      { title: 'Activer pour une réunion', description: 'Dans votre tableau de bord, activez MeetingPal pour les réunions souhaitées. Il rejoindra en tant que participant "MeetingPal".' },
      { title: 'Participer normalement', description: 'Menez votre réunion normalement. MeetingPal écoute, transcrit et identifie les locuteurs en temps réel.' },
      { title: 'Recevoir le résumé', description: 'Dans les 2 minutes suivant la fin de la réunion, vous recevez un email avec : résumé, décisions, actions assignées et transcription complète.' },
    ],
    usageExamples: [
      { title: 'Standup quotidien', description: 'Automatiser le compte-rendu d\'un standup de 15 min.', prompt: 'Réunion standup, 5 participants. Extraire : ce que chacun a fait hier, ce qu\'il fait aujourd\'hui, les blocages éventuels. Format tableau.', result: 'Tableau 5×3 (participant × hier/aujourd\'hui/blocage), 2 blocages identifiés, 3 actions avec responsable et deadline.' },
    ],
    alternatives: ['transcribot', 'summabot', 'mindmap-ai'],
  },

  // ── RECHERCHE ─────────────────────────────────────────────────────────────
  {
    slug: 'researchpal',
    name: 'ResearchPal',
    tagline: 'Analysez des dizaines de papers scientifiques en quelques minutes',
    description: 'Assistant de recherche académique : analyse de papers, synthèse et citations.',
    longDescription:
      'ResearchPal ingère des articles scientifiques en PDF et depuis ArXiv, PubMed, Google Scholar. Il extrait les méthodologies, résultats et conclusions, compare plusieurs études et génère des synthèses structurées avec citations automatiques (APA, MLA, Chicago, IEEE). Idéal pour les chercheurs, doctorants et journalistes scientifiques.',
    category: 'research',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 10 analyses/mois',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['10 analyses/mois', 'Upload PDF', 'Citations APA'] },
      { name: 'Researcher', price: '22€/mois', features: ['100 analyses/mois', 'ArXiv/PubMed direct', '4 styles citations', 'Synthèse multi-sources'], highlighted: true },
      { name: 'Lab', price: '99€/mois', features: ['Illimité', 'Workspace équipe', 'API', 'Export Zotero/Mendeley'] },
    ],
    rating: 4.6,
    users: '680K',
    upvotes: 1102,
    tags: ['analyser des articles scientifiques', 'synthèse de littérature', 'citations automatiques', 'recherche académique', 'résumé de paper', 'revue de littérature', 'état de l\'art'],
    emoji: '🔬',
    color: '#7C3AED',
    url: 'https://example.com/researchpal',
    pros: ['Analyse comparative multi-papers exceptionnelle', '4 styles de citations', 'Connexion directe ArXiv et PubMed', 'Détecte les contradictions entre études'],
    cons: ['Limité aux sources scientifiques', 'Interface un peu austère', 'Nécessite des PDF propres (pas de scans)'],
    installationSteps: [
      { title: 'Créer votre espace de recherche', description: 'Créez un projet de recherche et définissez votre thématique. ResearchPal suggère des mots-clés de recherche.' },
      { title: 'Importer vos sources', description: 'Uploadez des PDFs ou collez des DOI/liens ArXiv. ResearchPal accepte jusqu\'à 50 sources par projet.' },
      { title: 'Lancer l\'analyse', description: 'Sélectionnez les papers à analyser et choisissez le type de synthèse : résumé individuel, comparaison, état de l\'art.' },
      { title: 'Exporter avec citations', description: 'Exportez votre synthèse en Word avec toutes les citations formatées. Ou envoyez directement vers Zotero.' },
    ],
    usageExamples: [
      { title: 'État de l\'art pour une thèse', description: 'Analyser 30 papers sur les LLMs et générer une synthèse.', prompt: 'Analyse ces 30 papers sur "reasoning in large language models" (2022-2025). Synthèse de 2000 mots : évolution des approches, consensus actuels, points de débat, lacunes de la recherche. Citations IEEE.', result: 'Synthèse structurée 2100 mots, 5 axes thématiques, 12 citations clés, 4 contradictions identifiées, 3 axes de recherche future.' },
    ],
    alternatives: ['datasense', 'webscout', 'summabot'],
  },
  {
    slug: 'datasense',
    name: 'DataSense',
    tagline: 'Interrogez vos données en langage naturel, obtenez des insights en secondes',
    description: 'Analyse de données par IA : connectez vos bases et posez vos questions en français.',
    longDescription:
      'DataSense connecte à vos bases de données SQL, Google Sheets, BigQuery, Snowflake et CSV. Posez vos questions en langage naturel et obtenez des graphiques, tableaux et analyses instantanément, sans SQL. Il génère aussi des rapports automatiques et des alertes sur vos métriques clés.',
    category: 'research',
    pricing: 'paid',
    pricingDetail: 'À partir de 59€/mois',
    pricingPlans: [
      { name: 'Analyst', price: '59€/mois', features: ['3 connexions', 'Questions illimitées', 'Graphiques auto', 'Export PDF'] },
      { name: 'Team', price: '149€/mois', features: ['10 connexions', 'Dashboards partagés', 'Alertes automatiques', 'Rapports planifiés'], highlighted: true },
    ],
    rating: 4.5,
    users: '280K',
    upvotes: 1320,
    tags: ['analyser des données sans SQL', 'visualisation de données', 'tableau de bord automatique', 'interroger une base de données', 'analyse de ventes', 'reporting automatique', 'business intelligence'],
    emoji: '📊',
    color: '#6366F1',
    url: 'https://example.com/datasense',
    pros: ['SQL en langage naturel, révolutionnaire', 'Connexion à toutes les sources majeures', 'Graphiques générés automatiquement', 'Alertes sur métriques sans configuration'],
    cons: ['Prix élevé pour un usage individuel', 'Requêtes très complexes parfois mal interprétées', 'Pas de versioning des requêtes'],
    installationSteps: [
      { title: 'Connecter votre source de données', description: 'Choisissez votre source : PostgreSQL, MySQL, BigQuery, Google Sheets, Snowflake ou upload CSV/Excel. Connexion sécurisée SSL.', code: '# Exemple connexion PostgreSQL\nHOST=db.monentreprise.com\nPORT=5432\nDATABASE=analytics\nUSER=datasense_readonly\nPASSWORD=your_password' },
      { title: 'Explorer votre schéma', description: 'DataSense analyse votre schéma et suggère les questions les plus utiles basées sur vos tables et volumes de données.' },
      { title: 'Poser vos premières questions', description: 'Tapez en langage naturel : "Quels sont mes 10 clients avec le plus fort chiffre d\'affaires ce trimestre ?" DataSense génère et exécute la requête.' },
      { title: 'Créer des dashboards', description: 'Épinglez vos visualisations préférées dans un dashboard partageable. Planifiez un email hebdomadaire automatique.' },
    ],
    usageExamples: [
      { title: 'Analyse des ventes mensuelle', description: 'Identifier les tendances de vente sans SQL.', prompt: '"Montre-moi l\'évolution du chiffre d\'affaires mois par mois depuis 18 mois, avec la décomposition par catégorie de produit et les 5 produits les plus vendus en novembre."', result: 'Graphique linéaire CA mensuel, graphique stack bar par catégorie, tableau top 5 produits avec variation N-1.' },
    ],
    alternatives: ['researchpal', 'webscout'],
  },
  {
    slug: 'webscout',
    name: 'WebScout',
    tagline: 'Recherche web augmentée par IA — fini les onglets sans fin',
    description: 'Moteur de recherche IA qui synthétise les résultats et cite ses sources.',
    longDescription:
      'WebScout est un moteur de recherche IA qui parcourt le web en temps réel, synthétise les informations et vous donne une réponse sourcée plutôt qu\'une liste de liens. Il compare les sources, identifie les contradictions et génère des réponses nuancées. Mode "Deep Dive" pour des analyses de 2000+ mots sur n\'importe quel sujet.',
    category: 'research',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 20 recherches/jour',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['20 recherches/jour', 'Réponses synthétiques', 'Sources citées'] },
      { name: 'Pro', price: '20€/mois', features: ['Recherches illimitées', 'Mode Deep Dive', 'Export Markdown', 'Collections'], highlighted: true },
    ],
    rating: 4.5,
    users: '3.1M',
    upvotes: 2876,
    tags: ['recherche web intelligente', 'synthèse d\'informations', 'veille concurrentielle', 'réponse sourcée', 'analyse de marché', 'fact-checking', 'explorer un sujet'],
    emoji: '🌐',
    color: '#0EA5E9',
    url: 'https://example.com/webscout',
    pros: ['Réponses synthétiques avec sources citées', 'Information en temps réel', 'Comparaison de sources et détection de contradictions', 'Mode Deep Dive pour analyses approfondies'],
    cons: ['Peut halluciner sur des sujets très récents', 'Pas de navigation sur le web au sens classique', 'Mode Deep Dive lent (3-5 min)'],
    installationSteps: [
      { title: 'Accéder à WebScout', description: 'Ouvrez WebScout dans votre navigateur. Aucune installation requise. L\'extension Chrome permet de remplacer votre moteur de recherche par défaut.' },
      { title: 'Poser une question (pas un mot-clé)', description: 'Au lieu de "meilleur CRM 2026", posez "Quel CRM est le mieux adapté pour une équipe commerciale de 10 personnes dans le SaaS B2B avec un budget de 50€/siège ?"' },
      { title: 'Explorer les sources', description: 'Chaque affirmation est cliquable et renvoie vers sa source originale. Vérifiez ce qui vous importe.' },
      { title: 'Utiliser le mode Deep Dive', description: 'Pour des analyses approfondies (concurrence, marché, technologie), activez Deep Dive. Vous recevez un rapport de 2000+ mots en 5 minutes.' },
    ],
    usageExamples: [
      { title: 'Analyse concurrentielle rapide', description: 'Comparer 5 concurrents sur leurs prix et positionnement.', prompt: 'Analyse comparative de Notion vs Obsidian vs Roam Research vs Logseq vs Mem. Critères : prix, courbe d\'apprentissage, collaboration, prise de notes liée, intégrations. Pour qui chaque outil est-il le meilleur choix ?', result: 'Tableau comparatif 5×5 avec notes, analyse des forces/faiblesses de chaque outil, recommandation personnalisée par profil.' },
    ],
    alternatives: ['researchpal', 'summabot', 'datasense'],
  },

  // ── CHAT ─────────────────────────────────────────────────────────────────
  {
    slug: 'chatflow',
    name: 'ChatFlow',
    tagline: 'Créez des chatbots IA sur-mesure sans une ligne de code',
    description: 'Constructeur de chatbots IA entraînés sur vos données, déployables en 1 clic.',
    longDescription:
      'ChatFlow permet de construire des assistants conversationnels personnalisés en glissant-déposant vos documents (PDF, Word, URL) comme base de connaissance. Le chatbot répond en restant fidèle à vos données et vous cite la source de chaque réponse. Déployez sur votre site, WhatsApp, Slack ou Intercom.',
    category: 'chat',
    pricing: 'paid',
    pricingDetail: 'À partir de 39€/mois',
    pricingPlans: [
      { name: 'Starter', price: '39€/mois', features: ['2 chatbots', '1 000 messages/mois', 'Widget site web', '10 MB de docs'] },
      { name: 'Business', price: '99€/mois', features: ['10 chatbots', '10 000 messages/mois', 'Toutes intégrations', '1 GB de docs', 'Analytics'], highlighted: true },
      { name: 'Enterprise', price: 'Sur devis', features: ['Illimité', 'Self-hosted', 'SSO', 'SLA 99.9%'] },
    ],
    rating: 4.5,
    users: '560K',
    upvotes: 2034,
    tags: ['créer un chatbot pour son site', 'assistant IA sur ses données', 'service client automatisé', 'FAQ intelligente', 'chatbot WhatsApp', 'support client IA'],
    emoji: '💬',
    color: '#3B82F6',
    url: 'https://example.com/chatflow',
    pros: ['No-code, accessible à tous', 'Entraîné sur vos propres données', 'Citations sources dans les réponses', 'Déploiement multi-canal'],
    cons: ['Prix à partir de 39€/mois', 'Limité à vos données (pas de recherche web)', 'Personalisation de l\'apparence basique'],
    installationSteps: [
      { title: 'Créer votre chatbot', description: 'Nommez votre bot, choisissez un avatar et rédigez un prompt système : "Tu es l\'assistant de [Entreprise], réponds uniquement en te basant sur les documents fournis."' },
      { title: 'Uploader votre base de connaissance', description: 'Glissez-déposez vos PDFs, Word, URLs ou connectez Notion. ChatFlow indexe et vectorise automatiquement.' },
      { title: 'Tester et affiner', description: 'Discutez avec votre bot dans l\'interface de test. Ajustez le prompt et les paramètres de réponse si les réponses ne sont pas satisfaisantes.' },
      { title: 'Déployer', description: 'Copiez le snippet JavaScript sur votre site, ou activez l\'intégration WhatsApp/Slack depuis les paramètres.', code: '<script>\n  window.ChatFlow = {\n    botId: "YOUR_BOT_ID",\n    primaryColor: "#7C3AED"\n  };\n</script>\n<script src="https://cdn.chatflow.ai/widget.js" async></script>' },
    ],
    usageExamples: [
      { title: 'Bot de support client pour SaaS', description: 'Automatiser 80% des questions du support.', prompt: 'Base de connaissance : documentation produit 150 pages + 500 tickets support résolus. Bot pour répondre aux questions des utilisateurs, escalader vers humain si non trouvé, ton amical et concis.', result: 'Bot qui répond à 78% des questions sans intervention humaine, avec taux de satisfaction 4.1/5.' },
    ],
    alternatives: ['supportai'],
  },
  {
    slug: 'supportai',
    name: 'SupportAI',
    tagline: 'Transformez votre support client avec une IA qui ne dort jamais',
    description: 'Plateforme de service client IA : triage, réponse automatique et escalade intelligente.',
    longDescription:
      'SupportAI automatise votre service client de bout en bout : triage des tickets, réponses automatiques aux questions fréquentes, escalade vers le bon agent humain avec contexte complet. Il s\'intègre à Zendesk, Freshdesk, Intercom et HubSpot Service Hub. Apprentissage continu depuis vos tickets résolus.',
    category: 'chat',
    pricing: 'paid',
    pricingDetail: 'À partir de 79€/mois',
    pricingPlans: [
      { name: 'Growth', price: '79€/mois', features: ['1 000 tickets/mois', 'Réponses auto', 'Intégration Zendesk/Intercom', 'Analytics'] },
      { name: 'Scale', price: '249€/mois', features: ['5 000 tickets/mois', 'Multi-langues', 'Escalade intelligente', 'Formation continue'], highlighted: true },
    ],
    rating: 4.4,
    users: '210K',
    upvotes: 987,
    tags: ['automatiser le service client', 'réponse automatique aux tickets', 'triage de tickets support', 'chatbot service client', 'support 24/7', 'réduire le temps de réponse'],
    emoji: '🎧',
    color: '#F97316',
    url: 'https://example.com/supportai',
    pros: ['Automatise 60-70% des tickets sans intervention humaine', 'Escalade intelligente avec contexte complet', 'Apprentissage continu depuis l\'historique', 'Multi-langues natif'],
    cons: ['Prix élevé pour petites structures', 'Nécessite un historique de tickets pour être efficace', 'Intégrations limitées aux grandes plateformes'],
    installationSteps: [
      { title: 'Connecter votre helpdesk', description: 'Connectez Zendesk, Freshdesk, Intercom ou HubSpot. SupportAI importe votre historique de tickets pour s\'entraîner.' },
      { title: 'Configurer les politiques de réponse', description: 'Définissez ce que l\'IA peut répondre seule (questions de facturation, état d\'une commande) et ce qui doit être escaladé (plaintes, remboursements).' },
      { title: 'Phase de test (2 semaines)', description: 'Activez le mode "Suggérer" : SupportAI propose des réponses que vos agents valident. Cela améliore le modèle avant le déploiement en autonomie.' },
      { title: 'Activer l\'autonomie complète', description: 'Une fois satisfait de la qualité, activez le mode automatique pour les catégories validées.' },
    ],
    usageExamples: [
      { title: 'Automatiser les questions de facturation', description: 'Gérer automatiquement les demandes de factures et remboursements simples.', prompt: 'Catégorie : questions de facturation. Actions autorisées : envoyer une facture, expliquer un prélèvement, initier un remboursement < 50€. Ton : professionnel et empathique.', result: '73% des tickets de facturation traités sans agent, temps de réponse de 47h → 3 minutes, satisfaction +0.4 point.' },
    ],
    alternatives: ['chatflow'],
  },

  // ── DESIGN ─────────────────────────────────────────────────────────────────
  {
    slug: 'designpilot',
    name: 'DesignPilot',
    tagline: 'Créez des interfaces magnifiques avec une IA designer à vos côtés',
    description: 'Assistant IA pour la conception UI/UX : wireframes, maquettes et design systems.',
    longDescription:
      'DesignPilot est un copilote de design qui génère des wireframes depuis vos spécifications, propose des améliorations UX, vérifie l\'accessibilité WCAG et suggère des composants adaptés. Il travaille directement dans Figma via un plugin et génère du code React/Tailwind depuis vos maquettes.',
    category: 'design',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — 3 projets',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['3 projets', 'Wireframes basiques', 'Suggestions UX'] },
      { name: 'Designer', price: '29€/mois', features: ['Projets illimités', 'Plugin Figma avancé', 'Design System IA', 'Export code'], highlighted: true },
      { name: 'Team', price: '89€/mois', features: ['Tout Designer', 'Collaboration', 'Design Tokens', 'Revues auto'] },
    ],
    rating: 4.4,
    users: '430K',
    upvotes: 1234,
    tags: ['créer des maquettes UI', 'wireframe automatique', 'design d\'interface', 'améliorer l\'UX', 'design system', 'générer du code depuis une maquette', 'accessibilité web'],
    emoji: '🎭',
    color: '#EC4899',
    url: 'https://example.com/designpilot',
    pros: ['Plugin Figma natif, workflow fluide', 'Génération de code React/Tailwind de qualité', 'Vérification d\'accessibilité WCAG automatique', 'Design System cohérent généré'],
    cons: ['Nécessite Figma (pas d\'outil standalone)', 'Génération de code parfois perfectible', 'Pas adapté aux designs très custom'],
    installationSteps: [
      { title: 'Installer le plugin Figma', description: 'Dans Figma, allez dans Plugins → Gérer les plugins → Rechercher "DesignPilot" → Installer.' },
      { title: 'Créer un compte et connecter', description: 'Créez un compte DesignPilot et connectez-le au plugin Figma via le bouton "Connecter mon compte".' },
      { title: 'Décrire votre interface', description: 'Dans le panel DesignPilot, décrivez l\'écran à créer : "Page de connexion pour une app mobile fintech, formulaire email/mot de passe, bouton social login, design sobre et trustworthy".' },
      { title: 'Affiner et itérer', description: 'DesignPilot génère les composants dans votre canvas Figma. Sélectionnez un élément et demandez des suggestions d\'amélioration UX.' },
    ],
    usageExamples: [
      { title: 'Dashboard SaaS complet', description: 'Générer un dashboard analytics en 30 minutes.', prompt: 'Dashboard analytics pour un SaaS B2B. Données à afficher : MRR, churn, nouveaux clients, usage par feature, carte géo des utilisateurs. Design system : couleurs bleues corporate, typographie Inter, cards avec ombres légères.', result: '8 composants générés (header KPI, graphique ligne, graphique barres, tableau, carte, filtres date), code Tailwind exporté.' },
    ],
    alternatives: ['pixelforge', 'colorgenius', 'logogen'],
  },
  {
    slug: 'colorgenius',
    name: 'ColorGenius',
    tagline: 'Des palettes de couleurs parfaites générées par IA en 3 secondes',
    description: 'Générateur de palettes de couleurs harmonieuses et accessibles pour vos projets.',
    longDescription:
      'ColorGenius génère des palettes de couleurs harmonieuses depuis une image, un texte descriptif ou une couleur de base. Il vérifie automatiquement les ratios de contraste WCAG, propose des variantes sombres/claires et exporte en tokens CSS, Tailwind config, Figma styles et code Swift/Kotlin.',
    category: 'design',
    pricing: 'freemium',
    pricingDetail: 'Gratuit — usage illimité basique',
    pricingPlans: [
      { name: 'Gratuit', price: '0€', features: ['Palettes illimitées', 'Export PNG/HEX', 'Contraste WCAG'] },
      { name: 'Pro', price: '12€/mois', features: ['Export CSS/Tailwind/Figma', 'Design tokens', 'Palettes sombres auto', 'API'], highlighted: true },
    ],
    rating: 4.6,
    users: '1.6M',
    upvotes: 1987,
    tags: ['créer une palette de couleurs', 'choisir des couleurs pour son site', 'couleurs accessibles WCAG', 'design system couleurs', 'palette depuis une image', 'thème sombre automatique'],
    emoji: '🎨',
    color: '#F59E0B',
    url: 'https://example.com/colorgenius',
    pros: ['Gratuit pour l\'usage basique', 'Vérification WCAG automatique', 'Export vers tous les formats dev', 'Génération thème sombre automatique'],
    cons: ['Plan gratuit sans export code', 'Palettes parfois trop conventionnelles', 'Pas de preview sur des components réels'],
    installationSteps: [
      { title: 'Accéder à ColorGenius', description: 'Ouvrez colorgenius.ai dans votre navigateur. Aucune installation requise.' },
      { title: 'Choisir votre méthode de génération', description: 'Uploadez une image de référence, entrez une description ("tech startup moderne, confiance, innovation") ou entrez une couleur primaire HEX.' },
      { title: 'Explorer et personnaliser', description: 'ColorGenius génère 5 palettes complètes (primary, secondary, neutral, success, warning, error). Cliquez sur une couleur pour la modifier.' },
      { title: 'Exporter dans votre format', description: 'Choisissez votre format d\'export : CSS custom properties, Tailwind config, Figma styles JSON ou palettes SCSS.', code: '/* Export CSS généré par ColorGenius */\n:root {\n  --color-primary-50: #f5f3ff;\n  --color-primary-500: #7c3aed;\n  --color-primary-900: #2e1065;\n  /* ... */\n}' },
    ],
    usageExamples: [
      { title: 'Palette pour application fintech', description: 'Créer une identité colorielle trustworthy.', prompt: 'Application fintech pour la gestion d\'épargne. Valeurs : sécurité, croissance, clarté. Palette complète avec 5 niveaux de teinte pour chaque couleur sémantique. Mode clair et sombre.', result: 'Palette 35 couleurs (5 niveaux × 7 couleurs sémantiques), mode sombre généré, tous ratios WCAG AA validés, export Tailwind.' },
    ],
    alternatives: ['designpilot', 'logogen'],
  },
]

// ── HELPERS ───────────────────────────────────────────────────────────────

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug)
}

export function getToolsByCategory(category: string): Tool[] {
  if (category === 'all') return tools
  return tools.filter((t) => t.category === category)
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured)
}

export function getRelatedTools(tool: Tool): Tool[] {
  return tools
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 3)
}
