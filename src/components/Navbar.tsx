'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`w-full transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/Logo.webp"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="h-60 w-auto sm:h-20 md:h-60 mt-5"
                  priority
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 relative z-50"
                aria-label="Menu principal"
              >
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/home" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/sobre" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Sobre
                </Link>
                <Link href="/servicos" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Serviços
                </Link>
                <Link href="/projetos" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Projetos
                </Link>
                <Link href="/paginas" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Páginas
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Blog
                </Link>
                <Link 
                  href="/contate-nos" 
                  className="text-white bg-transparent border border-white hover:bg-white hover:text-black px-4 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Contate-nos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed top-20 right-0 w-64 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ maxWidth: '100vw' }}
      >
        <div className="flex flex-col space-y-6 px-6">
          <Link 
            href="/home" 
            className="text-white hover:text-gray-300 text-2xl font-medium text-right"
            onClick={() => setIsMenuOpen(false)}
          >
            Lar
          </Link>
          <Link 
            href="/sobre" 
            className="text-white hover:text-gray-300 text-2xl font-medium text-right"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link 
            href="/servicos" 
            className="text-white hover:text-gray-300 text-2xl font-medium text-right"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </Link>
          <Link 
            href="/projetos" 
            className="text-white hover:text-gray-300 text-2xl font-medium text-right"
            onClick={() => setIsMenuOpen(false)}
          >
            Projetos
          </Link>
          <Link 
            href="/paginas" 
            className="text-white hover:text-gray-300 text-2xl font-medium text-right"
            onClick={() => setIsMenuOpen(false)}
          >
            Páginas
          </Link>
          <Link 
            href="/blogue" 
            className="text-white hover:text-gray-300 text-2xl font-medium text-right"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogue
          </Link>
          <Link 
            href="/contate-nos" 
            className="text-white border border-white hover:bg-white hover:text-black px-6 py-2 text-xl font-medium transition-colors duration-300 text-right inline-block ml-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Contate-nos
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 