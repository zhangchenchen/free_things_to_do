import { Metadata } from 'next'
import { HomeClient } from './home-client'

export const metadata: Metadata = {
  title: 'Free Things To Do - Discover Amazing Free Activities',
  description: 'Find the best free activities and things to do in your area. Perfect for families, students, and anyone looking for cost-free entertainment.',
  keywords: 'free activities, free things to do, free entertainment, family activities, student activities, free things to do near me',
  openGraph: {
    title: 'Free Things To Do - Discover Amazing Free Activities',
    description: 'Find the best free activities and things to do in your area.',
    type: 'website',
    url: 'https://freethingstodo.net',
  },
  alternates: {
    canonical: 'https://freethingstodo.net'
  }
}

export default function HomePage() {
  return <HomeClient />
}