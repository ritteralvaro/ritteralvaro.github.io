import { Github, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="glow"></div>
      <div className="container">
        <div className="content">
          <div className="logo">
            <img src="/logo.svg" width="150" height="40"></img>
          </div>

          <div className="social">
            <a href="https://github.com/ritteralvaro" target="_blank" rel="noopener noreferrer" className="socialIcon">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/ritteralvaro" target="_blank" rel="noopener noreferrer" className="socialIcon">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com/ritteralvaro_" target="_blank" rel="noopener noreferrer" className="socialIcon">
              <Instagram size={20} />
            </a>
          </div>

          <div className="copyright">
            <p>Copyright © {currentYear} Alvaro Ritter. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
