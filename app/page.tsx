import Link from 'next/link'
import { tools } from '@/lib/tools'
import { allCatalogTools } from '@/lib/tools-index'
import type { CatalogTool } from '@/lib/catalog-types'
import SmartSearch from '@/app/ui/SmartSearch'
import ToolLogo from '@/app/ui/ToolLogo'
import FadeIn from '@/app/ui/FadeIn'

const detailedSlugs = new Set(tools.map((t) => t.slug))
const allTools: CatalogTool[] = [
  ...(tools as unknown as CatalogTool[]),
  ...allCatalogTools.filter((t) => !detailedSlugs.has(t.slug)),
]

export default function HomePage() {
  const topTools = [...allTools].sort((a, b) => b.upvotes - a.upvotes).slice(0, 8)

  return (
    <div style={{ background: '#0a0a0f' }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(124,58,237,0.22) 0%, transparent 65%)',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            opacity: 0.02,
          }}
        />

        <div className="relative w-full max-w-3xl">
          <SmartSearch
            tools={allTools}
            toolCount={allTools.length}
            discoverLink
            examples={['Créer une vidéo', 'Écrire un article', 'Coder une app', 'Gérer ma compta']}
          />
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section
        style={{
          background: '#0d0d18',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <FadeIn className="max-w-4xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '206+', label: 'Outils' },
              { value: '13', label: 'Catégories' },
              { value: '50+', label: 'Métiers' },
              { value: 'Gratuit', label: 'Pour commencer' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  className="font-black mb-1"
                  style={{ fontSize: '2.25rem', lineHeight: 1, color: '#f0f0f8' }}
                >
                  {value}
                </p>
                <p className="text-sm font-light" style={{ color: '#5a5a78' }}>{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Les plus populaires ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-black mb-2" style={{ color: '#f0f0f8' }}>
            Les plus populaires
          </h2>
          <p className="font-light" style={{ color: '#5a5a78' }}>
            Les IAs plébiscitées par notre communauté
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topTools.map((tool, i) => (
            <FadeIn key={tool.slug} delay={i * 60}>
              <Link
                href={`/tools/${tool.slug}`}
                className="flex flex-col p-5 rounded-2xl h-full transition-all hover:scale-[1.02] group"
                style={{
                  background: '#0f0f1a',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="h-0.5 w-full rounded-full mb-5"
                  style={{ background: `linear-gradient(90deg, ${tool.color}, transparent)` }}
                />
                <ToolLogo tool={tool} size={44} className="mb-3" />
                <p
                  className="font-bold text-sm mb-1 group-hover:text-violet-400 transition-colors"
                  style={{ color: '#f0f0f8' }}
                >
                  {tool.name}
                </p>
                <p
                  className="text-xs font-light leading-relaxed flex-1"
                  style={{ color: '#5a5a78' }}
                >
                  {tool.tagline}
                </p>
                <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-xs font-semibold" style={{ color: '#a78bfa' }}>
                    Voir →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center" delay={200}>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.2)',
              color: '#a78bfa',
            }}
          >
            Explorer les 206+ outils →
          </Link>
        </FadeIn>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 pb-28 pt-4">
        <FadeIn>
          <div
            className="max-w-2xl mx-auto text-center rounded-3xl p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.08))',
              border: '1px solid rgba(124,58,237,0.18)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(124,58,237,0.15), transparent)',
              }}
            />
            <div className="relative">
              <p className="text-4xl mb-5">✨</p>
              <h2
                className="font-black mb-3 leading-tight"
                style={{ fontSize: '1.875rem', color: '#f0f0f8' }}
              >
                Pas encore inscrit ?
              </h2>
              <p className="font-light mb-8 text-lg" style={{ color: '#6b7280' }}>
                Créez votre espace personnalisé gratuitement
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                  boxShadow: '0 0 32px rgba(124,58,237,0.3)',
                }}
              >
                S&apos;inscrire gratuitement →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
