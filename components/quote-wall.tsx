'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Quote {
  text: string
  author: string
}

const quotes: Quote[] = [
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    author: "John 3:16",
  },
  {
    text: "Government 'help' to business is just as disastrous as government persecution... the only way a government can be of service to national prosperity is by keeping its hands off.",
    author: "Ayn Rand",
  },
  {
    text: "Next.js has been a game-changer for our agency work and team collaboration. Its powerful features have allowed us to build high-performance websites quickly and efficiently like never before.",
    author: "Daniel Lopez",
  }
]

export function QuoteWall() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className="opacity-0 translate-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Card className="h-full bg-card">
            <CardHeader>
              <CardTitle className="text-primary">Testimonial</CardTitle>
              <CardDescription className="text-muted-foreground">What people are saying</CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="space-y-2">
                <p className="text-lg text-card-foreground">&ldquo;{quote.text}&rdquo;</p>
                <footer className="flex items-center space-x-4 mt-4">
                  <div>
                    <span>&mdash; {quote.author}</span>
                  </div>
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
