'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

const projects = [
  {
    id: 'vila-ultra-luxuosa',
    image: '/images/foto1.jpg',
    title: 'VILA ULTRA-LUXUOSA',
    project: 'PROJETO P.01',
    description: 'Arquitetura viverra tristique justo duis vitae diaminte neque nivamus aestan ateuene artine aringiangu the miss finibus viverra lacus fermen.',
    categoria: 'Residencial'
  },
  {
    id: 'mansao-moderna',
    image: '/images/foto2.jpg',
    title: 'MANSÃO MODERNA',
    project: 'PROJETO P.02',
    description: 'Design contemporâneo com linhas clean e acabamentos premium, criando espaços que harmonizam luxo e funcionalidade.',
    categoria: 'Residencial'
  },
  {
    id: 'residencia-elegante',
    image: '/images/foto3.jpg',
    title: 'RESIDÊNCIA ELEGANTE',
    project: 'PROJETO P.03',
    description: 'Sofisticação em cada detalhe, combinando materiais nobres e iluminação estratégica para criar ambientes únicos.',
    categoria: 'Residencial'
  },
  {
    id: 'projeto-comercial',
    image: '/images/foto1.jpg',
    title: 'EDIFÍCIO COMERCIAL',
    project: 'PROJETO P.04',
    description: 'Espaço comercial com design arrojado, priorizando funcionalidade e fluxo de trabalho otimizado para empresas modernas.',
    categoria: 'Comercial'
  },
  {
    id: 'projeto-corporativo',
    image: '/images/foto2.jpg',
    title: 'SEDE CORPORATIVA',
    project: 'PROJETO P.05',
    description: 'Sede empresarial com conceito aberto, integrando áreas de trabalho, lazer e reuniões em um ambiente estimulante e produtivo.',
    categoria: 'Comercial'
  },
  {
    id: 'espaco-gourmet',
    image: '/images/foto3.jpg',
    title: 'ESPAÇO GOURMET',
    project: 'PROJETO P.06',
    description: 'Ambiente gastronômico sofisticado que combina praticidade e elegância, perfeito para receber e desfrutar momentos especiais.',
    categoria: 'Interiores'
  }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('Todos');
  
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(project => project.categoria === filter);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner Header */}
      <div className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/foto1.jpg"
            alt="Projetos de Arquitetura"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative h-full flex items-center justify-center z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 text-center">
            NOSSOS PROJETOS
          </h1>
        </div>
      </div>
      
      {/* Filters */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Todos', 'Residencial', 'Comercial', 'Interiores'].map((categoria) => (
              <button
                key={categoria}
                onClick={() => setFilter(categoria)}
                className={`px-6 py-2 border ${
                  filter === categoria
                    ? 'border-[#C6A87D] text-white bg-[#C6A87D]'
                    : 'border-gray-300 text-gray-700 hover:border-[#C6A87D] hover:text-[#C6A87D]'
                } transition-colors duration-300`}
              >
                {categoria}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <Link href={`/projetos/${project.id}`}>
                  <div className="relative overflow-hidden h-[400px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="block text-sm font-medium mb-2">
                        {project.project}
                      </span>
                      <h2 className="text-2xl font-bold mb-3">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 