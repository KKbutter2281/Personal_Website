import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header className="bg-card sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-primary">KKbutter</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
            <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" className="mr-2">
              <Link href="https://github.com/KKbutter">GitHub</Link>
            </Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

