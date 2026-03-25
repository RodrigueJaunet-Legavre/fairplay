'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/ui/AuthProvider'
import { supabase } from '@/lib/supabase'
import { getToolsForProfession, PROFESSIONS } from '@/lib/professions'
import ToolLogo from '@/app/ui/ToolLogo'
import type { CatalogTool } from '@/lib/catalog-types'
import type { User } from '@supabase/supabase-js'
import { getCatalogToolBySlug } from '@/lib/tools-index'
import { getToolBySlug } from '@/lib/tools'

type Profile = {
  metier: string
  niveau: string
  objectifs: string[]
}

const PRICING_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  free:     { bg: 'rgba(16,185,129,0.12)',  color: '#34d399', label: 'Gratuit' },
  freemium: { bg: 'rgba(124,58,237,0.12)', color: '#a78bfa', label: 'Freemium' },
  paid:     { bg: 'rgba(239,68,68,0.12)',   color: '#f87171', label: 'Payant' },
}

function getFirstName(user: User): string {
  const email = user.email ?? ''
  const prefix = email.split('@')[0]
  const name = prefix.split(/[._-]/)[0]
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export default function DashboardPage() {
  const router = useRouter()
  const { user, loading, isPremium } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    if (loading) return
    if (!user) { router.replace('/login'); return }

    if (!supabase) {
      // Demo mode: show generic dashboard
      setProfile({ metier: 'Entrepreneur', niveau: 'J\'ai déjà testé quelques outils', objectifs: ['Gagner du temps'] })
      setChecking(false)
      return
    }

    supabase
      .from('profiles')
      .select('metier, niveau, objectifs')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (!data) { router.replace('/onboarding'); return }
        setProfile(data as Profile)
        setChecking(false)
      })
  }, [user, loading, router])

  if (loading || checking) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
      </div>
    )
  }

  if (!user || !profile) return null

  const allTools = getToolsForProfession(profile.metier)
  const tools = isPremium ? allTools : allTools.slice(0, 2)
  const profEmoji = PROFESSIONS.find((p) => p.id === profile.metier)?.emoji ?? '✨'
  const firstName = getFirstName(user)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Greeting */}
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: '#a78bfa' }}>Bienvenue sur votre espace</p>
            <h1 className="text-3xl sm:text-4xl font-black" style={{ color: '#f0f0f8' }}>
              Bonjour {firstName} ! {profEmoji}
            </h1>
            <p className="text-lg mt-2" style={{ color: '#5a5a78' }}>
              Voici les meilleures IAs pour <strong style={{ color: '#a8a8c0' }}>{profile.metier}</strong>
            </p>
          </div>
          <Link
            href="/tools"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
          >
            Explorer tous les outils →
          </Link>
        </div>

        {/* Profile chips */}
        <div className="flex flex-wrap gap-2">
          <Chip>{profEmoji} {profile.metier}</Chip>
          <Chip>🎯 {profile.niveau}</Chip>
          {profile.objectifs.map((o) => <Chip key={o}>{o}</Chip>)}
          <Link
            href="/onboarding"
            className="px-3 py-1.5 rounded-lg text-xs transition-all"
            style={{ color: '#5a5a78', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            ✏️ Modifier mon profil
          </Link>
        </div>
      </div>

      {/* Tool recommendations */}
      <section>
        <h2 className="text-lg font-bold mb-5" style={{ color: '#f0f0f8' }}>
          Outils recommandés pour vous
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>

          {/* Premium gate */}
          {!isPremium && (
            <div
              className="mt-4 rounded-2xl p-8 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(251,191,36,0.06), rgba(124,58,237,0.06))',
                border: '1px solid rgba(251,191,36,0.18)',
              }}
            >
              <p className="text-3xl mb-3">⭐</p>
              <h3 className="text-lg font-black mb-2" style={{ color: '#f0f0f8' }}>
                Débloquez les 4 autres recommandations
              </h3>
              <p className="text-sm mb-5" style={{ color: '#6b7280' }}>
                Les membres Premium accèdent aux 6 outils personnalisés, aux comparaisons complètes et aux recherches illimitées.
              </p>
              <Link
                href="/premium"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', color: '#1a0a00' }}
              >
                Essai gratuit 7 jours →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Favorites */}
      <section className="mt-12">
        <h2 className="text-lg font-bold mb-1" style={{ color: '#f0f0f8' }}>Mes IAs favorites</h2>
        <p className="text-sm mb-0" style={{ color: '#5a5a78' }}>Les outils que vous avez sauvegardés</p>
        <FavoritesSection userId={user.id} />
      </section>

      {/* Quick links */}
      <section className="mt-12">
        <h2 className="text-lg font-bold mb-5" style={{ color: '#f0f0f8' }}>Continuer votre exploration</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: '/decouvrir', emoji: '✨', title: 'Comprendre l\'IA', desc: 'Guides et ressources pour débutants' },
            { href: '/tools', emoji: '🔍', title: 'Explorer le catalogue', desc: `600+ outils classés par catégorie` },
            { href: '/tools?category=generaliste', emoji: '💬', title: 'Assistants IA', desc: 'ChatGPT, Claude, Gemini…' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-start gap-3 p-4 rounded-xl transition-all group"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="text-2xl">{l.emoji}</span>
              <div>
                <p className="font-semibold text-sm group-hover:text-violet-400 transition-colors" style={{ color: '#f0f0f8' }}>
                  {l.title}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#5a5a78' }}>{l.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

function ToolCard({ tool }: { tool: CatalogTool }) {
  const p = PRICING_STYLE[tool.pricing]
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="flex flex-col p-5 rounded-xl transition-all group"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div
        className="h-0.5 w-full rounded-full mb-4"
        style={{ background: `linear-gradient(90deg, ${tool.color}, transparent)` }}
      />
      <div className="flex items-start gap-3 mb-3">
        <ToolLogo tool={tool} size={44} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
            <p className="font-bold text-sm group-hover:text-violet-400 transition-colors" style={{ color: '#f0f0f8' }}>
              {tool.name}
            </p>
            <span
              className="text-xs px-1.5 py-0.5 rounded-full"
              style={{ background: p.bg, color: p.color }}
            >
              {p.label}
            </span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: '#5a5a78' }}>{tool.tagline}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="text-xs" style={{ color: '#3a3a50' }}>★ {tool.rating} / 5</span>
        <span className="text-xs font-medium" style={{ color: '#a78bfa' }}>Voir l'outil →</span>
      </div>
    </Link>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="px-3 py-1.5 rounded-lg text-xs font-medium"
      style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)', color: '#a78bfa' }}
    >
      {children}
    </span>
  )
}

