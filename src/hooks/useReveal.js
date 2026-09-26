import { useEffect, useRef } from 'react'

// Adds the "reveal" fade/slide-in behaviour to any element that carries
// the .reveal class inside the returned ref's subtree.
// Pass a `resetKey` (e.g. a filter value) when the subtree's .reveal
// elements can change after mount (like a filtered product grid), so the
// hook re-scans and observes the newly added elements instead of leaving
// them stuck at opacity 0.
export function useReveal(resetKey) {
  const containerRef = useRef(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const els = root.querySelectorAll('.reveal:not(.in)')

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [resetKey])

  return containerRef
}
