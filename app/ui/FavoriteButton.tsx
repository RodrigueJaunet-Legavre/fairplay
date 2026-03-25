'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bookmark, BookmarkCheck } from 'lucide-react'
import { useAuth } from '@/app/ui/AuthProvider'
import { supabase } from '@/lib/supabase'

const PARTICLE_COLORS = ['#a78bfa', '#ec4899', '#fbbf24', '#818cf8', '#c084fc', '#f472b6', '#a78bfa', '#fbbf24']

type Props = {
  toolSlug: string
  fullWidth?: boolean
}

export default function FavoriteButton({ toolSlug, fullWidth = false }: Props) {
  const { user } = useAuth()
  const [favorited, setFavorited] = useState(false)
  const [loading, setLoading] = useState(false)
  const [bursting, setBursting] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user || !supabase) return
    supabase
      .from('favorites')
      .select('id')
      .eq('user_id', user.id)
      .eq('tool_slug', toolSlug)
      .maybeSingle()
      .then(({ data }) => setFavorited(!!data))
  }, [user, toolSlug])

  async function toggle(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    if (loading) return

    if (!user) {
      setShowModal(true)
      return
    }
    if (!supabase) return

    setLoading(true)
    setError(null)
    if (favorited) {
      const { error: err } = await supabase.from('favorites').delete().eq('user_id', user.id).eq('tool_slug', toolSlug)
      if (err) {
        console.error('[FavoriteButton] delete error:', err)
        setError('Erreur — réessayez')
      } else {
        setFavorited(false)
      }
    } else {
      const { error: err } = await supabase.from('favorites').insert({ user_id: user.id, tool_slug: toolSlug })
      if (err) {
        console.error('[FavoriteButton] insert error:', err)
        setError('Erreur — réessayez')
      } else {
        setFavorited(true)
        setBursting(true)
        setTimeout(() => setBursting(false), 700)
        window.dispatchEvent(new CustomEvent('fairplay:toast', {
          detail: { message: '✓ Ajouté à vos favoris' },
        }))
      }
    }
    setLoading(false)
  }

  const savedStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    color: 'white',
    border: '1px solid transparent',
    boxShadow: '0 0 16px rgba(124,58,237,0.35)',
  }
  const unsavedStyle: React.CSSProperties = hovered
    ? {
        background: 'rgba(124,58,237,0.12)',
        color: '#a78bfa',
        border: '1px solid rgba(124,58,237,0.35)',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 14px rgba(124,58,237,0.15)',
      }
    : {
        background: 'rgba(255,255,255,0.04)',
        color: '#6b7280',
        border: '1px solid rgba(255,255,255,0.1)',
      }

  return (
    <>
      <button
        onClick={toggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        disabled={loading}
        className={`relative flex items-center justify-center gap-2 rounded-full text-xs font-semibold transition-all duration-200 py-2 px-4 overflow-visible ${bursting ? 'fav-btn-saving' : ''} ${fullWidth ? 'w-full' : ''}`}
        style={favorited ? savedStyle : unsavedStyle}
        aria-label={favorited ? 'Retirer des favoris' : 'Sauvegarder'}
      >
        {/* Confetti particles */}
        {bursting && PARTICLE_COLORS.map((color, i) => (
          <span
            key={i}
            className="fav-particle"
            style={{
              '--fav-angle': `${(360 / 8) * i}deg`,
              '--fav-color': color,
            } as React.CSSProperties}
          />
        ))}

        {favorited ? <BookmarkCheck size={13} /> : <Bookmark size={13} />}
        <span>{favorited ? 'Sauvegardé' : 'Sauvegarder'}</span>
      </button>
      {error && (
        <p className="text-xs mt-1 text-center" style={{ color: '#f87171' }}>{error}</p>
      )}

      {/* Modal for non-connected users */}
      {showModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(10px)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="animate-scale-in rounded-2xl p-8 max-w-sm w-full text-center"
            style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.1)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-4xl mb-4">🔖</p>
            <h3 className="text-xl font-black mb-2" style={{ color: '#f0f0f8' }}>
              Sauvegardez vos IAs favorites
            </h3>
            <p className="text-sm mb-6" style={{ color: '#5a5a78' }}>
              Créez un compte gratuit pour sauvegarder vos outils préférés et y accéder depuis votre espace.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/signup"
                onClick={() => setShowModal(false)}
                className="block w-full py-3 rounded-xl font-bold text-sm text-white text-center"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              >
                S&apos;inscrire gratuitement
              </Link>
              <Link
                href="/login"
                onClick={() => setShowModal(false)}
                className="block w-full py-3 rounded-xl font-medium text-sm text-center transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#a8a8c0',
                }}
              >
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
