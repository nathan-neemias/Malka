'use client'

import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '@/components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
