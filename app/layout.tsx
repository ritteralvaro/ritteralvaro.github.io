import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FramerAnimations from "@/components/framer-animations"
import Script from 'next/script'
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alvaro Ritter - Design, Marketing & Growth",
  description:
    "Designer com ampla experiência em soluções personalizadas para UX/UI, Growth Marketing e Design",
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

      useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://everleads.clusterlabs.com.br/lib/everleads.js';
        script.async = true;
        script.onload = () => {
            window.EverLeads.init()
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // limpa ao desmontar o componente
        };
    }, []);

  return (
    <html lang="pt-BR">
      <meta name="everleads-eid" content="l3mE90X9a1pD"/>
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
