"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import StepsSection from "@/components/steps-section"
import BenefitsSection from "@/components/benefits-section"
import JobsSection from "@/components/jobs-section"
import ProcessSection from "@/components/process-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function JobsPage() {
  return (
    <div className="main-container">
      <div className="grid-background"></div>
      <Header />
      <Hero />
      <StepsSection />
      <BenefitsSection />
      <JobsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  )
}
