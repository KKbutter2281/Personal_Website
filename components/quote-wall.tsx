import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from 'framer-motion'

interface Quote {
  text: string
  author: string
  role: string
  avatar: string
}

const quotes: Quote[] = [
  {
    text: "Kaleb's ability to quickly grasp complex concepts and implement innovative solutions is truly impressive.",
    author: "John 3:16",
  },
  {
    text: "Working with Kaleb was a game-changer for our project. His dedication and expertise significantly improved our outcomes.",
    author: "John Smith",
  },
  {
    text: "Kaleb's problem-solving skills and attention to detail make him an invaluable asset to any development team.",
    author: "Emily Johnson",
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
                  <Avatar>
                    <AvatarImage src={quote.avatar} alt={quote.author} />
                    <AvatarFallback>{quote.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
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

