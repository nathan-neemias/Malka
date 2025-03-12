'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function RetrofitApartamentoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Imagem principal em tela cheia */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/Foto2.jpg"
          alt="Retrofit de Apartamento"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Conteúdo do artigo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Metadados do post */}
        <div className="flex items-center text-gray-600 text-sm mb-8">
          <span>15 de fevereiro de 2023</span>
          <span className="mx-2">•</span>
          <Link href="#" className="text-[#C6A87D]">Reformas</Link>
        </div>
        
        {/* Título do post */}
        <h1 className="text-3xl sm:text-4xl uppercase font-bold text-[#C6A87D] mb-12">
          RETROFIT DE APARTAMENTO GUIADO POR UM ARQUITETO
        </h1>
        
        {/* Conteúdo do artigo */}
        <article className="prose prose-lg max-w-none text-gray-800">
          <p>
            O retrofit tem se tornado uma tendência crescente no setor imobiliário e da construção civil, especialmente em grandes centros urbanos. Este conceito, que consiste na modernização de edifícios antigos preservando suas características originais, representa uma abordagem sustentável e culturalmente rica para a revitalização de espaços.
          </p>
          
          <p>
            Diferente de uma reforma tradicional, o retrofit busca atualizar instalações, melhorar a eficiência energética e adaptar ambientes às necessidades contemporâneas, mantendo a essência arquitetônica original. Este processo, quando guiado por um arquiteto especializado, pode transformar completamente a funcionalidade e o conforto de um apartamento sem descaracterizá-lo.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            Por que optar pelo retrofit com orientação profissional
          </h2>
          
          <p>
            A orientação de um arquiteto no processo de retrofit é fundamental para equilibrar preservação e modernização. Um profissional experiente consegue identificar quais elementos devem ser mantidos por seu valor histórico ou estético, e quais podem ser alterados para atender às demandas atuais de conforto, acessibilidade e tecnologia.
          </p>
          
          <p>
            Além disso, o arquiteto tem o conhecimento técnico necessário para lidar com as particularidades de edificações antigas, como estruturas diferenciadas, materiais em desuso e instalações obsoletas. Esta expertise permite evitar surpresas desagradáveis durante a execução do projeto e garante que as intervenções sejam realizadas de forma segura e eficiente.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            Etapas de um retrofit bem-sucedido
          </h2>
          
          <p>
            Um processo de retrofit bem-sucedido geralmente segue algumas etapas fundamentais. A primeira delas é a avaliação detalhada do imóvel, incluindo análise estrutural, levantamento das instalações existentes e identificação de elementos de valor histórico ou arquitetônico.
          </p>
          
          <p>
            Em seguida, desenvolve-se o projeto conceitual, que estabelece as diretrizes gerais da intervenção, definindo o que será preservado, o que será adaptado e o que será substituído. Esta fase é crucial para alinhar as expectativas do cliente com as possibilidades técnicas e as restrições do imóvel.
          </p>
          
          <p>
            Com o conceito aprovado, parte-se para o projeto executivo, que detalha todas as intervenções a serem realizadas, desde alterações estruturais até especificações de acabamentos e instalações. Um bom projeto executivo é essencial para minimizar imprevistos durante a obra e garantir um resultado final coerente.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            Sustentabilidade e eficiência no retrofit
          </h2>
          
          <p>
            Um dos aspectos mais relevantes do retrofit é seu potencial sustentável. Ao optar por modernizar um imóvel existente em vez de demolir e construir novamente, reduz-se significativamente o consumo de recursos naturais e a geração de resíduos.
          </p>
          
          <p>
            Além disso, um retrofit bem planejado incorpora soluções contemporâneas de eficiência energética, como isolamento térmico adequado, iluminação de baixo consumo, aproveitamento de ventilação natural e, em alguns casos, geração de energia renovável. Estas intervenções não apenas reduzem o impacto ambiental da edificação, mas também proporcionam economia financeira a longo prazo.
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
            href="/blog/importancia-arquiteto" 
            className="inline-flex items-center text-[#C6A87D] hover:underline font-medium"
          >
            Próximo artigo →
          </Link>
        </div>
      </div>
    </main>
  )
} 