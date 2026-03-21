import Link from 'next/link'

export const metadata = {
  title: 'Découvrir l\'IA — Fairplay',
  description: 'Comprendre l\'IA simplement. Ce que c\'est, comment ça peut vous aider, et les dernières nouveautés.',
}

/* ─── DATA ─────────────────────────────────────────────────────── */

const analogies = [
  {
    emoji: '🧑‍💼',
    title: 'Un assistant qui ne dort jamais',
    text: 'Imaginez quelqu\'un disponible 24h/24, 7j/7, qui répond à toutes vos questions en quelques secondes — sans jamais se lasser ni juger.',
  },
  {
    emoji: '📚',
    title: 'Un ami qui a tout lu',
    text: 'L\'IA a "lu" des milliards de textes. Posez votre question comme à un ami : elle comprend le sens, pas juste les mots-clés.',
  },
  {
    emoji: '✍️',
    title: 'Un rédacteur, traducteur, illustrateur…',
    text: 'Elle peut écrire un email, traduire un document, créer une image ou faire des calculs. Comme avoir une petite équipe dans votre poche.',
  },
  {
    emoji: '🔒',
    title: 'Un outil, pas une magie',
    text: 'L\'IA fait des erreurs, comme n\'importe quel outil. Elle ne pense pas — elle prédit. Vous restez toujours maître de vos décisions.',
  },
]

const professions = [
  {
    emoji: '🏪',
    metier: 'Commerçant·e',
    color: '#f97316',
    exemples: [
      'Rédiger des posts Instagram et Facebook en quelques secondes',
      'Créer des offres promotionnelles accrocheuses',
      'Répondre aux avis clients de façon professionnelle',
      'Générer des descriptions de produits pour votre site',
    ],
  },
  {
    emoji: '👩‍⚕️',
    metier: 'Soignant·e',
    color: '#ef4444',
    exemples: [
      'Résumer des informations médicales complexes en langage simple',
      'Préparer des explications adaptées à chaque patient',
      'Rédiger des comptes-rendus plus rapidement',
      'Trouver rapidement des réponses à des questions médicales',
    ],
  },
  {
    emoji: '👨‍🏫',
    metier: 'Enseignant·e',
    color: '#3b82f6',
    exemples: [
      'Créer des exercices différenciés pour chaque niveau',
      'Préparer des quiz et évaluations rapidement',
      'Adapter un cours pour des élèves en difficulté',
      'Générer des idées d\'activités pédagogiques',
    ],
  },
  {
    emoji: '🔨',
    metier: 'Artisan·e',
    color: '#d97706',
    exemples: [
      'Rédiger des devis clairs et professionnels',
      'Créer des communications pour vos réseaux sociaux',
      'Répondre à des emails clients en moins d\'une minute',
      'Générer des idées pour vos créations',
    ],
  },
  {
    emoji: '👩‍💼',
    metier: 'Manager',
    color: '#7c3aed',
    exemples: [
      'Préparer des ordres du jour de réunion',
      'Résumer des rapports de 50 pages en 5 points clés',
      'Rédiger des emails internes professionnels',
      'Analyser des données et générer des insights',
    ],
  },
  {
    emoji: '🎨',
    metier: 'Créatif·ve',
    color: '#ec4899',
    exemples: [
      'Générer des visuels et illustrations depuis du texte',
      'Trouver des idées de contenu pour toute la semaine',
      'Créer des variations d\'un texte ou d\'une image',
      'Composer de la musique de fond en quelques clics',
    ],
  },
]

