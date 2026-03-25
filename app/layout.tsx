import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Link from 'next/link'
import { AuthProvider } from '@/app/ui/AuthProvider'
import HeaderAuth from '@/app/ui/HeaderAuth'
import NavLinks from '@/app/ui/NavLinks'
import MobileMenu from '@/app/ui/MobileMenu'
import LogoIcon from '@/app/ui/LogoIcon'
import Toast from '@/app/ui/Toast'
import './globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FairPlay — Le meilleur de l\'IA, chaque jour',
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
              <LogoIcon size={36} />
              <span className="font-black text-lg tracking-tight" style={{ color: '#f0f0f8' }}>
                FairPlay
              </span>
            </Link>

            <NavLinks />

            <div className="flex items-center gap-2">
              <HeaderAuth />
              <MobileMenu />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>
        <Toast />

        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <LogoIcon size={24} />
              <span className="text-sm font-black" style={{ color: '#f0f0f8' }}>FairPlay</span>
            </div>
            <p className="text-sm" style={{ color: '#3a3a50' }}>© 2026 FairPlay. Le meilleur de l'IA, chaque jour.</p>
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
