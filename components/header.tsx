"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import styles from "./header.module.css"

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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
      <Link href="/">
        <img src="/logo_vertical.svg" alt="ritteralvaro logo" className={styles.logoImg} />
      </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
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

        <Link href="/#contato" className={styles.contactBtn}>
          Contato <span className={styles.contactIcon}>→</span>
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
