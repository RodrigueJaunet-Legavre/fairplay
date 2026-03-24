'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'

type Review = {
  id: string
  note: number
  texte: string | null
  created_at: string
  user_metier?: string | null
}

type Props = {
  toolSlug?: string
  metierSlug?: string
  refreshKey?: number
}

export default function ReviewsList({ toolSlug, metierSlug, refreshKey }: Props) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    if (!supabase) { setLoading(false); return }
    setLoading(true)

    let query = supabase
      .from('reviews')
      .select('id, note, texte, created_at, profiles(metier)')
      .order('created_at', { ascending: false })
      .limit(20)

    if (toolSlug) query = query.eq('tool_slug', toolSlug)
    if (metierSlug) query = query.eq('metier_slug', metierSlug)

    const { data } = await query
    if (data) {
      setReviews(
        data.map((r: Record<string, unknown>) => ({
          id: r.id as string,
          note: r.note as number,
          texte: r.texte as string | null,
          created_at: r.created_at as string,
          user_metier: (r.profiles as Record<string, unknown> | null)?.metier as string | null ?? null,
        }))
      )
    }
    setLoading(false)
  }, [toolSlug, metierSlug])

  useEffect(() => { load() }, [load, refreshKey])

  if (loading) {
    return (
      <div className="space-y-3 mb-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="rounded-xl p-4 animate-pulse"
            style={{ background: 'rgba(255,255,255,0.02)', height: 72 }}
          />
        ))}
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <p className="text-sm mb-4" style={{ color: '#3a3a50' }}>
        Aucun avis pour le moment. Soyez le premier !
      </p>
    )
  }

  const avg = reviews.reduce((s, r) => s + r.note, 0) / reviews.length

  return (
    <div className="mb-4">
      {/* Summary */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl font-black" style={{ color: '#fbbf24' }}>
          ★ {avg.toFixed(1)}
        </span>
        <span className="text-sm" style={{ color: '#5a5a78' }}>
          {reviews.length} avis
        </span>
      </div>

      <div className="space-y-3">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="rounded-xl p-4"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span style={{ color: '#fbbf24', fontSize: 13 }}>
                  {'★'.repeat(r.note)}{'☆'.repeat(5 - r.note)}
                </span>
                {r.user_metier && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(124,58,237,0.08)', color: '#a78bfa' }}
                  >
                    {r.user_metier}
                  </span>
                )}
              </div>
              <span className="text-xs" style={{ color: '#3a3a50' }}>
                {new Date(r.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            </div>
            {r.texte && (
              <p className="text-sm leading-relaxed" style={{ color: '#a8a8c0' }}>
                {r.texte}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
