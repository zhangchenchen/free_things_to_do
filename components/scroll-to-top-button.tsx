'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ScrollToTopButton() {
  return (
    <Button 
      variant="outline" 
      size="lg"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Find Activities in Your City
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
} 