import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { logPageView } from '../utils/analytics'

export const usePageTracking = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      logPageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
} 