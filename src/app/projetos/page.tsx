'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useState, useEffect } from 'react'

interface Project {
  id: string;
  image: string;
  images: string[];
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 'projeto-lirio',
    image: '/images/ProjetoLirioParte2/Enscape_2025-02-14-18-12-50.jpg',
    images: [
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
    ],
    title: 'PROJETO LÍRIO',
    description: 'Design contemporâneo que harmoniza elegância e conforto, criando espaços acolhedores e funcionais.'
  },
  {
    id: 'projeto-iris',
    image: '/images/ProjetoIris/Enscape_2025-02-28-12-29-24.jpg',
    images: [
      '/images/ProjetoIris/Enscape_2025-02-28-12-29-24.jpg',
      '/images/ProjetoIris/Enscape_2025-02-28-12-19-24.jpg',
      '/images/ProjetoIris/Enscape_2025-02-14-16-19-24.jpg',
      '/images/ProjetoIris/Enscape_2025-02-14-16-18-24.jpg',
      '/images/ProjetoIris/Enscape_2025-02-14-16-17-24.jpg',
      '/images/ProjetoIris/Enscape_2025-02-14-16-16-24.jpg',
      '/images/ProjetoIris/Enscape_2025-02-14-16-15-24.jpg',
      '/images/ProjetoIris/Enscape_2025-02-14-16-14-24.jpg',
      '/images/ProjetoIris/Enscape_2025-02-14-16-13-24.jpg',
      '/images/ProjetoIris/Enscape_2025-02-14-16-12-24.jpg'
    ],
    title: 'PROJETO ÍRIS',
    description: 'O layout integra living, sala de jantar e cozinha gourmet, criando um espaço fluido e acolhedor. No living, um sofá modular claro delimita o ambiente, acompanhado por uma mesa de centro em madeira. A sala de jantar traz uma mesa de mármore com cadeiras em linho e palha, unindo elegância e conforto. A cozinha combina funcionalidade e sofisticação, com bancadas em quartzito, armários em MDF azul e madeira, além de iluminação em LED. A ilha central, com banquetas de madeira e couro, é ideal para refeições e apoio gourmet.'
  },
  {
    id: 'vila-ultra-luxuosa',
    image: '/images/foto1.jpg',
    images: ['/images/foto1.jpg'],
    title: 'VILA ULTRA-LUXUOSA',
    description: 'Design contemporâneo com linhas clean e acabamentos premium.'
  },
  {
    id: 'mansao-moderna',
    image: '/images/foto2.jpg',
    images: ['/images/foto2.jpg'],
    title: 'MANSÃO MODERNA',
    description: 'Design contemporâneo com linhas clean e acabamentos premium, criando espaços que harmonizam luxo e funcionalidade.'
  },
  {
    id: 'residencia-elegante',
    image: '/images/foto3.jpg',
    images: ['/images/foto3.jpg'],
    title: 'RESIDÊNCIA ELEGANTE',
    description: 'Sofisticação em cada detalhe, combinando materiais nobres e iluminação estratégica para criar ambientes únicos.'
  },
  {
    id: 'projeto-comercial',
    image: '/images/foto1.jpg',
    images: ['/images/foto1.jpg'],
    title: 'EDIFÍCIO COMERCIAL',
    description: 'Espaço comercial com design arrojado, priorizando funcionalidade e fluxo de trabalho otimizado para empresas modernas.'
  },
  {
    id: 'projeto-corporativo',
    image: '/images/foto2.jpg',
    images: ['/images/foto2.jpg'],
    title: 'SEDE CORPORATIVA',
    description: 'Sede empresarial com conceito aberto, integrando áreas de trabalho, lazer e reuniões em um ambiente estimulante e produtivo.'
  },
  {
    id: 'espaco-gourmet',
    image: '/images/foto3.jpg',
    images: ['/images/foto3.jpg'],
    title: 'ESPAÇO GOURMET',
    description: 'Ambiente gastronômico sofisticado que combina praticidade e elegância, perfeito para receber e desfrutar momentos especiais.'
  }
]

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    if (isMobile) {
      e.preventDefault();
      setSelectedProject(project);
      setCurrentImageIndex(0);
    }
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 relative">
      {/* Background com laterais escuras */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gray-50" />
        <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gray-50" />
      </div>

      {/* Linhas douradas verticais */}
      <div className="fixed inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="relative h-full">
          {/* Linhas verticais douradas */}
          <div className="absolute left-[7.5%] top-0 bottom-0 w-[2px] bg-[#C6A87D] opacity-80" />
          <div className="absolute right-[7.5%] top-0 bottom-0 w-[2px] bg-[#C6A87D] opacity-80" />
          
          {/* Linhas verticais douradas adicionais */}
          <div className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-[#C6A87D] opacity-40" />
          <div className="absolute right-[20%] top-0 bottom-0 w-[1px] bg-[#C6A87D] opacity-40" />
          
          <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-[#C6A87D] opacity-30" />
          <div className="absolute right-[25%] top-0 bottom-0 w-[1px] bg-[#C6A87D] opacity-30" />
        </div>
      </div>

      <Navbar />
      
      {/* Modal de Galeria para Mobile */}
      {selectedProject && isMobile && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Botão Fechar */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 text-white p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Imagem */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Navegação */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 text-white">
              <button 
                onClick={handlePrevImage}
                className="p-2 bg-black/50 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="text-sm">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </span>

              <button 
                onClick={handleNextImage}
                className="p-2 bg-black/50 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lista de Projetos com padding-top ajustado */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {/* Fundo branco central */}
        <div className="absolute inset-0 bg-white shadow-2xl rounded-lg" />
        
        <div className="relative space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`
                group relative transform transition-all duration-1000 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Link 
                href={`/projetos/${project.id}`}
                onClick={(e) => handleProjectClick(e, project)}
              >
                <div className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Container do Projeto */}
                  <div className="w-full md:w-[85%] relative">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Imagem */}
                      <div className={`relative h-[400px] w-full md:w-[60%] overflow-hidden ${
                        index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                      }`}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Conteúdo */}
                      <div className={`w-full md:w-[40%] p-8 md:p-0 ${
                        index % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'
                      }`}>
                        <h2 className="text-3xl font-light mb-6 text-gray-800">
                          {project.title}
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="inline-flex items-center group-hover:translate-x-2 transition-transform duration-500">
                          <div className="w-12 h-[2px] bg-[#C6A87D] mr-4" />
                          <span className="text-[#C6A87D] text-sm tracking-wider font-medium">Ver Projeto</span>
                        </div>
                      </div>
                    </div>

                    {/* Linhas decorativas do projeto */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-[#C6A87D]
                      ${index % 2 === 0 ? '-right-6' : '-left-6'}`} 
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <WhatsAppButton />
    </main>
  )
} 