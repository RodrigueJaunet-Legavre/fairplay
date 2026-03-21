import Link from 'next/link'
import type { CatalogTool } from '@/lib/catalog-types'

const PRICING = {
  free:     { bg: 'rgba(16,185,129,0.12)', color: '#34d399', label: 'Gratuit' },
  freemium: { bg: 'rgba(124,58,237,0.12)', color: '#a78bfa', label: 'Freemium' },
  paid:     { bg: 'rgba(239,68,68,0.12)',  color: '#f87171', label: 'Payant' },
}

export default function ToolCard({ tool, featured }: { tool: CatalogTool; featured?: boolean }) {
  const p = PRICING[tool.pricing]

  return (
    <Link href={`/tools/${tool.slug}`} className="card flex flex-col group">
      {/* Top color strip */}
      <div
        className="h-1 w-full rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${tool.color}, ${tool.color}40)` }}
      />

      <div className="flex flex-col flex-1 p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:scale-110"
            style={{ background: `${tool.color}14` }}
          >
            {tool.emoji}
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span
              className="px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ background: p.bg, color: p.color }}
            >
              {p.label}
            </span>
            {featured && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-medium"
                style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24' }}
              >
                ★ Une
              </span>
            )}
          </div>
        </div>

        {/* Name + tagline */}
        <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#f0f0f8' }}>
          {tool.name}
        </h3>
        <p className="text-xs leading-relaxed flex-1" style={{ color: '#6b7280' }}>
          {tool.tagline}
        </p>

        {/* Stars + users */}
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="w-3 h-3"
                fill={i < Math.round(tool.rating) ? tool.color : 'none'}
                stroke={tool.color}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            ))}
            <span className="text-xs ml-0.5" style={{ color: '#6b7280' }}>{tool.rating}</span>
          </div>
          {tool.users && <span className="text-xs" style={{ color: '#4b5563' }}>{tool.users} utilisateurs</span>}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tool.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs truncate max-w-[140px]"
              style={{ background: 'rgba(255,255,255,0.04)', color: '#5a5a78' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between mt-4 pt-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-1.5">
            <span style={{ color: tool.color }}>▲</span>
            <span className="text-sm font-semibold" style={{ color: '#f0f0f8' }}>
              {tool.upvotes.toLocaleString('fr')}
            </span>
          </div>
          <span
            className="text-xs font-medium transition-all group-hover:translate-x-1"
            style={{ color: '#a78bfa' }}
          >
            Voir →
          </span>
        </div>
      </div>
    </Link>
  )
}
