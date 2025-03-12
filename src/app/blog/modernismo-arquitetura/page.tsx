'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ModernismoArquiteturaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Imagem principal em tela cheia */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/Foto3.jpg"
          alt="Modernismo na Arquitetura"
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
          <Link href="#" className="text-[#C6A87D]">Arquitetura</Link>
        </div>
        
        {/* Título do post */}
        <h1 className="text-3xl sm:text-4xl uppercase font-bold text-[#C6A87D] mb-12">
          MODERNISMO NA ARQUITETURA
        </h1>
        
        {/* Conteúdo do artigo */}
        <article className="prose prose-lg max-w-none text-gray-800">
          <p>
            A arquitetura modernista surgiu no início do século XX como uma revolução nos conceitos tradicionais de construção e design. Caracterizada por linhas limpas, formas geométricas e uso de materiais como concreto, aço e vidro, esta corrente transformou para sempre nossa relação com os espaços construídos.
          </p>
          
          <p>
            No Brasil, o modernismo arquitetônico ganhou força entre as décadas de 1930 e 1960, tendo como principais expoentes Oscar Niemeyer e Lúcio Costa. As obras destes arquitetos, como o conjunto da Pampulha e o planejamento urbano de Brasília, são exemplos notáveis de como o modernismo se adaptou às condições climáticas e culturais brasileiras.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            Principais características do modernismo
          </h2>
          
          <p>
            O movimento modernista na arquitetura se baseia em alguns princípios fundamentais: funcionalidade, racionalidade e simplicidade. "A forma segue a função" é uma das máximas que orientam esta corrente, priorizando espaços que atendam às necessidades práticas dos usuários em vez de seguir ornamentações estéticas tradicionais.
          </p>
          
          <p>
            Entre as características marcantes do estilo modernista estão os grandes panos de vidro, que permitem a integração entre ambientes internos e externos; as estruturas aparentes, que revelam a "verdade construtiva" da edificação; os volumes puros; e os espaços fluidos e integrados, que refletem as mudanças nas dinâmicas sociais do século XX.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            O legado modernista na arquitetura contemporânea
          </h2>
          
          <p>
            Mesmo um século após seu surgimento, o modernismo segue influenciando a arquitetura contemporânea. Muitos princípios modernistas, como a valorização da luz natural, a integração com a paisagem e a funcionalidade dos espaços, foram incorporados à prática arquitetônica atual, independentemente do estilo adotado.
          </p>
          
          <p>
            Além disso, vemos hoje um processo de preservação e revalorização de obras modernistas, reconhecendo seu valor histórico e cultural. Edifícios projetados por nomes como Le Corbusier, Mies van der Rohe e Walter Gropius são hoje considerados patrimônios da humanidade, e continuam inspirando novas gerações de arquitetos a repensar a relação entre forma, função e meio ambiente.
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
            href="/blog/projetos-ultra-casa" 
            className="inline-flex items-center text-[#C6A87D] hover:underline font-medium"
          >
            Próximo artigo →
          </Link>
        </div>
      </div>
    </main>
  )
} 