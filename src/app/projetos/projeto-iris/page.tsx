'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const projectImages = [
  '/images/ProjetoIris/Enscape_2025-02-28-12-29-24.jpg',
  '/images/ProjetoIris/Enscape_2025-02-28-12-19-24.jpg',
  '/images/ProjetoIris/Enscape_2025-02-14-16-19-24.jpg',
  '/images/ProjetoIris/Enscape_2025-02-14-16-12-20.jpg',
  '/images/ProjetoIris/Enscape_2025-02-14-16-10-36.jpg',
  '/images/ProjetoIris/Enscape_2025-02-28-00-24-36.jpg',
  '/images/ProjetoIris/Enscape_2025-02-28-00-18-03.jpg',
  '/images/ProjetoIris/Enscape_2025-02-28-00-14-17.jpg',
  '/images/ProjetoIris/Enscape_2025-02-28-00-13-15.jpg',
  '/images/ProjetoIris/Enscape_2025-02-28-00-11-10.jpg'
]

export default function ProjetoIrisPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cabeçalho do Projeto */}
        <div className="mb-16 mt-15">
          <h1 className="text-4xl font-light text-[#C6A87D] mb-4">PROJETO ÍRIS</h1>
          <h2 className="text-xl font-light text-gray-600 mb-8">Integração de Ambientes</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Layout integra living, sala de jantar e cozinha gourmet, criando um espaço fluido e acolhedor. No living, um sofá modular claro delimita o ambiente, acompanhado por uma mesa de centro em madeira. A sala de jantar traz uma mesa de mármore com cadeiras em linho e palha, unindo elegância e conforto. A cozinha combina funcionalidade e sofisticação, com bancadas em quartzito, armários em MDF azul e madeira, além de iluminação em LED. A ilha central, com banquetas de madeira e couro, é ideal para refeições e apoio gourmet.
          </p>
        </div>
        
        {/* Imagem Principal */}
        <div className="relative h-[70vh] w-full mb-12">
          <Image
            src={projectImages[0]}
            alt="PROJETO ÍRIS - Imagem Principal"
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
                alt={`PROJETO ÍRIS - Imagem ${index + 2}`}
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
            href="/projetos/projeto-lirio" 
            className="inline-flex items-center text-[#C6A87D] hover:underline font-medium"
          >
            Próximo Projeto →
          </Link>
        </div>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </main>
  )
} 