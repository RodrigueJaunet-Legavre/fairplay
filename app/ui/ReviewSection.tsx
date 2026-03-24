'use client'

import { useState } from 'react'
import ReviewsList from './ReviewsList'
import ReviewForm from './ReviewForm'

type Props = {
  toolSlug?: string
  metierSlug?: string
}

export default function ReviewSection({ toolSlug, metierSlug }: Props) {
  const [reviewKey, setReviewKey] = useState(0)

  return (
    <div
      className="rounded-xl p-6"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <h2 className="font-bold mb-5" style={{ color: '#f0f0f8' }}>Avis utilisateurs</h2>
      <ReviewsList toolSlug={toolSlug} metierSlug={metierSlug} refreshKey={reviewKey} />
      <ReviewForm
        toolSlug={toolSlug}
        metierSlug={metierSlug}
        onReviewAdded={() => setReviewKey((k) => k + 1)}
      />
    </div>
  )
}
