'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'

const projectImages = [
  '/images/ProjetoLirioParte2/Enscape_2025-02-14-18-12-50.jpg',
  '/images/ProjetoLirioParte2/Enscape_2025-02-14-18-01-51.jpg',
  '/images/ProjetoLirioParte2/Enscape_2025-02-14-17-29-42.jpg',
  '/images/ProjetoLirioParte2/Enscape_2025-02-14-17-22-39.jpg',
  '/images/ProjetoLirioParte2/Enscape_2025-02-14-17-06-13.jpg',
  '/images/ProjetoLirioParte2/3.jpg',
  '/images/ProjetoLirioParte2/2.jpg',
  '/images/ProjetoLirioParte3/Enscape_2025-02-21-17-54-22.jpg',
  '/images/ProjetoLirioParte3/Enscape_2025-02-21-17-36-53.jpg',
  '/images/ProjetoLirioParte3/Enscape_2025-02-21-17-23-05.jpg',
  '/images/ProjetoLirioParte3/Enscape_2025-02-21-17-10-24.jpg',
  '/images/ProjetoLirioParte3/Enscape_2025-02-14-18-23-33.jpg',
  '/images/ProjetoLirioParte3/OK5.jpg',
  '/images/ProjetoLirioParte3/OK1.jpg'
]

export default function ProjetoLirioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cabeçalho do Projeto */}
        <div className="mb-16 mt-15">
          <h1 className="text-4xl font-light text-[#C6A87D] mb-4">PROJETO LÍRIO</h1>
          <h2 className="text-xl font-light text-gray-600 mb-8">Harmonia e Conforto</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            O Projeto Lírio é uma residência que harmoniza elegância e conforto, criando espaços acolhedores e funcionais. A fachada principal apresenta uma composição equilibrada com elementos em madeira e vidro, permitindo uma integração suave entre o interior e o exterior. Os ambientes internos foram pensados para maximizar a iluminação natural e a ventilação, criando uma atmosfera leve e agradável.
          </p>
        </div>
        
        {/* Imagem Principal */}
        <div className="relative h-[70vh] w-full mb-12">
          <Image
            src={projectImages[0]}
            alt="PROJETO LÍRIO - Imagem Principal"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectImages.slice(1).map((image, index) => (
            <div key={index} className="relative h-[400px] w-full">
              <Image
                src={image}
                alt={`PROJETO LÍRIO - Imagem ${index + 2}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        
        {/* Navegação */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-100">
          <Link 
            href="/projetos" 
            className="inline-flex items-center text-[#C6A87D] hover:underline font-medium"
          >
            ← Voltar aos Projetos
          </Link>
          
          <Link 
            href="/projetos/projeto-iris" 
            className="inline-flex items-center text-[#C6A87D] hover:underline font-medium"
          >
            Próximo Projeto →
          </Link>
        </div>
      </div>
      
      <WhatsAppButton />
    </main>
  )
} 