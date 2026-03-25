'use client'

import Link from 'next/link'
import type { CatalogTool } from '@/lib/catalog-types'
import ToolLogo from './ToolLogo'
import FavoriteButton from './FavoriteButton'
import { DynamicRatingStars } from './DynamicRating'

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
          <ToolLogo tool={tool} size={48} className="transition-transform group-hover:scale-110" />
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
          <DynamicRatingStars toolSlug={tool.slug} fallback={tool.rating} color={tool.color} />
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
          className="mt-4 pt-3 space-y-2.5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span style={{ color: tool.color }}>▲</span>
              <span className="text-sm font-semibold" style={{ color: '#f0f0f8' }}>
                {tool.upvotes.toLocaleString('fr')}
              </span>
              <span className="text-xs" style={{ color: '#3a3a50' }}>votes</span>
            </div>
          </div>
          <FavoriteButton toolSlug={tool.slug} fullWidth />
        </div>
      </div>
    </Link>
  )
}
