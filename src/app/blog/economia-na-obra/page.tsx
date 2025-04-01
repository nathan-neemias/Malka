'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function EconomiaNaObraPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Imagem principal em tela cheia */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/Foto1.jpg"
          alt="Economia na Obra"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Conteúdo do artigo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Metadados do post */}
        <div className="flex items-center text-gray-600 text-sm mb-8">
          <span>20 de janeiro de 2023</span>
          <span className="mx-2">•</span>
          <Link href="#" className="text-[#C6A87D]">Construção</Link>
        </div>
        
        {/* Título do post */}
        <h1 className="text-3xl sm:text-4xl uppercase font-bold text-[#C6A87D] mb-12">
          ECONOMIA NA OBRA: SAIBA ONDE VALE A PENA INVESTIR E ECONOMIZAR
        </h1>
        
        {/* Conteúdo do artigo */}
        <article className="prose prose-lg max-w-none text-gray-800">
          <p>
            Construir ou reformar um imóvel envolve inúmeras decisões financeiras que impactam não apenas o resultado final, mas também o orçamento do projeto. Com os custos de construção em constante flutuação, é fundamental saber onde investir e onde economizar para obter o melhor custo-benefício sem comprometer a qualidade e a segurança da obra.
          </p>
          
          <p>
            Um planejamento financeiro adequado, orientado por profissionais experientes, pode fazer toda a diferença entre uma obra bem-sucedida e problemas que podem custar caro no futuro. Neste artigo, abordaremos as principais áreas onde vale a pena investir recursos e aquelas onde é possível economizar sem prejuízos significativos.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            Onde vale a pena investir
          </h2>
          
          <p>
            <strong>Estrutura e fundação:</strong> Esta é, sem dúvida, uma área onde não se deve economizar. A estrutura e a fundação são a base de toda construção, e qualquer problema nestes elementos pode comprometer toda a edificação. Um bom projeto estrutural e materiais de qualidade garantem segurança e durabilidade.
          </p>
          
          <p>
            <strong>Instalações hidráulicas e elétricas:</strong> Economizar em instalações pode resultar em problemas sérios a médio e longo prazo, como vazamentos e curtos-circuitos. Vale a pena investir em tubulações e fiação de qualidade, além de contar com mão de obra especializada para a execução.
          </p>
          
          <p>
            <strong>Janelas e esquadrias:</strong> Elementos que oferecem isolamento térmico e acústico adequados podem representar uma economia significativa em energia elétrica ao longo do tempo. Além disso, esquadrias de qualidade são mais duráveis e necessitam de menos manutenção.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            Onde é possível economizar
          </h2>
          
          <p>
            <strong>Acabamentos:</strong> Existem hoje no mercado materiais de excelente qualidade e aparência com preços mais acessíveis. Porcelanatos que imitam pedras naturais, por exemplo, podem criar um efeito visual sofisticado a um custo significativamente menor. O importante é pesquisar e comparar custo-benefício.
          </p>
          
          <p>
            <strong>Decoração:</strong> Muitos itens decorativos podem ser adquiridos gradualmente após a conclusão da obra. Investir primeiro nos elementos estruturais e deixar alguns aspectos decorativos para uma segunda fase é uma estratégia inteligente para administrar o orçamento.
          </p>
          
          <p>
            <strong>Automação e tecnologia:</strong> Embora sejam atrativas, algumas tecnologias de automação residencial podem ser implementadas posteriormente. É possível planejar a infraestrutura necessária durante a construção e instalar os equipamentos conforme disponibilidade financeira.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            A importância de um bom projeto
          </h2>
          
          <p>
            Um projeto bem elaborado é o primeiro passo para uma obra econômica. Com um planejamento detalhado, é possível otimizar o uso de materiais, reduzir desperdícios e evitar retrabalhos. O investimento em um bom arquiteto e engenheiro no início do processo pode representar uma economia significativa ao longo da execução.
          </p>
          
          <p>
            Além disso, profissionais experientes podem indicar as melhores soluções técnicas e materiais para cada situação específica, equilibrando custo, durabilidade e estética de acordo com as necessidades e expectativas do cliente.
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
            href="/blog/retrofit-apartamento" 
            className="inline-flex items-center text-[#C6A87D] hover:underline font-medium"
          >
            Próximo artigo →
          </Link>
        </div>
      </div>
      
      <WhatsAppButton />
      <Footer />
    </main>
  )
} 