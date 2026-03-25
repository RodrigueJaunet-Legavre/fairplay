'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from './AuthProvider'

const BASE_LINKS = [
  { href: '/',          label: 'Accueil' },
  { href: '/metiers',   label: 'Métiers' },
  { href: '/decouvrir', label: 'Découverte' },
]

export default function NavLinks() {
  const { user } = useAuth()
  const pathname = usePathname()

  const links = user
    ? [BASE_LINKS[0], { href: '/dashboard', label: 'Mon espace' }, ...BASE_LINKS.slice(1)]
    : BASE_LINKS

  return (
    <nav className="hidden md:flex items-center gap-1">
      {links.map(({ href, label }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className="px-3 py-1.5 rounded-lg text-sm transition-colors"
            style={{
              color: isActive ? '#a78bfa' : '#5a5a78',
              background: isActive ? 'rgba(124,58,237,0.08)' : 'transparent',
            }}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