const actus = [
  {
    date: '18 mars 2026',
    label: 'Nouveauté',
    labelColor: '#a78bfa',
    labelBg: 'rgba(124,58,237,0.12)',
    emoji: '🤖',
    titre: 'ChatGPT 5 est arrivé — et il comprend la vidéo',
    resume: 'OpenAI a lancé ChatGPT 5, capable d\'analyser des vidéos en temps réel. Il répond désormais à des questions sur ce qu\'il "voit". La version gratuite reste accessible à tous.',
    source: 'OpenAI Blog',
  },
  {
    date: '14 mars 2026',
    label: 'Grand public',
    labelColor: '#34d399',
    labelBg: 'rgba(16,185,129,0.12)',
    emoji: '💼',
    titre: 'Microsoft Copilot intègre Word et Excel pour tous',
    resume: 'Microsoft déploie Copilot dans Word, Excel et Outlook pour tous les abonnés Microsoft 365. Rédigez, analysez et résumez sans quitter vos applications habituelles.',
    source: 'Microsoft France',
  },
  {
    date: '10 mars 2026',
    label: 'France',
    labelColor: '#60a5fa',
    labelBg: 'rgba(59,130,246,0.12)',
    emoji: '🩺',
    titre: 'Nabla AI aide désormais 45 000 médecins français',
    resume: 'L\'IA française Nabla, développée à Paris, réduit de 2h par jour la charge administrative des médecins en transcrivant et résumant automatiquement les consultations.',
    source: 'Le Monde Santé',
  },
  {
    date: '7 mars 2026',
    label: 'Image',
    labelColor: '#f472b6',
    labelBg: 'rgba(236,72,153,0.12)',
    emoji: '🎨',
    titre: 'FLUX 2.0 : une image photoréaliste en 2 secondes',
    resume: 'Le nouveau modèle d\'image FLUX 2.0 génère des visuels indiscernables de vraies photos en moins de 2 secondes. Accessible gratuitement depuis le navigateur pour un usage personnel.',
    source: 'Black Forest Labs',
  },
  {
    date: '4 mars 2026',
    label: 'Europe',
    labelColor: '#fbbf24',
    labelBg: 'rgba(251,191,36,0.1)',
    emoji: '🏛️',
    titre: 'L\'AI Act entre en vigueur dans toute l\'UE',
    resume: 'Le règlement européen sur l\'intelligence artificielle est désormais applicable. Les outils IA utilisés en France doivent afficher leur transparence et ne peuvent plus prétendre être humains.',
    source: 'Commission Européenne',
  },
  {
    date: '1 mars 2026',
    label: 'Musique',
    labelColor: '#fb923c',
    labelBg: 'rgba(249,115,22,0.12)',
    emoji: '🎵',
    titre: 'Suno 4 compose des chansons presque professionnelles',
    resume: 'La version 4 de Suno crée des morceaux avec paroles, instrumentation et mixage en 20 secondes depuis une simple description. Une version gratuite avec 10 créations par jour est disponible.',
    source: 'Suno AI',
  },
]

/* ─── PAGE ─────────────────────────────────────────────────────── */

