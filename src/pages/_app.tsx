import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { initGA, logEvent } from '../utils/analytics'
import { usePageTracking } from '../hooks/usePageTracking'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initGA()
  }, [])

  usePageTracking()

  // 示例：如果需要全局事件跟踪
  const handleGlobalEvent = () => {
    logEvent('global', 'action', 'label')
  }

  return <Component {...pageProps} />
}

export default App 