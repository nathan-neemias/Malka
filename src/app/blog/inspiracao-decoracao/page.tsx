'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function InspiracaoDecoracaoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Imagem principal em tela cheia */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/images/Foto2.jpg"
          alt="Inspiração para Decoração de Casa"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Conteúdo do artigo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Metadados do post */}
        <div className="flex items-center text-gray-600 text-sm mb-8">
          <span>12 de dezembro de 2022</span>
          <span className="mx-2">•</span>
          <Link href="#" className="text-[#C6A87D]">Arquitetura</Link>
        </div>
        
        {/* Título do post */}
        <h1 className="text-3xl sm:text-4xl uppercase font-bold text-[#C6A87D] mb-12">
          INSPIRAÇÃO PARA DECORAÇÃO DE CASA
        </h1>
        
        {/* Conteúdo do artigo */}
        <article className="prose prose-lg max-w-none text-gray-800">
          <p>
            Nam rhoncus euismod eros. Inteiro fringilla varius leo, eget volutpat eros convallist. Nulla non nisl orci. Donec ornare ullamcorper nunc elementum placerat urabitur massa ante, iaculis a enim porta, iaculis. Quisque gravida eros ut turpis interdum ornare. Interdum et malesu eles adamale fames ac ante ipsum primis in faucibus curabitur arcu eros.
          </p>
          
          <p>
            Quisque gravida eros ut turpis interdum ornare. Interdum et malesu eles adamale fames ac ante ipsum primis in faucibus. Curabitur arcu eroste feugiat in tortor in, volutpat sollicitudin libero masscenas nisl est, consleur rhoncus tortor onsecquat et. finibus nec purus. Mauris urna libero, tincidunt non ligula aliquam, maximus dignissim lacus. Fusce ac neque nibh. Fusce pretium enim vel mi fringilla euismod. Suspendisse dapibus nec nisl a hendrerit.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            Integrando elementos modernos
          </h2>
          
          <p>
            Suspendisse dapibus nec nisl a hendrerit. Mauris urna libero, tincidunt non ligula aliquam, maximus dignissim lacus. Fusce ac neque nibh. Vestibulum facilisis nisi ut diam tincidunt, quis faucibus dolor commodo. Donec vestibulum dignissim sem, vel commodo magna efficitur vel.
          </p>
          
          <p>
            Mauris non pharetra sem. Pellentesque euismod porta ligula in finibus. Curabitur arcu eroste feugiat in tortor in, volutpat sollicitudin libero masscenas nisl est, consleur rhoncus tortor onsecquat et. Duis in lacinia urna, id feugiat quam. Nulla euismod lacus et ante varius, vitae tincidunt risus dictum. Cras aliquet ipsum nec nisl iaculis posuere.
          </p>
          
          <h2 className="text-2xl font-bold text-[#C6A87D] mt-10 mb-4">
            Escolhendo os materiais certos
          </h2>
          
          <p>
            Praesent vehicula ligula vel ipsum finibus, quis gravida urna porta. Aliquam vel sem sed metus imperdiet eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam imperdiet nisl vel dui vehicula, vel faucibus magna pulvinar. Mauris convallis eu lacus eget tempus.
          </p>
          
          <p>
            Integer dignissim, est vel lacinia ultrices, augue eros commodo ante, in volutpat massa lectus non ex. Nam at tortor id magna pretium rhoncus. Nulla facilisi. Pellentesque commodo tortor bibendum, tincidunt purus ac, finibus ex. Nullam vel varius nisl. Maecenas maximus fringilla dignissim.
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