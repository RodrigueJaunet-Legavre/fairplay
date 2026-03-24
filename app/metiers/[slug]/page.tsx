import { notFound } from 'next/navigation'
import { getMetierBySlug } from '@/lib/metiers'
import MetierDetail from './MetierDetail'

export default async function MetierPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const metier = getMetierBySlug(slug)
  if (!metier) notFound()
  return <MetierDetail metier={metier} />
}
