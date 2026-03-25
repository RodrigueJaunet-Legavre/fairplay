'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from './AuthProvider'
import { supabase } from '@/lib/supabase'

type Props = {
  toolSlug?: string
  metierSlug?: string
  onReviewAdded?: () => void
}

export default function ReviewForm({ toolSlug, metierSlug, onReviewAdded }: Props) {
  const { user } = useAuth()
  const [note, setNote] = useState(0)
  const [hover, setHover] = useState(0)
  const [texte, setTexte] = useState('')
  const [metierLabel, setMetierLabel] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user || !supabase) return
    supabase
      .from('profiles')
      .select('metier')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.metier) setMetierLabel(data.metier as string)
      })
  }, [user])

  if (!user) {
    return (
      <div
        className="rounded-xl p-5 text-center"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="text-sm mb-3" style={{ color: '#5a5a78' }}>
          Connectez-vous pour laisser un avis
        </p>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
        >
          Se connecter →
        </Link>
      </div>
    )
  }

  if (submitted) {
    return (
      <div
        className="rounded-xl p-5 text-center"
        style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}
      >
        <p className="text-sm font-medium" style={{ color: '#34d399' }}>
          ✓ Votre avis a été publié. Merci !
        </p>
      </div>
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!user || note === 0 || !supabase) return
    setSubmitting(true)
    setError(null)
    console.log('[ReviewForm] inserting for tool_slug:', toolSlug)
    const { error: err } = await supabase.from('reviews').insert({
      user_id: user.id,
      tool_slug: toolSlug ?? null,
      metier_slug: metierSlug ?? null,
      note,
      texte: texte.trim() || null,
    })
    setSubmitting(false)
    if (err) {
      console.error('[ReviewForm] insert error:', err)
      setError(`Erreur: ${err.message}`)
    } else {
      setSubmitted(true)
      onReviewAdded?.()
      window.dispatchEvent(new CustomEvent('fairplay:review-added', { detail: { toolSlug } }))
    }
  }

  return (
    <div
      className="rounded-xl p-5"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <h3 className="font-bold mb-4 text-sm" style={{ color: '#f0f0f8' }}>
        Laisser un avis
      </h3>

      {metierLabel && (
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xs" style={{ color: '#5a5a78' }}>Votre métier :</span>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(124,58,237,0.1)', color: '#a78bfa' }}
          >
            {metierLabel}
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Stars */}
        <div>
          <p className="text-xs mb-2" style={{ color: '#5a5a78' }}>Note</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setNote(i)}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(0)}
                className="text-2xl transition-transform hover:scale-110"
                style={{ color: i <= (hover || note) ? '#fbbf24' : '#2a2a3a' }}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-xs" style={{ color: '#5a5a78' }}>Votre avis (optionnel)</p>
            <span className="text-xs" style={{ color: texte.length > 280 ? '#f87171' : '#3a3a50' }}>
              {texte.length}/300
            </span>
          </div>
          <textarea
            value={texte}
            onChange={(e) => setTexte(e.target.value.slice(0, 300))}
            rows={3}
            placeholder="Partagez votre expérience…"
            className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none focus:ring-1"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#f0f0f8',
              caretColor: '#a78bfa',
            }}
          />
        </div>

        {error && <p className="text-xs" style={{ color: '#f87171' }}>{error}</p>}

        <button
          type="submit"
          disabled={note === 0 || submitting || !supabase}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity disabled:opacity-40"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
        >
          {submitting ? 'Envoi…' : 'Publier l\'avis'}
        </button>
      </form>
    </div>
  )
}
