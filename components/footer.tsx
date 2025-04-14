import Image from "next/image"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Image src="/placeholder.svg?height=50&width=150" alt="Cluster Logo" width={150} height={50} />
        </div>
        <div className="footer-links">
          <a href="https://soucluster.com" target="_blank" rel="noopener noreferrer">
            Website
          </a>
          <a href="https://linkedin.com/company/cluster" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com/soucluster" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Cluster. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
