'use client'

import { useState } from 'react'
import type { Tool } from '@/lib/tools'
import type { CatalogTool } from '@/lib/catalog-types'
import Link from 'next/link'
import ToolLogo from './ToolLogo'

const PRICING = {
  free:     { bg: 'rgba(16,185,129,0.12)', color: '#34d399', label: 'Gratuit' },
  freemium: { bg: 'rgba(124,58,237,0.12)', color: '#a78bfa', label: 'Freemium' },
  paid:     { bg: 'rgba(239,68,68,0.12)',  color: '#f87171', label: 'Payant' },
}

const TABS = [
  { id: 'overview',  label: 'Aperçu' },
  { id: 'install',   label: 'Installation' },
  { id: 'usage',     label: 'Guide d\'utilisation' },
  { id: 'pricing',   label: 'Tarifs' },
  { id: 'review',    label: 'Avis' },
  { id: 'alts',      label: 'Alternatives' },
]

export default function ToolTabs({
  tool,
  alternatives,
}: {
  tool: Tool
  alternatives: CatalogTool[]
}) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div>
      {/* Tab bar */}
      <div
        className="flex gap-0.5 overflow-x-auto mb-8 p-1 rounded-xl"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all"
            style={{
              background: activeTab === tab.id ? 'rgba(124,58,237,0.2)' : 'transparent',
              color: activeTab === tab.id ? '#a78bfa' : '#5a5a78',
              border: activeTab === tab.id ? '1px solid rgba(124,58,237,0.35)' : '1px solid transparent',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="animate-fade-in">
        {activeTab === 'overview' && <OverviewTab tool={tool} />}
        {activeTab === 'install'  && <InstallTab  tool={tool} />}
        {activeTab === 'usage'    && <UsageTab    tool={tool} />}
        {activeTab === 'pricing'  && <PricingTab  tool={tool} />}
        {activeTab === 'review'   && <ReviewTab   tool={tool} />}
        {activeTab === 'alts'     && <AltsTab     alternatives={alternatives} />}
      </div>
    </div>
  )
}

/* ── Overview ──────────────────────────────────────────────────── */
function OverviewTab({ tool }: { tool: Tool }) {
  return (
    <div className="space-y-6">
      <Section title={`À propos de ${tool.name}`}>
        <p className="leading-relaxed text-[15px]" style={{ color: '#a8a8c0' }}>
          {tool.longDescription}
        </p>
      </Section>

      <Section title="Cas d'usage">
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg text-sm"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#a8a8c0' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </Section>
    </div>
  )
}

