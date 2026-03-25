import Link from 'next/link'

export default function PremiumPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-8"
          style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', color: '#a78bfa' }}
        >
          ⭐ Fairplay Premium
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-tight" style={{ color: '#f0f0f8' }}>
          Bientôt disponible
        </h1>

        {/* Message */}
        <div
          className="rounded-2xl p-8 mb-8"
          style={{
            background: 'rgba(124,58,237,0.06)',
            border: '1px solid rgba(124,58,237,0.15)',
          }}
        >
          <p className="text-lg leading-relaxed" style={{ color: '#a8a8c0' }}>
            Profitez de <strong style={{ color: '#f0f0f8' }}>toutes les fonctionnalités gratuitement</strong> pendant notre lancement.
          </p>
          <p className="text-base mt-3 leading-relaxed" style={{ color: '#5a5a78' }}>
            Un abonnement Premium avec des fonctionnalités exclusives arrive prochainement — accès prioritaire, alertes outils, comparaisons avancées et bien plus.
          </p>
        </div>

        {/* What's already free */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
          {[
            'Recherches intelligentes illimitées',
            'Dashboard personnalisé complet',
            'Top 10 comparatifs par catégorie',
            'Fiches outils détaillées avec guides',
            'Favoris et espace personnel',
            'Avis de la communauté FairPlay',
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span style={{ color: '#34d399', flexShrink: 0 }}>✓</span>
              <span className="text-sm" style={{ color: '#a8a8c0' }}>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/signup"
            className="px-8 py-4 rounded-xl font-bold text-white text-base"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
          >
            Créer un compte gratuit →
          </Link>
          <Link
            href="/tools"
            className="px-8 py-4 rounded-xl font-medium text-base"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#a8a8c0' }}
          >
            Explorer les outils
          </Link>
        </div>
      </div>
    </div>
  )
}
