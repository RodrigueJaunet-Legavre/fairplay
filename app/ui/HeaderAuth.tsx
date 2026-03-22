'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from './AuthProvider'

function getFirstName(email: string): string {
  const prefix = email.split('@')[0]
  const name = prefix.split(/[._-]/)[0]
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export default function HeaderAuth() {
  const { user, loading, isPremium, signOut } = useAuth()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  if (loading) {
    return <div className="w-32 h-8 rounded-xl animate-pulse" style={{ background: 'rgba(255,255,255,0.05)' }} />
  }

  if (!user) {
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

  const initials = (user.email ?? 'U').slice(0, 2).toUpperCase()
  const firstName = getFirstName(user.email ?? '')

  async function handleSignOut() {
    setOpen(false)
    await signOut()
    router.push('/')
    router.refresh()
  }

  const MENU_ITEMS = [
    { label: 'Mon profil',        href: isPremium ? '/dashboard' : '/login', icon: '👤' },
    { label: 'Mes préférences',   href: '/onboarding',                        icon: '⚙️' },
    { label: 'Mon abonnement',    href: '/premium',                           icon: '⭐' },
  ]

  return (
    <div ref={ref} className="relative shrink-0">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all"
        style={{
          background: open ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.05)',
          border: `1px solid ${open ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.08)'}`,
          color: '#a8a8c0',
        }}
      >
        {/* Avatar */}
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
        >
          {initials}
        </div>

        <span className="hidden sm:inline text-sm font-medium" style={{ color: '#f0f0f8' }}>
          {firstName}
        </span>

        {isPremium && (
          <span
            className="hidden sm:inline text-xs px-1.5 py-0.5 rounded-full font-bold"
            style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}
          >
            ⭐
          </span>
        )}

        <svg
          className="w-3.5 h-3.5 transition-transform shrink-0"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', color: '#5a5a78' }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-52 rounded-xl overflow-hidden z-50"
          style={{
            background: '#0f0f1a',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
          }}
        >
          {/* User info header */}
          <div
            className="px-4 py-3"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p className="text-sm font-semibold" style={{ color: '#f0f0f8' }}>{firstName}</p>
            <p className="text-xs truncate" style={{ color: '#3a3a50' }}>{user.email}</p>
            {isPremium && (
              <span
                className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-semibold mt-1"
                style={{ background: 'rgba(251,191,36,0.12)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.2)' }}
              >
                ⭐ Premium
              </span>
            )}
          </div>

          {/* Menu items */}
          <div className="py-1.5">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors"
                style={{ color: '#a8a8c0' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Separator + Sign out */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} className="py-1.5">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left"
              style={{ color: '#f87171' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(239,68,68,0.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <span className="text-base">🚪</span>
              Déconnexion
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
