'use client'

import { useEffect } from 'react'
import { initGA } from '@/utils/analytics'
import { usePageTracking } from '@/hooks/usePageTracking'

export function AnalyticsProvider() {
  useEffect(() => {
    initGA()
  }, [])

  usePageTracking()

  return null
} 