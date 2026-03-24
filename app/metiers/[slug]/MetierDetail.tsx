'use client'

import Link from 'next/link'
import {
  Stethoscope, Scale, TrendingUp, GraduationCap, Code2, Megaphone,
  ShoppingBag, Brain, Hammer, ChefHat, Home, Camera, Users, Rocket,
  Clock, Wallet, Check, ChevronRight,
} from 'lucide-react'
import type { Metier } from '@/lib/metiers'
import { getMetierTop5Tools } from '@/lib/metiers'
import ToolLogo from '@/app/ui/ToolLogo'
import ReviewSection from '@/app/ui/ReviewSection'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
  Stethoscope, Scale, TrendingUp, GraduationCap, Code2, Megaphone,
  ShoppingBag, Brain, Hammer, ChefHat, Home, Camera, Users, Rocket,
}

const PRICING_STYLE = {
  free:     { bg: 'rgba(16,185,129,0.12)',  color: '#34d399', label: 'Gratuit' },
  freemium: { bg: 'rgba(124,58,237,0.12)', color: '#a78bfa', label: 'Freemium' },
  paid:     { bg: 'rgba(239,68,68,0.12)',   color: '#f87171', label: 'Payant' },
}

const TOOL_DESCS = [
  'L\'outil #1 — incontournable',
  'Indispensable au quotidien',
  'Gagnez des heures chaque semaine',
  'Adoptée par des milliers de professionnels',
  'Complétez votre stack IA',
]

export default function MetierDetail({ metier }: { metier: Metier }) {
  const tools = getMetierTop5Tools(metier)
  const Icon = ICON_MAP[metier.icon] ?? Rocket

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: '#3a3a50' }}>
        <Link href="/" className="hover:text-violet-400 transition-colors" style={{ color: '#5a5a78' }}>Accueil</Link>
        <ChevronRight size={14} />
        <Link href="/metiers" className="hover:text-violet-400 transition-colors" style={{ color: '#5a5a78' }}>Métiers</Link>
        <ChevronRight size={14} />
        <span style={{ color: '#a78bfa' }}>{metier.name}</span>
      </nav>

      {/* Hero */}
      <div
        className="rounded-2xl overflow-hidden mb-8"
        style={{ background: '#0f0f1a', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7, transparent)' }} />
        <div className="p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(124,58,237,0.12)' }}
            >
              <Icon size={32} style={{ color: '#a78bfa' }} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-3xl font-black" style={{ color: '#f0f0f8' }}>
                  {metier.name}
                </h1>
                <span
                  className="px-2.5 py-1 rounded-full text-sm font-medium"
                  style={{ background: 'rgba(124,58,237,0.1)', color: '#a78bfa' }}
                >
                  {metier.sector}
                </span>
              </div>
              <p className="text-base" style={{ color: '#5a5a78' }}>
                Top 5 des IAs indispensables pour optimiser votre quotidien professionnel
              </p>
            </div>
            <div className="flex sm:flex-col gap-3 shrink-0">
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Clock size={14} style={{ color: '#a78bfa' }} />
                <span style={{ color: '#a8a8c0' }}>{metier.tempsGagne}</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Wallet size={14} style={{ color: '#34d399' }} />
                <span style={{ color: '#a8a8c0' }}>{metier.budget}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top 5 IAs */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-5" style={{ color: '#f0f0f8' }}>
          Top 5 IAs indispensables pour {metier.name.toLowerCase()}s
        </h2>
        <div className="space-y-3">
          {tools.map((tool, i) => {
            const p = PRICING_STYLE[tool.pricing]
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="flex items-start gap-4 p-5 rounded-xl transition-all group"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 mt-1"
                  style={{
                    background: i < 3 ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.05)',
                    color: i < 3 ? '#a78bfa' : '#3a3a50',
                  }}
                >
                  {i + 1}
                </div>
                <ToolLogo tool={tool} size={44} className="shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="font-bold text-sm group-hover:text-violet-400 transition-colors" style={{ color: '#f0f0f8' }}>
                      {tool.name}
                    </p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: p.bg, color: p.color }}
                    >
                      {p.label}
                    </span>
                    <span className="text-xs" style={{ color: '#3a3a50' }}>★ {tool.rating}</span>
                  </div>
                  <p className="text-sm mb-1" style={{ color: '#5a5a78' }}>{tool.tagline}</p>
                  <p className="text-xs" style={{ color: '#a78bfa' }}>{TOOL_DESCS[i]}</p>
                </div>
                <span className="text-xs shrink-0 self-center" style={{ color: '#3a3a50' }}>Voir →</span>
              </Link>
            )
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Use cases */}
        <div
          className="rounded-xl p-6"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h2 className="font-bold mb-4" style={{ color: '#f0f0f8' }}>
            Cas d&apos;usage concrets
          </h2>
          <ul className="space-y-3">
            {metier.useCases.map((uc, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(16,185,129,0.12)' }}
                >
                  <Check size={11} style={{ color: '#34d399' }} />
                </span>
                <span className="text-sm leading-relaxed" style={{ color: '#a8a8c0' }}>{uc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Guide 3 steps */}
        <div
          className="rounded-xl p-6"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h2 className="font-bold mb-4" style={{ color: '#f0f0f8' }}>
            Démarrez en 3 étapes
          </h2>
          <ol className="space-y-4">
            {metier.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff' }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#f0f0f8' }}>{step.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#5a5a78' }}>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="flex flex-wrap gap-6 p-5 rounded-xl mb-8"
        style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)' }}
      >
        <div className="flex items-center gap-2">
          <Clock size={16} style={{ color: '#a78bfa' }} />
          <div>
            <p className="text-xs" style={{ color: '#5a5a78' }}>Temps gagné estimé</p>
            <p className="text-sm font-bold" style={{ color: '#f0f0f8' }}>{metier.tempsGagne}</p>
          </div>
        </div>
        <div className="w-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="flex items-center gap-2">
          <Wallet size={16} style={{ color: '#34d399' }} />
          <div>
            <p className="text-xs" style={{ color: '#5a5a78' }}>Budget mensuel estimé</p>
            <p className="text-sm font-bold" style={{ color: '#f0f0f8' }}>{metier.budget}</p>
          </div>
        </div>
        <div className="w-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="flex items-center gap-2">
          <span style={{ color: '#fbbf24', fontSize: 16 }}>★</span>
          <div>
            <p className="text-xs" style={{ color: '#5a5a78' }}>Outils recommandés</p>
            <p className="text-sm font-bold" style={{ color: '#f0f0f8' }}>{tools.length} IAs sélectionnées</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section>
        <h2 className="text-xl font-bold mb-5" style={{ color: '#f0f0f8' }}>
          Avis de professionnels
        </h2>
        <ReviewSection metierSlug={metier.slug} />
      </section>
    </div>
  )
}
