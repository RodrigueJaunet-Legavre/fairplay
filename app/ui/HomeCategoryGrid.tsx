'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Sparkles, Code2, BarChart2, Image as LucideImage, Video,
  Mic, PenLine, Briefcase, TrendingUp, Users, Heart,
  Factory, LayoutGrid,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type HomeCat = {
  slug: string
  label: string
  count: number
  color: string
  Icon: LucideIcon
}

// Sorted by tool count descending (counts from catalog)
const HOME_CATEGORIES: HomeCat[] = [
  { slug: 'industry',    label: 'Secteurs',       count: 48, color: '#f59e0b', Icon: Factory      },
  { slug: 'code',        label: 'Code',            count: 45, color: '#3b82f6', Icon: Code2        },
  { slug: 'misc',        label: 'Autres',          count: 44, color: '#64748b', Icon: LayoutGrid   },
  { slug: 'data',        label: 'Data & IA',       count: 44, color: '#06b6d4', Icon: BarChart2    },
  { slug: 'writing',     label: 'Rédaction',       count: 42, color: '#10b981', Icon: PenLine      },
  { slug: 'business',    label: 'Business',        count: 41, color: '#6366f1', Icon: Briefcase    },
  { slug: 'finance',     label: 'Finance',         count: 41, color: '#22c55e', Icon: TrendingUp   },
  { slug: 'image',       label: 'Image',           count: 41, color: '#ec4899', Icon: LucideImage  },
  { slug: 'hr',          label: 'RH & Formation',  count: 39, color: '#14b8a6', Icon: Users        },
  { slug: 'video',       label: 'Vidéo',           count: 38, color: '#ef4444', Icon: Video        },
  { slug: 'audio',       label: 'Audio',           count: 38, color: '#f97316', Icon: Mic          },
  { slug: 'health',      label: 'Santé',           count: 37, color: '#f43f5e', Icon: Heart        },
  { slug: 'generaliste', label: 'Généraliste',     count: 0,  color: '#7c3aed', Icon: Sparkles     },
]

function CategoryCard({ cat }: { cat: HomeCat }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/tools?category=${cat.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-200"
      style={{
        background:   hovered ? `${cat.color}18` : `${cat.color}0d`,
        border:       `1px solid ${hovered ? cat.color + '50' : cat.color + '20'}`,
        transform:    hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow:    hovered ? `0 8px 24px ${cat.color}18` : 'none',
      }}
    >
      {/* Icon container */}
      <div
        className="rounded-xl flex items-center justify-center transition-all duration-200"
        style={{
          width: 52,
          height: 52,
          background: hovered ? `${cat.color}25` : `${cat.color}15`,
        }}
      >
        <cat.Icon size={26} style={{ color: cat.color }} strokeWidth={1.6} />
      </div>

      {/* Label */}
      <span
        className="text-sm font-semibold text-center leading-tight"
        style={{ color: hovered ? '#f0f0f8' : '#d1d5db' }}
      >
        {cat.label}
      </span>

      {/* Count badge */}
      {cat.count > 0 && (
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{ background: `${cat.color}15`, color: cat.color }}
        >
          {cat.count} outils
        </span>
      )}
    </Link>
  )
}

export default function HomeCategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {HOME_CATEGORIES.map((cat) => (
        <CategoryCard key={cat.slug} cat={cat} />
      ))}
    </div>
  )
}
