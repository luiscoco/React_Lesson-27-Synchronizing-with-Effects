import { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount((c) => c + 1) // Event handler: runs on click
  }

  // Effect: runs after render when count changes
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return <button onClick={handleClick}>Clicked {count} times</button>
}