export type CatalogTool = {
  slug: string
  name: string
  tagline: string
  description: string
  category: string
  subcategory?: string
  pricing: 'free' | 'freemium' | 'paid'
  pricingDetail: string
  tags: string[]
  rating: number
  url: string
  emoji: string
  color: string
  upvotes: number
  users?: string
  featured?: boolean
  specialites?: string[]
}

export function t(
  slug: string, name: string, tagline: string,
  cat: string, sub: string,
  pricing: 'free' | 'freemium' | 'paid', pd: string,
  tags: string[], rating: number, url: string,
  emoji: string, color: string, upvotes: number,
  users?: string, featured?: boolean
): CatalogTool {
  return { slug, name, tagline, description: tagline, category: cat, subcategory: sub, pricing, pricingDetail: pd, tags, rating, url, emoji, color, upvotes, users, featured }
}
