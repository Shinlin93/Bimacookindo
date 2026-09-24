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
