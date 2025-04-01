'use client'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section com Split Design */}
      <div className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Lado Esquerdo - Imagem */}
        <div className="lg:w-1/2 h-[60vh] lg:h-screen relative overflow-hidden mt-20">
          <Image
            src="/images/image.png"
            alt="Ambiente arquitetônico luxuoso"
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/80 to-transparent"></div>
        </div>

        {/* Lado Direito - Conteúdo */}
        <div className="lg:w-1/2 bg-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A87D]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C6A87D]/5 rounded-full blur-3xl"></div>
          
          <div className="min-h-screen flex items-center">
            <div className="max-w-xl mx-auto px-8 py-16 lg:py-0">
              <div className="space-y-12">
                {/* Título e Subtítulo */}
                <div className="relative">
                  <h2 className="text-[8rem] font-light text-[#2C1810]/5 absolute -top-16 left-0">NÓS</h2>
                  <h1 className="text-5xl lg:text-6xl font-light text-[#2C1810] mb-4">SOBRE</h1>
                  <h3 className="text-3xl font-light text-[#2C1810] relative z-10">Arquitetura & Design</h3>
                  <div className="w-24 h-[2px] bg-[#C6A87D] mt-4"></div>
                </div>

                {/* Texto Principal */}
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="mb-8">
                    Somos <span className="text-[#2C1810] font-medium">Ana Paula Mazon</span> e <span className="text-[#2C1810] font-medium">Railenne Araújo</span>, Arquitetas e Urbanistas formadas em 2015, com uma sólida trajetória profissional em escritórios de arquitetura e especialização em Design de Interiores.
                  </p>
                  <p className="mb-8">
                    Como mães e esposas, entendemos a importância de criar lares que vão além da estética: nossos projetos são pensados para acolher histórias, memórias e o crescimento de cada família de forma única e personalizada.
                  </p>
                  <p>
                    Nosso compromisso é com a excelência e a personalização dos projetos, sempre focados em atender às necessidades e desejos de nossos clientes. Valorizamos o diálogo, a criatividade e a responsabilidade para transformar sonhos em realidade.
                  </p>
                </div>

                {/* Cards de Valores */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative overflow-hidden bg-white p-6 rounded-lg transition-all duration-300 hover:shadow-xl border border-[#C6A87D]/20">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C6A87D] to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h4 className="text-xl font-light text-[#2C1810] mb-3 group-hover:text-[#C6A87D] transition-colors duration-300">Excelência</h4>
                    <p className="text-gray-600">Comprometimento com a qualidade em cada detalhe dos nossos projetos.</p>
                  </div>

                  <div className="group relative overflow-hidden bg-white p-6 rounded-lg transition-all duration-300 hover:shadow-xl border border-[#C6A87D]/20">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C6A87D] to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h4 className="text-xl font-light text-[#2C1810] mb-3 group-hover:text-[#C6A87D] transition-colors duration-300">Personalização</h4>
                    <p className="text-gray-600">Cada projeto é único, refletindo a personalidade de cada cliente.</p>
                  </div>
                </div>

                {/* Assinaturas */}
                <div className="flex items-center justify-between pt-8 border-t border-[#C6A87D]/20">
                  <div className="group cursor-pointer">
                    <span className="text-xl font-light text-[#2C1810] block mb-2 group-hover:text-[#C6A87D] transition-colors duration-300">Ana Paula Mazon</span>
                    <div className="w-full h-[1px] bg-[#C6A87D] transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                  <div className="group cursor-pointer">
                    <span className="text-xl font-light text-[#2C1810] block mb-2 group-hover:text-[#C6A87D] transition-colors duration-300">Railenne Araújo</span>
                    <div className="w-full h-[1px] bg-[#C6A87D] transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
      <Footer />
    </main>
  )
} 