'use client'

import Hero from "@/components/hero"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Contact from "@/components/contact"
import { useEffect } from "react";


export default function Home() {

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
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </>
  )
}
