export const ADMIN_EMAILS = ['jaunetrodrigue@gmail.com']

export function isAdmin(email: string | undefined | null): boolean {
  if (!email) return false
  return ADMIN_EMAILS.includes(email.toLowerCase())
}
