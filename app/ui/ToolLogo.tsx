type ToolLogoProps = {
  tool: { url: string; name: string }
  size?: number
  className?: string
}

export default function ToolLogo({ tool, size = 40, className = '' }: ToolLogoProps) {
  let domain = ''
  try { domain = new URL(tool.url).hostname } catch {}

  const src = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
    : ''

  if (!src) return null

  return (
    <img
      src={src}
      alt={tool.name}
      width={size}
      height={size}
      className={className}
      style={{ borderRadius: 8, background: '#fff', padding: 4, objectFit: 'contain' }}
    />
  )
}
