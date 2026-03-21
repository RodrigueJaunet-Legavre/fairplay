import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

// Returns null if env vars are not configured yet
export function getSupabase() {
  if (!supabaseUrl || !supabaseAnonKey) return null
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createBrowserClient(supabaseUrl, supabaseAnonKey)
  : null