/* ── Install ──────────────────────────────────────────────────── */
function InstallTab({ tool }: { tool: Tool }) {
  return (
    <Section title="Guide d'installation étape par étape">
      <ol className="space-y-6">
        {tool.installationSteps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5"
              style={{
                background: `linear-gradient(135deg, ${tool.color}, ${tool.color}80)`,
                color: '#fff',
              }}
            >
              {i + 1}
            </div>
            <div className="flex-1">
              <p className="font-semibold mb-1.5" style={{ color: '#f0f0f8' }}>{step.title}</p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#6b7280' }}>
                {step.description}
              </p>
              {step.code && (
                <pre
                  className="text-xs p-4 rounded-xl overflow-x-auto"
                  style={{
                    background: '#0a0a12',
                    border: '1px solid rgba(255,255,255,0.07)',
                    color: '#a8ff78',
                    fontFamily: 'var(--font-geist-mono, monospace)',
                    lineHeight: 1.6,
                  }}
                >
                  <code>{step.code}</code>
                </pre>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

/* ── Usage ──────────────────────────────────────────────────── */
function UsageTab({ tool }: { tool: Tool }) {
  return (
    <div className="space-y-8">
      {tool.usageExamples.map((ex, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div
            className="px-5 py-3 flex items-center gap-2"
            style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span
              className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
              style={{ background: tool.color }}
            >
              {i + 1}
            </span>
            <h3 className="font-semibold text-sm" style={{ color: '#f0f0f8' }}>{ex.title}</h3>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm" style={{ color: '#6b7280' }}>{ex.description}</p>
            {ex.prompt && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#5a5a78' }}>
                  Prompt / Input
                </p>
                <div
                  className="text-sm p-4 rounded-xl italic"
                  style={{
                    background: 'rgba(124,58,237,0.08)',
                    border: '1px solid rgba(124,58,237,0.15)',
                    color: '#c4b5fd',
                    lineHeight: 1.6,
                  }}
                >
                  "{ex.prompt}"
                </div>
              </div>
            )}
            {ex.result && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#5a5a78' }}>
                  Résultat obtenu
                </p>
                <div
                  className="text-sm p-4 rounded-xl"
                  style={{
                    background: 'rgba(16,185,129,0.06)',
                    border: '1px solid rgba(16,185,129,0.15)',
                    color: '#6ee7b7',
                    lineHeight: 1.6,
                  }}
                >
                  ✓ {ex.result}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Pricing ──────────────────────────────────────────────────── */
function PricingTab({ tool }: { tool: Tool }) {
  return (
    <Section title="Plans et tarifs">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tool.pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-xl p-5 relative transition-all"
            style={{
              background: plan.highlighted ? `${tool.color}10` : 'rgba(255,255,255,0.02)',
              border: plan.highlighted ? `1px solid ${tool.color}40` : '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {plan.highlighted && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-semibold text-white"
                style={{ background: tool.color }}
              >
                Recommandé
              </span>
            )}
            <h3 className="font-bold mb-1" style={{ color: '#f0f0f8' }}>{plan.name}</h3>
            <p className="text-2xl font-black mb-4" style={{ color: plan.highlighted ? tool.color : '#f0f0f8' }}>
              {plan.price}
            </p>
            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm" style={{ color: '#6b7280' }}>
                  <span style={{ color: tool.color }} className="mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full flex items-center justify-center py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={
                plan.highlighted
                  ? { background: tool.color, color: '#fff' }
                  : { background: 'rgba(255,255,255,0.06)', color: '#a8a8c0', border: '1px solid rgba(255,255,255,0.08)' }
              }
            >
              Commencer
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ── Review ──────────────────────────────────────────────────── */
function ReviewTab({ tool }: { tool: Tool }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Section title="Points forts">
        <ul className="space-y-3">
          {tool.pros.map((pro) => (
            <li key={pro} className="flex items-start gap-3 text-sm" style={{ color: '#a8a8c0' }}>
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold"
                style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399' }}
              >
                +
              </span>
              {pro}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Limites">
        <ul className="space-y-3">
          {tool.cons.map((con) => (
            <li key={con} className="flex items-start gap-3 text-sm" style={{ color: '#a8a8c0' }}>
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold"
                style={{ background: 'rgba(239,68,68,0.12)', color: '#f87171' }}
              >
                −
              </span>
              {con}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}

/* ── Alternatives ──────────────────────────────────────────────── */
function AltsTab({ alternatives }: { alternatives: CatalogTool[] }) {
  if (alternatives.length === 0) {
    return <p className="text-sm" style={{ color: '#5a5a78' }}>Aucune alternative disponible.</p>
  }
  return (
    <Section title="Outils similaires à comparer">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {alternatives.map((alt) => (
          <Link
            key={alt.slug}
            href={`/tools/${alt.slug}`}
            className="flex items-start gap-3 p-4 rounded-xl transition-all group"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <ToolLogo tool={alt} size={40} />
            <div className="min-w-0">
              <p className="font-semibold text-sm mb-0.5 group-hover:text-violet-400 transition-colors" style={{ color: '#f0f0f8' }}>
                {alt.name}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: '#5a5a78' }}>{alt.tagline}</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-xs" style={{ color: '#5a5a78' }}>★ {alt.rating}</span>
                <span className="text-xs" style={{ color: '#3a3a50' }}>·</span>
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    background: alt.pricing === 'free' ? 'rgba(16,185,129,0.12)' : alt.pricing === 'freemium' ? 'rgba(124,58,237,0.12)' : 'rgba(239,68,68,0.12)',
                    color: alt.pricing === 'free' ? '#34d399' : alt.pricing === 'freemium' ? '#a78bfa' : '#f87171',
                  }}
                >
                  {alt.pricing === 'free' ? 'Gratuit' : alt.pricing === 'freemium' ? 'Freemium' : 'Payant'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}

/* ── Section wrapper ──────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-6"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <h2 className="font-bold mb-5" style={{ color: '#f0f0f8' }}>{title}</h2>
      {children}
    </div>
  )
}
