'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { CatalogTool } from '@/lib/catalog-types'
import type { MatchResult } from '@/lib/matching'
import { getSuggestions } from '@/lib/synonyms'
import { useAuth } from './AuthProvider'
import FreemiumModal from './FreemiumModal'

const ANON_LIMIT = 1
const FREE_DAILY_LIMIT = 3

function getTodayKey() {
  return `fp_searches_${new Date().toISOString().split('T')[0]}`
}

function getSearchCount(isLoggedIn: boolean): number {
  if (typeof window === 'undefined') return 0
  const key = isLoggedIn ? getTodayKey() : 'fp_anon_searches'
  return parseInt(localStorage.getItem(key) ?? '0', 10)
}

function incrementSearchCount(isLoggedIn: boolean) {
  const key = isLoggedIn ? getTodayKey() : 'fp_anon_searches'
  localStorage.setItem(key, String(getSearchCount(isLoggedIn) + 1))
}

const PRICING_COLOR = {
  free:     { bg: 'rgba(16,185,129,0.12)', color: '#34d399', label: 'Gratuit' },
  freemium: { bg: 'rgba(124,58,237,0.12)', color: '#a78bfa', label: 'Freemium' },
  paid:     { bg: 'rgba(239,68,68,0.12)',  color: '#f87171', label: 'Payant' },
}

const PLACEHOLDERS = [
  'créer une vidéo de présentation…',
  'écrire des emails marketing…',
  'générer des images réalistes…',
  'déboguer mon code Python…',
  'transcrire un podcast en texte…',
  'analyser des données sans SQL…',
  'créer un chatbot pour mon site…',
  'rédiger des posts LinkedIn…',
]