export default function DecouvrirPage() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% -10%, rgba(124,58,237,0.14) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: '#a78bfa' }}
          >
            ✨ Pas besoin d'être expert
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-tight"
            style={{ color: '#f0f0f8' }}
          >
            L'IA expliquée{' '}
            <span style={{ background: 'linear-gradient(135deg,#a78bfa,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              simplement
            </span>
          </h1>
          <p className="text-xl leading-relaxed mb-8" style={{ color: '#6b7280', maxWidth: '540px', margin: '0 auto 2rem' }}>
            Vous avez entendu parler de l'IA partout mais vous ne savez pas par où commencer ?
            Cette page est faite pour vous.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['C\'est quoi l\'IA ?', 'Comment ça m\'aide ?', 'Les nouveautés'].map((label, i) => (
              <a
                key={label}
                href={`#${['quoi', 'aide', 'actus'][i]}`}
                className="px-4 py-2 rounded-xl font-medium transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#a8a8c0' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 1 : C'est quoi l'IA ? ─────────────────────────── */}
      <section id="quoi" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#7c3aed' }}>Section 1</p>
          <h2 className="text-3xl font-black mb-4" style={{ color: '#f0f0f8' }}>C'est quoi l'IA ?</h2>
          <p className="text-lg" style={{ color: '#6b7280' }}>
            En langage de tous les jours, sans jargon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {analogies.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl p-7"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="text-4xl mb-5">{a.emoji}</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#f0f0f8' }}>{a.title}</h3>
              <p className="leading-relaxed" style={{ color: '#6b7280', fontSize: '15px' }}>{a.text}</p>
            </div>
          ))}
        </div>

        {/* Reassurance block */}
        <div
          className="mt-10 rounded-2xl p-8 text-center"
          style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)' }}
        >
          <p className="text-2xl mb-3">😌</p>
          <h3 className="text-xl font-bold mb-2" style={{ color: '#f0f0f8' }}>
            Vous n'avez rien à apprendre de technique
          </h3>
          <p style={{ color: '#6b7280' }}>
            Les outils d'IA d'aujourd'hui fonctionnent comme une conversation. Vous écrivez ce dont vous avez besoin,
            comme vous l'écririez à un collègue. C'est tout.
          </p>
        </div>
      </section>

      {/* ── Section 2 : Comment ça peut m'aider ? ──────────────────── */}
      <section
        id="aide"
        className="py-20"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#10b981' }}>Section 2</p>
            <h2 className="text-3xl font-black mb-4" style={{ color: '#f0f0f8' }}>Comment ça peut m'aider ?</h2>
            <p className="text-lg" style={{ color: '#6b7280' }}>Des exemples concrets, selon votre métier.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {professions.map((p) => (
              <div
                key={p.metier}
                className="rounded-2xl overflow-hidden"
                style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Color strip */}
                <div className="h-1" style={{ background: p.color }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: `${p.color}18` }}
                    >
                      {p.emoji}
                    </div>
                    <h3 className="font-bold text-base" style={{ color: '#f0f0f8' }}>{p.metier}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {p.exemples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2.5 text-sm" style={{ color: '#6b7280' }}>
                        <span className="mt-0.5 shrink-0" style={{ color: p.color }}>✓</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-base mb-6" style={{ color: '#5a5a78' }}>
              Prêt·e à essayer ? Trouvez l'outil parfait pour votre situation.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
            >
              Explorer les outils IA →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 3 : Les dernières nouveautés ──────────────────── */}
      <section
        id="actus"
        className="py-20"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#f59e0b' }}>Section 3</p>
            <h2 className="text-3xl font-black mb-4" style={{ color: '#f0f0f8' }}>Les dernières nouveautés IA</h2>
            <p className="text-lg" style={{ color: '#6b7280' }}>Ce qui s'est passé en mars 2026, en clair.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {actus.map((a) => (
              <article
                key={a.titre}
                className="rounded-2xl p-6 flex flex-col"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: a.labelBg, color: a.labelColor }}
                  >
                    {a.label}
                  </span>
                  <span className="text-xs" style={{ color: '#3a3a50' }}>{a.date}</span>
                </div>
                <div className="text-3xl mb-4">{a.emoji}</div>
                <h3 className="font-bold text-base mb-3 leading-snug" style={{ color: '#f0f0f8' }}>
                  {a.titre}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#6b7280' }}>{a.resume}</p>
                <p className="text-xs mt-4 pt-4" style={{ color: '#3a3a50', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  Source : {a.source}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div
            className="rounded-2xl p-12"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.06))', border: '1px solid rgba(124,58,237,0.15)' }}
          >
            <p className="text-4xl mb-5">🚀</p>
            <h2 className="text-3xl font-black mb-3" style={{ color: '#f0f0f8' }}>
              Lancez-vous, c'est gratuit
            </h2>
            <p className="text-lg mb-8" style={{ color: '#6b7280' }}>
              La plupart des outils proposent une version gratuite.
              Vous pouvez commencer dès aujourd'hui, sans carte bancaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              >
                Explorer les outils →
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a8a8c0' }}
              >
                Revenir à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
