'use client'

import Link from 'next/link'
import { useAuth } from './AuthProvider'

export default function HeaderAuth() {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return <div className="w-32 h-8 rounded-xl animate-pulse" style={{ background: 'rgba(255,255,255,0.05)' }} />
  }

  if (user) {
    const initials = (user.email ?? 'U').slice(0, 2).toUpperCase()
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/compte"
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm transition-all"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#a8a8c0',
          }}
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
          >
            {initials}
          </div>
          <span className="hidden sm:inline">Mon compte</span>
        </Link>
        <button
          onClick={signOut}
          className="text-xs px-3 py-1.5 rounded-xl transition-all"
          style={{ color: '#5a5a78', background: 'transparent' }}
        >
          Déconnexion
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 shrink-0">
      <Link
        href="/login"
        className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
        style={{ color: '#a8a8c0', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        Connexion
      </Link>
      <Link
        href="/signup"
        className="px-4 py-2 rounded-xl text-sm font-semibold text-white"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
      >
        S'inscrire
      </Link>
    </div>
  )
}
