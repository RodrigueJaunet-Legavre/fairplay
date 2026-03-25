export type GuideEtape = { etape: number; titre: string; description: string }
export type GuideFonctionnalite = { titre: string; description: string; astuce?: string }
export type GuideExemple = { titre: string; prompt: string; resultat: string }
export type GuidePlan = { plan: string; prix: string; features: string[]; highlighted?: boolean }
export type Guide = {
  demarrage: GuideEtape[]
  utilisation: GuideFonctionnalite[]
  exemples: GuideExemple[]
  prix: GuidePlan[]
  conseils: string[]
  alternatives: string[]
}

export const GUIDES: Record<string, Guide> = {

  'chatgpt': {
    demarrage: [
      { etape: 1, titre: 'Créer un compte', description: 'Rendez-vous sur chat.openai.com, cliquez sur "Sign up" et inscrivez-vous avec votre email ou via Google/Microsoft.' },
      { etape: 2, titre: 'Choisir un plan', description: 'Le plan gratuit donne accès à GPT-4o mini. Passez à ChatGPT Plus (20 $/mois) pour GPT-4o, la génération d\'images et les plugins.' },
      { etape: 3, titre: 'Démarrer une conversation', description: 'Tapez votre message dans la barre en bas. Utilisez les GPTs personnalisés (icône en haut à gauche) pour des assistants spécialisés.' },
    ],
    utilisation: [
      { titre: 'Conversations contextuelles', description: 'ChatGPT retient tout le contexte de la conversation en cours. Vous pouvez corriger, reformuler ou affiner vos demandes au fil des échanges.', astuce: 'Commencez par "Tu es expert en [domaine]. Réponds toujours en [style]." pour cadrer tous vos échanges.' },
      { titre: 'Analyse de fichiers', description: 'Glissez-déposez des PDF, images, CSV ou code directement dans le chat. ChatGPT peut résumer, analyser ou extraire des données.', astuce: 'Pour les longs PDF, demandez d\'abord un résumé, puis posez des questions précises.' },
      { titre: 'Génération d\'images', description: 'Avec ChatGPT Plus, tapez "/image" ou décrivez ce que vous voulez voir. Powered by DALL-E 3 intégré.', astuce: 'Précisez le style : "illustration vectorielle", "photo réaliste", "aquarelle".' },
      { titre: 'Exécution de code', description: 'L\'Advanced Data Analysis exécute du Python pour analyser des données, créer des graphiques ou automatiser des tâches.', astuce: 'Uploadez votre fichier Excel et demandez "Crée un graphique de l\'évolution des ventes par mois".' },
    ],
    exemples: [
      { titre: 'Rédiger un email professionnel', prompt: 'Rédige un email de relance client pour une proposition envoyée il y a 2 semaines, sans paraître insistant. Ton professionnel mais chaleureux. Prénom client : Thomas.', resultat: 'ChatGPT génère un email personnalisé avec objet, corps et formule de politesse adaptés, qu\'il suffit de copier-coller.' },
      { titre: 'Analyser un contrat', prompt: 'Voici un extrait de contrat de prestation. Identifie les clauses potentiellement défavorables pour le prestataire et explique-les simplement. [Coller le texte du contrat]', resultat: 'Analyse clause par clause avec explication en langage clair et points d\'attention prioritaires.' },
      { titre: 'Créer un plan de contenu', prompt: 'Je tiens un blog sur la finance personnelle. Génère un calendrier éditorial pour 4 semaines (1 article/semaine) avec titre, angle et mots-clés SEO pour chaque article.', resultat: 'Planning détaillé avec titres accrocheurs, angles différenciants et suggestions de mots-clés longue traîne.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['GPT-4o mini', 'Conversations illimitées', 'GPTs basiques', 'Génération d\'images limitée'] },
      { plan: 'Plus', prix: '20 $/mois', features: ['GPT-4o complet', 'Images DALL-E 3', 'Advanced Data Analysis', 'Plugins & GPTs premium', 'Accès prioritaire'], highlighted: true },
      { plan: 'Team', prix: '25 $/mois/user', features: ['Tout Plus', 'Workspace partagé', 'Données non utilisées pour l\'entraînement', 'Console d\'administration'] },
      { plan: 'Enterprise', prix: 'Sur devis', features: ['Tout Team', 'SSO & SAML', 'SLA garanti', 'Support dédié'] },
    ],
    conseils: [
      'Utilisez des "system prompts" au début de chaque conversation pour définir le rôle et le ton (ex : "Tu es un expert comptable français, réponds de façon concise").',
      'Le raccourci Shift+Entrée crée un retour à la ligne sans envoyer — utile pour les prompts longs.',
      'Sauvegardez vos meilleurs prompts dans un fichier texte ou Notion pour les réutiliser rapidement.',
      'Pour les textes longs, demandez à ChatGPT de travailler "par sections" pour éviter les coupures.',
      'Activez la mémoire (Settings > Personalization) pour que ChatGPT se souvienne de vos préférences entre sessions.',
    ],
    alternatives: ['claude-ai', 'gemini', 'perplexity'],
  },

  'claude-ai': {
    demarrage: [
      { etape: 1, titre: 'Créer un compte Anthropic', description: 'Rendez-vous sur claude.ai, inscrivez-vous avec votre email ou Google. L\'accès gratuit est immédiat.' },
      { etape: 2, titre: 'Découvrir l\'interface', description: 'L\'interface est épurée : une zone de texte principale, un bouton pour joindre des fichiers et l\'historique des conversations à gauche.' },
      { etape: 3, titre: 'Démarrer avec un projet', description: 'Utilisez les "Projects" pour regrouper des conversations autour d\'un même sujet et donner des instructions permanentes à Claude.' },
    ],
    utilisation: [
      { titre: 'Rédaction longue', description: 'Claude excelle sur les documents longs : rapports, mémoires, analyses. Sa fenêtre de contexte de 200 000 tokens permet de tout garder en mémoire.', astuce: 'Pour un long document, collez tout le contenu dès le départ et posez ensuite vos questions.' },
      { titre: 'Analyse de code', description: 'Claude comprend et génère du code dans tous les langages. Il explique les erreurs de façon pédagogique et suggère des refactorisations.', astuce: 'Demandez "Explique ce code ligne par ligne" avant de demander des modifications.' },
      { titre: 'Projets avec instructions fixes', description: 'Dans un Project, définissez des instructions permanentes : ton, format de réponse, contexte métier. Elles s\'appliquent à toutes les conversations.', astuce: 'Créez un projet par client ou par type de tâche récurrente.' },
      { titre: 'Résumé de documents', description: 'Glissez un PDF ou collez un texte long. Claude produit des résumés structurés avec les points clés, actions à prendre et questions ouvertes.', astuce: 'Demandez un résumé en bullet points avec niveau de priorité pour chaque point.' },
    ],
    exemples: [
      { titre: 'Analyse d\'un long rapport', prompt: 'Voici un rapport annuel de 80 pages. Extrais : 1) les 5 chiffres clés, 2) les risques mentionnés, 3) la stratégie pour l\'année prochaine. Format : tableaux. [Coller le PDF]', resultat: 'Trois tableaux structurés avec les informations demandées, extraites avec précision du document complet.' },
      { titre: 'Révision de contrat', prompt: 'Révise cette clause de non-concurrence pour un contrat de travail français. Elle doit être valide légalement et protéger l\'employeur sans être abusive. [Coller la clause]', resultat: 'Clause révisée avec explication des modifications, références aux articles du Code du travail concernés.' },
      { titre: 'Brainstorming structuré', prompt: 'Je lance une application de méditation pour ados (12-17 ans). Génère 10 idées de fonctionnalités innovantes avec pour chacune : description, valeur ajoutée, difficulté technique estimée.', resultat: 'Tableau de 10 fonctionnalités avec description détaillée, proposition de valeur et estimation de complexité.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['Claude 3.5 Haiku', 'Conversations limitées/jour', 'Analyse de fichiers', 'Projects basiques'] },
      { plan: 'Pro', prix: '20 $/mois', features: ['Claude 3.5 Sonnet & Opus', '5x plus de messages', 'Projects illimités', 'Accès prioritaire'], highlighted: true },
      { plan: 'Team', prix: '30 $/mois/user', features: ['Tout Pro', 'Collaboration en équipe', 'Données non utilisées pour entraînement', 'Facturation centralisée'] },
      { plan: 'Enterprise', prix: 'Sur devis', features: ['Tout Team', 'SSO', 'Contrats de données', 'Support dédié'] },
    ],
    conseils: [
      'Claude est particulièrement fort pour les tâches nécessitant de la nuance et de l\'éthique — idéal pour les RH, le juridique et la communication sensible.',
      'Utilisez les Projects pour créer des assistants spécialisés persistants (assistant RH, assistant juridique, etc.).',
      'Demandez à Claude de "penser à voix haute" avec <thinking> pour obtenir des raisonnements détaillés.',
      'Pour les longs textes, précisez dès le départ le format de sortie souhaité (tableau, bullet points, prose).',
      'Claude respecte scrupuleusement vos instructions de format — soyez précis sur longueur et structure.',
    ],
    alternatives: ['chatgpt', 'gemini', 'perplexity'],
  },

  'gemini': {
    demarrage: [
      { etape: 1, titre: 'Accéder à Gemini', description: 'Rendez-vous sur gemini.google.com avec votre compte Google. Aucune inscription supplémentaire requise.' },
      { etape: 2, titre: 'Choisir la version', description: 'Gemini 1.5 Flash est gratuit et rapide. Souscrivez à Google One AI Premium (19,99 €/mois) pour Gemini Advanced (Ultra 1.0).' },
      { etape: 3, titre: 'Intégrer à Google Workspace', description: 'Avec Google One AI Premium, Gemini s\'intègre dans Gmail, Docs, Sheets et Drive pour assister directement dans vos outils quotidiens.' },
    ],
    utilisation: [
      { titre: 'Intégration Google Workspace', description: 'Gemini peut résumer vos emails Gmail, rédiger dans Google Docs, analyser vos Sheets et rechercher dans vos fichiers Drive.', astuce: 'Dans Gmail, cliquez sur l\'icône Gemini pour résumer un long fil d\'emails en 3 points.' },
      { titre: 'Analyse d\'images et vidéos', description: 'Gemini 1.5 Pro analyse des images, extraits vidéo et même des fichiers audio. Idéal pour extraire des informations visuelles.', astuce: 'Uploadez une photo de tableau blanc ou de notes manuscrites pour les digitaliser.' },
      { titre: 'Recherche avec sources', description: 'Gemini intègre Google Search pour fournir des réponses avec sources vérifiables et informations à jour.', astuce: 'Activez "Google it" pour comparer les réponses de Gemini avec une recherche web.' },
      { titre: 'Génération de code', description: 'Gemini intègre directement Google Colab pour exécuter du code Python dans le navigateur sans configuration.', astuce: 'Demandez "Crée un notebook Colab pour analyser ce CSV" et ouvrez directement dans Colab.' },
    ],
    exemples: [
      { titre: 'Résumer des emails', prompt: 'Dans Gmail, avec Gemini : "Résume ce fil d\'emails et liste les actions à prendre avec les responsables et deadlines."', resultat: 'Résumé structuré du fil avec tableau actions/responsable/deadline, prêt à copier dans un compte-rendu.' },
      { titre: 'Analyser un tableau de données', prompt: 'Dans Google Sheets, avec Gemini : "Analyse ces données de ventes. Identifie les tendances, les anomalies et propose 3 recommandations."', resultat: 'Analyse avec graphiques suggérés, identification des valeurs aberrantes et recommandations actionnables.' },
      { titre: 'Créer une présentation', prompt: 'Crée le plan d\'une présentation de 10 slides sur l\'impact de l\'IA sur les emplois en 2025. Inclus des titres accrocheurs et les points clés de chaque slide.', resultat: 'Structure complète avec titres, sous-titres, 3-4 points par slide et suggestions visuelles.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['Gemini 1.5 Flash', 'Conversations illimitées', 'Analyse d\'images', 'Intégration basique Google'] },
      { plan: 'Google One AI Premium', prix: '19,99 €/mois', features: ['Gemini Advanced (Ultra)', '2 To de stockage Drive', 'Gemini dans Gmail/Docs/Sheets', 'Gemini dans Google Meet'], highlighted: true },
      { plan: 'Workspace Business', prix: 'Dès 22 €/user/mois', features: ['Gemini for Workspace', 'Duet AI intégré', 'Sécurité enterprise', 'Administration centralisée'] },
    ],
    conseils: [
      'Gemini est le meilleur choix si vous utilisez déjà Google Workspace — l\'intégration native est sa principale force.',
      'Utilisez Gemini dans Google Docs pour générer des premiers brouillons directement dans votre document.',
      'Dans Sheets, demandez à Gemini d\'expliquer des formules complexes ou d\'en créer de nouvelles.',
      'Activez l\'historique des conversations dans les paramètres pour retrouver vos échanges passés.',
      'Combinez Gemini avec NotebookLM (gratuit) pour analyser en profondeur vos propres documents.',
    ],
    alternatives: ['chatgpt', 'claude-ai', 'perplexity'],
  },

  'midjourney': {
    demarrage: [
      { etape: 1, titre: 'Rejoindre Discord', description: 'Midjourney fonctionne via Discord. Créez un compte sur discord.com si vous n\'en avez pas, puis rejoignez le serveur Midjourney via midjourney.com.' },
      { etape: 2, titre: 'S\'abonner', description: 'Tapez /subscribe dans n\'importe quel canal pour choisir votre plan. Aucun essai gratuit disponible — le plan Basic à 10 $/mois est le minimum.' },
      { etape: 3, titre: 'Générer votre première image', description: 'Dans un canal #newbies ou en DM avec le bot, tapez /imagine puis décrivez votre image. Midjourney génère 4 variantes en 30-60 secondes.' },
    ],
    utilisation: [
      { titre: 'Commande /imagine', description: 'La commande principale. Décrivez votre image en anglais pour de meilleurs résultats. Ajoutez des paramètres après "--" (ex: --ar 16:9 --style raw).', astuce: 'Structure optimale : [sujet] + [environnement] + [style artistique] + [éclairage] + [paramètres].' },
      { titre: 'Upscale et variations', description: 'Sur les 4 images générées, U1-U4 agrandissent une image, V1-V4 créent des variations. Le bouton 🔄 regénère tout.', astuce: 'Utilisez V pour explorer des directions créatives, puis U sur votre préférée pour la finaliser.' },
      { titre: 'Paramètres clés', description: '--ar [ratio] pour le format, --v 6 pour la dernière version, --style raw pour plus de réalisme, --q 2 pour la qualité maximale.', astuce: 'Sauvegardez vos paramètres favoris avec /prefer suffix pour les ajouter automatiquement.' },
      { titre: 'Référence d\'image', description: 'Ajoutez une URL d\'image avant votre prompt pour guider le style. Paramètre --iw [0-2] contrôle le poids de l\'image de référence.', astuce: 'Combinez 2 images avec /blend pour fusionner deux styles artistiques.' },
    ],
    exemples: [
      { titre: 'Portrait professionnel', prompt: '/imagine professional headshot of a 35-year-old woman, business attire, neutral background, soft studio lighting, sharp focus, 85mm lens --ar 1:1 --style raw --v 6', resultat: '4 portraits photoréalistes de qualité studio, utilisables pour LinkedIn ou site web professionnel.' },
      { titre: 'Illustration pour blog', prompt: '/imagine minimalist flat illustration of a person meditating in a forest, zen atmosphere, soft pastel colors, scandinavian design style --ar 16:9 --v 6', resultat: 'Illustrations vectorielles épurées parfaites pour articles de blog, présentations ou réseaux sociaux.' },
      { titre: 'Concept architectural', prompt: '/imagine modern sustainable architecture, glass and wood building surrounded by trees, golden hour lighting, aerial perspective, photorealistic --ar 3:2 --v 6 --q 2', resultat: 'Rendus architecturaux photoréalistes utilisables pour présenter des concepts à des clients.' },
    ],
    prix: [
      { plan: 'Basic', prix: '10 $/mois', features: ['200 générations/mois', 'Accès galerie personnelle', '3 jobs simultanés', 'Mode rapide limité'] },
      { plan: 'Standard', prix: '30 $/mois', features: ['Générations illimitées (relax)', '15h GPU mode rapide', 'Mode furtif non inclus', 'Accès général'], highlighted: true },
      { plan: 'Pro', prix: '60 $/mois', features: ['Tout Standard', '30h GPU mode rapide', 'Mode furtif inclus', 'Images privées par défaut'] },
      { plan: 'Mega', prix: '120 $/mois', features: ['Tout Pro', '60h GPU mode rapide', 'Priorité maximale', 'Pour usage intensif'] },
    ],
    conseils: [
      'Décrivez toujours en anglais — les résultats sont significativement meilleurs qu\'en français.',
      'Utilisez des références d\'artistes pour guider le style : "in the style of Moebius", "Studio Ghibli aesthetic".',
      'Le paramètre --no permet d\'exclure des éléments : "--no text, watermark, blur".',
      'Créez votre propre serveur Discord privé pour organiser vos générations par projet.',
      'Utilisez /describe sur une image existante pour obtenir un prompt à partir d\'une image que vous aimez.',
    ],
    alternatives: ['dalle-3', 'canva-ai', 'runway-ml'],
  },

  'dalle-3': {
    demarrage: [
      { etape: 1, titre: 'Accéder via ChatGPT', description: 'DALL-E 3 est intégré à ChatGPT Plus et l\'API OpenAI. Avec ChatGPT Plus, tapez simplement ce que vous voulez créer.' },
      { etape: 2, titre: 'Ou via l\'API OpenAI', description: 'Créez un compte sur platform.openai.com, ajoutez un moyen de paiement et utilisez l\'API Images avec le modèle "dall-e-3".' },
      { etape: 3, titre: 'Premier prompt', description: 'Décrivez votre image en détail. DALL-E 3 améliore automatiquement votre prompt — vous pouvez lui demander de montrer le prompt amélioré.' },
    ],
    utilisation: [
      { titre: 'Génération dans ChatGPT', description: 'Décrivez votre image en langage naturel, en français. ChatGPT traduit et optimise automatiquement votre description pour DALL-E 3.', astuce: 'Ajoutez "Montre-moi le prompt exact utilisé" pour apprendre à écrire de meilleurs prompts.' },
      { titre: 'Formats et styles', description: 'Spécifiez le format (carré, paysage, portrait), le style (naturel ou vivid) et le type d\'image (photo, illustration, peinture).', astuce: 'Style "natural" pour le réalisme, "vivid" pour les images plus dramatiques et créatives.' },
      { titre: 'Variations de concepts', description: 'Demandez plusieurs versions d\'une même idée avec des variations de style, couleur ou composition pour explorer des directions créatives.', astuce: 'Demandez "Génère 3 versions de ce logo avec des styles différents" dans ChatGPT.' },
      { titre: 'Via API', description: 'Intégrez DALL-E 3 dans vos applications avec l\'API OpenAI. Paramètres : model, prompt, n (1 seule image), size, quality (standard/hd).', astuce: 'Qualité "hd" double le prix mais améliore significativement les détails fins.' },
    ],
    exemples: [
      { titre: 'Image pour article de blog', prompt: 'Crée une illustration pour un article sur l\'intelligence artificielle dans l\'éducation. Style : moderne et optimiste, couleurs bleues et vertes, personnages diversifiés, format paysage 16:9.', resultat: 'Illustration professionnelle prête à l\'emploi, sans droits d\'auteur, adaptée à la publication web.' },
      { titre: 'Logo concept', prompt: 'Génère un logo pour une startup fintech appelée "Nexo". Style minimaliste, couleurs violet et or, symbole représentant la croissance et la technologie financière.', resultat: 'Plusieurs concepts de logo utilisables comme base de travail pour un designer ou directement.' },
      { titre: 'Mockup produit', prompt: 'Photo réaliste d\'une tasse à café blanche avec le logo [description] sur une table en bois, éclairage studio naturel, style lifestyle minimaliste, fond blanc.', resultat: 'Mockup produit photoréaliste utilisable pour e-commerce ou présentation client.' },
    ],
    prix: [
      { plan: 'Via ChatGPT Plus', prix: '20 $/mois', features: ['Inclus dans ChatGPT Plus', 'Usage limité/jour', 'Interface simple', 'Pas de paramètres avancés'] },
      { plan: 'API Standard', prix: '0,04 $/image', features: ['1024×1024 standard', 'Intégration dans apps', 'Paramètres complets', 'Facturation à l\'usage'], highlighted: true },
      { plan: 'API HD', prix: '0,08 $/image', features: ['1024×1024 haute définition', 'Détails supérieurs', '1792×1024 ou 1024×1792', 'Pour usage professionnel'] },
    ],
    conseils: [
      'DALL-E 3 comprend très bien le texte dans les images — utile pour créer des affiches ou visuels avec messages.',
      'Soyez très descriptif sur l\'éclairage : "éclairage studio doux", "lumière dorée au coucher du soleil", "néons violets".',
      'Combinez avec ChatGPT : demandez à ChatGPT d\'écrire un prompt DALL-E optimisé avant de générer.',
      'Pour la cohérence visuelle sur plusieurs images, réutilisez exactement le même prompt de style.',
      'DALL-E 3 refuse les visages de personnalités réelles — utilisez des descriptions génériques.',
    ],
    alternatives: ['midjourney', 'canva-ai', 'runway-ml'],
  },

  'runway-ml': {
    demarrage: [
      { etape: 1, titre: 'Créer un compte', description: 'Rendez-vous sur runwayml.com et créez un compte gratuit. Vous recevez 125 crédits pour tester les fonctionnalités.' },
      { etape: 2, titre: 'Choisir un outil', description: 'Runway propose Gen-2 (texte/image vers vidéo), l\'éditeur vidéo IA, la suppression d\'arrière-plan et bien d\'autres. Commencez par Gen-2.' },
      { etape: 3, titre: 'Générer votre première vidéo', description: 'Cliquez sur "Gen-2", décrivez votre scène en anglais ou uploadez une image de référence, et lancez la génération (4 secondes de vidéo).' },
    ],
    utilisation: [
      { titre: 'Gen-2 : texte vers vidéo', description: 'Décrivez une scène en anglais et Runway génère une vidéo de 4-16 secondes. Précisez le mouvement de caméra, l\'ambiance et le style.', astuce: 'Ajoutez des descripteurs de mouvement : "slow zoom in", "camera panning left", "dolly shot".' },
      { titre: 'Gen-2 : image vers vidéo', description: 'Uploadez une image et Runway l\'anime. Parfait pour donner vie à des illustrations, photos ou créations DALL-E/Midjourney.', astuce: 'Combinez Midjourney pour l\'image et Runway pour l\'animation — duo créatif puissant.' },
      { titre: 'Suppression d\'arrière-plan vidéo', description: 'L\'outil "Remove Background" supprime l\'arrière-plan des vidéos frame par frame. Résultats bien supérieurs aux logiciels traditionnels.', astuce: 'Fonctionne mieux avec un contraste élevé entre le sujet et le fond.' },
      { titre: 'Éditeur vidéo IA', description: 'Éditez vos vidéos en décrivant ce que vous voulez changer. Inpainting vidéo pour supprimer des objets, recolorer des zones ou modifier des éléments.', astuce: 'Utilisez l\'Inpainting pour effacer des logos, panneaux ou personnes non souhaitées.' },
    ],
    exemples: [
      { titre: 'Vidéo publicitaire concept', prompt: 'A sleek electric car driving through a futuristic city at night, neon reflections on wet streets, cinematic lighting, slow motion, 4K quality --motion 5', resultat: 'Clip de 4 secondes photoréaliste utilisable comme teaser publicitaire ou présentation concept.' },
      { titre: 'Animation de logo', prompt: 'Uploader une image du logo. "Animate this logo with a gentle zoom in and golden light particles floating around it, dark background, premium feel."', resultat: 'Logo animé en 4 secondes, prêt pour une intro de vidéo YouTube ou présentation.' },
      { titre: 'Illustration animée', prompt: 'Image générée par Midjourney d\'un paysage. "Bring this landscape to life with gentle wind in the trees, moving clouds, and rippling water."', resultat: 'Scène naturelle animée de façon subtile et réaliste, parfaite pour vidéos de fond ou méditation.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['125 crédits offerts', 'Accès à tous les outils', 'Vidéos en 720p', 'Watermark Runway'] },
      { plan: 'Standard', prix: '12 $/mois', features: ['625 crédits/mois', '720p sans watermark', 'Gen-2 accès complet', 'Stockage 100 Go'], highlighted: true },
      { plan: 'Pro', prix: '28 $/mois', features: ['2250 crédits/mois', '4K upscaling', 'Tous les outils IA', 'Stockage 500 Go'] },
      { plan: 'Unlimited', prix: '76 $/mois', features: ['Crédits illimités (relax)', 'Tout Pro', 'Génération prioritaire', 'Usage commercial illimité'] },
    ],
    conseils: [
      'Les vidéos les plus réussies avec Runway partent d\'une image de référence de qualité — investissez dans le visuel de base.',
      'Paramètre "motion" : valeur basse (1-3) pour des mouvements subtils, haute (7-10) pour des changements dramatiques.',
      'Utilisez le paramètre "camera motion" pour contrôler les mouvements de caméra plutôt que les mouvements dans la scène.',
      'Les vidéos de 4 secondes consomment 5 crédits, 16 secondes en consomment 20 — planifiez vos générations.',
      'Pour les projets professionnels, combinez Runway avec un logiciel de montage (Premiere, DaVinci) pour l\'assemblage final.',
    ],
    alternatives: ['heygen', 'synthesia', 'descript'],
  },

  'elevenlabs': {
    demarrage: [
      { etape: 1, titre: 'Créer un compte', description: 'Rendez-vous sur elevenlabs.io, créez un compte gratuit. Vous obtenez 10 000 caractères/mois pour tester.' },
      { etape: 2, titre: 'Choisir une voix', description: 'Parcourez la bibliothèque de voix dans Voice Library. Filtrez par langue, genre, âge et style. Testez avant de valider.' },
      { etape: 3, titre: 'Générer de l\'audio', description: 'Dans Text to Speech, collez votre texte, sélectionnez une voix et ajustez la stabilité/clarté. Cliquez Generate.' },
    ],
    utilisation: [
      { titre: 'Text to Speech', description: 'Convertissez n\'importe quel texte en audio naturel dans plus de 29 langues. Contrôlez la stabilité, la clarté et l\'exagération du style.', astuce: 'Stabilité à 60-70% pour des voix narratives, 40-50% pour plus d\'expressivité émotionnelle.' },
      { titre: 'Voice Cloning', description: 'Clonez une voix avec seulement 1-3 minutes d\'audio source. La voix clonée est utilisable immédiatement dans tous les outils.', astuce: 'Enregistrez dans un environnement calme avec un micro de qualité pour les meilleurs résultats de clonage.' },
      { titre: 'Voice Design', description: 'Décrivez la voix que vous voulez et l\'IA la génère. "Voix féminine grave, britannique, 40 ans, professionnelle et chaleureuse".', astuce: 'Générez plusieurs fois avec le même prompt — les résultats varient, gardez le meilleur.' },
      { titre: 'Dubbing', description: 'Uploadez une vidéo et traduisez-la automatiquement dans une autre langue en gardant la voix originale et le timing des lèvres.', astuce: 'Fonctionne mieux sur des vidéos avec un seul locuteur clairement audible.' },
    ],
    exemples: [
      { titre: 'Voix off pour vidéo', prompt: 'Texte : "Notre solution révolutionne la façon dont les équipes collaborent. En 3 clics, centralisez vos projets et augmentez votre productivité de 40%." Voix : professionnelle, masculine, française, enthousiaste.', resultat: 'Fichier MP3 de voix off prêt à intégrer dans une vidéo de présentation ou publicité.' },
      { titre: 'Podcast IA', prompt: 'Script de 5 minutes sur l\'histoire de l\'intelligence artificielle, 2 voix (interviewer/interviewé), alternance naturelle, ton décontracté mais éducatif.', resultat: 'Épisode de podcast complet avec deux voix distinctes et naturelles, sans enregistrement réel.' },
      { titre: 'Narration de livre', prompt: 'Extrait d\'un roman. Voix féminine chaleureuse, rythme posé, légère emphase sur les dialogues, style audiobook professionnel.', resultat: 'Narration de qualité audiobook, indistinguable d\'un enregistrement humain professionnel.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['10 000 caractères/mois', '3 voix personnalisées', 'Voix standards', 'Usage non commercial'] },
      { plan: 'Starter', prix: '5 $/mois', features: ['30 000 caractères/mois', '10 voix clonées', 'Usage commercial', 'API access'] },
      { plan: 'Creator', prix: '22 $/mois', features: ['100 000 caractères/mois', '30 voix clonées', 'Dubbing 3h/mois', 'Voice Design'], highlighted: true },
      { plan: 'Pro', prix: '99 $/mois', features: ['500 000 caractères/mois', '160 voix clonées', 'Dubbing 25h/mois', 'Priorité génération'] },
    ],
    conseils: [
      'Pour les scripts longs, découpez en paragraphes de 800-1000 caractères pour plus de cohérence vocale.',
      'Ajoutez des pauses avec des virgules ou des points de suspension pour un rendu plus naturel.',
      'Les voix "Eleven Multilingual v2" sont les meilleures pour le français — privilégiez-les.',
      'Sauvegardez vos paramètres de voix favoris dans des presets pour une cohérence entre vos projets.',
      'Pour le clonage, enregistrez avec des phrases variées incluant des questions, exclamations et phrases déclaratives.',
    ],
    alternatives: ['heygen', 'synthesia', 'descript'],
  },

  'github-copilot': {
    demarrage: [
      { etape: 1, titre: 'S\'abonner', description: 'Rendez-vous sur github.com/features/copilot. Gratuit pour les étudiants et projets open source, 10 $/mois sinon. Connectez votre compte GitHub.' },
      { etape: 2, titre: 'Installer l\'extension', description: 'Dans VS Code, cherchez "GitHub Copilot" dans les extensions et installez. Connectez-vous avec votre compte GitHub pour activer.' },
      { etape: 3, titre: 'Activer Copilot Chat', description: 'Installez aussi l\'extension "GitHub Copilot Chat" pour accéder à l\'assistant conversationnel directement dans VS Code.' },
    ],
    utilisation: [
      { titre: 'Complétion automatique', description: 'Copilot suggère du code en temps réel pendant que vous tapez. Appuyez sur Tab pour accepter, Échap pour refuser, Alt+] pour la suggestion suivante.', astuce: 'Écrivez un commentaire décrivant ce que vous voulez faire — Copilot génère le code correspondant.' },
      { titre: 'Copilot Chat', description: 'Ouvrez le panneau Chat (Ctrl+Shift+I) pour poser des questions, déboguer du code ou générer des tests unitaires en langage naturel.', astuce: 'Sélectionnez du code avant d\'ouvrir Chat — Copilot le prend automatiquement en contexte.' },
      { titre: 'Génération de tests', description: 'Sélectionnez une fonction, ouvrez Chat et tapez "/tests" pour générer automatiquement des tests unitaires complets.', astuce: 'Demandez "génère des tests edge cases" pour des tests plus complets et robustes.' },
      { titre: 'Explication de code', description: 'Sélectionnez du code complexe et tapez "/explain" dans Chat pour obtenir une explication détaillée ligne par ligne.', astuce: 'Utilisez /explain sur du code legacy ou d\'une bibliothèque tierce pour comprendre rapidement.' },
    ],
    exemples: [
      { titre: 'Générer une fonction', prompt: '// Fonction qui prend un tableau de produits avec {nom, prix, quantite} et retourne le total de la commande avec remise de 10% si > 100€\nfunction calculerTotal(', resultat: 'Copilot complète la fonction entière avec la logique, la gestion des cas limites et les types TypeScript.' },
      { titre: 'Déboguer une erreur', prompt: 'Dans Copilot Chat : "Ce code retourne undefined au lieu d\'un tableau. Pourquoi et comment corriger ?" [Coller le code]', resultat: 'Explication précise de la cause du bug (souvent une fonction async manquante) avec correction appliquée.' },
      { titre: 'Convertir du code', prompt: 'Dans Copilot Chat : "Convertis cette classe JavaScript en TypeScript avec tous les types correctement annotés." [Coller la classe]', resultat: 'Version TypeScript complète avec interfaces, types génériques et annotations JSDoc.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['Étudiants & open source', '2000 complétions/mois', 'Chat limité', 'Vérification par GitHub'] },
      { plan: 'Individual', prix: '10 $/mois', features: ['Complétions illimitées', 'Chat illimité', 'Multi-IDE support', 'Filtrage de code dupliqué'], highlighted: true },
      { plan: 'Business', prix: '19 $/user/mois', features: ['Tout Individual', 'Politique d\'organisation', 'Audit logs', 'Données non utilisées'] },
      { plan: 'Enterprise', prix: '39 $/user/mois', features: ['Tout Business', 'Fine-tuning sur votre code', 'Knowledge bases custom', 'Support dédié'] },
    ],
    conseils: [
      'Écrivez des commentaires clairs avant chaque fonction — Copilot les utilise pour comprendre votre intention.',
      'Utilisez Copilot pour la "première ébauche" de code boilerplate et concentrez-vous sur la logique métier.',
      'La commande /fix dans Chat est très efficace pour corriger des erreurs TypeScript ou ESLint.',
      'Copilot est moins fiable pour les APIs très récentes — vérifiez toujours la documentation officielle.',
      'Configurez .copilotignore (comme .gitignore) pour exclure les fichiers sensibles de l\'analyse.',
    ],
    alternatives: ['cursor', 'codeium', 'chatgpt'],
  },

  'cursor': {
    demarrage: [
      { etape: 1, titre: 'Télécharger Cursor', description: 'Rendez-vous sur cursor.sh et téléchargez l\'éditeur. Cursor est basé sur VS Code — toutes vos extensions VS Code sont compatibles.' },
      { etape: 2, titre: 'Importer votre config VS Code', description: 'Au premier lancement, Cursor propose d\'importer vos extensions, thèmes et paramètres VS Code en un clic.' },
      { etape: 3, titre: 'Configurer le modèle IA', description: 'Par défaut, Cursor utilise GPT-4 et Claude 3.5. Dans Settings > AI, vous pouvez ajouter vos propres clés API pour utiliser d\'autres modèles.' },
    ],
    utilisation: [
      { titre: 'Cmd+K : édition inline', description: 'Sélectionnez du code et appuyez sur Cmd+K (Ctrl+K sur Windows) pour modifier le code sélectionné en langage naturel directement dans l\'éditeur.', astuce: 'Très efficace pour des refactorisations précises : "Extrais cette logique en fonction séparée nommée validateEmail".' },
      { titre: 'Cmd+L : chat avec le codebase', description: 'Ouvrez le panneau Chat pour poser des questions sur l\'ensemble de votre codebase. Cursor indexe tous vos fichiers pour des réponses contextuelles.', astuce: 'Utilisez @fichier pour référencer un fichier spécifique : "@utils.ts Comment puis-je utiliser cette fonction ?"' },
      { titre: 'Composer : éditions multi-fichiers', description: 'Cmd+Shift+I ouvre le Composer qui peut modifier plusieurs fichiers simultanément selon vos instructions. Idéal pour les grosses fonctionnalités.', astuce: 'Soyez précis sur la portée : "Ajoute l\'authentification JWT dans auth.ts et mets à jour middleware.ts".' },
      { titre: 'Contexte @', description: 'Mentionnez @web, @docs, @fichier ou @codebase dans vos messages pour donner du contexte précis à l\'IA.', astuce: '@web permet à Cursor de chercher la documentation en ligne pour des APIs récentes.' },
    ],
    exemples: [
      { titre: 'Générer une feature complète', prompt: 'Cmd+Shift+I : "Crée un système d\'authentification avec JWT. Inclus : route /login, middleware de vérification, stockage en cookie httpOnly, et refresh token. Stack : Express + TypeScript."', resultat: 'Génère auth.ts, middleware.ts et les types correspondants avec une logique complète et sécurisée.' },
      { titre: 'Refactoriser du code legacy', prompt: 'Sélectionner 200 lignes de code. Cmd+K : "Refactorise en utilisant des fonctions pures, ajoute des types TypeScript et améliore la lisibilité sans changer le comportement."', resultat: 'Code refactorisé en place avec types, fonctions séparées et commentaires — diff visible avant application.' },
      { titre: 'Déboguer avec contexte', prompt: 'Chat : "Mon API retourne 500 sur POST /users. Voici les logs : [coller les logs]. @models/user.ts @routes/users.ts Qu\'est-ce qui pourrait causer ça ?"', resultat: 'Diagnostic précis avec la ligne exacte du problème et la correction suggérée avec explication.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['2 semaines Pro offertes', '50 utilisations slow models', '2000 complétions', 'Chat limité'] },
      { plan: 'Pro', prix: '20 $/mois', features: ['500 requêtes fast models', 'Complétions illimitées', 'Claude & GPT-4', 'Tous les modèles'], highlighted: true },
      { plan: 'Business', prix: '40 $/user/mois', features: ['Tout Pro', 'Pas d\'entraînement sur données', 'Administration équipe', 'SSO & facturation centralisée'] },
    ],
    conseils: [
      'Ouvrez uniquement les fichiers pertinents pour votre tâche — Cursor est plus précis avec moins de contexte.',
      'Utilisez .cursorrules à la racine de votre projet pour définir des règles de coding style permanentes.',
      'Le mode Agent dans Composer peut exécuter du code, lire des fichiers et itérer automatiquement — idéal pour les tâches complexes.',
      'Combinez @web avec les questions sur des frameworks récents (Next.js 15, etc.) pour des réponses à jour.',
      'Utilisez "Review Changes" dans Composer avant d\'accepter pour vérifier chaque modification proposée.',
    ],
    alternatives: ['github-copilot', 'chatgpt', 'codeium'],
  },

  'jasper-ai': {
    demarrage: [
      { etape: 1, titre: 'Créer un compte', description: 'Rendez-vous sur jasper.ai et démarrez un essai gratuit de 7 jours. Aucune carte bancaire requise pour l\'essai.' },
      { etape: 2, titre: 'Configurer votre marque', description: 'Dans Brand Voice, ajoutez le ton de votre marque, vos produits et votre audience cible. Jasper adaptera tout le contenu en conséquence.' },
      { etape: 3, titre: 'Choisir un template', description: 'Jasper propose 50+ templates (article de blog, publicité Facebook, email marketing…). Sélectionnez le format adapté à votre besoin.' },
    ],
    utilisation: [
      { titre: 'Brand Voice', description: 'Définissez la voix de votre marque en important des exemples de contenus existants. Jasper analyse et reproduit votre style de façon cohérente.', astuce: 'Importez 3-5 articles ou emails existants pour que Jasper capture parfaitement votre ton.' },
      { titre: 'Long-form editor', description: 'L\'éditeur long format permet de créer des articles, e-books ou whitepapers de A à Z avec des commandes IA inline.', astuce: 'Utilisez le mode "Boss Mode" pour dicter des instructions précises au fil de la rédaction.' },
      { titre: 'Templates marketing', description: '50+ templates pour tous les formats : ads Facebook/Google, emails, descriptions produits, posts LinkedIn, etc.', astuce: 'Les templates "AIDA" et "PAS" sont les plus efficaces pour les textes de vente.' },
      { titre: 'Campagnes multicanal', description: 'Créez des campagnes complètes cohérentes sur tous les canaux depuis un seul brief : email, social, landing page, ads.', astuce: 'Partez d\'un brief de campagne unique et demandez à Jasper de décliner sur chaque canal.' },
    ],
    exemples: [
      { titre: 'Article de blog SEO', prompt: 'Template Blog Post Intro. Sujet : "Comment réduire ses impôts en tant que freelance en France". Ton : expert mais accessible. Mot-clé principal : "optimisation fiscale freelance". 1500 mots.', resultat: 'Article structuré avec intro accrocheuse, H2/H3 optimisés SEO, exemples concrets et CTA.' },
      { titre: 'Email de bienvenue', prompt: 'Template Welcome Email. Produit : logiciel de gestion de projet pour PME. Bénéfice principal : gain de temps 3h/semaine. Ton : chaleureux et professionnel. CTA : "Démarrer le tutoriel".', resultat: 'Email de bienvenue personnalisé avec subject line, corps structuré et CTA convaincant.' },
      { titre: 'Pub Facebook', prompt: 'Template Facebook Ad. Audience : femmes 25-45 ans, entrepreneures. Produit : formation en ligne marketing digital. Bénéfice : doubler son CA en 3 mois. Budget test : 20€/jour.', resultat: '3 variantes de publicité avec accroches différentes (curiosité, urgence, preuve sociale) pour A/B test.' },
    ],
    prix: [
      { plan: 'Creator', prix: '49 $/mois', features: ['1 seat', 'Brand Voice', 'Long-form editor', 'Templates complets', 'Chrome extension'] },
      { plan: 'Teams', prix: '125 $/mois', features: ['3 seats inclus', 'Brand Voices multiples', 'Campagnes', 'Analytics', 'Collaboration'], highlighted: true },
      { plan: 'Business', prix: 'Sur devis', features: ['Seats illimités', 'Custom AI models', 'SSO', 'Account manager dédié'] },
    ],
    conseils: [
      'Alimentez le Brand Voice avec vos meilleurs contenus existants — la qualité de l\'output dépend de la qualité des exemples.',
      'Utilisez toujours la fonctionnalité "Improve" pour affiner un premier jet plutôt que de tout régénérer.',
      'Créez des templates personnalisés pour vos formats récurrents et économisez du temps chaque semaine.',
      'Jasper est très fort sur les anglicismes — vérifiez toujours les expressions françaises dans les contenus localisés.',
      'Combinez Jasper avec Surfer SEO (intégration native) pour optimiser le référencement dès la rédaction.',
    ],
    alternatives: ['copy-ai', 'chatgpt', 'claude-ai'],
  },

  'copy-ai': {
    demarrage: [
      { etape: 1, titre: 'Créer un compte gratuit', description: 'Rendez-vous sur copy.ai et créez un compte. Le plan gratuit offre 2000 mots/mois — suffisant pour tester.' },
      { etape: 2, titre: 'Configurer le brand voice', description: 'Ajoutez les informations de votre marque dans les paramètres : nom, description, ton, audience cible.' },
      { etape: 3, titre: 'Utiliser les Workflows', description: 'Les Workflows automatisent des séquences de création de contenu. Commencez par un workflow "Blog Post" ou "Social Media Pack".' },
    ],
    utilisation: [
      { titre: 'Workflows automatisés', description: 'Les Workflows enchaînent plusieurs étapes de génération automatiquement : brief → plan → rédaction → optimisation.', astuce: 'Le Workflow "5-Day Email Sequence" génère une séquence d\'emails complète depuis un seul brief produit.' },
      { titre: 'Infobase', description: 'Stockez vos informations produit, personas, guidelines dans l\'Infobase. Elles sont automatiquement utilisées dans toutes vos générations.', astuce: 'Plus vous alimentez l\'Infobase, plus les contenus sont pertinents et cohérents avec votre marque.' },
      { titre: 'Sales Copy', description: 'Copy.ai excelle sur les textes de vente : cold emails, séquences LinkedIn, proposals, pages de vente.', astuce: 'Utilisez le template "Pain-Agitate-Solution" pour les emails de prospection B2B.' },
      { titre: 'Bulk generation', description: 'Uploadez un CSV et générez des centaines de descriptions produits ou variations de textes en masse.', astuce: 'Parfait pour les e-commerçants avec de grands catalogues produits.' },
    ],
    exemples: [
      { titre: 'Séquence email de vente', prompt: 'Workflow "5-Email Sales Sequence". Produit : SaaS de facturation pour freelances. Problème résolu : perte de 3h/semaine en admin. CTA final : démo 30min. Prix : 29€/mois.', resultat: '5 emails progressifs (découverte → éducation → objections → urgence → dernier appel) prêts à importer.' },
      { titre: 'Description produit e-commerce', prompt: 'Template Product Description. Produit : chaise de bureau ergonomique "ErgoMax". Public : professionnels en télétravail. Bénéfices : dos sans douleur, concentration améliorée. 150 mots.', resultat: 'Description SEO-friendly avec bénéfices mis en avant, caractéristiques techniques et CTA naturel.' },
      { titre: 'Post LinkedIn viral', prompt: 'Template LinkedIn Post. Insight : "J\'ai analysé 100 cold emails qui ont obtenu 40%+ de taux d\'ouverture. Voici les 5 points communs." Format : storytelling + liste.', resultat: 'Post structuré avec accroche forte, développement en liste et question d\'engagement finale.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['2000 mots/mois', '1 seat', 'Templates de base', 'Chat IA inclus'] },
      { plan: 'Starter', prix: '36 $/mois', features: ['Mots illimités', '1 seat', 'Workflows', 'Brand Voice', 'Infobase 5 docs'], highlighted: true },
      { plan: 'Advanced', prix: '186 $/mois', features: ['Mots illimités', '5 seats', 'API access', 'Infobase illimitée', 'Workflows custom'] },
    ],
    conseils: [
      'Alimentez l\'Infobase avec vos buyer personas détaillés — les textes de vente s\'en trouvent radicalement améliorés.',
      'Copy.ai est particulièrement fort sur le copywriting anglophone — pour le français, retravaillez systématiquement les sorties.',
      'Utilisez la génération en masse (bulk) pour tester rapidement de nombreuses accroches avant de choisir.',
      'Les Workflows sont la vraie force de Copy.ai — investissez du temps pour en créer des personnalisés.',
      'Combinez avec un outil de gestion de contenu (Notion, Airtable) pour organiser vos générationsde contenu.',
    ],
    alternatives: ['jasper-ai', 'chatgpt', 'grammarly-ai'],
  },

  'grammarly-ai': {
    demarrage: [
      { etape: 1, titre: 'Installer l\'extension', description: 'Rendez-vous sur grammarly.com et installez l\'extension Chrome/Firefox. Elle s\'active automatiquement sur tous les champs texte web.' },
      { etape: 2, titre: 'Ou utiliser l\'application', description: 'Téléchargez Grammarly Desktop (Mac/Windows) pour corriger des documents Word, Google Docs et autres applications de bureau.' },
      { etape: 3, titre: 'Configurer votre profil', description: 'Définissez vos objectifs (audience, formalité, domaine) pour que Grammarly adapte ses suggestions à votre contexte.' },
    ],
    utilisation: [
      { titre: 'Correction en temps réel', description: 'Grammarly souligne les erreurs en rouge (grammaire), bleu (clarté) et vert (style). Cliquez sur chaque suggestion pour l\'appliquer.', astuce: 'Utilisez "Accept All" uniquement après avoir lu chaque suggestion — certaines changent le sens.' },
      { titre: 'GrammarlyGO (IA générative)', description: 'Avec le plan Premium, GrammarlyGO peut réécrire, raccourcir, allonger ou changer le ton de n\'importe quel texte.', astuce: 'Essayez "Rephrase for clarity" sur les phrases complexes avant de chercher à les reformuler manuellement.' },
      { titre: 'Score de lisibilité', description: 'Le panneau latéral affiche un score de lisibilité et des métriques (longueur des phrases, mots complexes). Visez 60+ pour un contenu web.', astuce: 'Un score <40 signifie que vos phrases sont trop longues — fragmentez pour améliorer la lisibilité.' },
      { titre: 'Style guide d\'entreprise', description: 'Avec Business, créez des règles de style personnalisées : terminologie approuvée, formules à éviter, ton de marque.', astuce: 'Très utile pour les équipes marketing — assure la cohérence de toutes les communications.' },
    ],
    exemples: [
      { titre: 'Améliorer un email professionnel', prompt: 'Coller l\'email dans Grammarly Editor. Cliquer "Improve it" avec objectifs : Audience professionnelle, ton formel, domaine business. Demander "Make it more concise".', resultat: 'Email révisé avec fautes corrigées, phrases raccourcies, ton professionnel unifié et clarté améliorée.' },
      { titre: 'Vérifier un rapport', prompt: 'Uploader un document Word de 20 pages dans Grammarly. Analyser les métriques : score global, principales catégories d\'erreurs, lisibilité.', resultat: 'Rapport annoté avec 40+ suggestions groupées par catégorie, priorité aux erreurs critiques.' },
      { titre: 'Réecrire pour le web', prompt: 'Texte académique à adapter pour un article de blog. GrammarlyGO : "Rewrite this for a general audience, make it engaging and scannable with shorter paragraphs."', resultat: 'Version web avec paragraphes courts, langage accessible, phrases d\'accroche par section.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['Corrections grammaire/orthographe', 'Extension navigateur', 'Application desktop', 'Suggestions basiques'] },
      { plan: 'Premium', prix: '12 $/mois', features: ['Tout Gratuit', 'GrammarlyGO', 'Suggestions style avancées', 'Détection ton', 'Score de lisibilité'], highlighted: true },
      { plan: 'Business', prix: '15 $/user/mois', features: ['Tout Premium', 'Style guide équipe', 'Tableau de bord admin', 'Statistiques d\'utilisation', 'Facturation centralisée'] },
    ],
    conseils: [
      'Configurez vos objectifs spécifiquement pour chaque type de document — les suggestions diffèrent entre un email et un rapport.',
      'Utilisez Grammarly pour l\'anglais professionnel plutôt que le français — ses capacités sont bien supérieures en anglais.',
      'La détection de plagiat (Premium) est utile avant de publier du contenu généré par IA.',
      'Désactivez les suggestions de style pour les textes créatifs où vous voulez conserver votre voix.',
      'L\'extension Gmail est particulièrement utile — elle analyse vos emails avant envoi directement dans l\'interface.',
    ],
    alternatives: ['chatgpt', 'claude-ai', 'copy-ai'],
  },

  'deepl': {
    demarrage: [
      { etape: 1, titre: 'Accéder à DeepL', description: 'Rendez-vous sur deepl.com. La version gratuite est utilisable directement dans le navigateur — aucun compte nécessaire pour commencer.' },
      { etape: 2, titre: 'Ou installer DeepL Desktop', description: 'Téléchargez l\'application desktop pour Windows/Mac. Elle permet de traduire en appuyant sur Ctrl+C+C dans n\'importe quelle application.' },
      { etape: 3, titre: 'S\'abonner pour l\'API', description: 'Pour les intégrations et volumes importants, créez un compte sur deepl.com/pro et obtenez une clé API. 500 000 caractères/mois gratuits avec DeepL API Free.' },
    ],
    utilisation: [
      { titre: 'Traduction de texte', description: 'Collez ou tapez jusqu\'à 5000 caractères (gratuit) ou illimité (Pro) dans l\'interface. DeepL détecte automatiquement la langue source.', astuce: 'Pour les textes spécialisés, précisez le domaine en commentaire au début du texte.' },
      { titre: 'Traduction de fichiers', description: 'Uploadez des PDF, Word, PowerPoint ou TXT. DeepL traduit en conservant la mise en forme originale parfaitement.', astuce: 'Pour les PDF scannés, convertissez d\'abord en Word avec Adobe Acrobat avant de traduire.' },
      { titre: 'DeepL Write', description: 'Outil distinct qui réécrit et améliore vos textes en anglais ou allemand. Idéal pour perfectionner des textes dans votre langue maternelle.', astuce: 'Utilisez DeepL Write pour améliorer un brouillon avant de le traduire — la qualité de traduction augmente.' },
      { titre: 'Glossaire personnalisé', description: 'Créez un glossaire de termes spécifiques à votre secteur. DeepL utilisera systématiquement vos traductions préférées.', astuce: 'Essentiel pour les entreprises avec une terminologie technique ou des noms de marque à ne pas traduire.' },
    ],
    exemples: [
      { titre: 'Localiser un site web', prompt: 'Copier-coller les textes de landing page (CTA, titres, descriptions). Langue source : EN, cible : FR. Glossaire : "free trial" → "essai gratuit", "dashboard" → "tableau de bord".', resultat: 'Textes traduits avec le glossaire respecté, tonalité marketing préservée, prêts à intégrer.' },
      { titre: 'Traduire des contrats', prompt: 'Uploader un contrat de prestation en anglais (PDF, 15 pages). Traduire en français. Vérifier les clauses juridiques clés.', resultat: 'Contrat traduit en conservant la mise en forme, numéros d\'articles et structure légale.' },
      { titre: 'Adapter une communication internationale', prompt: 'Email de négociation commerciale en français. Traduire en anglais, allemand et espagnol pour envoi simultané à 3 partenaires européens.', resultat: '3 versions adaptées culturellement, pas juste traduites — les nuances de négociation sont préservées.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['5000 caractères/traduction', '3 fichiers/mois', 'Toutes les langues', 'Qualité complète'] },
      { plan: 'Pro Starter', prix: '8,74 €/mois', features: ['Texte illimité', '5 fichiers/mois', 'Glossaires', 'DeepL Write'], highlighted: true },
      { plan: 'Pro Advanced', prix: '28,74 €/mois', features: ['Tout Starter', 'Fichiers illimités', 'API 500K chars', 'Équipe 2 users'] },
      { plan: 'Pro Ultimate', prix: '57,49 €/mois', features: ['Tout Advanced', 'API illimitée', 'Équipe 3 users', 'Support prioritaire'] },
    ],
    conseils: [
      'DeepL est meilleur que Google Translate sur les langues européennes — utilisez-le pour tous vos contenus professionnels.',
      'Relisez toujours les traductions juridiques et médicales — l\'IA peut faire des erreurs sur les termes techniques.',
      'L\'astuce Ctrl+C+C (application desktop) est un game-changer — traduit n\'importe quel texte sélectionné instantanément.',
      'Créez un glossaire pour chaque client ou projet pour maintenir une cohérence terminologique.',
      'Utilisez DeepL Write en anglais pour améliorer vos emails professionnels écrits en anglais non natif.',
    ],
    alternatives: ['chatgpt', 'claude-ai', 'gemini'],
  },

  'notion-ai': {
    demarrage: [
      { etape: 1, titre: 'Activer Notion AI', description: 'Dans un espace de travail Notion existant, allez dans Settings > Plans et activez Notion AI (10 $/member/mois en sus). Ou créez un compte si vous n\'avez pas Notion.' },
      { etape: 2, titre: 'Accéder à l\'IA', description: 'Dans n\'importe quelle page Notion, tapez Espace ou cliquez sur l\'icône AI en bas de page pour ouvrir le menu IA.' },
      { etape: 3, titre: 'Essayer les actions rapides', description: 'Sélectionnez du texte et cliquez sur l\'icône AI qui apparaît pour accéder à des actions rapides : améliorer, résumer, traduire, continuer.' },
    ],
    utilisation: [
      { titre: 'Résumé de pages', description: 'Cliquez sur "Summarize" dans le menu IA pour obtenir un résumé de n\'importe quelle page ou document Notion en quelques secondes.', astuce: 'Utilisez les résumés dans les réunions pour rappeler le contenu d\'un doc sans le relire entièrement.' },
      { titre: 'Q&A sur votre workspace', description: 'Posez des questions en langage naturel sur le contenu de votre workspace : "Quelles sont nos décisions sur le projet X ?" Notion AI cherche dans tous vos docs.', astuce: 'Parfait pour retrouver des informations enfouies dans des notes de réunion ou documents anciens.' },
      { titre: 'Génération de contenu structuré', description: 'Demandez à Notion AI de créer des tableaux, listes de tâches, plans de projet ou templates directement dans votre page.', astuce: '"Crée un template de compte-rendu de réunion avec sections : présents, ordre du jour, décisions, actions."' },
      { titre: 'Traduction intégrée', description: 'Sélectionnez du texte et demandez une traduction directement dans Notion, sans copier-coller vers un autre outil.', astuce: 'Utile pour les équipes internationales — traduisez des pages entières en maintenant la structure Notion.' },
    ],
    exemples: [
      { titre: 'Rédiger un compte-rendu', prompt: 'Dans une page vide : "Crée un compte-rendu de réunion pour une réunion de lancement de projet. Participants : chef de projet, dev lead, designer. Durée : 1h. Inclus : résumé, décisions prises, actions avec responsables."', resultat: 'Template structuré avec toutes les sections, prêt à remplir pendant ou après la réunion.' },
      { titre: 'Analyser des notes brutes', prompt: 'Coller 500 mots de notes désorganisées d\'une conférence. "Organise ces notes en : points clés, insights actionnables, questions ouvertes. Format structuré avec titres."', resultat: 'Notes réorganisées, hiérarchisées et formatées en 30 secondes — prêtes à partager.' },
      { titre: 'Créer un plan de projet', prompt: '"Crée un plan de projet pour le lancement d\'une application mobile de fitness. 3 mois. Inclus : phases, milestones, ressources nécessaires, risques." Format : tableau Notion avec statuts.', resultat: 'Plan de projet complet avec phases détaillées, tableau des tâches et colonne de suivi des statuts.' },
    ],
    prix: [
      { plan: 'Notion Free + AI', prix: '10 $/mois', features: ['Notion gratuit inclus', 'AI sur toutes les pages', 'Q&A workspace', 'Résumés illimités'] },
      { plan: 'Notion Plus + AI', prix: '18 $/member/mois', features: ['Notion Plus', 'AI illimitée', 'Guests illimités', 'Analytics'], highlighted: true },
      { plan: 'Notion Business + AI', prix: '23 $/member/mois', features: ['Tout Plus', 'SAML SSO', 'Audit log', 'Workspace admin avancé'] },
    ],
    conseils: [
      'La fonction Q&A est plus utile que la recherche classique — posez des questions en langage naturel sur votre wiki.',
      'Créez des templates avec des blocs IA pré-configurés pour standardiser vos processus récurrents.',
      'Utilisez "Continue writing" sur vos brouillons pour dépasser le blocage de la page blanche.',
      'Notion AI est conscient du contexte de votre page — donnez-lui des informations de contexte au début du doc.',
      'Combinez avec les databases Notion (tableaux, boards) pour gérer des projets entiers assistés par IA.',
    ],
    alternatives: ['chatgpt', 'claude-ai', 'grammarly-ai'],
  },

  'perplexity': {
    demarrage: [
      { etape: 1, titre: 'Accéder à Perplexity', description: 'Rendez-vous sur perplexity.ai. La version gratuite est immédiatement utilisable sans inscription. Créez un compte pour sauvegarder vos recherches.' },
      { etape: 2, titre: 'Faire votre première recherche', description: 'Tapez votre question comme à un expert. Perplexity répond avec des sources citées et des liens vers les pages originales.' },
      { etape: 3, titre: 'Passer à Pro (optionnel)', description: 'Perplexity Pro (20 $/mois) débloque GPT-4, Claude et des recherches plus approfondies. Commencez par le gratuit — il couvre la plupart des besoins.' },
    ],
    utilisation: [
      { titre: 'Recherche avec sources', description: 'Chaque réponse Perplexity cite ses sources avec des numéros cliquables. Vérifiez les sources pour les informations critiques.', astuce: 'Demandez "Avec des sources académiques uniquement" pour des recherches plus fiables.' },
      { titre: 'Focus modes', description: 'Choisissez le mode : All (général), Academic (sources académiques), YouTube, Reddit, News (actualités) ou Social pour filtrer les sources.', astuce: 'Mode Reddit pour des avis utilisateurs authentiques sur des produits ou services.' },
      { titre: 'Collections', description: 'Organisez vos recherches en collections thématiques. Perplexity retient le contexte dans une même collection pour des questions de suivi.', astuce: 'Créez une collection par projet de recherche pour maintenir le fil de la veille.' },
      { titre: 'Copilot', description: 'Avec Pro, le mode Copilot pose des questions de clarification avant de répondre et fait des recherches itératives pour des questions complexes.', astuce: 'Utilisez Copilot pour des analyses multi-angles : marché, concurrence, tendances.' },
    ],
    exemples: [
      { titre: 'Veille concurrentielle', prompt: '"Quels sont les 5 principaux concurrents de [votre produit] en 2025 ? Pour chacun : fonctionnalités distinctives, tarifs, points forts et faiblesses selon les utilisateurs." Focus : Reddit + News.', resultat: 'Analyse concurrentielle actualisée avec sources réelles, avis utilisateurs et comparatif.' },
      { titre: 'Recherche de marché', prompt: '"Quelle est la taille du marché français des outils IA pour PME en 2024-2025 ? Croissance prévue, acteurs principaux, tendances. Sources académiques et rapports sectoriels."', resultat: 'Synthèse du marché avec chiffres sourcés, tendances identifiées et liens vers les rapports originaux.' },
      { titre: 'Fact-checking', prompt: '"Cette affirmation est-elle vraie : [coller l\'affirmation à vérifier] ? Donne-moi des sources primaires pour ou contre."', resultat: 'Analyse de la véracité avec sources citées, nuances et contexte nécessaire à la bonne interprétation.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['Recherches illimitées', 'GPT-3.5', 'Sources citées', '5 Copilot/jour'] },
      { plan: 'Pro', prix: '20 $/mois', features: ['GPT-4, Claude & Mistral', 'Copilot illimité', 'Upload de fichiers', 'API access 5$/mois'], highlighted: true },
      { plan: 'Enterprise', prix: 'Sur devis', features: ['Tout Pro', 'Données privées', 'SSO', 'Admin console', 'SLA garanti'] },
    ],
    conseils: [
      'Perplexity est plus fiable que ChatGPT pour les faits récents — les sources permettent de vérifier chaque information.',
      'Utilisez le mode Academic pour les recherches nécessitant des sources scientifiques et peer-reviewed.',
      'Posez des questions de suivi dans la même conversation — Perplexity retient le contexte pour approfondir.',
      'Le mode Reddit est particulièrement utile pour évaluer l\'opinion réelle des utilisateurs sur un produit.',
      'Exportez vos recherches importantes dans Notion ou un fichier pour constituer une base de connaissance.',
    ],
    alternatives: ['chatgpt', 'claude-ai', 'gemini'],
  },

  'canva-ai': {
    demarrage: [
      { etape: 1, titre: 'Créer un compte Canva', description: 'Rendez-vous sur canva.com et créez un compte gratuit avec votre email ou Google. Les fonctionnalités IA de base sont incluses.' },
      { etape: 2, titre: 'Activer Canva Pro pour l\'IA complète', description: 'Canva Pro (15 €/mois) débloque toutes les fonctionnalités IA : Magic Studio, suppression d\'arrière-plan, générateur d\'images illimité.' },
      { etape: 3, titre: 'Utiliser Magic Studio', description: 'Ouvrez n\'importe quel design et cliquez sur "Magic Studio" en bas à droite pour accéder à tous les outils IA depuis un seul panneau.' },
    ],
    utilisation: [
      { titre: 'Magic Design', description: 'Décrivez votre projet ("présentation de startup pour investisseurs, thème moderne, violet et blanc") et Canva génère un design complet en quelques secondes.', astuce: 'Générez 3-4 variantes et combinez les éléments que vous aimez dans chacune.' },
      { titre: 'Suppression d\'arrière-plan', description: 'Cliquez sur une image, puis "Edit image" > "BG Remover". Canva supprime l\'arrière-plan en 2 secondes. Résultats excellents sur les personnes.', astuce: 'Fonctionne aussi sur les logos — transformez rapidement un logo fond blanc en PNG transparent.' },
      { titre: 'Magic Write', description: 'Dans n\'importe quel champ texte, cliquez sur l\'icône crayon IA pour générer, améliorer ou reformuler du texte directement dans votre design.', astuce: 'Utilisez Magic Write pour générer des textes publicitaires adaptés au format visuel en cours.' },
      { titre: 'Text to Image', description: 'Dans un design, ajoutez un élément "AI Image" et décrivez l\'image souhaitée. Canva génère des visuels intégrés directement dans votre composition.', astuce: 'Choisissez le style "Photo" pour des visuels réalistes, "Drawing" pour des illustrations.' },
    ],
    exemples: [
      { titre: 'Créer un post Instagram', prompt: 'Magic Design : "Post Instagram pour annoncer une promotion de 30% sur une collection de vêtements été. Style : vibrant, coloré, jeune. Inclure le pourcentage de réduction en grand."', resultat: '4 designs Instagram prêts avec texte, visuels et palette adaptés, en format carré 1:1.' },
      { titre: 'Présentation d\'entreprise', prompt: 'Magic Design : "Présentation de pitch deck pour startup SaaS. 10 slides. Thème : professionnel, bleu et blanc, moderne. Inclure : problème, solution, marché, traction, équipe."', resultat: 'Présentation complète de 10 slides avec structure narrative, placeholders texte et visuels.' },
      { titre: 'Bannière LinkedIn', prompt: 'Nouveau design 1584×396. Magic Write : "Bannière LinkedIn pour consultant en transformation digitale. Message : J\'aide les PME à passer au digital. CTA : Contactez-moi." + BG Remover sur photo pro.', resultat: 'Bannière professionnelle avec photo, accroche et CTA, aux bonnes dimensions LinkedIn.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['250 000 templates', 'IA basique', '5 Go stockage', 'Téléchargement JPG/PNG'] },
      { plan: 'Pro', prix: '15 €/mois', features: ['Magic Studio complet', 'BG Remover illimité', '1 To stockage', 'Kit marque', 'Toutes les fonctionnalités IA'], highlighted: true },
      { plan: 'Teams', prix: '10 €/user/mois', features: ['Tout Pro', 'Collaboration temps réel', 'Brand Kit partagé', 'Admin centralisé', 'Minimum 2 users'] },
    ],
    conseils: [
      'Créez un Kit de marque avec vos couleurs, polices et logo — Canva les appliquera automatiquement à tous vos designs.',
      'Les "Magic Switch" permettent de redimensionner un design en 1 clic pour tous les formats (Instagram, Facebook, LinkedIn).',
      'Utilisez les templates comme base, pas comme résultat final — personnalisez toujours pour vous différencier.',
      'Background Remover + Magic Eraser ensemble permettent de créer des montages professionnels en quelques minutes.',
      'Canva for Education est gratuit pour les enseignants et étudiants avec toutes les fonctionnalités Pro.',
    ],
    alternatives: ['midjourney', 'dalle-3', 'runway-ml'],
  },

  'heygen': {
    demarrage: [
      { etape: 1, titre: 'Créer un compte', description: 'Rendez-vous sur heygen.com et créez un compte gratuit. Vous obtenez 1 crédit gratuit (environ 1 minute de vidéo).' },
      { etape: 2, titre: 'Choisir un avatar', description: 'Parcourez la bibliothèque d\'avatars IA ou créez votre propre avatar en uploadant une vidéo de vous de 2 minutes (plan Business).' },
      { etape: 3, titre: 'Créer votre première vidéo', description: 'Sélectionnez un avatar, tapez ou collez votre script, choisissez la langue et la voix. Générez en 2-3 minutes.' },
    ],
    utilisation: [
      { titre: 'Vidéos avec avatar IA', description: 'Créez des vidéos présentées par un avatar humain réaliste sans jamais filmer. Idéal pour formations, présentations produit et communications internes.', astuce: 'Choisissez un avatar qui correspond à votre audience — diversité et représentation améliorent l\'engagement.' },
      { titre: 'Avatar personnalisé', description: 'Avec le plan Business, créez un avatar à votre image en filmant 2 minutes de vidéo. HeyGen clone votre apparence et votre voix.', astuce: 'Filmez dans un environnement bien éclairé, fond neutre, regardez directement la caméra.' },
      { titre: 'Traduction vidéo (Video Translate)', description: 'Uploadez une vidéo existante et HeyGen la traduit en conservant votre voix, votre bouche synchronisée et votre apparence.', astuce: 'Fonctionnalité révolutionnaire pour localiser du contenu vidéo en 30+ langues sans re-tournage.' },
      { titre: 'Templates interactifs', description: 'Choisissez parmi des centaines de templates avec arrière-plans, animations et layouts professionnels.', astuce: 'Les templates "Explainer" et "Training" sont les plus adaptés pour la formation en entreprise.' },
    ],
    exemples: [
      { titre: 'Vidéo de formation', prompt: 'Avatar "Emma" (femme professionnelle, 35 ans). Script : guide de 3 minutes sur l\'utilisation du CRM Salesforce. Langue : français. Arrière-plan : bureau professionnel. Sous-titres activés.', resultat: 'Vidéo de formation professionnelle prête à intégrer dans votre LMS ou Notion, sans acteur ni tournage.' },
      { titre: 'Présentation produit multilingue', prompt: 'Avatar corporate masculin. Script de 90 secondes sur les fonctionnalités d\'un SaaS. Générer en FR, EN, ES, DE simultanément. Même avatar, voix et synchro lèvres adaptées.', resultat: '4 vidéos en 4 langues cohérentes, prêtes pour une campagne internationale ou un site multilingue.' },
      { titre: 'Communication CEO personnalisée', prompt: 'Avatar clone du CEO (vidéo source fournie). Message de vœux de 2 minutes pour les 500 employés. Personnalisation du prénom de chaque employé au début. Mode "Personalized Video".', resultat: '500 vidéos uniques avec le CEO "qui appelle chaque employé par son prénom" — impact émotionnel fort.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['1 crédit offert', 'Avatars standards', 'Vidéos 1 min max', 'Watermark HeyGen'] },
      { plan: 'Creator', prix: '29 $/mois', features: ['15 crédits/mois', 'Avatars premium', 'Vidéos illimitées/crédit', 'Sans watermark'], highlighted: true },
      { plan: 'Business', prix: '89 $/mois', features: ['30 crédits/mois', 'Avatar personnalisé', 'Video Translate', 'API access', 'Clonage voix'] },
      { plan: 'Enterprise', prix: 'Sur devis', features: ['Crédits illimités', 'Avatar ultra-réaliste', 'Intégrations custom', 'SLA garanti'] },
    ],
    conseils: [
      'Les scripts lus naturellement par les avatars ont des phrases courtes (15-20 mots max) avec des pauses aux virgules.',
      'Activez les sous-titres — 85% des vidéos sont regardées sans son sur les réseaux sociaux.',
      'Pour les vidéos de formation, découpez en chapitres de 2-3 minutes plutôt qu\'une seule longue vidéo.',
      'La fonction "Talking Photo" transforme n\'importe quelle photo en avatar parlant — option économique pour tester.',
      'Utilisez HeyGen pour créer des vidéos témoignages client réalistes (avec accord du client, éthiquement).',
    ],
    alternatives: ['synthesia', 'runway-ml', 'elevenlabs'],
  },

  'synthesia': {
    demarrage: [
      { etape: 1, titre: 'Créer un compte', description: 'Rendez-vous sur synthesia.io. Essai gratuit avec accès à l\'éditeur — mais les vidéos incluent un watermark. Abonnez-vous pour l\'usage professionnel.' },
      { etape: 2, titre: 'Choisir un avatar', description: 'Synthesia propose 160+ avatars IA dans des centaines de tenues et langues. Filtrez par genre, âge, style et langue.' },
      { etape: 3, titre: 'Créer une scène', description: 'Cliquez "New Video", choisissez un template ou partez de zéro. Ajoutez votre texte, sélectionnez l\'avatar et la langue, générez.' },
    ],
    utilisation: [
      { titre: 'Éditeur de slides vidéo', description: 'L\'interface ressemble à PowerPoint — chaque slide devient une scène vidéo. Ajoutez texte, images, graphiques et l\'avatar présente automatiquement.', astuce: 'Importez vos présentations PowerPoint existantes directement dans Synthesia pour les transformer en vidéo.' },
      { titre: 'Multi-langues natif', description: 'Synthesia supporte 120+ langues avec des avatars locuteurs natifs. Créez une version et générez toutes les langues en quelques clics.', astuce: 'Utilisez SSML pour contrôler le rythme et les pauses dans les langues autres que l\'anglais.' },
      { titre: 'Media Library', description: 'Bibliothèque intégrée de fonds, images, icônes, musiques libres de droits. Pas besoin d\'assets externes pour créer une vidéo professionnelle.', astuce: 'Uploader votre charte graphique (couleurs, polices, logo) crée une cohérence immédiate avec votre marque.' },
      { titre: 'Analytics vidéo', description: 'Avec les plans Team/Enterprise, suivez qui a regardé vos vidéos, jusqu\'où, et sur quel appareil. Idéal pour les formations.', astuce: 'Les vidéos courtes (< 3 min) ont un taux de complétion 40% supérieur dans les formations.' },
    ],
    exemples: [
      { titre: 'Module de formation e-learning', prompt: 'Nouveau projet. Importer PPT de 15 slides "Onboarding nouveaux employés". Avatar : femme professionnelle, accent français. Durée cible : 8 min. Ajouter quiz après slide 5 et 10.', resultat: 'Module e-learning complet avec vidéo, quiz interactifs et suivi de complétion — prêt pour LMS.' },
      { titre: 'Tutoriel produit SaaS', prompt: 'Créer une vidéo "Comment créer votre premier projet". Template "Product Demo". Script de 2 min avec captures d\'écran annotées. Avatar support, tenue décontractée.', resultat: 'Tutoriel professionnel avec avatar présentant l\'interface, prêt à intégrer dans l\'onboarding du produit.' },
      { titre: 'Communication RH mondiale', prompt: 'Politique de congés mise à jour. Script 90 secondes en anglais. Générer en FR, DE, ES, PT, ZH. Avatars différents par langue pour représentation locale. Partager via lien.', resultat: '6 vidéos localisées avec mesure d\'engagement, envoyées à 2000 employés dans 15 pays.' },
    ],
    prix: [
      { plan: 'Starter', prix: '22 $/mois', features: ['10 min vidéo/mois', '90 avatars', '70 langues', 'Templates de base'] },
      { plan: 'Creator', prix: '67 $/mois', features: ['30 min vidéo/mois', '160 avatars', '120 langues', 'Custom avatar', 'Brand kit'], highlighted: true },
      { plan: 'Enterprise', prix: 'Sur devis', features: ['Minutes illimitées', 'Avatars personnalisés ultra-réalistes', 'SSO', 'Analytics avancés', 'API'] },
    ],
    conseils: [
      'Synthesia est particulièrement adapté aux entreprises avec besoins de formation réguliers — le ROI est rapide vs tournage traditionnel.',
      'Structurez vos scripts comme des bulletpoints parlés, pas comme de la prose écrite — les avatars sonnent plus naturels.',
      'Utilisez des avatars différents selon les modules pour maintenir l\'attention dans les longues formations.',
      'La fonctionnalité "Chapter Markers" améliore la navigation dans les vidéos longues.',
      'Mettez à jour vos vidéos sans tout re-filmer — modifiez juste le texte et régénérez les scènes modifiées.',
    ],
    alternatives: ['heygen', 'runway-ml', 'elevenlabs'],
  },

  'suno-ai': {
    demarrage: [
      { etape: 1, titre: 'Créer un compte', description: 'Rendez-vous sur suno.com et connectez-vous avec Google, Apple ou Discord. Vous recevez 50 crédits gratuits par jour (environ 10 chansons).' },
      { etape: 2, titre: 'Générer votre première chanson', description: 'Cliquez sur "Create", décrivez votre chanson en quelques mots ("upbeat pop song about summer in Paris, female vocals, catchy chorus"), et cliquez Generate.' },
      { etape: 3, titre: 'Explorer le mode personnalisé', description: 'Activez "Custom Mode" pour écrire vos propres paroles et contrôler le style avec des métatags précis ([verse], [chorus], [bridge]).' },
    ],
    utilisation: [
      { titre: 'Mode simple (Song Description)', description: 'Décrivez le style, l\'ambiance et le sujet en anglais. Suno génère les paroles et la musique automatiquement. Idéal pour tester rapidement.', astuce: 'Soyez précis sur le style : "80s synth-pop", "acoustic folk", "french chanson réaliste".' },
      { titre: 'Mode personnalisé (Custom)', description: 'Écrivez vos propres paroles avec des métatags de structure : [verse], [pre-chorus], [chorus], [bridge], [outro]. Ajoutez un Style Prompt séparé.', astuce: 'Utilisez ChatGPT pour écrire les paroles en premier, puis importez-les dans Suno Custom Mode.' },
      { titre: 'Continuation de chanson', description: 'Cliquez sur "Extend" pour continuer une chanson existante. Parfait pour ajouter un pont, un solo ou une outro.', astuce: 'Étendez plusieurs fois pour créer des chansons de 3-4 minutes structurées professionnellement.' },
      { titre: 'Cover et réinterprétation', description: 'Uploadez une chanson (Pro) et demandez à Suno de la réinterpréter dans un style différent tout en conservant la mélodie.', astuce: 'Transformez une chanson rock en version acoustique ou jazz en quelques secondes.' },
    ],
    exemples: [
      { titre: 'Jingle publicitaire', prompt: 'Custom Mode. Paroles : "[intro] Fairplay, l\'IA qui vous guide / [chorus] Découvrez les meilleurs outils / Pour booster votre quotidien". Style : pop moderne, voix masculine, tempo 120bpm, production radio-friendly.', resultat: 'Jingle de 45 secondes avec mélodie accrocheuse, prêt pour une publicité radio ou vidéo.' },
      { titre: 'Musique de podcast', prompt: 'Song Description : "cinematic instrumental intro for a tech podcast, modern electronic, professional, no lyrics, 30 seconds, builds up gradually, positive energy".', resultat: 'Générique instrumental personnalisé pour podcast, prêt à utiliser commercialement avec abonnement Pro.' },
      { titre: 'Chanson d\'anniversaire personnalisée', prompt: 'Custom Mode. Paroles : "[verse] Marie, aujourd\'hui c\'est ton jour / Tu souffles tes 30 bougies avec amour / [chorus] Joyeux anniversaire Marie / Que tes rêves s\'épanouissent". Style : pop feel-good, piano, choeur.', resultat: 'Chanson d\'anniversaire unique avec prénom et style personnalisé — cadeau mémorable.' },
    ],
    prix: [
      { plan: 'Gratuit', prix: '0 €', features: ['50 crédits/jour (~10 chansons)', 'Usage non commercial', 'Accès à v3', 'Téléchargement inclus'] },
      { plan: 'Pro', prix: '8 $/mois', features: ['2500 crédits/mois', 'Usage commercial', 'Mode furtif', 'Uploads audio', 'Priorité génération'], highlighted: true },
      { plan: 'Premier', prix: '24 $/mois', features: ['10 000 crédits/mois', 'Tout Pro', 'Générations prioritaires', 'Pour créateurs intensifs'] },
    ],
    conseils: [
      'L\'anglais produit les meilleurs résultats — pour du français, précisez "French lyrics, chanson française" dans le style.',
      'Les métatags de structure ([verse], [chorus]) sont essentiels pour obtenir des chansons bien structurées.',
      'Générez toujours 2 versions et choisissez la meilleure — les résultats varient significativement.',
      'Utilisez des références musicales précises : "like The Weeknd", "in the style of Daft Punk" pour guider le style.',
      'Avec Pro, les droits commerciaux vous appartiennent — vérifiez les CGU pour votre usage spécifique.',
    ],
    alternatives: ['elevenlabs', 'runway-ml', 'descript'],
  },

  'descript': {
    demarrage: [
      { etape: 1, titre: 'Télécharger Descript', description: 'Rendez-vous sur descript.com, créez un compte et téléchargez l\'application (Mac/Windows). Le plan Hobbyist est gratuit avec 10h de transcription.' },
      { etape: 2, titre: 'Importer votre média', description: 'Glissez votre fichier audio ou vidéo dans Descript. La transcription automatique démarre en quelques secondes.' },
      { etape: 3, titre: 'Éditer comme un doc texte', description: 'La transcription s\'affiche comme un document. Supprimez du texte → le média correspondant est coupé. C\'est la magie de Descript.' },
    ],
    utilisation: [
      { titre: 'Édition basée sur le texte', description: 'Sélectionnez et supprimez du texte dans la transcription pour couper les passages correspondants dans la vidéo/audio. Aussi simple que Word.', astuce: 'Sélectionnez "Remove filler words" pour supprimer automatiquement tous les "euh", "hm", "vous voyez".' },
      { titre: 'Overdub (clonage vocal)', description: 'Clonez votre voix pour corriger des erreurs de prononciation ou ajouter des passages sans re-enregistrer. Tapez le texte, Descript génère votre voix.', astuce: 'Entraînez l\'Overdub avec 10 minutes de voix propre pour les meilleurs résultats.' },
      { titre: 'Studio Sound', description: 'Fonctionnalité IA qui améliore automatiquement la qualité audio : supprime le bruit de fond, l\'écho et les artefacts de compression.', astuce: 'Idéal pour les enregistrements faits à la maison ou sur des micros d\'entrée de gamme.' },
      { titre: 'Green Screen IA', description: 'Supprime automatiquement l\'arrière-plan de vos vidéos sans fond vert réel. Remplacez par n\'importe quelle image ou vidéo.', astuce: 'Fonctionne mieux avec un éclairage homogène et des vêtements contrastant avec le fond.' },
    ],
    exemples: [
      { titre: 'Monter un épisode de podcast', prompt: 'Importer fichier audio 45 min. Transcription automatique. Supprimer les hésitations avec "Remove filler words". Sélectionner et supprimer les 10 min de hors-sujet. Ajouter intro/outro musicale. Exporter MP3.', resultat: 'Épisode de 35 min prêt à publier en 20 minutes de travail vs 2h de montage traditionnel.' },
      { titre: 'Créer des clips réseaux sociaux', prompt: 'Vidéo interview de 30 min. Descript identifie les 5 meilleurs extraits avec "Highlights". Redimensionner en format vertical 9:16. Ajouter sous-titres automatiques. Exporter 5 clips TikTok/Reels.', resultat: '5 clips verticaux de 60 secondes avec sous-titres, prêts à publier, en 30 minutes.' },
      { titre: 'Corriger une erreur sans re-filmer', prompt: 'Dans la transcription, localiser "Notre produit coûte 49 euros" (erreur : c\'est 59€). Sélectionner le mot "49". Overdub : taper "59". Générer.', resultat: 'Correction seamless avec votre propre voix — imperceptible à l\'audience.' },
    ],
    prix: [
      { plan: 'Hobbyist', prix: '0 €', features: ['10h de transcription', '1 watermark video/mois', 'Overdub limité', 'Édition basique'] },
      { plan: 'Creator', prix: '15 $/mois', features: ['Transcription illimitée', '10 vidéos/mois sans watermark', 'Studio Sound', 'Green Screen IA'], highlighted: true },
      { plan: 'Pro', prix: '30 $/mois', features: ['Tout Creator', 'Overdub complet', '30 vidéos/mois', 'Collaboration équipe', '4K export'] },
      { plan: 'Enterprise', prix: 'Sur devis', features: ['Vidéos illimitées', 'SSO', 'Compliance', 'Stockage dédié'] },
    ],
    conseils: [
      'La fonction "Remove filler words" seule fait économiser 30 minutes de montage par heure de contenu.',
      'Utilisez la vue "Script" pour rédiger et enregistrer en même temps — idéal pour les vidéos avec prompteur.',
      'Les sous-titres automatiques de Descript sont parmi les plus précis du marché — ajoutez-les systématiquement.',
      'Combinez Descript avec ElevenLabs pour créer des voix off professionnelles sans enregistrement.',
      'La collaboration en temps réel (Pro) est idéale pour les équipes de production de contenu.',
    ],
    alternatives: ['elevenlabs', 'runway-ml', 'heygen'],
  },

}

export function getGuide(slug: string): Guide | undefined {
  return GUIDES[slug]
}
