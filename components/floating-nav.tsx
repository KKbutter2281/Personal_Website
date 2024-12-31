'use client'

import { useState, useEffect } from 'react'
import { User, Code, Briefcase, MessageSquare } from 'lucide-react'

const navItems = [
  { icon: User, label: 'About', href: '#about' },
  { icon: Code, label: 'Projects', href: '#projects' },
  { icon: Briefcase, label: 'Skills', href: '#skills' },
  { icon: MessageSquare, label: 'Contact', href: '#contact' },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    setMounted(true)

    return () => observer.disconnect()
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out opacity-90 hover:opacity-100">
      <nav className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 border border-border/50">
        <ul className="flex space-x-4">
          {navItems.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`flex flex-col items-center p-2 rounded-full transition-colors ${
                  activeSection === href.slice(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs mt-1">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

