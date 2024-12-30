'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Code, Briefcase, MessageSquare } from 'lucide-react'

const navItems = [
  { icon: User, label: 'About', href: '#about' },
  { icon: Code, label: 'Projects', href: '#projects' },
  { icon: Briefcase, label: 'Skills', href: '#skills' },
  { icon: MessageSquare, label: 'Contact', href: '#contact' },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('')

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

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full shadow-lg px-4 py-2 z-50"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex space-x-4">
        {navItems.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={`flex flex-col items-center p-2 rounded-full transition-colors ${
                activeSection === href.slice(1)
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

