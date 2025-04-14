"use client"

export default function JobModal({ job, onClose, onApply }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{job.title}</h2>
        <div className="job-details">
          <span className="job-location">{job.location}</span>
          <span className="job-type">{job.type}</span>
        </div>
        <p>{job.description}</p>
        <button className="apply-button modal-apply" onClick={onApply}>
          Candidatar-se agora
        </button>
      </div>
    </div>
  )
}