type FavoriteItem = {
  slug: string
  tool: CatalogTool
  review: { note: number; texte: string } | null
}

function FavoritesSection({ userId }: { userId: string }) {
  const [items, setItems] = useState<FavoriteItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) { setLoading(false); return }
    async function load() {
      const { data: favs } = await supabase!
        .from('favorites')
        .select('tool_slug')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
      if (!favs?.length) { setLoading(false); return }
      const slugs = favs.map((f: { tool_slug: string }) => f.tool_slug)
      const { data: reviews } = await supabase!
        .from('reviews')
        .select('tool_slug,note,texte')
        .eq('user_id', userId)
        .in('tool_slug', slugs)
      const reviewMap: Record<string, { note: number; texte: string }> = Object.fromEntries(
        (reviews ?? []).map((r: { tool_slug: string; note: number; texte: string }) => [r.tool_slug, r])
      )
      const result: FavoriteItem[] = slugs
        .map((slug: string) => {
          const tool = getCatalogToolBySlug(slug) ?? (getToolBySlug(slug) as unknown as CatalogTool | undefined)
          if (!tool) return null
          return { slug, tool, review: reviewMap[slug] ?? null }
        })
        .filter(Boolean) as FavoriteItem[]
      setItems(result)
      setLoading(false)
    }
    load()
  }, [userId])

  function removeItem(slug: string) {
    setItems((prev) => prev.filter((i) => i.slug !== slug))
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-40 rounded-xl animate-pulse"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          />
        ))}
      </div>
    )
  }

  if (!items.length) {
    return (
      <div
        className="mt-5 rounded-xl p-10 text-center"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="text-3xl mb-3">🤍</p>
        <p className="font-medium mb-1" style={{ color: '#f0f0f8' }}>Aucun favori pour l&apos;instant</p>
        <p className="text-sm mb-5" style={{ color: '#5a5a78' }}>
          Explorez le catalogue et sauvegardez les IAs qui vous intéressent !
        </p>
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
        >
          Explorer le catalogue →
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {items.map(({ slug, tool, review }) => (
        <FavoriteCard key={slug} tool={tool} review={review} userId={userId} onRemove={() => removeItem(slug)} />
      ))}
    </div>
  )
}

function FavoriteCard({
  tool,
  review,
  userId,
  onRemove,
}: {
  tool: CatalogTool
  review: { note: number; texte: string } | null
  userId: string
  onRemove: () => void
}) {
  const [removing, setRemoving] = useState(false)
  const p = PRICING_STYLE[tool.pricing]

  async function remove() {
    if (!supabase || removing) return
    setRemoving(true)
    await supabase.from('favorites').delete().eq('user_id', userId).eq('tool_slug', tool.slug)
    onRemove()
  }

  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${tool.color}, transparent)` }} />
      <div className="flex flex-col flex-1 p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <ToolLogo tool={tool} size={44} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
              <p className="font-bold text-sm" style={{ color: '#f0f0f8' }}>{tool.name}</p>
              <span
                className="text-xs px-1.5 py-0.5 rounded-full"
                style={{ background: p.bg, color: p.color }}
              >
                {p.label}
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#5a5a78' }}>{tool.tagline}</p>
          </div>
        </div>

        {/* Tool rating */}
        <p className="text-xs mb-3" style={{ color: '#3a3a50' }}>★ {tool.rating} / 5</p>

        {/* User review */}
        {review && (
          <div
            className="rounded-lg p-3 mb-3"
            style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.12)' }}
          >
            <div className="flex items-center gap-0.5 mb-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: i < review.note ? '#fbbf24' : '#3a3a50', fontSize: 12 }}>★</span>
              ))}
            </div>
            {review.texte && (
              <p className="text-xs leading-relaxed mb-2 line-clamp-2" style={{ color: '#a8a8c0' }}>
                {review.texte}
              </p>
            )}
            <Link href={`/tools/${tool.slug}`} className="text-xs" style={{ color: '#a78bfa' }}>
              Modifier mon avis →
            </Link>
          </div>
        )}

        {/* Actions */}
        <div
          className="flex gap-2 mt-auto pt-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <Link
            href={`/tools/${tool.slug}`}
            className="flex-1 text-center py-2 rounded-lg text-xs font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
          >
            Voir le guide
          </Link>
          <button
            onClick={remove}
            disabled={removing}
            className="px-3 py-2 rounded-lg text-xs transition-all"
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.15)',
              color: '#f87171',
              opacity: removing ? 0.5 : 1,
            }}
          >
            × Retirer
          </button>
        </div>
      </div>
    </div>
  )
}
