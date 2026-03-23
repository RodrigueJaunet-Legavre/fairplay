import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getToolBySlug, getRelatedTools, tools } from '@/lib/tools'
import { allCatalogTools, getCatalogToolBySlug } from '@/lib/tools-index'
import type { CatalogTool } from '@/lib/catalog-types'
import ToolTabs from '@/app/ui/ToolTabs'
import ToolLogo from '@/app/ui/ToolLogo'

export function generateStaticParams() {
  const detailedSlugs = tools.map((t) => ({ slug: t.slug }))
  const catalogSlugs = allCatalogTools.map((t) => ({ slug: t.slug }))
  return [...detailedSlugs, ...catalogSlugs]
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const tool = getToolBySlug(slug) ?? getCatalogToolBySlug(slug)
  if (!tool) return {}
  return {
    title: `${tool.name} — Fairplay`,
    description: tool.tagline,
  }
}

const PRICING = {
  free:     { bg: 'rgba(16,185,129,0.12)', color: '#34d399', label: 'Gratuit' },
  freemium: { bg: 'rgba(124,58,237,0.12)', color: '#a78bfa', label: 'Freemium' },
  paid:     { bg: 'rgba(239,68,68,0.12)',  color: '#f87171', label: 'Payant' },
}

export default async function ToolDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const detailedTool = getToolBySlug(slug)
  const catalogTool: CatalogTool | undefined = detailedTool
    ? (detailedTool as unknown as CatalogTool)
    : getCatalogToolBySlug(slug)

  if (!catalogTool) notFound()

  const p = PRICING[catalogTool.pricing]
  const relatedTools = detailedTool
    ? getRelatedTools(detailedTool).map((t) => t as unknown as CatalogTool)
    : allCatalogTools
        .filter((t) => t.category === catalogTool.category && t.slug !== catalogTool.slug)
        .slice(0, 3)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: '#3a3a50' }}>
        <Link href="/" className="hover:text-violet-400 transition-colors" style={{ color: '#5a5a78' }}>Accueil</Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-violet-400 transition-colors" style={{ color: '#5a5a78' }}>Explorer</Link>
        <span>/</span>
        <span style={{ color: '#a78bfa' }}>{catalogTool.name}</span>
      </nav>

      {/* Hero card */}
      <div
        className="rounded-2xl overflow-hidden mb-8"
        style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div
          className="h-1.5"
          style={{ background: `linear-gradient(90deg, ${catalogTool.color}, ${catalogTool.color}50, transparent)` }}
        />

        <div className="p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <ToolLogo tool={catalogTool} size={80} className="rounded-2xl" />

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h1 className="text-3xl font-black" style={{ color: '#f0f0f8' }}>{catalogTool.name}</h1>
                <span
                  className="px-2.5 py-1 rounded-full text-sm font-medium"
                  style={{ background: p.bg, color: p.color }}
                >
                  {p.label}
                </span>
                {catalogTool.featured && (
                  <span
                    className="px-2.5 py-1 rounded-full text-sm font-medium"
                    style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24' }}
                  >
                    ★ À la une
                  </span>
                )}
              </div>

              <p className="text-lg mb-4" style={{ color: '#6b7280' }}>{catalogTool.tagline}</p>

              <div className="flex flex-wrap gap-2 text-sm">
                <Chip>{catalogTool.pricingDetail}</Chip>
                <Chip>★ {catalogTool.rating} / 5</Chip>
                {catalogTool.users && <Chip>{catalogTool.users} utilisateurs</Chip>}
                <Chip>▲ {catalogTool.upvotes.toLocaleString('fr')} votes</Chip>
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href={catalogTool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${catalogTool.color}, ${catalogTool.color}cc)` }}
              >
                Accéder à l'outil ↗
              </a>
              <button
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#a8a8c0',
                }}
              >
                ▲ Voter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed tabs for known tools, simplified view for catalog-only */}
      {detailedTool ? (
        <ToolTabs tool={detailedTool} alternatives={relatedTools} />
      ) : (
        <CatalogOverview tool={catalogTool} related={relatedTools} />
      )}
    </div>
  )
}

function CatalogOverview({ tool, related }: { tool: CatalogTool; related: CatalogTool[] }) {
  return (
    <div className="space-y-6">
      {/* Description */}
      <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <h2 className="font-bold mb-4" style={{ color: '#f0f0f8' }}>À propos</h2>
        <p className="leading-relaxed text-[15px]" style={{ color: '#a8a8c0' }}>{tool.description}</p>
      </div>

      {/* Use cases */}
      <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <h2 className="font-bold mb-4" style={{ color: '#f0f0f8' }}>Cas d'usage</h2>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg text-sm"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#a8a8c0' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related tools */}
      {related.length > 0 && (
        <div className="rounded-xl p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 className="font-bold mb-4" style={{ color: '#f0f0f8' }}>Outils similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((alt) => (
              <Link
                key={alt.slug}
                href={`/tools/${alt.slug}`}
                className="flex items-start gap-3 p-4 rounded-xl transition-all group"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <ToolLogo tool={alt} size={40} />
                <div className="min-w-0">
                  <p className="font-semibold text-sm mb-0.5 group-hover:text-violet-400 transition-colors" style={{ color: '#f0f0f8' }}>
                    {alt.name}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: '#5a5a78' }}>{alt.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="px-3 py-1 rounded-lg text-sm"
      style={{ background: 'rgba(255,255,255,0.05)', color: '#6b7280' }}
    >
      {children}
    </span>
  )
}