export default function SmartSearch({ tools }: { tools: CatalogTool[] }) {
  const router = useRouter()
  const { user, isPremium } = useAuth()
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [query, setQuery] = useState('')
  const [results, setResults] = useState<MatchResult[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [placeholderIdx, setPlaceholderIdx] = useState(0)
  const [activeIdx, setActiveIdx] = useState(-1)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const suggDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [modal, setModal] = useState<'signup' | 'premium' | null>(null)

  // Rotate placeholder text
  useEffect(() => {
    const id = setInterval(() => {
      setPlaceholderIdx((i) => (i + 1) % PLACEHOLDERS.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function checkLimit(): 'signup' | 'premium' | null {
    if (isPremium) return null
    const isLoggedIn = !!user
    const count = getSearchCount(isLoggedIn)
    if (!isLoggedIn && count >= ANON_LIMIT) return 'signup'
    if (isLoggedIn && count >= FREE_DAILY_LIMIT) return 'premium'
    return null
  }

  const compute = useCallback(
    async (q: string) => {
      if (q.trim().length < 3) {
        setResults([])
        setIsOpen(false)
        return
      }
      const limitType = checkLimit()
      if (limitType) { setModal(limitType); return }

      setIsLoading(true)
      incrementSearchCount(!!user)
      const { findBestMatches } = await import('@/lib/matching')
      const matches = findBestMatches(q, tools, 3)
      setResults(matches)
      setIsOpen(matches.length > 0)
      setShowSuggestions(false)
      setIsLoading(false)
      setActiveIdx(-1)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tools, user],
  )

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setQuery(val)

    // Suggestions (fast, no debounce needed)
    if (suggDebounceRef.current) clearTimeout(suggDebounceRef.current)
    if (val.trim().length >= 2) {
      suggDebounceRef.current = setTimeout(() => {
        const s = getSuggestions(val, 5)
        setSuggestions(s)
        setShowSuggestions(s.length > 0)
      }, 120)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }

    // Full search
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => compute(val), 280)
  }

  function applySuggestion(suggestion: string) {
    setQuery(suggestion)
    setSuggestions([])
    setShowSuggestions(false)
    compute(suggestion)
    inputRef.current?.focus()
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const limitType = checkLimit()
    if (limitType) { setModal(limitType); return }
    if (activeIdx >= 0 && results[activeIdx]) {
      router.push(`/tools/${results[activeIdx].tool.slug}`)
      return
    }
    if (query.trim()) {
      router.push(`/tools?q=${encodeURIComponent(query.trim())}`)
      setIsOpen(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setIsOpen(false)
      setShowSuggestions(false)
      setActiveIdx(-1)
      return
    }
    if (!isOpen) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, results.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, -1)) }
  }

  return (
    <>
    {modal && <FreemiumModal type={modal} onClose={() => setModal(null)} />}
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div
          className="flex items-center rounded-2xl overflow-visible transition-all"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: isOpen ? '0 0 0 3px rgba(124,58,237,0.2), 0 20px 60px rgba(0,0,0,0.4)' : '0 4px 24px rgba(0,0,0,0.3)',
          }}
        >
          {/* Search icon */}
          <div className="pl-5 pr-3 flex items-center shrink-0">
            {isLoading ? (
              <svg className="w-5 h-5 animate-spin" style={{ color: '#a78bfa' }} fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" style={{ color: '#5a5a78' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (query.trim().length >= 3 && results.length > 0) setIsOpen(true)
              else if (query.trim().length >= 2 && suggestions.length > 0) setShowSuggestions(true)
            }}
            placeholder={`Ex: ${PLACEHOLDERS[placeholderIdx]}`}
            className="flex-1 bg-transparent py-4 pr-2 text-base outline-none"
            style={{ color: '#f0f0f8' }}
            autoComplete="off"
          />

          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); setResults([]); setSuggestions([]); setIsOpen(false); setShowSuggestions(false); inputRef.current?.focus() }}
              className="px-3 text-lg leading-none transition-opacity"
              style={{ color: '#5a5a78' }}
            >
              ×
            </button>
          )}

          <button
            type="submit"
            className="m-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shrink-0 transition-all"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
          >
            Trouver →
          </button>
        </div>
      </form>

      {/* Suggestions dropdown (shown while typing, before full search) */}
      {showSuggestions && !isOpen && suggestions.length > 0 && (
        <div
          className="absolute left-0 right-0 top-full mt-2 rounded-2xl overflow-hidden z-50"
          style={{
            background: '#0f0f1a',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
          }}
        >
          <div
            className="px-4 py-2"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span className="text-xs" style={{ color: '#5a5a78' }}>Suggestions populaires</span>
          </div>
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => applySuggestion(s)}
              className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors"
              style={{ color: '#a8a8c0' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <svg className="w-3.5 h-3.5 shrink-0" style={{ color: '#5a5a78' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Results dropdown */}
      {isOpen && results.length > 0 && (
        <div
          className="animate-slide-down absolute left-0 right-0 top-full mt-2 rounded-2xl overflow-hidden z-50"
          style={{
            background: '#0f0f1a',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
          }}
        >
          <div
            className="px-4 py-2.5 flex items-center justify-between"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span className="text-xs font-medium" style={{ color: '#a78bfa' }}>
              ✦ Meilleurs outils pour votre besoin
            </span>
            <span className="text-xs" style={{ color: '#5a5a78' }}>
              {results.length} résultat{results.length > 1 ? 's' : ''}
            </span>
          </div>

          {results.map((r, i) => (
            <SearchResult
              key={r.tool.slug}
              result={r}
              isActive={i === activeIdx}
              delay={i * 80}
              onClick={() => { router.push(`/tools/${r.tool.slug}`); setIsOpen(false) }}
            />
          ))}

          <div
            className="px-4 py-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <button
              onClick={() => { router.push(`/tools?q=${encodeURIComponent(query)}`); setIsOpen(false) }}
              className="w-full text-center text-sm transition-colors"
              style={{ color: '#5a5a78' }}
            >
              Voir tous les résultats pour "{query}" →
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

function SearchResult({
  result,
  isActive,
  delay,
  onClick,
}: {
  result: MatchResult
  isActive: boolean
  delay: number
  onClick: () => void
}) {
  const { tool, score, matchedTags, explanation } = result
  const pricing = PRICING_COLOR[tool.pricing]

  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 transition-colors"
      style={{
        background: isActive ? 'rgba(124,58,237,0.1)' : 'transparent',
        animation: `fade-up 0.3s ease both ${delay}ms`,
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="flex items-start gap-3">
        {/* Emoji */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 mt-0.5"
          style={{ background: `${tool.color}18` }}
        >
          {tool.emoji}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-sm" style={{ color: '#f0f0f8' }}>
              {tool.name}
            </span>
            <span
              className="px-1.5 py-0.5 rounded-md text-xs"
              style={{ background: pricing.bg, color: pricing.color }}
            >
              {pricing.label}
            </span>
          </div>
          <p className="text-xs mb-2" style={{ color: '#6b7280' }}>{explanation}</p>

          {matchedTags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {matchedTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-xs"
                  style={{ background: 'rgba(124,58,237,0.12)', color: '#a78bfa' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Score */}
        <div className="shrink-0 flex flex-col items-end gap-1.5">
          <span
            className="text-sm font-bold tabular-nums"
            style={{ color: score >= 60 ? '#a78bfa' : score >= 35 ? '#f59e0b' : '#6b7280' }}
          >
            {score}%
          </span>
          <ScoreBar score={score} color={tool.color} />
        </div>
      </div>
    </button>
  )
}

function ScoreBar({ score, color }: { score: number; color: string }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => setWidth(score), 50)
    return () => clearTimeout(id)
  }, [score])

  return (
    <div
      className="w-20 h-1.5 rounded-full overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.08)' }}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${width}%`,
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          transition: 'width 0.7s cubic-bezier(0.22,1,0.36,1)',
        }}
      />
    </div>
  )
}
