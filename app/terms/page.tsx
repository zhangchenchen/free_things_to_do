import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import { Metadata } from 'next'

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Free Things To Do, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p>
                Free Things To Do is a platform that uses AI to recommend free activities in various locations. While we strive to provide accurate information, we cannot guarantee the availability or accuracy of all recommendations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate information when using our service</li>
                <li>Use the service in accordance with applicable laws</li>
                <li>Respect the rights of other users and third parties</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
              <p>
                Free Things To Do is not responsible for any injuries, losses, or damages that may occur while participating in recommended activities.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of updated terms.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Terms of Service | Free Things To Do',
  description: 'Terms of service and usage conditions for Free Things To Do.',
  alternates: {
    canonical: 'https://freethingstodo.net/terms'
  }
} 