'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { CalendarIcon } from 'lucide-react'

// Posts recentes para a seção lateral
const recentPosts = [
  {
    id: 'modernismo-arquitetura',
    title: 'MODERNISMO NA ARQUITETURA',
    image: '/images/Foto3.jpg',
    slug: '/blog/modernismo-arquitetura',
    date: '4 de janeiro de 2023'
  },
  {
    id: 'projetos-ultra-casa',
    title: 'PROJETOS DE ULTRA CASA',
    image: '/images/Foto1.jpg',
    slug: '/blog/projetos-ultra-casa',
    date: '4 de janeiro de 2023'
  },
  {
    id: 'inspiracao-decoracao',
    title: 'INSPIRAÇÃO PARA DECORAÇÃO',
    image: '/images/Foto2.jpg',
    slug: '/blog/inspiracao-decoracao',
    date: '4 de janeiro de 2023'
  }
];

// Posts completos do blog
const blogPosts = [
  {
    id: 'economia-na-obra',
    title: 'Economia na Obra: Saiba Onde Vale a Pena Investir e Economizar',
    image: '/images/Foto1.jpg',
    excerpt: 'Descubra estratégias para economizar em materiais de construção e decoração, além de onde realmente vale a pena investir para ter um ótimo custo-benefício.',
    slug: '/blog/economia-na-obra',
    date: '20 de janeiro de 2023'
  },
  {
    id: 'retrofit-apartamento',
    title: 'Retrofit de Apartamento Guiado por um Arquiteto',
    image: '/images/Foto2.jpg',
    excerpt: 'Entenda o conceito de retrofit e como um arquiteto pode guiar esse processo de modernização, mantendo a estrutura original e melhorando funcionalidade.',
    slug: '/blog/retrofit-apartamento',
    date: '15 de fevereiro de 2023'
  },
  {
    id: 'importancia-arquiteto',
    title: 'A Importância do Arquiteto: Como Criar a Planta dos Sonhos para a sua casa',
    image: '/images/Foto3.jpg',
    excerpt: 'Descubra como um arquiteto pode transformar suas ideias em uma planta funcional e bonita, evitando erros comuns e maximizando o potencial do seu espaço.',
    slug: '/blog/importancia-arquiteto',
    date: '10 de março de 2023'
  },
  {
    id: 'reformando-sucesso',
    title: 'Reformando com Sucesso: Evite Erros Comuns ao Reformar Seu Ambiente',
    image: '/images/Foto1.jpg',
    excerpt: 'Aprenda a evitar os erros mais comuns durante uma reforma, economizando tempo, dinheiro e garantindo um resultado final de qualidade.',
    slug: '/blog/reformando-sucesso',
    date: '5 de abril de 2023'
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner Header com imagem de fundo */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <Image 
            src="/images/Foto2.jpg" 
            alt="Blog Malka Arquitetura" 
            fill 
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#C6A87D] text-sm uppercase tracking-widest mb-2">• BLOG MALKA ARQUITETURA •</span>
          <h1 className="text-5xl sm:text-2xl font-bold text-white mb-4">ÚLTIMAS NOTÍCIAS</h1>
        </div>
      </div>
      
      {/* Container principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Layout de duas colunas para desktop */}
        <div className="flex flex-col lg:flex-row lg:gap-16">
          
          {/* Coluna principal (2/3 do espaço) */}
          <div className="lg:w-2/3">
            
            {/* Post em destaque */}
            <div className="mb-16">
              <Link href={featuredPost.slug} className="block">
                <div className="relative h-[400px] mb-6">
                  <Image 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <CalendarIcon size={16} className="mr-1" />
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <Link href="#" className="text-[#C6A87D] hover:underline">Design de Interiores</Link>
              </div>
              
              <Link href={featuredPost.slug}>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#C6A87D] mb-4 hover:text-[#C6A87D] transition-colors">
                  {featuredPost.title}
                </h2>
              </Link>
              
              <p className="text-gray-800 mb-4">{featuredPost.excerpt}</p>
              
              <Link 
                href={featuredPost.slug}
                className="text-[#C6A87D] hover:underline font-medium flex items-center"
              >
                Ler mais <span className="ml-1">→</span>
              </Link>
            </div>
            
            {/* Grade de outros posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {otherPosts.map((post) => (
                <div key={post.id} className="mb-10">
                  <Link href={post.slug} className="block">
                    <div className="relative h-48 mb-4">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <CalendarIcon size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <Link href={post.slug}>
                    <h3 className="text-xl font-bold text-[#C6A87D] mb-2 hover:text-[#C6A87D] transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-800 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  
                  <Link 
                    href={post.slug}
                    className="text-[#C6A87D] hover:underline text-sm font-medium flex items-center"
                  >
                    Ler mais <span className="ml-1">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Barra lateral (1/3 do espaço) */}
          <div className="lg:w-1/3 mt-12 lg:mt-0">
            {/* Últimas Postagens */}
            <div className="mb-10">
              <h4 className="text-xl font-bold text-[#C6A87D] mb-8">ÚLTIMAS POSTAGENS</h4>
              
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4">
                    <Link href={post.slug} className="flex-shrink-0">
                      <div className="relative w-24 h-24">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col justify-between">
                      <Link href={post.slug}>
                        <h5 className="text-sm font-bold text-[#C6A87D] hover:text-[#C6A87D] transition-colors">
                          {post.title}
                        </h5>
                      </Link>
                      <span className="text-gray-600 text-xs">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}