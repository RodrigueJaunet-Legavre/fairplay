'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchBar() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/tools?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto w-full">
      <div
        className="flex items-center rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <span className="pl-5 pr-3 text-xl" style={{ color: '#4b5563' }}>
          🔍
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un outil IA..."
          className="flex-1 bg-transparent py-4 pr-4 text-base outline-none placeholder:text-gray-600"
          style={{ color: '#f0f0f8' }}
        />
        <button
          type="submit"
          className="m-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
          }}
        >
          Rechercher
        </button>
      </div>
    </form>
  )
}
