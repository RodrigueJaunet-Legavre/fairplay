'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getGuide } from '@/lib/tool-guides'
import { getCatalogToolBySlug } from '@/lib/tools-index'

type Tab = 'demarrage' | 'utilisation' | 'exemples' | 'prix' | 'conseils' | 'alternatives'

const TABS: { id: Tab; label: string }[] = [
  { id: 'demarrage',    label: '🚀 Démarrage' },
  { id: 'utilisation', label: '⚙️ Utilisation' },
  { id: 'exemples',    label: '💡 Exemples' },
  { id: 'prix',        label: '💰 Prix' },
  { id: 'conseils',    label: '⭐ Conseils' },
  { id: 'alternatives',label: '🔄 Alternatives' },
]

export default function GuideSection({ slug, toolColor }: { slug: string; toolColor: string }) {
  const guide = getGuide(slug)
  const [activeTab, setActiveTab] = useState<Tab>('demarrage')
  const [helpful, setHelpful] = useState<'up' | 'down' | null>(null)

  if (!guide) return null

  return (
    <div
      className="rounded-xl overflow-hidden mb-6"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-0">
        <h2 className="font-bold text-lg mb-5" style={{ color: '#f0f0f8' }}>
          Guide complet
        </h2>

        {/* Tab bar */}
        <div
          className="flex gap-0.5 overflow-x-auto pb-0 scrollbar-hide"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-4 py-2.5 text-xs font-semibold rounded-t-lg whitespace-nowrap transition-all shrink-0"
              style={
                activeTab === tab.id
                  ? { background: 'rgba(124,58,237,0.15)', color: '#a78bfa', borderBottom: `2px solid ${toolColor}` }
                  : { color: '#5a5a78', background: 'transparent' }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="p-6">
        {activeTab === 'demarrage' && (
          <div className="space-y-4">
            {guide.demarrage.map((step) => (
              <div key={step.etape} className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 mt-0.5"
                  style={{ background: `linear-gradient(135deg, ${toolColor}, ${toolColor}99)`, color: '#fff' }}
                >
                  {step.etape}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#f0f0f8' }}>{step.titre}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#a8a8c0' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'utilisation' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guide.utilisation.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="font-semibold text-sm mb-2" style={{ color: '#f0f0f8' }}>{item.titre}</p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#a8a8c0' }}>{item.description}</p>
                {item.astuce && (
                  <div
                    className="flex items-start gap-2 rounded-lg px-3 py-2"
                    style={{ background: `${toolColor}12`, border: `1px solid ${toolColor}25` }}
                  >
                    <span style={{ color: toolColor, fontSize: 12, marginTop: 1 }}>💡</span>
                    <p className="text-xs leading-relaxed" style={{ color: '#a78bfa' }}>{item.astuce}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'exemples' && (
          <div className="space-y-6">
            {guide.exemples.map((ex, i) => (
              <div key={i}>
                <p className="font-semibold text-sm mb-3" style={{ color: '#f0f0f8' }}>
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-black mr-2"
                    style={{ background: `${toolColor}20`, color: toolColor }}
                  >
                    {i + 1}
                  </span>
                  {ex.titre}
                </p>
                <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="px-4 py-2 text-xs font-semibold" style={{ background: 'rgba(0,0,0,0.3)', color: '#5a5a78' }}>
                    PROMPT / ACTION
                  </div>
                  <div
                    className="px-4 py-3 text-sm leading-relaxed font-mono"
                    style={{ background: '#070711', color: '#a8a8c0', whiteSpace: 'pre-wrap' }}
                  >
                    {ex.prompt}
                  </div>
                  <div className="px-4 py-2 text-xs font-semibold" style={{ background: `${toolColor}15`, color: toolColor }}>
                    RÉSULTAT
                  </div>
                  <div
                    className="px-4 py-3 text-sm leading-relaxed"
                    style={{ background: `${toolColor}08`, color: '#c4c4dc' }}
                  >
                    {ex.resultat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'prix' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guide.prix.map((plan, i) => (
              <div
                key={i}
                className="rounded-xl p-4 flex flex-col"
                style={
                  plan.highlighted
                    ? { background: `${toolColor}12`, border: `1.5px solid ${toolColor}50` }
                    : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }
                }
              >
                {plan.highlighted && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full self-start mb-3"
                    style={{ background: `${toolColor}25`, color: toolColor }}
                  >
                    Recommandé
                  </span>
                )}
                <p className="font-bold text-sm mb-1" style={{ color: '#f0f0f8' }}>{plan.plan}</p>
                <p className="text-xl font-black mb-3" style={{ color: plan.highlighted ? toolColor : '#a8a8c0' }}>
                  {plan.prix}
                </p>
                <ul className="space-y-1.5 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs" style={{ color: '#a8a8c0' }}>
                      <span style={{ color: '#34d399', marginTop: 1, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'conseils' && (
          <div className="space-y-3">
            {guide.conseils.map((conseil, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span className="text-base shrink-0 mt-0.5">⭐</span>
                <p className="text-sm leading-relaxed" style={{ color: '#a8a8c0' }}>{conseil}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'alternatives' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {guide.alternatives.map((altSlug) => {
              const alt = getCatalogToolBySlug(altSlug)
              if (!alt) return null
              return (
                <Link
                  key={altSlug}
                  href={`/tools/${altSlug}`}
                  className="flex items-start gap-3 rounded-xl p-4 transition-all group"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="text-2xl shrink-0">{alt.emoji}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm mb-0.5 group-hover:text-violet-400 transition-colors" style={{ color: '#f0f0f8' }}>
                      {alt.name}
                    </p>
                    <p className="text-xs leading-relaxed line-clamp-2" style={{ color: '#5a5a78' }}>{alt.tagline}</p>
                    <span className="text-xs mt-1.5 inline-block" style={{ color: '#a78bfa' }}>Voir →</span>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {/* Helpful vote */}
        <div
          className="flex items-center gap-4 mt-6 pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-sm" style={{ color: '#5a5a78' }}>Ce guide vous a aidé ?</p>
          <div className="flex gap-2">
            <button
              onClick={() => setHelpful('up')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={
                helpful === 'up'
                  ? { background: 'rgba(52,211,153,0.15)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' }
                  : { background: 'rgba(255,255,255,0.04)', color: '#5a5a78', border: '1px solid rgba(255,255,255,0.08)' }
              }
            >
              👍 Oui
            </button>
            <button
              onClick={() => setHelpful('down')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={
                helpful === 'down'
                  ? { background: 'rgba(239,68,68,0.12)', color: '#f87171', border: '1px solid rgba(239,68,68,0.25)' }
                  : { background: 'rgba(255,255,255,0.04)', color: '#5a5a78', border: '1px solid rgba(255,255,255,0.08)' }
              }
            >
              👎 Non
            </button>
          </div>
          {helpful === 'up' && <span className="text-xs" style={{ color: '#34d399' }}>Merci pour votre retour !</span>}
          {helpful === 'down' && <span className="text-xs" style={{ color: '#f87171' }}>Nous allons l&apos;améliorer.</span>}
        </div>
      </div>
    </div>
  )
}
