import { useEffect } from 'react'

export default function ResizeLogger() {
  useEffect(() => {
    function onResize() {
      console.log('Width:', window.innerWidth)
    }
    window.addEventListener('resize', onResize)

    // Cleanup removes listener on unmount
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return <p>Open the console and resize the window to see logs.</p>
}