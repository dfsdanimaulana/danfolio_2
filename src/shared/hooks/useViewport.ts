import { useState, useEffect } from 'react'

interface Viewport {
    width: number
    height: number
    isMobile: boolean
}

const useViewport = (): Viewport => {
    const isClient = typeof window === 'object'

    const [viewport, setViewport] = useState<Viewport>(() => {
        if (isClient) {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth < 640,
            }
        } else {
            // Set default values for server-side rendering
            return {
                width: 1024,
                height: 768,
                isMobile: false,
            }
        }
    })

    useEffect(() => {
        if (!isClient) {
            return // Don't run the rest of the effect on the server side
        }

        const handleResize = () => {
            const isMobile = window.innerWidth < 640
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile,
            })
        }

        // Add event listener for window resize
        window.addEventListener('resize', handleResize)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [isClient]) // Re-run effect when isClient changes

    return viewport
}

export default useViewport
