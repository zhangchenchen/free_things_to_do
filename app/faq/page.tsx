import { SiteHeader } from "@/components/site-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I find activities in my area?",
      answer: "Use our search bar at the top of the homepage to enter your location. You can also filter by group size and preferences like indoor/outdoor activities. We'll show you the best free activities near you.",
    },
    {
      question: "Are all activities completely free?",
      answer: "Yes! All activities listed on our platform are completely free to participate in. However, you might need to consider transportation costs or optional expenses like snacks.",
    },
    {
      question: "Can I suggest a free activity?",
      answer: "Absolutely! We welcome community contributions. You can submit your suggestions through our contact form, and our team will review and add appropriate activities to our database.",
    },
    {
      question: "How often is the activity list updated?",
      answer: "Our activity database is updated daily with new free events and activities. We also regularly verify existing listings to ensure they're still available and free.",
    },
    {
      question: "Do I need to create an account?",
      answer: "No, you don't need an account to search for and discover free activities. However, creating an account allows you to save favorite activities and receive personalized recommendations.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground mb-8">
              Find answers to common questions about using Free Things To Do and discovering activities.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  )
}