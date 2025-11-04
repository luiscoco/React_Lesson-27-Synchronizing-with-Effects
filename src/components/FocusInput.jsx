import { useEffect, useRef } from 'react'

export default function FocusInput({ shouldFocus }) {
  const ref = useRef(null)

  useEffect(() => {
    if (shouldFocus) ref.current?.focus()
  }, [shouldFocus])

  return <input ref={ref} placeholder="Focus me" />
}