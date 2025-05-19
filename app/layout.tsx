import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FramerAnimations from "@/components/framer-animations"
import Script from 'next/script'
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alvaro Ritter - Design, Marketing & Growth",
  description:
    "Designer com ampla experiência em soluções personalizadas para UX/UI, Growth Marketing e Design",
  // Adicione a meta tag aqui
  other: {
    'everleads-secret': 'eyJpdiI6Ik4zTytGR3FGdkpjVDU1dnU0dmhReXc9PSIsInZhbHVlIjoiOXp4eEJacE1XQXMydmZqdGJaUk5KZz09IiwibWFjIjoiZDRhNDUxZWNhNDlmOWJkZjcwNWM5MGJhZTBmOWY3YTllZjZhZGM4YzJlYzkxNzJmNTdmODQyYjZlYjlmMWVhYSIsInRhZyI6IiJ9'
  }
    "Designer com ampla experiência em soluções personalizadas para UX/UI, Growth Marketing e Design",
  // Adicione a meta tag aqui
  other: {
    'everleads-secret': 'eyJpdiI6InZ2NTBmTDh0Rm8vKzdsbnFhM1dlRGc9PSIsInZhbHVlIjoiZ2pVa3NzTEh5Ynhqd0NzNzB4K3hHdz09IiwibWFjIjoiZDk1NGEzMzgwNzg3N2RhZjU1MDY4OGE2OWVlY2E2ZDg1ZTFlZjhmMGZiMzBjNDQ5YjI5YzNhYzliYTQ4MzhmMCIsInRhZyI6IiJ9'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Script
          src="https://everleads.clusterlabs.com.br/lib/everleads.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://everleads.clusterlabs.com.br/lib/everleads.js"
          strategy="afterInteractive"
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FramerAnimations />
      </body>
    </html>
  )
}


// Não posso dar merge com git ammend