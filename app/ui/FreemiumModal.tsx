'use client'

import Link from 'next/link'

type ModalType = 'signup' | 'premium'

export default function FreemiumModal({
  type,
  onClose,
}: {
  type: ModalType
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8 relative"
        style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-lg transition-all"
          style={{ color: '#5a5a78', background: 'rgba(255,255,255,0.04)' }}
        >
          ×
        </button>

        {type === 'signup' ? <SignupContent /> : <PremiumContent />}
      </div>
    </div>
  )
}

function SignupContent() {
  return (
    <>
      <div className="text-4xl mb-4 text-center">🔍</div>
      <h2 className="text-xl font-black text-center mb-2" style={{ color: '#f0f0f8' }}>
        Continuez gratuitement
      </h2>
      <p className="text-center text-sm mb-6" style={{ color: '#6b7280' }}>
        Vous avez utilisé votre recherche gratuite. Créez un compte — c'est gratuit et rapide !
      </p>

      <div
        className="flex flex-col gap-2 p-4 rounded-xl mb-6"
        style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.15)' }}
      >
        {[
          '✓ 3 recherches intelligentes par jour',
          '✓ Accès à toutes les fiches détaillées',
          '✓ Historique de vos recherches',
        ].map((b) => (
          <p key={b} className="text-sm" style={{ color: '#c4b5fd' }}>{b}</p>
        ))}
      </div>

      <Link
        href="/signup"
        className="w-full flex items-center justify-center py-3 rounded-xl font-bold text-white mb-3"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
      >
        Créer un compte gratuit →
      </Link>
      <Link
        href="/login"
        className="w-full flex items-center justify-center py-2.5 rounded-xl text-sm font-medium"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#a8a8c0' }}
      >
        J'ai déjà un compte
      </Link>
    </>
  )
}

function PremiumContent() {
  return (
    <>
      <div className="text-4xl mb-4 text-center">⚡</div>
      <h2 className="text-xl font-black text-center mb-2" style={{ color: '#f0f0f8' }}>
        Limite quotidienne atteinte
      </h2>
      <p className="text-center text-sm mb-6" style={{ color: '#6b7280' }}>
        Vous avez utilisé vos 3 recherches gratuites aujourd'hui. Passez Premium pour un accès illimité.
      </p>

      <div
        className="rounded-xl p-5 mb-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.08))', border: '1px solid rgba(124,58,237,0.25)' }}
      >
        <p className="text-center text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#a78bfa' }}>
          Fairplay Premium
        </p>
        <p className="text-center text-3xl font-black mb-4" style={{ color: '#f0f0f8' }}>
          9,99€<span className="text-base font-normal" style={{ color: '#5a5a78' }}>/mois</span>
        </p>
        <div className="flex flex-col gap-2">
          {[
            '✓ Recherches illimitées',
            '✓ Alertes nouveaux outils',
            '✓ Comparaisons côte à côte',
            '✓ Support prioritaire',
          ].map((f) => (
            <p key={f} className="text-sm" style={{ color: '#c4b5fd' }}>{f}</p>
          ))}
        </div>
      </div>

      <button
        className="w-full py-3 rounded-xl font-bold text-white mb-3"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
        onClick={() => alert('Paiement bientôt disponible !')}
      >
        Passer Premium →
      </button>
      <p className="text-center text-xs" style={{ color: '#3a3a50' }}>
        Revenez demain pour 3 nouvelles recherches gratuites
      </p>
    </>
  )
}
