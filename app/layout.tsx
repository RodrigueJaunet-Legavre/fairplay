import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Link from 'next/link'
import { AuthProvider } from '@/app/ui/AuthProvider'
import HeaderAuth from '@/app/ui/HeaderAuth'
import './globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fairplay — Le meilleur de l\'IA, chaque jour',
  description: 'Découvrez et votez pour les meilleurs outils IA. La plateforme de référence pour explorer l\'écosystème IA.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <AuthProvider>
        {/* Navbar */}
        <header
          className="glass sticky top-0 z-50"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              >
                F
              </div>
              <span className="font-bold text-lg tracking-tight" style={{ color: '#f0f0f8' }}>
                Fairplay
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {[
                { href: '/decouvrir', label: '✨ Découvrir' },
                { href: '/tools', label: 'Explorer' },
                { href: '/tools?category=writing', label: 'Rédaction' },
                { href: '/tools?category=image', label: 'Image' },
                { href: '/tools?category=code', label: 'Code' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-3 py-1.5 rounded-lg text-sm transition-colors"
                  style={{ color: '#5a5a78' }}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <HeaderAuth />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              >
                F
              </div>
              <span className="text-sm font-semibold" style={{ color: '#f0f0f8' }}>Fairplay</span>
            </div>
            <p className="text-sm" style={{ color: '#3a3a50' }}>© 2026 Fairplay. Le meilleur de l'IA, chaque jour.</p>
            <div className="flex gap-5">
              {['Explorer', 'À propos', 'Contact'].map((l) => (
                <a key={l} href="#" className="text-sm" style={{ color: '#3a3a50' }}>{l}</a>
              ))}
            </div>
          </div>
        </footer>
        </AuthProvider>
      </body>
    </html>
  )
}
