import { useEffect, useState } from 'react'

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query) {
      setResults([])
      setError(null)
      return
    }

    const controller = new AbortController()
    let alive = true

    ;(async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        )

        if (!alive) return
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const data = await res.json()
        setResults(data.products || [])
      } catch (e) {
        if (e.name !== 'AbortError') {
          setError(e.message || String(e))
        }
      } finally {
        if (alive) setLoading(false)
      }
    })()

    // Cleanup: prevent stale updates and cancel the request
    return () => {
      alive = false
      controller.abort()
    }
  }, [query])

  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />

      {loading && <small className="muted">Loading…</small>}
      {error && <small style={{ color: 'salmon' }}>Error: {error}</small>}

      <ul>
        {results.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  )
}