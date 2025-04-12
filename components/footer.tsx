import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"
import styles from "./footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.glow}></div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/logo.svg" className={styles.logoImg}>
              </img>
            </Link>
          </div>

          <div className={styles.social}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Instagram size={20} />
            </a>
          </div>

          <div className={styles.copyright}>
            <p>Copyright © {currentYear} Alvaro Ritter. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
