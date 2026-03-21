import type { CatalogTool } from './catalog-types'
import codeTools from './tools-code'
import dataTools from './tools-data'
import imageTools from './tools-image'
import videoTools from './tools-video'
import audioTools from './tools-audio'
import writingTools from './tools-writing'
import businessTools from './tools-business'
import financeTools from './tools-finance'
import hrTools from './tools-hr'
import healthTools from './tools-health'
import industryTools from './tools-industry'
import miscTools from './tools-misc'

export type { CatalogTool }

export const allCatalogTools: CatalogTool[] = [
  ...codeTools,
  ...dataTools,
  ...imageTools,
  ...videoTools,
  ...audioTools,
  ...writingTools,
  ...businessTools,
  ...financeTools,
  ...hrTools,
  ...healthTools,
  ...industryTools,
  ...miscTools,
]

export const catalogCategories = [
  { slug: 'all',            label: 'Tous' },
  { slug: 'generaliste',   label: 'Généraliste' },
  { slug: 'code',          label: 'Code' },
  { slug: 'data',          label: 'Data & IA' },
  { slug: 'image',         label: 'Image' },
  { slug: 'video',         label: 'Vidéo' },
  { slug: 'audio',         label: 'Audio' },
  { slug: 'writing',       label: 'Rédaction' },
  { slug: 'business',      label: 'Business' },
  { slug: 'finance',       label: 'Finance' },
  { slug: 'hr',            label: 'RH & Formation' },
  { slug: 'health',        label: 'Santé' },
  { slug: 'industry',      label: 'Secteurs' },
  { slug: 'misc',          label: 'Autres' },
  // Aliases for existing detailed tools categories
  { slug: 'marketing',     label: 'Marketing' },
  { slug: 'productivity',  label: 'Productivité' },
  { slug: 'research',      label: 'Recherche' },
  { slug: 'design',        label: 'Design' },
  { slug: 'chat',          label: 'Chat IA' },
]

export function getCatalogToolBySlug(slug: string): CatalogTool | undefined {
  return allCatalogTools.find((t) => t.slug === slug)
}

export function getFeaturedCatalogTools(limit = 8): CatalogTool[] {
  return allCatalogTools.filter((t) => t.featured).slice(0, limit)
}

export function getTopCatalogTools(limit = 10): CatalogTool[] {
  return [...allCatalogTools].sort((a, b) => b.upvotes - a.upvotes).slice(0, limit)
}
