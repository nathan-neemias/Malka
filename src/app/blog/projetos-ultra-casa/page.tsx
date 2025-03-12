'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ProjetosUltraCasaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Imagem principal em tela cheia */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/Foto1.jpg"
          alt="Projetos de Ultra Casa"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Conteúdo do artigo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Metadados do post */}
        <div className="flex items-center text-gray-600 text-sm mb-8">
          <span>4 de janeiro de 2023</span>
          <span className="mx-2">•</span>
          <Link href="#" className="text-[#C6A87D]">Projetos</Link>
        </div>
        
        {/* Título do post */}
        <h1 className="text-3xl sm:text-4xl uppercase font-bold text-[#C6A87D] mb-12">
          PROJETOS DE ULTRA CASA
        </h1>
        
        {/* Conteúdo do artigo */}
        <article className="prose prose-lg max-w-none text-gray-800">
          <p>
            Os projetos de residências de altíssimo padrão, conhecidos como "ultra casas", representam o ápice da arquitetura residencial contemporânea. Estas construções vão muito além do simples luxo, incorporando tecnologias de ponta, sustentabilidade e um design personalizado que reflete a identidade e as necessidades específicas de seus proprietários.
          </p>
          
          <p>
            No atual cenário arquitetônico, observamos uma crescente demanda por residências que combinam exclusividade, conforto e inovação. As ultra casas são projetadas para proporcionar uma experiência de moradia excepcional, com ambientes que se adaptam ao estilo de vida de seus moradores, integrando-se harmoniosamente ao entorno natural ou urbano.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            Elementos-chave em projetos de ultra casas
          </h2>
          
          <p>
            Um projeto residencial de altíssimo padrão geralmente incorpora vários elementos distintivos. Entre eles, destacam-se os sistemas de automação residencial avançados, que permitem controlar desde a iluminação e temperatura até sistemas de segurança e entretenimento com um simples toque. A sustentabilidade também é um fator crucial, com a implementação de painéis solares, sistemas de reaproveitamento de água e materiais eco-friendly.
          </p>
          
          <p>
            A integração entre ambientes internos e externos é outro aspecto marcante destes projetos. Grandes aberturas, jardins verticais, piscinas com borda infinita e terraços panorâmicos criam uma conexão perfeita com a paisagem, enquanto garantem privacidade e segurança. Os interiores, por sua vez, são caracterizados por pé-direito duplo, acabamentos nobres e uma meticulosa atenção aos detalhes.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            O papel do arquiteto em projetos exclusivos
          </h2>
          
          <p>
            Desenvolver um projeto de ultra casa requer do arquiteto não apenas expertise técnica, mas também sensibilidade para compreender as aspirações e necessidades do cliente. É um processo colaborativo e personalizado, onde cada decisão é pensada para criar espaços que reflitam a personalidade de quem irá habitá-los.
          </p>
          
          <p>
            O arquiteto atua como um curador, selecionando materiais, definindo volumes e criando ambientes que proporcionem experiências sensoriais únicas. Além disso, coordena uma equipe multidisciplinar que pode incluir paisagistas, designers de interiores, engenheiros especializados e consultores em tecnologia, garantindo que todos os aspectos do projeto estejam perfeitamente integrados.
          </p>
        </article>
        
        {/* Navegação entre posts */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-100">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#C6A87D] hover:underline font-medium"
          >
            ← Voltar ao Blog
          </Link>
          
          <Link 
            href="/blog/inspiracao-decoracao" 
            className="inline-flex items-center text-[#C6A87D] hover:underline font-medium"
          >
            Próximo artigo →
          </Link>
        </div>
      </div>
    </main>
  )
} 