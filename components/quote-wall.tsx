import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

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
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {quotes.map((quote, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-card h-full">
            <CardHeader>
              <CardTitle className="text-primary">Quotes</CardTitle>
              <CardDescription className="text-muted-foreground">Quote Wall</CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="space-y-2">
                <p className="text-lg text-card-foreground">&ldquo;{quote.text}&rdquo;</p>
                <footer className="flex items-center space-x-4 mt-4">
                  <div>
                    <p className="text-sm font-semibold text-primary">{quote.author}</p>
                  </div>
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

