import { Suspense } from 'react'
import { tools } from '@/lib/tools'
import { allCatalogTools } from '@/lib/tools-index'
import type { CatalogTool } from '@/lib/catalog-types'
import ToolsGrid from '@/app/ui/ToolsGrid'

const allTools: CatalogTool[] = [
  ...(tools as unknown as CatalogTool[]),
  ...allCatalogTools,
]

export const metadata = {
  title: 'Explorer les outils IA — Fairplay',
  description: `${allTools.length}+ outils IA référencés et filtrables par catégorie.`,
}

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-black mb-2" style={{ color: '#f0f0f8' }}>
          Explorer les outils IA
        </h1>
        <p style={{ color: '#5a5a78' }}>
          {allTools.length}+ outils référencés · Filtrez par catégorie ou recherchez votre besoin
        </p>
      </div>
      <Suspense fallback={<p style={{ color: '#5a5a78' }}>Chargement…</p>}>
        <ToolsGrid tools={allTools} />
      </Suspense>
    </div>
  )
}
