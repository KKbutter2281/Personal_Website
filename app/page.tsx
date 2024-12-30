import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Code, Briefcase, User, MessageSquare } from 'lucide-react'
import Link from "next/link"
import GitHubProjects from "@/components/github-projects"
import { QuoteWall } from "@/components/quote-wall"
import { FloatingNav } from "@/components/floating-nav"

export default function Home() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <FloatingNav />
      
      <section id="hero" className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-up bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Kaleb Arora
        </h1>
        <p className="text-2xl mb-8 animate-fade-in-up animation-delay-200 text-muted-foreground">
          Software Developer & Creator
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-300">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contact">Get in touch</Link>
          </Button>
          <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Link>
          </Button>
        </div>
      </section>

      <section id="about" className="py-20">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary flex items-center">
              <User className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-card-foreground">
              I&apos;m a passionate software developer with a keen interest in creating innovative solutions. 
              With a strong foundation in web technologies and a love for clean, efficient code, 
              I strive to build applications that make a difference.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary flex items-center justify-center">
          <Code className="mr-2" /> Projects
        </h2>
        <GitHubProjects />
      </section>

      <section id="skills" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary flex items-center justify-center">
          <Briefcase className="mr-2" /> Skills
        </h2>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-primary">Technical Expertise</CardTitle>
            <CardDescription className="text-muted-foreground">Technologies and tools I work with</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Git', 'Docker', 'AWS', 'GraphQL'].map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary text-secondary-foreground">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="testimonials" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">What People Say</h2>
        <QuoteWall />
      </section>

      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary flex items-center justify-center">
          <MessageSquare className="mr-2" /> Get in Touch
        </h2>
        <Card className="bg-card">
          <CardContent className="pt-6">
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="https://github.com/KKbutter">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="https://linkedin.com/in/kalebarora">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="mailto:kaleb.arora@example.com">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

