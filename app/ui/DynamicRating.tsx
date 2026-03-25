'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'

// ─── Core hook ────────────────────────────────────────────────────────────────

export function useToolRating(toolSlug: string, fallback: number) {
  const [avg, setAvg] = useState(fallback)
  const [count, setCount] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const load = useCallback(async () => {
    if (!supabase) return
    const { data } = await supabase
      .from('reviews')
      .select('note')
      .eq('tool_slug', toolSlug)
    if (data) {
      setCount(data.length)
      setAvg(
        data.length > 0
          ? Math.round((data.reduce((s: number, r: { note: number }) => s + r.note, 0) / data.length) * 10) / 10
          : fallback
      )
      setLoaded(true)
    }
  }, [toolSlug, fallback])

  useEffect(() => {
    load()
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      if (!detail?.toolSlug || detail.toolSlug === toolSlug) load()
    }
    window.addEventListener('fairplay:review-added', handler)
    return () => window.removeEventListener('fairplay:review-added', handler)
  }, [load, toolSlug])

  return { avg, count, hasFairplayReviews: loaded && count > 0 }
}

// ─── Star SVG with half-fill ──────────────────────────────────────────────────

const STAR_PATH = 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'

function StarSvg({ index, avg, color, size = 12 }: { index: number; avg: number; color: string; size?: number }) {
  const filled = avg >= index + 1
  const half = !filled && avg >= index + 0.5
  const gradId = `sg-${color.replace(/[^a-zA-Z0-9]/g, '')}-${index}`
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      {half && (
        <defs>
          <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor={color} />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      )}
      <path
        strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        stroke={color}
        fill={filled ? color : half ? `url(#${gradId})` : 'none'}
        d={STAR_PATH}
      />
    </svg>
  )
}

// ─── Components ───────────────────────────────────────────────────────────────

/** Chip for the tool detail page hero */
export function DynamicRatingChip({ toolSlug, fallback }: { toolSlug: string; fallback: number }) {
  const { avg, count, hasFairplayReviews } = useToolRating(toolSlug, fallback)
  return (
    <span
      className="px-3 py-1 rounded-lg text-sm flex items-center gap-1.5"
      style={{ background: 'rgba(255,255,255,0.05)', color: '#fbbf24' }}
    >
      <span>★ {avg.toFixed(1)}/5</span>
      <span style={{ color: '#3a3a50' }}>·</span>
      <span style={{ color: '#6b7280' }}>
        {hasFairplayReviews ? `${count} avis FairPlay` : 'Note indicative'}
      </span>
    </span>
  )
}

/** Stars row for catalog cards (ToolCard) */
export function DynamicRatingStars({ toolSlug, fallback, color }: { toolSlug: string; fallback: number; color: string }) {
  const { avg, count, hasFairplayReviews } = useToolRating(toolSlug, fallback)
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarSvg key={i} index={i} avg={avg} color={color} />
      ))}
      <span className="text-xs ml-0.5" style={{ color: '#6b7280' }}>
        {avg.toFixed(1)}{hasFairplayReviews && count > 0 ? ` (${count})` : ''}
      </span>
    </div>
  )
}

/** Inline text badge — for dashboard, metiers, top pages */
export function RatingBadge({ toolSlug, fallback, className }: { toolSlug: string; fallback: number; className?: string }) {
  const { avg, count, hasFairplayReviews } = useToolRating(toolSlug, fallback)
  return (
    <span className={className} style={{ color: '#fbbf24' }}>
      ★ {avg.toFixed(1)}/5
      <span style={{ color: hasFairplayReviews ? '#5a5a78' : '#3a3a50' }}>
        {' · '}{hasFairplayReviews ? `${count} avis` : 'Note indicative'}
      </span>
    </span>
  )
}

/** Stars for search ranking list — same visual as StarRating but dynamic */
export function DynamicStarRating({ toolSlug, fallback }: { toolSlug: string; fallback: number }) {
  const { avg } = useToolRating(toolSlug, fallback)
  const full = Math.round(avg)
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className="w-3.5 h-3.5" fill={i < full ? '#fbbf24' : 'none'} stroke={i < full ? '#fbbf24' : '#3a3a50'} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={STAR_PATH} />
        </svg>
      ))}
    </div>
  )
}
