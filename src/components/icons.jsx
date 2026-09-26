const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function PotIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common}>
      <path d="M4 10h16v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-2Z" />
      <path d="M2 10h20" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" />
    </svg>
  )
}

export function PanIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common}>
      <ellipse cx="10" cy="12" rx="7" ry="5" />
      <path d="M17 10l5-3" />
    </svg>
  )
}

export function SetIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common}>
      <rect x="3" y="9" width="8" height="7" rx="1.5" />
      <rect x="13" y="6" width="8" height="10" rx="1.5" />
    </svg>
  )
}

export function UtensilIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common}>
      <path d="M7 3v7a2 2 0 0 0 4 0V3" />
      <path d="M9 10v11" />
      <path d="M16 3c-1.5 1-2 3-2 5s1 3 2 3v9" />
    </svg>
  )
}

export function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common}>
      <path d="M4 20l1.3-3.8A8 8 0 1 1 8.8 19L4 20Z" />
      <path d="M8.7 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.8.1.1.1.3 0 .4-.4.6-.8.9-.5 1.4.6 1.1 1.3 1.7 2.3 2.2.2.1.4.1.5-.1.2-.3.6-.9.8-1.1.1-.2.3-.2.5-.1.5.2 1.5.7 1.8.9.2.1.4.2.4.3 0 .5-.2 1.1-.6 1.5-.4.4-1.1.7-1.7.6-1.5-.2-3-.9-4.2-2-1-.9-1.8-2-2.3-3.2-.3-.6-.1-1.3.3-1.7Z" />
    </svg>
  )
}

export function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common}>
      <path d="M14 3v10.5a3.2 3.2 0 1 1-2.4-3.1" />
      <path d="M14 3c.3 2.4 2 4.2 4.4 4.5" />
    </svg>
  )
}
