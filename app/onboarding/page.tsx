'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/ui/AuthProvider'
import { supabase } from '@/lib/supabase'
import { PROFESSIONS, LEVELS, OBJECTIVES } from '@/lib/professions'

const TOTAL_STEPS = 3

export default function OnboardingPage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  const [step, setStep] = useState(1)
  const [metier, setMetier] = useState('')
  const [niveau, setNiveau] = useState('')
  const [objectifs, setObjectifs] = useState<string[]>([])
  const [saving, setSaving] = useState(false)
  const [checking, setChecking] = useState(true)
  const [isEditing, setIsEditing] = useState(false)

  // Fetch existing profile to pre-fill, or proceed fresh
  useEffect(() => {
    if (loading) return
    if (!user) { router.replace('/login'); return }

    if (!supabase) { setChecking(false); return }

    supabase
      .from('profiles')
      .select('metier, niveau, objectifs')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setMetier(data.metier ?? '')
          setNiveau(data.niveau ?? '')
          setObjectifs(data.objectifs ?? [])
          setIsEditing(true)
        }
        setChecking(false)
      })
  }, [user, loading, router])

  function toggleObjectif(id: string) {
    setObjectifs((prev) => {
      if (prev.includes(id)) return prev.filter((o) => o !== id)
      if (prev.length >= 3) return prev // max 3
      return [...prev, id]
    })
  }

  async function handleFinish() {
    if (!user || !supabase) { router.push('/dashboard'); return }
    setSaving(true)
    await supabase.from('profiles').upsert({
      id: user.id,
      metier,
      niveau,
      objectifs,
    })
    router.push('/dashboard')
  }

  if (loading || checking) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">

        {/* Page title */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-black" style={{ color: '#f0f0f8' }}>
            {isEditing ? 'Modifier mes préférences' : 'Bienvenue sur FairPlay'}
          </h1>
          {isEditing && (
            <p className="text-sm mt-1" style={{ color: '#5a5a78' }}>
              Vos réponses actuelles sont pré-remplies — modifiez ce que vous voulez
            </p>
          )}
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium" style={{ color: '#a78bfa' }}>
              Étape {step} sur {TOTAL_STEPS}
            </span>
            <span className="text-xs" style={{ color: '#3a3a50' }}>
              {step === 1 ? 'Votre profil' : step === 2 ? 'Votre niveau' : 'Vos objectifs'}
            </span>
          </div>
          <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
              style={{
                width: `${(step / TOTAL_STEPS) * 100}%`,
                background: 'linear-gradient(90deg, #7c3aed, #a855f7)',
              }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                style={
                  i + 1 <= step
                    ? { background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff' }
                    : { background: 'rgba(255,255,255,0.06)', color: '#3a3a50' }
                }
              >
                {i + 1 < step ? '✓' : i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div
          className="rounded-2xl p-8"
          style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {step === 1 && (
            <StepProfession selected={metier} onSelect={setMetier} />
          )}
          {step === 2 && (
            <StepLevel selected={niveau} onSelect={setNiveau} />
          )}
          {step === 3 && (
            <StepObjectives selected={objectifs} onToggle={toggleObjectif} />
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={
                step === 1
                  ? { opacity: 0, pointerEvents: 'none' }
                  : { color: '#5a5a78', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }
              }
            >
              ← Retour
            </button>

            {step < TOTAL_STEPS ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={step === 1 ? !metier : !niveau}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all"
                style={{
                  background:
                    (step === 1 ? !metier : !niveau)
                      ? 'rgba(124,58,237,0.3)'
                      : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  cursor: (step === 1 ? !metier : !niveau) ? 'not-allowed' : 'pointer',
                }}
              >
                Suivant →
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={objectifs.length === 0 || saving}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all"
                style={{
                  background:
                    objectifs.length === 0 || saving
                      ? 'rgba(124,58,237,0.3)'
                      : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  cursor: objectifs.length === 0 || saving ? 'not-allowed' : 'pointer',
                }}
              >
                {saving ? 'Enregistrement…' : isEditing ? 'Enregistrer les modifications ✓' : 'Accéder à mon espace ✨'}
              </button>
            )}
          </div>
        </div>

        <p className="text-center text-xs mt-5" style={{ color: '#3a3a50' }}>
          Vos réponses nous aident à personnaliser votre expérience · Modifiables à tout moment
        </p>
      </div>
    </div>
  )
}

/* ── Step 1: Profession ──────────────────────────────────────────── */
function StepProfession({ selected, onSelect }: { selected: string; onSelect: (v: string) => void }) {
  return (
    <div>
      <h1 className="text-2xl font-black mb-2" style={{ color: '#f0f0f8' }}>Qui êtes-vous ?</h1>
      <p className="text-sm mb-6" style={{ color: '#5a5a78' }}>
        Choisissez votre profil pour des recommandations personnalisées
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {PROFESSIONS.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all"
            style={
              selected === p.id
                ? {
                    background: 'rgba(124,58,237,0.15)',
                    border: '1.5px solid rgba(124,58,237,0.5)',
                    color: '#c4b5fd',
                  }
                : {
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    color: '#a8a8c0',
                  }
            }
          >
            <span className="text-xl">{p.emoji}</span>
            <span className="text-sm font-medium leading-tight">{p.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ── Step 2: Level ───────────────────────────────────────────────── */
function StepLevel({ selected, onSelect }: { selected: string; onSelect: (v: string) => void }) {
  return (
    <div>
      <h1 className="text-2xl font-black mb-2" style={{ color: '#f0f0f8' }}>Votre niveau avec l'IA</h1>
      <p className="text-sm mb-6" style={{ color: '#5a5a78' }}>
        Pas de jugement — chaque niveau est un bon point de départ !
      </p>
      <div className="flex flex-col gap-3">
        {LEVELS.map((l) => (
          <button
            key={l.id}
            onClick={() => onSelect(l.id)}
            className="flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all"
            style={
              selected === l.id
                ? {
                    background: 'rgba(124,58,237,0.15)',
                    border: '1.5px solid rgba(124,58,237,0.5)',
                  }
                : {
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }
            }
          >
            <span className="text-3xl">{l.emoji}</span>
            <div>
              <p className="font-semibold" style={{ color: selected === l.id ? '#c4b5fd' : '#f0f0f8' }}>
                {l.label}
              </p>
              <p className="text-sm" style={{ color: '#5a5a78' }}>{l.description}</p>
            </div>
            <div
              className="ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
              style={
                selected === l.id
                  ? { borderColor: '#7c3aed', background: '#7c3aed' }
                  : { borderColor: 'rgba(255,255,255,0.15)' }
              }
            >
              {selected === l.id && <span className="text-xs text-white font-bold">✓</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ── Step 3: Objectives ──────────────────────────────────────────── */
function StepObjectives({ selected, onToggle }: { selected: string[]; onToggle: (id: string) => void }) {
  return (
    <div>
      <h1 className="text-2xl font-black mb-2" style={{ color: '#f0f0f8' }}>Vos objectifs</h1>
      <p className="text-sm mb-6" style={{ color: '#5a5a78' }}>
        Choisissez jusqu'à <strong style={{ color: '#a78bfa' }}>3 objectifs</strong> qui vous correspondent
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {OBJECTIVES.map((o) => {
          const isSelected = selected.includes(o.id)
          const isDisabled = !isSelected && selected.length >= 3
          return (
            <button
              key={o.id}
              onClick={() => onToggle(o.id)}
              disabled={isDisabled}
              className="flex flex-col items-center gap-2 px-3 py-4 rounded-xl text-center transition-all"
              style={
                isSelected
                  ? { background: 'rgba(124,58,237,0.15)', border: '1.5px solid rgba(124,58,237,0.5)' }
                  : isDisabled
                  ? { background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', opacity: 0.4, cursor: 'not-allowed' }
                  : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }
              }
            >
              <span className="text-2xl">{o.emoji}</span>
              <span className="text-xs font-medium leading-tight" style={{ color: isSelected ? '#c4b5fd' : '#a8a8c0' }}>
                {o.id}
              </span>
            </button>
          )
        })}
      </div>
      {selected.length === 3 && (
        <p className="text-xs mt-4 text-center" style={{ color: '#a78bfa' }}>
          ✓ Maximum atteint — désélectionnez un objectif pour en choisir un autre
        </p>
      )}
    </div>
  )
}
