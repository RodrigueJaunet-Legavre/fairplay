'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import LogoIcon from '@/app/ui/LogoIcon'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!supabase) { setError('Service non configuré.'); return }
    if (password.length < 8) { setError('Le mot de passe doit contenir au moins 8 caractères.'); return }
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/onboarding` },
    })
    setLoading(false)
    if (error) {
      setError(error.message)
    } else {
      setDone(true)
    }
  }

  if (done) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div
          className="w-full max-w-md rounded-2xl p-8 text-center"
          style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="text-5xl mb-4">📬</div>
          <h1 className="text-2xl font-black mb-3" style={{ color: '#f0f0f8' }}>Vérifiez vos emails !</h1>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7280' }}>
            Un lien de confirmation a été envoyé à <strong style={{ color: '#a78bfa' }}>{email}</strong>.
            Cliquez dessus pour activer votre compte.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
          >
            Retour à l'accueil →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div
          className="rounded-2xl p-8"
          style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Logo */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <LogoIcon size={48} />
            <span className="font-black text-lg" style={{ color: '#f0f0f8' }}>FairPlay</span>
          </div>

          <h1 className="text-2xl font-black text-center mb-2" style={{ color: '#f0f0f8' }}>
            Créez votre compte
          </h1>
          <p className="text-center text-sm mb-2" style={{ color: '#5a5a78' }}>
            C'est gratuit, ça prend 30 secondes
          </p>

          {/* Benefits */}
          <div
            className="flex flex-col gap-1.5 p-4 rounded-xl mb-6"
            style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)' }}
          >
            {[
              '✓ 3 recherches intelligentes par jour',
              '✓ Accès à toutes les fiches outils',
              '✓ Sauvegardez vos outils favoris',
            ].map((b) => (
              <p key={b} className="text-sm" style={{ color: '#c4b5fd' }}>{b}</p>
            ))}
          </div>

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
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#f0f0f8',
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#a8a8c0' }}>
                Mot de passe <span style={{ color: '#3a3a50' }}>(8 caractères minimum)</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
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
              className="w-full py-3 rounded-xl font-bold text-white"
              style={{
                background: loading ? 'rgba(124,58,237,0.5)' : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Création…' : 'Créer mon compte gratuit →'}
            </button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: '#5a5a78' }}>
            Déjà un compte ?{' '}
            <Link href="/login" className="font-semibold" style={{ color: '#a78bfa' }}>
              Se connecter
            </Link>
          </p>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: '#3a3a50' }}>
          Sans carte bancaire · Annulable à tout moment · Données 🔒 sécurisées
        </p>
      </div>
    </div>
  )
}
