'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useAuth } from './AuthProvider'

const BASE_LINKS = [
  { href: '/',          label: 'Accueil' },
  { href: '/metiers',   label: 'Métiers' },
  { href: '/decouvrir', label: 'Découverte' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { isPremium } = useAuth()
  const pathname = usePathname()

  const links = isPremium
    ? [BASE_LINKS[0], { href: '/dashboard', label: 'Mon espace' }, ...BASE_LINKS.slice(1)]
    : BASE_LINKS

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
        style={{ color: '#a8a8c0', background: open ? 'rgba(255,255,255,0.06)' : 'transparent' }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 md:hidden"
          style={{ zIndex: 998, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full md:hidden flex flex-col"
        style={{
          zIndex: 999,
          width: 280,
          background: '#0f0f1a',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.28s cubic-bezier(0.22,1,0.36,1)',
          boxShadow: open ? '-16px 0 48px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 h-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span className="font-black text-base" style={{ color: '#f0f0f8' }}>Menu</span>
          <button
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ color: '#5a5a78', background: 'rgba(255,255,255,0.04)' }}
            onClick={() => setOpen(false)}
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-1 p-4 flex-1">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className="flex items-center px-4 py-3.5 rounded-xl text-base font-semibold transition-colors"
                style={{
                  color: isActive ? '#a78bfa' : '#a8a8c0',
                  background: isActive ? 'rgba(124,58,237,0.1)' : 'transparent',
                }}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link
            href="/signup"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white transition-all"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
            onClick={() => setOpen(false)}
          >
            S&apos;inscrire gratuitement →
          </Link>
        </div>
      </div>
    </>
  )
}
