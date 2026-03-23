'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import type { CatalogTool } from '@/lib/catalog-types'
import { catalogCategories } from '@/lib/tools-index'
import ToolCard from './ToolCard'
import SearchRankingList from './SearchRankingList'

export default function ToolsGrid({ tools }: { tools: CatalogTool[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState<'upvotes' | 'rating' | 'name'>('upvotes')

  useEffect(() => {
    setActiveCategory(searchParams.get('category') ?? 'all')
    setQuery(searchParams.get('q') ?? '')
  }, [searchParams])

  // When a search query is active, delegate to ranked results view
  if (query.trim()) {
    return <SearchRankingList query={query} tools={tools} />
  }

  const filtered = tools
    .filter((tool) => {
      const matchCat = activeCategory === 'all' || tool.category === activeCategory
      if (!query.trim()) return matchCat
      const q = query.toLowerCase()
      const matchQ =
        tool.name.toLowerCase().includes(q) ||
        tool.tagline.toLowerCase().includes(q) ||
        tool.tags.some((t) => t.toLowerCase().includes(q)) ||
        tool.description.toLowerCase().includes(q)
      return matchCat && matchQ
    })
    .sort((a, b) => {
      if (sortBy === 'upvotes') return b.upvotes - a.upvotes
      if (sortBy === 'rating')  return b.rating - a.rating
      return a.name.localeCompare(b.name)
    })

  function setCategory(slug: string) {
    setActiveCategory(slug)
    const params = new URLSearchParams(searchParams.toString())
    if (slug === 'all') params.delete('category')
    else params.set('category', slug)
    router.replace(`/tools?${params.toString()}`, { scroll: false })
  }

  return (
    <div>
      {/* Search + Sort row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div
          className="flex-1 flex items-center rounded-xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <span className="pl-4 pr-3" style={{ color: '#5a5a78' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrer les outils…"
            className="flex-1 bg-transparent py-2.5 pr-4 text-sm outline-none"
            style={{ color: '#f0f0f8' }}
          />
          {query && (
            <button onClick={() => setQuery('')} className="px-3 text-sm" style={{ color: '#5a5a78' }}>✕</button>
          )}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="px-4 py-2.5 rounded-xl text-sm outline-none appearance-none cursor-pointer"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#a8a8c0',
          }}
        >
          <option value="upvotes">Plus populaires</option>
          <option value="rating">Mieux notés</option>
          <option value="name">Alphabétique</option>
        </select>
      </div>

      {/* Category pills — scrollable on mobile */}
      <div className="flex overflow-x-auto gap-2 mb-8 pb-1 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {catalogCategories.map((cat) => {
          const active = activeCategory === cat.slug
          return (
            <button
              key={cat.slug}
              onClick={() => setCategory(cat.slug)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap shrink-0"
              style={{
                background: active ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                border: active ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(255,255,255,0.07)',
                color: active ? '#a78bfa' : '#5a5a78',
              }}
            >
              {cat.label}
              {cat.slug !== 'all' && (
                <span className="ml-1.5 text-xs opacity-60">
                  {tools.filter((t) => t.category === cat.slug).length}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Count */}
      <p className="text-sm mb-6" style={{ color: '#5a5a78' }}>
        {filtered.length} outil{filtered.length !== 1 ? 's' : ''}
        {query && <> pour <span style={{ color: '#a78bfa' }}>"{query}"</span></>}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-28">
          <p className="text-5xl mb-4">🔭</p>
          <p className="text-lg font-semibold mb-2" style={{ color: '#f0f0f8' }}>Aucun outil trouvé</p>
          <p className="text-sm mb-6" style={{ color: '#5a5a78' }}>Essayez une autre recherche ou catégorie</p>
          <button
            onClick={() => { setQuery(''); setCategory('all') }}
            className="px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: '#a78bfa' }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  )
}
