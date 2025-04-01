'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/images/Logo.webp"
                alt="Malka Arquitetura"
                width={200}
                height={200}
                className="w-[200px] h-auto"
                priority
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Transformando sonhos em projetos únicos e personalizados, com dedicação e excelência em cada detalhe.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-[#C6A87D] font-light text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-gray-400 hover:text-white transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contate-nos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-[#C6A87D] font-light text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <a href="mailto:contato@malkaarquitetura.com.br" className="hover:text-white transition-colors">
                  contato@malkaarquitetura.com.br
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>São Paulo - SP</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-[#C6A87D] font-light text-lg mb-6">Siga-nos</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C6A87D] flex items-center justify-center text-[#C6A87D] hover:bg-[#C6A87D] hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C6A87D] flex items-center justify-center text-[#C6A87D] hover:bg-[#C6A87D] hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Malka Arquitetura. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 