export default function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 110 110" fill="none">
      <rect x="0" y="0" width="110" height="110" rx="20" fill="#111"/>
      <path d="M18 18 L18 92" stroke="white" strokeWidth="13" strokeLinecap="round"/>
      <path d="M18 18 L55 18" stroke="white" strokeWidth="13" strokeLinecap="round"/>
      <path d="M18 48 L50 48" stroke="white" strokeWidth="13" strokeLinecap="round"/>
      <path d="M55 18 L55 92" stroke="white" strokeWidth="13" strokeLinecap="round"/>
      <path d="M55 18 L82 18 Q97 18 97 40 Q97 62 82 62 L55 62" stroke="white" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
