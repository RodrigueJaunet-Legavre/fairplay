'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Stethoscope, Scale, TrendingUp, GraduationCap, Code2, Megaphone,
  ShoppingBag, Brain, Hammer, ChefHat, Home, Camera, Users, Rocket, Search,
} from 'lucide-react'
import { getAllMetiers, SECTORS } from '@/lib/metiers'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Stethoscope, Scale, TrendingUp, GraduationCap, Code2, Megaphone,
  ShoppingBag, Brain, Hammer, ChefHat, Home, Camera, Users, Rocket,
}

const SECTOR_COLORS: Record<string, string> = {
  'Santé':          '#34d399',
  'Droit':          '#60a5fa',
  'Finance':        '#fbbf24',
  'Éducation':      '#a78bfa',
  'Tech':           '#38bdf8',
  'Marketing':      '#f472b6',
  'Commerce':       '#fb923c',
  'Santé mentale':  '#c084fc',
  'Artisanat':      '#d97706',
  'Restauration':   '#f87171',
  'Immobilier':     '#4ade80',
  'Médias':         '#818cf8',
  'RH':             '#2dd4bf',
  'Entrepreneurs':  '#e879f9',
}

export default function MetiersPage() {
  const [query, setQuery] = useState('')
  const allMetiers = getAllMetiers()

  const filtered = query.trim()
    ? allMetiers.filter((m) =>
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.sector.toLowerCase().includes(query.toLowerCase())
      )
    : allMetiers

  const sectors = query.trim()
    ? [...new Set(filtered.map((m) => m.sector))]
    : SECTORS.map((s) => s.id)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Header */}
      <div className="text-center mb-12">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#a78bfa' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          {allMetiers.length} métiers couverts
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: '#f0f0f8' }}>
          Trouvez les meilleures IAs
          <br />
          <span className="gradient-text">pour votre métier</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5a5a78' }}>
          Des recommandations concrètes faites par et pour des professionnels
        </p>

        {/* Search */}
        <div className="relative max-w-md mx-auto mt-8">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: '#5a5a78' }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un métier…"
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none focus:ring-1"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#f0f0f8',
              caretColor: '#a78bfa',
            }}
          />
        </div>
      </div>

      {/* Grid by sector */}
      <div className="space-y-12">
        {sectors.map((sectorId) => {
          const sectorMeta = SECTORS.find((s) => s.id === sectorId)
          const Icon = ICON_MAP[sectorMeta?.icon ?? 'Rocket']
          const color = SECTOR_COLORS[sectorId] ?? '#a78bfa'
          const metiers = filtered.filter((m) => m.sector === sectorId)
          if (metiers.length === 0) return null

          return (
            <div key={sectorId}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h2 className="text-lg font-bold" style={{ color: '#f0f0f8' }}>
                  {sectorId}
                </h2>
                <span className="text-sm" style={{ color: '#3a3a50' }}>
                  {metiers.length} métier{metiers.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {metiers.map((metier) => {
                  const MIcon = ICON_MAP[metier.icon] ?? Rocket
                  return (
                    <Link
                      key={metier.slug}
                      href={`/metiers/${metier.slug}`}
                      className="flex flex-col items-center gap-2.5 p-4 rounded-xl text-center transition-all group hover:scale-[1.02]"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ background: `${color}18` }}
                      >
                        <MIcon size={20} style={{ color }} />
                      </div>
                      <p
                        className="text-xs font-semibold leading-tight group-hover:text-violet-400 transition-colors"
                        style={{ color: '#f0f0f8' }}
                      >
                        {metier.name}
                      </p>
                      <p className="text-xs" style={{ color: '#3a3a50' }}>
                        {metier.top5.length} IAs
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg mb-2" style={{ color: '#5a5a78' }}>
              Aucun métier trouvé pour &ldquo;{query}&rdquo;
            </p>
            <button
              onClick={() => setQuery('')}
              className="text-sm"
              style={{ color: '#a78bfa' }}
            >
              Effacer la recherche
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
