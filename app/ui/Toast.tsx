'use client'

import { useEffect, useState } from 'react'

type ToastItem = { id: number; message: string }

export default function Toast() {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  useEffect(() => {
    function handler(e: Event) {
      const { message } = (e as CustomEvent<{ message: string }>).detail
      const id = Date.now()
      setToasts((prev) => [...prev, { id, message }])
      setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 2500)
    }
    window.addEventListener('fairplay:toast', handler)
    return () => window.removeEventListener('fairplay:toast', handler)
  }, [])

  if (!toasts.length) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 items-center pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="animate-toast-up flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            color: 'white',
            boxShadow: '0 8px 32px rgba(124,58,237,0.45)',
          }}
        >
          {t.message}
        </div>
      ))}
    </div>
  )
}
