'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/app/ui/AuthProvider'
import { getTop10ForCategory, TOP_CATEGORIES, type EnrichedTool } from '@/lib/top-tools'

const PRICING_STYLE = {
  free:     { label: 'Gratuit',  bg: 'rgba(16,185,129,0.12)',  color: '#34d399' },
  freemium: { label: 'Freemium', bg: 'rgba(124,58,237,0.12)', color: '#a78bfa' },
  paid:     { label: 'Payant',   bg: 'rgba(239,68,68,0.12)',   color: '#f87171' },
}

function Stars({ value }: { value: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < value ? '#fbbf24' : '#2a2a3a', fontSize: 12 }}>★</span>
      ))}
    </span>
  )
}

function FrenchBadge({ supported }: { supported: boolean }) {
  return (
    <span
      className="text-xs px-2 py-0.5 rounded-full font-medium"
      style={supported
        ? { background: 'rgba(16,185,129,0.12)', color: '#34d399' }
        : { background: 'rgba(255,255,255,0.04)', color: '#3a3a50' }
      }
    >
      {supported ? '✓ Oui' : '✗ Non'}
    </span>
  )
}

function PremiumLockOverlay() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-8"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, #070712 55%)',
        height: '280px',
        pointerEvents: 'auto',
      }}
    >
      <div
        className="rounded-2xl p-6 text-center max-w-sm mx-auto"
        style={{ background: '#0f0f1a', border: '1px solid rgba(251,191,36,0.2)' }}
      >
        <p className="text-xl mb-2">🔒</p>
        <h3 className="font-bold mb-1" style={{ color: '#f0f0f8' }}>Top 10 complet réservé aux abonnés</h3>
        <p className="text-sm mb-4" style={{ color: '#5a5a78' }}>
          Débloquez le tableau complet avec les 10 outils, les comparaisons détaillées et le support FR.
        </p>
        <Link
          href="/premium"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
          style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', color: '#1a0a00' }}
        >
          ⭐ Essai gratuit 7 jours →
        </Link>
      </div>
    </div>
  )
}

function ComparisonTable({ tools, isPremium }: { tools: EnrichedTool[]; isPremium: boolean }) {
  const visibleTools = isPremium ? tools : tools.slice(0, 3)

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {['#', 'Outil', 'Note', 'Prix', 'Facilité', 'Qualité', 'Support FR', 'Idéal pour'].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                  style={{ color: '#5a5a78', background: 'rgba(255,255,255,0.02)' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleTools.map((tool, i) => {
              const p = PRICING_STYLE[tool.pricing]
              return (
                <tr
                  key={tool.slug}
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                  }}
                >
                  {/* Rank */}
                  <td className="px-4 py-3 w-10">
                    <span
                      className="text-sm font-black"
                      style={{ color: i < 3 ? '#a78bfa' : '#3a3a50' }}
                    >
                      {i + 1}
                    </span>
                  </td>

                  {/* Tool name */}
                  <td className="px-4 py-3">
                    <Link href={`/tools/${tool.slug}`} className="flex items-center gap-2.5 group">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0"
                        style={{ background: `${tool.color}18` }}
                      >
                        {tool.emoji}
                      </div>
                      <div>
                        <p className="text-sm font-semibold group-hover:text-violet-400 transition-colors whitespace-nowrap" style={{ color: '#f0f0f8' }}>
                          {tool.name}
                        </p>
                        <p className="text-xs max-w-[180px] truncate" style={{ color: '#5a5a78' }}>{tool.tagline}</p>
                      </div>
                    </Link>
                  </td>

                  {/* Rating */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm font-bold" style={{ color: '#f0f0f8' }}>★ {tool.rating}</span>
                  </td>

                  {/* Pricing */}
                  <td className="px-4 py-3">
                    <span
                      className="text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap"
                      style={{ background: p.bg, color: p.color }}
                    >
                      {p.label}
                    </span>
                  </td>

                  {/* Ease of use */}
                  <td className="px-4 py-3">
                    <Stars value={tool.ease_of_use} />
                  </td>

                  {/* Results quality */}
                  <td className="px-4 py-3">
                    <Stars value={tool.results_quality} />
                  </td>

                  {/* French support */}
                  <td className="px-4 py-3">
                    <FrenchBadge supported={tool.french_support} />
                  </td>

                  {/* Ideal for */}
                  <td className="px-4 py-3">
                    <span className="text-sm whitespace-nowrap" style={{ color: '#a8a8c0' }}>
                      {tool.ideal_for}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Lock overlay for non-premium */}
      {!isPremium && tools.length > 3 && <PremiumLockOverlay />}
    </div>
  )
}

export default function TopPage() {
  const { isPremium } = useAuth()
  const [activeCategory, setActiveCategory] = useState<string>(TOP_CATEGORIES[0].slug)

  const tools = getTop10ForCategory(activeCategory)
  const catLabel = TOP_CATEGORIES.find((c) => c.slug === activeCategory)?.label ?? ''

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
          <div>
            <h1 className="text-3xl font-black" style={{ color: '#f0f0f8' }}>
              Top 10 par catégorie
            </h1>
            <p className="text-sm mt-1" style={{ color: '#5a5a78' }}>
              Les meilleurs outils IA comparés sur les critères qui comptent vraiment
            </p>
          </div>
          {!isPremium && (
            <Link
              href="/premium"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)', color: '#fbbf24' }}
            >
              ⭐ Débloquer le Top 10 complet
            </Link>
          )}
        </div>
      </div>

      {/* Category tabs */}
      <div
        className="flex gap-1.5 overflow-x-auto pb-2 mb-8"
        style={{ scrollbarWidth: 'none' }}
      >
        {TOP_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className="px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all shrink-0"
            style={
              activeCategory === cat.slug
                ? { background: 'rgba(124,58,237,0.2)', color: '#a78bfa', border: '1px solid rgba(124,58,237,0.35)' }
                : { background: 'rgba(255,255,255,0.03)', color: '#5a5a78', border: '1px solid rgba(255,255,255,0.06)' }
            }
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Table card */}
      <div
        className="rounded-2xl overflow-hidden relative"
        style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Table header */}
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h2 className="font-bold" style={{ color: '#f0f0f8' }}>
            Top 10 — {catLabel}
          </h2>
          {!isPremium && (
            <span className="text-xs" style={{ color: '#5a5a78' }}>
              3 / 10 outils visibles
            </span>
          )}
        </div>

        <ComparisonTable tools={tools} isPremium={isPremium} />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-5 text-xs" style={{ color: '#3a3a50' }}>
        <span>Facilité : ★ facilité d'utilisation pour un non-expert</span>
        <span>Qualité : ★ qualité des résultats produits</span>
        <span>Support FR : interface et/ou réponses en français</span>
      </div>
    </div>
  )
}
