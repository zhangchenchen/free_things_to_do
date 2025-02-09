import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to Privacy</h2>
              <p className="mb-4">
                Free Things To Do is committed to providing a free service while respecting your privacy. 
                We do not collect, store, or process any personal information from our users.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">How Our Service Works</h2>
              <p className="mb-4">
                When you use our service to search for activities:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your search queries are processed in real-time and are not stored</li>
                <li>No account creation is required</li>
                <li>No personal information is collected or saved</li>
                <li>No cookies are used to track your activity</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p>
                Our service uses AI technology to generate activity recommendations. 
                All queries are anonymized and no personal information is shared with our AI service providers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Changes to Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices. 
                Any updates will be posted on this page.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p>
                If you have any questions about our privacy practices, you can reach us at{" "}
                <a href="mailto:contact@freethingstodo.com" className="text-primary hover:underline">
                  pekingzcc@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
} 