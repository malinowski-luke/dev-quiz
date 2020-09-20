import { useState, useEffect } from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: stringifyPixels(window.innerWidth),
        height: stringifyPixels(window.innerHeight),
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

const stringifyPixels = (pixelSize) => `${pixelSize}px`

export default useWindowSize
