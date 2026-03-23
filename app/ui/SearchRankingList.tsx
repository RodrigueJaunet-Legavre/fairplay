'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import type { CatalogTool } from '@/lib/catalog-types'
import { findBestMatches } from '@/lib/matching'
import type { MatchResult } from '@/lib/matching'

const PRICING_LABEL: Record<CatalogTool['pricing'], { label: string; bg: string; color: string }> = {
  free:     { label: 'Gratuit',  bg: 'rgba(16,185,129,0.12)',  color: '#34d399' },
  freemium: { label: 'Freemium', bg: 'rgba(124,58,237,0.12)', color: '#a78bfa' },
  paid:     { label: 'Payant',   bg: 'rgba(239,68,68,0.12)',  color: '#f87171' },
}

function scoreToPercent(score: number): number {
  return Math.min(99, Math.max(1, Math.round(score * 11)))
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.round(rating)
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5"
          fill={i < full ? '#fbbf24' : 'none'}
          stroke={i < full ? '#fbbf24' : '#3a3a50'}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  )
}

type RankBadge = {
  label: string
  bg: string
  color: string
  border: string
  glow?: string
}

function getRankBadge(rank: number): RankBadge {
  if (rank === 1) return {
    label: '⭐ Meilleur choix',
    bg: 'linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.08))',
    color: '#fbbf24',
    border: '1.5px solid rgba(251,191,36,0.4)',
    glow: '0 0 24px rgba(251,191,36,0.1)',
  }
  if (rank === 2) return {
    label: '🥈 #2',
    bg: 'rgba(148,163,184,0.08)',
    color: '#94a3b8',
    border: '1px solid rgba(148,163,184,0.25)',
  }
  if (rank === 3) return {
    label: '🥉 #3',
    bg: 'rgba(180,120,70,0.08)',
    color: '#cd7f32',
    border: '1px solid rgba(180,120,70,0.25)',
  }
  return {
    label: `#${rank}`,
    bg: 'rgba(255,255,255,0.03)',
    color: '#5a5a78',
    border: '1px solid rgba(255,255,255,0.07)',
  }
}

function RankingCard({ result, rank }: { result: MatchResult; rank: number }) {
  const { tool, matchedTags } = result
  const pct = scoreToPercent(result.score)
  const badge = getRankBadge(rank)
  const pricing = PRICING_LABEL[tool.pricing]
  const isFirst = rank === 1

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all"
      style={{
        background: isFirst
          ? 'linear-gradient(135deg, rgba(251,191,36,0.06), rgba(15,15,26,1) 60%)'
          : '#0f0f1a',
        border: badge.border,
        boxShadow: badge.glow,
      }}
    >
      {/* Rank banner */}
      <div
        className="flex items-center justify-between px-5 py-2.5"
        style={{ background: badge.bg, borderBottom: badge.border }}
      >
        <span className="text-sm font-bold" style={{ color: badge.color }}>{badge.label}</span>
        <span
          className="text-xs font-semibold tabular-nums px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa' }}
        >
          {pct}% de correspondance
        </span>
      </div>

      {/* Content */}
      <div className={`p-5 ${isFirst ? 'sm:p-7' : ''}`}>
        <div className="flex items-start gap-4">
          {/* Emoji icon */}
          <div
            className={`shrink-0 rounded-xl flex items-center justify-center ${isFirst ? 'w-14 h-14 text-3xl' : 'w-11 h-11 text-2xl'}`}
            style={{ background: `${tool.color}18` }}
          >
            {tool.emoji}
          </div>

          <div className="flex-1 min-w-0">
            {/* Name */}
            <h3
              className={`font-black leading-tight mb-1 ${isFirst ? 'text-xl' : 'text-base'}`}
              style={{ color: '#f0f0f8' }}
            >
              {tool.name}
            </h3>

            {/* Tagline */}
            <p className="text-sm mb-3" style={{ color: '#6b7280' }}>
              {tool.tagline}
            </p>

            {/* Pricing + Stars row */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span
                className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                style={{ background: pricing.bg, color: pricing.color }}
              >
                {pricing.label}
                {tool.pricingDetail ? ` · ${tool.pricingDetail}` : ''}
              </span>

              <div className="flex items-center gap-1.5">
                <StarRating rating={tool.rating} />
                <span className="text-xs" style={{ color: '#5a5a78' }}>facilité</span>
              </div>
            </div>

            {/* Matched tags */}
            {matchedTags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {matchedTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs"
                    style={{ background: 'rgba(124,58,237,0.1)', color: '#7c6aad' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2">
              <Link
                href={`/tools/${tool.slug}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: isFirst
                    ? 'linear-gradient(135deg, #7c3aed, #a855f7)'
                    : 'rgba(124,58,237,0.12)',
                  color: isFirst ? '#fff' : '#a78bfa',
                  border: isFirst ? 'none' : '1px solid rgba(124,58,237,0.2)',
                }}
              >
                Voir le guide complet
              </Link>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  color: '#a8a8c0',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                Accéder à l'outil →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SearchRankingList({ query, tools }: { query: string; tools: CatalogTool[] }) {
  const results = useMemo(() => findBestMatches(query, tools, 10), [query, tools])

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-sm mb-4 transition-colors"
          style={{ color: '#5a5a78' }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voir tous les outils
        </Link>

        <h1 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: '#f0f0f8' }}>
          Top {results.length} des meilleures IAs pour{' '}
          <span style={{ color: '#a78bfa' }}>"{query}"</span>
        </h1>

        {results.length < 10 && results.length > 0 && (
          <p className="text-sm" style={{ color: '#5a5a78' }}>
            {results.length} outil{results.length !== 1 ? 's' : ''} trouvé{results.length !== 1 ? 's' : ''} pour votre recherche
          </p>
        )}
      </div>

      {results.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-5xl mb-4">🔭</p>
          <p className="text-lg font-semibold mb-2" style={{ color: '#f0f0f8' }}>Aucun outil trouvé</p>
          <p className="text-sm mb-6" style={{ color: '#5a5a78' }}>
            Essayez d'autres mots-clés ou parcourez le catalogue
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
            style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: '#a78bfa' }}
          >
            Parcourir tous les outils
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {results.map((result, i) => (
            <RankingCard key={result.tool.slug} result={result} rank={i + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
