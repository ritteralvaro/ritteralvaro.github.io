"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link href="/" className="logo">
          <img src="/logo_vertical.svg" width="150" height="40"></img>
        </Link>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="navList">
            <li>
              <Link href="/#projetos" onClick={() => setIsMenuOpen(false)}>
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/#sobre" onClick={() => setIsMenuOpen(false)}>
                Sobre mim
              </Link>
            </li>
            <li>
              <Link href="/#contato" onClick={() => setIsMenuOpen(false)}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/#contato" className="contactBtn">
          Contato <span className="contactIcon">→</span>
        </Link>

        <button
          className="menuButton"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
