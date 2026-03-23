import Link from 'next/link'
import { getFeaturedTools, tools } from '@/lib/tools'
import { allCatalogTools } from '@/lib/tools-index'
import type { CatalogTool } from '@/lib/catalog-types'
import ToolCard from '@/app/ui/ToolCard'
import SmartSearch from '@/app/ui/SmartSearch'
import HomeCategoryGrid from '@/app/ui/HomeCategoryGrid'
import ToolLogo from '@/app/ui/ToolLogo'

const allTools: CatalogTool[] = [
  ...(tools as unknown as CatalogTool[]),
  ...allCatalogTools,
]


export default function HomePage() {
  const featured = getFeaturedTools()
  const topTools = [...allTools].sort((a, b) => b.upvotes - a.upvotes).slice(0, 8)

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% -5%, rgba(124,58,237,0.18) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            opacity: 0.025,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          {/* Badge */}
          <div
            className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-8"
            style={{
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.25)',
              color: '#a78bfa',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            {allTools.length}+ outils IA — mis à jour chaque semaine
          </div>

          {/* Title */}
          <h1
            className="animate-fade-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.08]"
            style={{ color: '#f0f0f8' }}
          >
            Trouvez l'IA parfaite{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">pour chaque tâche</span>
          </h1>

          <p
            className="animate-fade-up delay-200 text-xl sm:text-2xl mb-3 max-w-xl mx-auto leading-relaxed"
            style={{ color: '#5a5a78' }}
          >
            Décrivez votre besoin — on trouve l'outil IA qu'il vous faut.
          </p>

          <p
            className="animate-fade-up delay-200 text-sm mb-10"
            style={{ color: '#3a3a50' }}
          >
            Pas besoin d'être expert · Gratuit · En français
          </p>

          {/* Smart search */}
          <div className="animate-fade-up delay-300">
            <SmartSearch tools={allTools} />
          </div>

          {/* Nouveau ici */}
          <div className="animate-fade-up delay-350 mt-4">
            <Link
              href="/decouvrir"
              className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full transition-all"
              style={{
                background: 'rgba(124,58,237,0.08)',
                border: '1px solid rgba(124,58,237,0.2)',
                color: '#a78bfa',
              }}
            >
              ✨ Nouveau ici ? Commencez par Découvrir →
            </Link>
          </div>

          {/* Example queries */}
          <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center gap-2 mt-5">
            <span className="text-xs" style={{ color: '#3a3a50' }}>Essayez :</span>
            {[
              'créer une vidéo de présentation',
              'écrire des emails marketing',
              'générer des images réalistes',
              'déboguer mon code',
            ].map((q) => (
              <Link
                key={q}
                href={`/tools?q=${encodeURIComponent(q)}`}
                className="px-3 py-1 rounded-full text-xs transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: '#6b7280',
                }}
              >
                {q}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: `${allTools.length}+`, label: 'Outils IA' },
              { value: '13', label: 'Catégories' },
              { value: '500M+', label: 'Utilisateurs actifs' },
              { value: '4.5★', label: 'Note moyenne' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-black mb-0.5" style={{ color: '#f0f0f8' }}>{value}</p>
                <p className="text-xs" style={{ color: '#5a5a78' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Categories ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-xl font-bold mb-6" style={{ color: '#f0f0f8' }}>Explorer par catégorie</h2>
        <HomeCategoryGrid />
      </section>

      {/* ── Featured ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: '#f0f0f8' }}>Outils à la une</h2>
            <p className="text-sm mt-1" style={{ color: '#5a5a78' }}>Sélectionnés par notre équipe</p>
          </div>
          <Link href="/tools" className="text-sm font-medium" style={{ color: '#a78bfa' }}>
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} featured />
          ))}
        </div>
      </section>

      {/* ── Top voted leaderboard ────────────────────────────── */}
      <section
        className="py-16"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: '#f0f0f8' }}>Les plus populaires</h2>
              <p className="text-sm mt-1" style={{ color: '#5a5a78' }}>Classés par votes de la communauté</p>
            </div>
            <Link href="/tools" className="text-sm font-medium" style={{ color: '#a78bfa' }}>
              Voir tout →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {topTools.map((tool, i) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all group"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {/* Rank */}
                <span
                  className="text-xl font-black w-8 text-center shrink-0 tabular-nums"
                  style={{ color: i < 3 ? '#a78bfa' : '#2a2a3a' }}
                >
                  {i + 1}
                </span>

                {/* Logo */}
                <ToolLogo tool={tool} size={44} />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-semibold text-sm truncate" style={{ color: '#f0f0f8' }}>
                      {tool.name}
                    </p>
                    <span
                      className="shrink-0 px-1.5 py-0.5 rounded-full text-xs"
                      style={{
                        background: tool.pricing === 'free' ? 'rgba(16,185,129,0.12)' : tool.pricing === 'freemium' ? 'rgba(124,58,237,0.12)' : 'rgba(239,68,68,0.12)',
                        color: tool.pricing === 'free' ? '#34d399' : tool.pricing === 'freemium' ? '#a78bfa' : '#f87171',
                      }}
                    >
                      {tool.pricing === 'free' ? 'Gratuit' : tool.pricing === 'freemium' ? 'Freemium' : 'Payant'}
                    </span>
                  </div>
                  <p className="text-xs truncate" style={{ color: '#5a5a78' }}>{tool.tagline}</p>
                </div>

                {/* Score */}
                <div className="shrink-0 text-right">
                  <p className="text-sm font-bold tabular-nums" style={{ color: '#f0f0f8' }}>
                    {tool.upvotes.toLocaleString('fr')}
                  </p>
                  <p className="text-xs" style={{ color: '#3a3a50' }}>votes</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div
            className="rounded-2xl p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(236,72,153,0.08))',
              border: '1px solid rgba(124,58,237,0.18)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(124,58,237,0.12), transparent)' }}
            />
            <div className="relative">
              <p className="text-4xl mb-4">🚀</p>
              <h2 className="text-3xl font-black mb-3" style={{ color: '#f0f0f8' }}>
                Vous avez créé un outil IA ?
              </h2>
              <p className="text-lg mb-8" style={{ color: '#6b7280' }}>
                Soumettez-le à notre communauté et obtenez vos premiers utilisateurs dès aujourd'hui.
              </p>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              >
                Soumettre un outil →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
