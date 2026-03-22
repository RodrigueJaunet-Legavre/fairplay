'use client'

import Link from 'next/link'


const FEATURES = [
  {
    emoji: '🎯',
    title: 'Dashboard personnalisé',
    desc: 'Recommandations d\'outils adaptées à votre métier et vos objectifs, mises à jour chaque semaine.',
  },
  {
    emoji: '🏆',
    title: 'Top 10 avec comparaisons',
    desc: 'Tableau de comparaison complet par catégorie : facilité, qualité, support FR, profil idéal.',
  },
  {
    emoji: '🔍',
    title: 'Recherches illimitées',
    desc: 'Utilisez la recherche intelligente autant que vous voulez, sans limite quotidienne.',
  },
  {
    emoji: '🔔',
    title: 'Alertes nouveaux outils',
    desc: 'Soyez notifié dès qu\'un outil dans votre catégorie est ajouté ou mis à jour.',
  },
  {
    emoji: '⚖️',
    title: 'Comparaison côte à côte',
    desc: 'Comparez deux outils sur tous les critères pour choisir le bon sans hésiter.',
  },
  {
    emoji: '⭐',
    title: 'Accès prioritaire',
    desc: 'Accédez en avant-première aux nouvelles fonctionnalités et bêtas de Fairplay.',
  },
]

const COMPARISON = [
  { feature: 'Recherches intelligentes',        free: '3 / jour',  premium: 'Illimitées' },
  { feature: 'Dashboard personnalisé',          free: '✗',         premium: '✓' },
  { feature: 'Top 10 avec tableau comparatif',  free: '3 lignes',  premium: 'Complet (10)' },
  { feature: 'Fiches détaillées outils',        free: '✓',         premium: '✓' },
  { feature: 'Alertes nouveaux outils',         free: '✗',         premium: '✓' },
  { feature: 'Comparaison côte à côte',         free: '✗',         premium: '✓' },
  { feature: 'Accès bêta fonctionnalités',      free: '✗',         premium: '✓' },
  { feature: 'Support prioritaire',             free: '✗',         premium: '✓' },
]

export default function PremiumPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(251,191,36,0.12) 0%, rgba(124,58,237,0.1) 40%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-8"
            style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', color: '#fbbf24' }}
          >
            ⭐ Fairplay Premium
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6 leading-tight" style={{ color: '#f0f0f8' }}>
            L'IA au service de{' '}
            <span style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              votre métier
            </span>
          </h1>

          <p className="text-xl mb-4" style={{ color: '#5a5a78' }}>
            Toutes les fonctionnalités de Fairplay, sans limite.
          </p>
          <p className="text-base mb-10" style={{ color: '#3a3a50' }}>
            7 jours gratuits · Sans carte bancaire · Annulable à tout moment
          </p>

          {/* Price card */}
          <div
            className="inline-block rounded-2xl px-10 py-8 mb-8 relative"
            style={{
              background: 'linear-gradient(135deg, rgba(251,191,36,0.08), rgba(124,58,237,0.1))',
              border: '1px solid rgba(251,191,36,0.25)',
            }}
          >
            <p className="text-5xl font-black mb-1" style={{ color: '#f0f0f8' }}>14,99€</p>
            <p className="text-sm" style={{ color: '#5a5a78' }}>par mois · après 7 jours gratuits</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => alert('Paiement bientôt disponible — restez connecté !')}
              className="px-8 py-4 rounded-xl font-bold text-white text-lg"
              style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', color: '#1a0a00' }}
            >
              Commencer l'essai gratuit →
            </button>
            <Link
              href="/tools"
              className="px-8 py-4 rounded-xl font-medium text-base"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#a8a8c0' }}
            >
              Explorer gratuitement
            </Link>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-black text-center mb-10" style={{ color: '#f0f0f8' }}>
          Tout ce qui est inclus
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl p-5"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="text-3xl mb-3">{f.emoji}</div>
              <h3 className="font-bold mb-2" style={{ color: '#f0f0f8' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5a5a78' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
        <h2 className="text-2xl font-black text-center mb-8" style={{ color: '#f0f0f8' }}>Gratuit vs Premium</h2>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Header */}
          <div className="grid grid-cols-3" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="p-4 text-sm font-semibold" style={{ color: '#5a5a78' }}>Fonctionnalité</div>
            <div className="p-4 text-sm font-semibold text-center" style={{ color: '#5a5a78' }}>Gratuit</div>
            <div className="p-4 text-sm font-bold text-center" style={{ color: '#fbbf24' }}>⭐ Premium</div>
          </div>
          {COMPARISON.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-3"
              style={{
                borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
              }}
            >
              <div className="p-4 text-sm" style={{ color: '#a8a8c0' }}>{row.feature}</div>
              <div
                className="p-4 text-sm text-center"
                style={{ color: row.free === '✗' ? '#3a3a50' : '#6b7280' }}
              >
                {row.free}
              </div>
              <div
                className="p-4 text-sm text-center font-semibold"
                style={{ color: row.premium === '✓' || row.premium === 'Illimitées' || row.premium === 'Complet (10)' ? '#fbbf24' : '#6b7280' }}
              >
                {row.premium}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <button
            onClick={() => alert('Paiement bientôt disponible — restez connecté !')}
            className="px-10 py-4 rounded-xl font-bold text-lg"
            style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', color: '#1a0a00' }}
          >
            Commencer l'essai gratuit — 7 jours offerts
          </button>
          <p className="text-xs mt-3" style={{ color: '#3a3a50' }}>
            Sans engagement · Sans carte bancaire pendant l'essai
          </p>
        </div>
      </section>
    </div>
  )
}
