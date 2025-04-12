"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import styles from "./contact.module.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // Here you would normally send the data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus("success")
      setSubmitMessage("Mensagem enviada com sucesso! Entrarei em contato em breve.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("")
        setSubmitStatus("")
      }, 5000)
    }
  }

  return (
    <section id="contato" className={`section ${styles.contact}`}>
      <div className={styles.backgroundGlow}></div>

      <div className="container">
        <h2 className="section-title">CONTATO</h2>

        <div className={styles.content}>
          <div className={`${styles.info} animate-in`}>
            <h3 className={styles.title}>Vamos trabalhar juntos?</h3>
            <p className={styles.subtitle}>
              Entre em contato para conversarmos sobre seu projeto e como posso ajudar a transformar suas ideias em
              resultados concretos.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h4>Email:</h4>
                <p>ritteralvaro@gmail.com</p>
              </div>
              <div className={styles.contactItem}>
                <h4>Atendimento:</h4>
                <p>atendimento@soucluster.com</p>
              </div>
              <div className={styles.contactItem}>
                <h4>Telefone:</h4>
                <p>+55 53 8150 1976</p>
              </div>
            </div>

            <div className={styles.social}>
              <h4>Redes sociais:</h4>
              <div className={styles.socialLinks}>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Behance
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className={`${styles.formContainer} animate-in animate-in-delay-1 glass-effect`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensagem <Send size={16} className={styles.sendIcon} />
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`${styles.submitMessage} ${styles[submitStatus]}`}>{submitMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
