import type { CatalogTool } from './catalog-types'
import catalogTools from './catalog-tools'

export type { CatalogTool }

export const allCatalogTools: CatalogTool[] = catalogTools

export const catalogCategories = [
  { slug: 'all',          label: 'Tous' },
  { slug: 'generaliste',  label: 'Généraliste' },
  { slug: 'code',         label: 'Code' },
  { slug: 'image',        label: 'Image' },
  { slug: 'video',        label: 'Vidéo' },
  { slug: 'audio',        label: 'Audio' },
  { slug: 'redaction',    label: 'Rédaction' },
  { slug: 'marketing',    label: 'Marketing' },
  { slug: 'business',     label: 'Business & Productivité' },
  { slug: 'design',       label: 'Design' },
  { slug: 'finance',      label: 'Finance' },
  { slug: 'rh',           label: 'RH & Formation' },
  { slug: 'sante',        label: 'Santé' },
  { slug: 'recherche',    label: 'Recherche & Data' },
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
