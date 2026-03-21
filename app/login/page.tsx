'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!supabase) { setError('Service non configuré.'); return }
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) {
      setError('Email ou mot de passe incorrect. Vérifiez vos identifiants.')
    } else {
      router.push('/')
      router.refresh()
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black text-white"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
            >
              F
            </div>
          </div>

          <h1 className="text-2xl font-black text-center mb-2" style={{ color: '#f0f0f8' }}>
            Bon retour !
          </h1>
          <p className="text-center text-sm mb-8" style={{ color: '#5a5a78' }}>
            Connectez-vous pour continuer vos recherches
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#a8a8c0' }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="votre@email.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#f0f0f8',
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#a8a8c0' }}>
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#f0f0f8',
                }}
              />
            </div>

            {error && (
              <div
                className="px-4 py-3 rounded-xl text-sm"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171' }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-bold text-white transition-all"
              style={{
                background: loading ? 'rgba(124,58,237,0.5)' : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Connexion…' : 'Se connecter'}
            </button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: '#5a5a78' }}>
            Pas encore de compte ?{' '}
            <Link href="/signup" className="font-semibold" style={{ color: '#a78bfa' }}>
              Créer un compte gratuit →
            </Link>
          </p>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: '#3a3a50' }}>
          Gratuit · Sans engagement · Vos données sont protégées
        </p>
      </div>
    </div>
  )
}
