"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export default function TerminalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background text-foreground py-4 px-6 terminal-border border-t-0 border-x-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">
          <span className="text-secondary">&lt;</span>
          TERMINAL_DEV
          <span className="text-secondary">/&gt;</span>
          <span className="cursor-blink"></span>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button variant="ghost" className="md:hidden text-foreground hover:text-primary" onClick={toggleMenu}>
            <Menu />
          </Button>
        </div>

        <nav
          className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-background md:bg-transparent p-4 md:p-0 terminal-border md:border-0 md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-secondary transition-colors uppercase tracking-wider"
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("timeline")}
                className="hover:text-secondary transition-colors uppercase tracking-wider"
              >
                TIMELINE
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-secondary transition-colors uppercase tracking-wider"
              >
                PROJECTS
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("resume")}
                className="hover:text-secondary transition-colors uppercase tracking-wider"
              >
                RESUME
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-secondary transition-colors uppercase tracking-wider"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
