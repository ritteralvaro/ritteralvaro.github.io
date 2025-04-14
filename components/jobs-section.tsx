"use client"

import { useState } from "react"
import JobModal from "./job-modal"

// Dados das vagas (podem ser substituídos por uma API real posteriormente)
const jobListings = [
  {
    id: 1,
    title: "Desenvolvedor Full Stack",
    location: "Remoto",
    type: "CLT",
    description:
      "Estamos em busca de um desenvolvedor Full Stack com experiência em React e Node.js para integrar nossa equipe de tecnologia.",
    clickupLink: "https://forms.clickup.com/job-form-1",
  },
  {
    id: 2,
    title: "UX/UI Designer",
    location: "Híbrido - São Paulo",
    type: "CLT",
    description: "Procuramos um designer talentoso para criar experiências incríveis para nossos usuários e clientes.",
    clickupLink: "https://forms.clickup.com/job-form-2",
  },
  {
    id: 3,
    title: "Product Manager",
    location: "Remoto",
    type: "PJ",
    description: "Venha liderar o desenvolvimento de produtos inovadores que transformam o mercado.",
    clickupLink: "https://forms.clickup.com/job-form-3",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Remoto",
    type: "CLT",
    description:
      "Buscamos um especialista em infraestrutura para otimizar nossos processos de desenvolvimento e implantação.",
    clickupLink: "https://forms.clickup.com/job-form-4",
  },
]

export default function JobsSection() {
  const [selectedJob, setSelectedJob] = useState(null)

  const handleJobClick = (job) => {
    setSelectedJob(job)
  }

  const closeModal = () => {
    setSelectedJob(null)
  }

  const redirectToClickUp = (link) => {
    window.open(link, "_blank")
    closeModal()
  }

  return (
    <>
      <section className="section" id="vagas">
        <div className="section-header">
          <h2>Vagas em aberto</h2>
          <div className="section-line"></div>
        </div>
        <div className="jobs-grid">
          {jobListings.map((job) => (
            <div key={job.id} className="job-card" onClick={() => handleJobClick(job)}>
              <h3>{job.title}</h3>
              <div className="job-details">
                <span className="job-location">{job.location}</span>
                <span className="job-type">{job.type}</span>
              </div>
              <p>{job.description}</p>
              <button className="apply-button">Candidatar-se</button>
            </div>
          ))}
        </div>
      </section>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={closeModal} onApply={() => redirectToClickUp(selectedJob.clickupLink)} />
      )}
    </>
  )
}
