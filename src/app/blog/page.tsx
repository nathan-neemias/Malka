'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'

const blogPosts = [
  {
    id: 'nossas-experiencias',
    title: 'Nossas Experiências',
    subtitle: 'BLOG MALKA ARQUITETURA',
    description: 'Um Guia Prático da Malka Arquitetura para Sua Reforma. Aqui, compartilharemos nossas experiências e dicas práticas para transformar sua casa. Vamos explorar desde o planejamento até os detalhes finais.',
    image: '/images/SobreNos.jpg',
    content: [
      {
    title: 'Economia na Obra: Saiba Onde Vale a Pena Investir e Economizar',
        summary: 'Na hora de reformar, construir ou simplesmente dar uma repaginada em um ambiente, uma das maiores preocupações é o orçamento.',
        text: `Na hora de reformar, construir ou simplesmente dar uma repaginada em um ambiente, uma das maiores preocupações é o orçamento. Com o aumento nos preços de materiais e mão de obra, a economia se torna uma prioridade para muitos. Porém, nem sempre o mais barato é a melhor escolha, e saber onde investir pode fazer toda a diferença em qualidade e durabilidade.

        Neste artigo, vamos abordar estratégias para economizar em materiais de construção e decoração, além de destacar onde realmente vale a pena investir para ter um ótimo custo-benefício.

        1. Definir antes
        Antes de começar a obra, é importante definir prioridades. Quais são os elementos mais importantes para você? É o design, a funcionalidade, a sustentabilidade ou a economia?

        2. Planejamento e Projeto
        Um projeto bem planejado pode ajudar a evitar erros e mudanças durante a construção, o que pode gerar custos adicionais. Além disso, um projeto bem planejado pode ajudar a otimizar o uso de materiais e recorrer.

        3. Materiais e Fornecedores
        Escolher materiais e fornecedores certos pode ajudar a reduzir custos e desperdícios na obra.

        4. Reutilização e Reciclagem
        Reutilizar e reciclar materiais pode ajudar a reduzir os custos e o impacto ambiental. Considere reutilizar materiais de demolição ou reciclar materiais que a construtora entrega também podem ser considerados e incluídos no projeto.

        5. Contratação de Profissionais
        Contratar profissionais certos pode ajudar a reduzir os custos e melhorar a qualidade do projeto. Procure por profissionais experientes e qualificados que possam ajudar.

        6. Monitoramento
        Monitorar e controlar os custos durante a obra é fundamental para evitar problemas futuros. Estabeleça um orçamento detalhado e monitore os custos regularmente para garantir que o projeto esteja dentro do orçamento.

        Dicas Importantes:

        Pisos de Áreas Molhadas
        • Invista em porcelanato para banheiros e cozinha, sua resistência justifica o custo mais elevado
        • Ele pode reproduzir materiais como mármore, granito e cimento queimado com um custo melhor
        • Se preferir amadeirado escolha um piso vinílico
        • O piso vinílico tem isolamento acústico, não acumula fungos ou bactérias
        • Tem durabilidade de em média 15 anos e pode ser reutilizado várias vezes

        Tintas de Qualidade
        • Opte por tintas duráveis, semi-brilho ou laváveis
        • Evitam retoques frequentes e mantêm as paredes bonitas por mais tempo
        • São resistentes a manchas, desbotamento e umidade
        • Podem ser usadas em ambientes internos e externos
        • A tinta semi-brilho é uma boa opção para áreas com mais pessoas e que acumulam mais pó

        Instalações Elétricas
        • Não economize em fiação e disjuntores
        • A segurança e eficiência energética são fundamentais
        • Ajudam na economia nas contas de energia elétrica
        • Protegem as instalações elétricas desligando a energia automaticamente em caso de sobrecargas ou curtos-circuitos
        • Prefira economizar em acabamentos`,
        image: '/images/ProjetoLirioParte2/Enscape_2025-02-14-18-12-50.jpg'
      },
      {
    title: 'Retrofit de Apartamento Guiado por um Arquiteto',
        summary: 'O conceito de retrofit tem ganhado destaque no universo da arquitetura e design de interiores, especialmente em ambientes urbanos.',
        text: `O conceito de retrofit tem ganhado destaque no universo da arquitetura e design de interiores, especialmente em ambientes urbanos. Essa prática não se limita apenas à reforma, mas envolve a atualização e revitalização de espaços, mantendo elementos históricos e estéticos enquanto se adapta às necessidades contemporâneas.

        O Que é Retrofit?
        Retrofit é o processo de modernização de um edifício ou espaço, mantendo sua estrutura original, mas melhorando sua funcionalidade, eficiência e estética. Essa abordagem é especialmente popular em apartamentos antigos, onde os moradores desejam aproveitar o charme histórico, mas com um toque de modernidade.

        Por Que Optar pelo Retrofit?
        • Sustentabilidade: Ao optar pelo retrofit, você contribui para a sustentabilidade, pois reutiliza a estrutura existente, reduzindo a necessidade de novos materiais e o desperdício
        • Valorização do Imóvel: A modernização pode aumentar o valor de mercado do apartamento, tornando-o mais atraente para potenciais compradores ou inquilinos
        • Personalização: O retrofit permite que os moradores personalizem seus espaços de acordo com suas necessidades e preferências, criando um ambiente que reflete seu estilo de vida

        O Papel do Arquiteto no Processo de Retrofit:

        1. Avaliação Inicial do Espaço
        O arquiteto fará uma análise detalhada do apartamento, identificando as áreas que precisam de atualização e aquelas que podem ser preservadas. Essa avaliação é fundamental para determinar o potencial do espaço.

        2. Desenvolvimento de um Projeto Personalizado
        Com base nas necessidades e desejos dos moradores, o arquiteto cria um projeto que mescla o antigo e o novo. Isso pode incluir a reconfiguração de plantas, escolha de materiais e definição de cores.

        3. Soluções Estruturais e Técnicas
        O arquiteto possui o conhecimento técnico necessário para sugerir melhorias na infraestrutura, como sistemas elétricos e hidráulicos, garantindo que o apartamento atenda às normas de segurança e eficiência energética.

        4. Gestão do Projeto
        Durante a execução da reforma, o arquiteto atua como um gestor, coordenando a equipe de profissionais e garantindo que o projeto seja implementado conforme o planejado, dentro do prazo e do orçamento.

        Elementos a Considerar em um Retrofit de Apartamento:

        • Preservação de Elementos Históricos: Muitas vezes, os apartamentos antigos têm características únicas que devem ser preservadas, como molduras, pisos de madeira e azulejos
        • Integração de Novas Tecnologias: A modernização deve incluir a instalação de tecnologias que promovam conforto e eficiência, como sistemas de aquecimento, automação residencial e soluções sustentáveis
        • Aproveitamento de Espaços: Em apartamentos pequenos, a otimização do espaço é crucial. O arquiteto pode sugerir móveis multifuncionais e layouts inteligentes que maximizam a área disponível
        • Iluminação e Ventilação: O planejamento da iluminação e ventilação é fundamental para criar um ambiente agradável e saudável. O arquiteto pode propor janelas amplas, claraboias e soluções de iluminação artificial que valorizem o espaço`,
        image: '/images/ProjetoLirioParte2/Enscape_2025-02-14-18-01-51.jpg'
      },
      {
    title: 'A Importância do Arquiteto: Como Criar a Planta dos Sonhos para a sua casa',
        summary: 'A importância do arquiteto na obra vai além da estética do projeto, pois ele atua desde a concepção até a execução.',
        text: `A importância do arquiteto na obra vai além da estética do projeto, pois ele atua desde a concepção até a execução, garantindo que todos os detalhes sejam pensados de forma funcional e segura. O arquiteto é responsável por planejar espaços de forma inteligente, considerando a iluminação, ventilação, acabamentos e estrutura do imóvel.

        O arquiteto é um profissional imprescindível para um bom projeto, pois só ele tem a qualificação necessária para traduzir e tirar do papel as necessidades do cliente, e também unir essas necessidades a aspectos como sustentabilidade, economia e estética como:

        • Experiência e Conhecimento: Um arquiteto tem a experiência e o conhecimento necessário para criar um projeto que atenda às suas necessidades e desejos
        • Planejamento e Projeto: Um arquiteto pode ajudar a planejar e projetar a sua casa, considerando fatores como a funcionalidade, a estética, a sustentabilidade e a segurança
        • Economia de Tempo e Dinheiro: Um arquiteto pode ajudar a economizar tempo e dinheiro, evitando erros e problemas durante o processo de construção
        • Segurança e Conformidade: Um arquiteto pode garantir que a sua casa seja projetada e construída de forma segura e em conformidade com as normas e regulamentações locais

        Como Criar a Planta dos Sonhos com um Arquiteto?
        Criar a planta dos sonhos com um arquiteto é um processo que envolve várias etapas. Aqui estão algumas dicas para criar a planta perfeita para a sua casa:

        • Defina suas Necessidades e Desejos: Antes de começar a projetar a sua casa, é importante definir suas necessidades e desejos. Quais são os espaços que você precisa? Quais são os estilos e materiais que você gosta?
        • Escolha um Arquiteto: Escolha um arquiteto que tenha experiência e conhecimento em projetar casas semelhantes à sua
        • Comunique-se com o Arquiteto: Comunique-se regularmente com o arquiteto para garantir que o projeto atenda às suas necessidades e desejos, dê a ele referências como fotos prints e seja claro sobre o que idealiza
        • Revisite e Ajuste: Revisite e ajuste o projeto regularmente para garantir que ele atenda às suas necessidades e desejos

        A Planta dos Sonhos é crucial para traduzir as ideias e expectativas do cliente em um projeto viável e harmonioso, com o arquiteto desempenhando um papel fundamental nesse processo. Ela vai além de simplesmente definir a distribuição dos cômodos de uma casa, refletindo a personalidade e estilo de vida de quem irá habitar o espaço.

        O projeto é essencial para garantir que a construção seja bem executada, seguindo todas as normas e garantindo a segurança e conforto dos moradores. Contratar um arquiteto qualificado para criar a planta dos sonhos é o primeiro passo para ter a casa dos sonhos, transformando sonhos em realidade e valorizando o imóvel no mercado.`,
        image: '/images/ProjetoLirioParte2/Enscape_2025-02-14-17-29-42.jpg'
      },
      {
    title: 'Reformando com Sucesso: Evite Erros Comuns ao Reformar Seu Ambiente',
        summary: 'Reformar um espaço pode ser uma experiência emocionante, mas também repleta de desafios.',
        text: `Reformar um espaço pode ser uma experiência emocionante, mas também repleta de desafios. Para garantir que sua reforma seja bem-sucedida, é fundamental evitar erros comuns que podem comprometer o resultado final. Neste artigo, discutiremos os principais erros a serem evitados e forneceremos dicas valiosas para transformar seu ambiente de maneira eficaz e satisfatória.

        1. Falta de Planejamento Detalhado
        Um dos maiores erros que as pessoas cometem ao iniciar uma reforma é não elaborar um planejamento detalhado. É essencial definir o escopo do projeto, prazos e etapas. Dedique um tempo para pensar sobre o que você realmente deseja e como cada elemento do espaço se encaixa no seu plano.

        Dica: Crie um cronograma com metas específicas e prazos realistas para cada fase da reforma.

        2. Orçamento Mal Definido
        Definir um orçamento é crucial, mas muitos acabam subestimando os custos. Além dos gastos com materiais e mão de obra, é importante reservar uma margem para imprevistos, como problemas estruturais ou atrasos.

        Dica: Inclua uma reserva de 10-20% do seu orçamento total para cobrir despesas inesperadas.

        3. Ignorar a Funcionalidade do Espaço
        A estética é importante, mas a funcionalidade deve ser prioridade. Um espaço bonito, mas pouco prático, pode causar frustração no dia a dia. Pense em como você usará o ambiente e escolha soluções que atendam a essas necessidades.

        Dica: Faça uma lista das atividades que você realizará no espaço e considere como o layout pode apoiar essas funções.

        4. Escolhas de Materiais Inadequados
        Optar por materiais apenas pelo preço pode resultar em problemas futuros. Materiais de baixa qualidade podem desgastar rapidamente e exigir mais manutenção.

        Dica: Pesquise e escolha materiais que ofereçam durabilidade e que sejam adequados ao uso do espaço.`,
        image: '/images/ProjetoLirioParte2/Enscape_2025-02-14-17-22-39.jpg'
      }
    ]
  }
]

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal = ({ isOpen, onClose, title, content }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative bg-white/95 backdrop-blur-md rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl transform transition-all scale-in-center">
        <div className="sticky top-0 bg-white/80 backdrop-blur-sm px-8 py-6 border-b border-gray-200/50 flex justify-between items-center z-10">
          <h3 className="text-2xl font-light text-[#C6A87D] pr-8 tracking-wide">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#C6A87D] transition-colors p-2 hover:bg-gray-100/80 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto p-8 custom-scrollbar">
          <div className="prose prose-lg max-w-none">
            {content.split('\n\n').map((paragraph, idx) => (
              <div key={idx} className="mb-8 last:mb-0 fade-in-bottom" style={{ animationDelay: `${idx * 0.1}s` }}>
                {paragraph.trim().startsWith('•') ? (
                  <ul className="list-disc pl-6 space-y-3">
                    {paragraph.split('•').filter(Boolean).map((item, i) => (
                      <li key={i} className="text-gray-600 leading-relaxed hover:text-[#C6A87D] transition-colors">{item.trim()}</li>
                    ))}
                  </ul>
                ) : paragraph.trim().match(/^\d\./) ? (
                  <div className="font-semibold text-[#C6A87D] text-xl mb-4">{paragraph.trim()}</div>
                ) : (
                  <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">{paragraph.trim()}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPost = ({ title, content, image, onClose }: { title: string; content: string; image: string; onClose: () => void }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src={image}
            alt={title}
            fill 
            className="object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        <div className="absolute top-8 left-8 z-10">
          <button
            onClick={onClose}
            className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide slide-in-bottom mb-6">{title}</h1>
            <div className="w-24 h-1 bg-[#C6A87D] mx-auto slide-in-bottom" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="hidden lg:block col-span-2">
            <div className="sticky top-8">
              <div className="w-full h-0.5 bg-[#C6A87D] mb-6" />
              <div className="text-sm uppercase tracking-widest text-[#C6A87D] mb-3">Artigo</div>
              <div className="text-sm text-gray-400 mb-8">Por Malka Arquitetura</div>
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">Compartilhe</div>
                <div className="flex flex-col space-y-4">
                  <button className="text-gray-400 hover:text-[#C6A87D] transition-colors duration-300 flex items-center group">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77,7.46H14.5V5.9c0-.86.72-1.58,1.58-1.58h2.7V0H14.5C11.14,0,8.45,2.69,8.45,6.03v1.43H5.77v4.97h2.68V24h6.05V12.43h3.77L18.77,7.46Z"/>
                    </svg>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">Facebook</span>
                  </button>
                  <button className="text-gray-400 hover:text-[#C6A87D] transition-colors duration-300 flex items-center group">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953,4.57a10,10,0,0,1-2.825.775,4.958,4.958,0,0,0,2.163-2.723,10.163,10.163,0,0,1-3.127,1.184A4.92,4.92,0,0,0,11.78,8.288,13.938,13.938,0,0,1,1.64,3.162,4.822,4.822,0,0,0,.974,5.637,4.921,4.921,0,0,0,3.195,9.7A4.957,4.957,0,0,1,.96,9.071v.062a4.923,4.923,0,0,0,3.946,4.827,4.963,4.963,0,0,1-2.224.085,4.927,4.927,0,0,0,4.6,3.417,9.873,9.873,0,0,1-6.115,2.107A10.117,10.117,0,0,1,0,19.544,13.909,13.909,0,0,0,7.548,21.5,13.942,13.942,0,0,0,21.543,7.106V6.619A9.942,9.942,0,0,0,23.953,4.57Z"/>
                    </svg>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">Twitter</span>
                  </button>
                  <button className="text-gray-400 hover:text-[#C6A87D] transition-colors duration-300 flex items-center group">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447,20.452H3.553V3.558H20.447Zm-16.894-1h15.894V4.558H3.553Z"/><path d="M15.3,7.4h-6.6v3.3h6.6Zm-1,2.3h-4.6V8.4h4.6Z"/><path d="M15.3,12.7h-6.6V16h6.6Zm-1,2.3h-4.6V13.7h4.6Z"/>
                    </svg>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">Copiar Link</span>
                  </button>
                </div>
              </div>
            </div>
                  </div>
                  
          <div className="col-span-12 lg:col-span-8">
            <div className="max-w-3xl mx-auto">
              {content.split('\n\n').map((paragraph, idx) => (
                <div key={idx} className="mb-12 last:mb-0 fade-in-bottom" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {paragraph.trim().startsWith('•') ? (
                    <ul className="list-none pl-0 space-y-6 my-12">
                      {paragraph.split('•').filter(Boolean).map((item, i) => (
                        <li key={i} className="flex items-start space-x-4 group bg-gray-50/50 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                          <span className="text-[#C6A87D] text-2xl mt-1 transform group-hover:scale-125 transition-transform duration-300">•</span>
                          <span className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-lg -mt-1">{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  ) : paragraph.trim().match(/^\d\./) ? (
                    <div className="font-light text-[#C6A87D] text-4xl mb-8 tracking-wide leading-tight mt-16">{paragraph.trim()}</div>
                  ) : (
                    <p className="text-gray-600 leading-[1.8] hover:text-gray-900 transition-colors duration-300 text-lg font-light tracking-wide"
                       style={{ textAlign: 'justify', hyphens: 'auto', wordSpacing: '0.05em' }}>
                      {paragraph.trim()}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block col-span-2">
            <div className="sticky top-8">
              <div className="w-full h-0.5 bg-[#C6A87D] mb-6" />
              <button 
                onClick={onClose}
                className="text-sm uppercase tracking-widest text-[#C6A87D] hover:text-[#a88d68] transition-colors duration-300 flex items-center group"
              >
                <span>Voltar ao Blog</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
                      </div>
                    </div>
                  </div>

        <div className="mt-16 pt-16 border-t border-gray-200 lg:hidden">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm uppercase tracking-widest text-[#C6A87D] mb-4">Compartilhe este artigo</div>
              <div className="flex space-x-6">
                <button className="text-gray-400 hover:text-[#C6A87D] transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5V5.9c0-.86.72-1.58,1.58-1.58h2.7V0H14.5C11.14,0,8.45,2.69,8.45,6.03v1.43H5.77v4.97h2.68V24h6.05V12.43h3.77L18.77,7.46Z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-[#C6A87D] transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953,4.57a10,10,0,0,1-2.825.775,4.958,4.958,0,0,0,2.163-2.723,10.163,10.163,0,0,1-3.127,1.184A4.92,4.92,0,0,0,11.78,8.288,13.938,13.938,0,0,1,1.64,3.162,4.822,4.822,0,0,0,.974,5.637,4.921,4.921,0,0,0,3.195,9.7A4.957,4.957,0,0,1,.96,9.071v.062a4.923,4.923,0,0,0,3.946,4.827,4.963,4.963,0,0,1-2.224.085,4.927,4.927,0,0,0,4.6,3.417,9.873,9.873,0,0,1-6.115,2.107A10.117,10.117,0,0,1,0,19.544,13.909,13.909,0,0,0,7.548,21.5,13.942,13.942,0,0,0,21.543,7.106V6.619A9.942,9.942,0,0,0,23.953,4.57Z"/>
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-[#C6A87D] transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447,20.452H3.553V3.558H20.447Zm-16.894-1h15.894V4.558H3.553Z"/><path d="M15.3,7.4h-6.6v3.3h6.6Zm-1,2.3h-4.6V8.4h4.6Z"/><path d="M15.3,12.7h-6.6V16h6.6Zm-1,2.3h-4.6V13.7h4.6Z"/>
                  </svg>
                </button>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="inline-flex items-center space-x-2 text-[#C6A87D] hover:text-[#a88d68] transition-all duration-300 group"
            >
              <span className="text-lg tracking-wider">Voltar ao Blog</span>
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Adicione estes estilos globais no seu arquivo global.css
const globalStyles = `
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #C6A87D transparent;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #C6A87D;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
  }

  .scale-in-center {
    animation: scale-in-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  .fade-in-bottom {
    animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .slide-in-bottom {
    animation: slide-in-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @keyframes scale-in-center {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes fade-in-bottom {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-bottom {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// Função para aplicar estilos
const applyGlobalStyles = () => {
  if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = globalStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }
};

export default function BlogPage() {
  const [selectedContent, setSelectedContent] = useState<{ title: string; text: string; image: string } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Aplicar estilos globais
    const cleanupStyles = applyGlobalStyles();

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (cleanupStyles) cleanupStyles();
    };
  }, []);

  const handleContentClick = (title: string, text: string, image: string) => {
    setSelectedContent({ title, text, image });
  };

  return (
    <main className="min-h-screen bg-white">
      {!selectedContent && (
        <>
          <Navbar />
          
          <div className="relative h-[80vh] bg-gray-900">
            <div className="absolute inset-0">
              <Image
                src="/images/SobreNos.jpg"
                alt="Blog Malka Arquitetura"
                fill
                className="object-cover opacity-80 transition-transform duration-1000 hover:scale-105"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto px-4">
                <div className="slide-in-bottom">
                  <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-wide">
                    BLOG MALKA
                  </h1>
                  <div className="w-32 h-1 bg-[#C6A87D] mx-auto mb-8" />
                  <h2 className="text-2xl md:text-3xl text-gray-200 tracking-wider font-light">
                    NOSSAS EXPERIÊNCIAS
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
            {blogPosts.map((post) => (
              <article key={post.id} className="space-y-24">
                <header className="text-center mb-20 fade-in-bottom max-w-4xl mx-auto">
                  <h3 className="text-sm text-[#C6A87D] mb-4 tracking-[0.2em] uppercase">{post.subtitle}</h3>
                  <h2 className="text-5xl font-light text-gray-800 mb-8 tracking-wide leading-tight">{post.title}</h2>
                  <div className="w-24 h-0.5 bg-[#C6A87D] mx-auto mb-8" />
                  <p className="text-gray-600 text-lg leading-relaxed">{post.description}</p>
                </header>

                <div className="grid grid-cols-1 gap-24">
                  {post.content.map((section, index) => (
                    <section 
                      key={index} 
                      className="fade-in-bottom group"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-7/12">
                          <div 
                            className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(198,168,125,0.3)]"
                            onClick={() => handleContentClick(section.title, section.text, section.image)}
                          >
                            <Image
                              src={section.image}
                              alt={section.title}
                              fill
                              className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                              <span className="text-xl font-light text-white tracking-wider flex items-center">
                                Ler artigo completo
                                <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-5/12">
                          <h3 className="text-4xl font-light text-[#C6A87D] mb-6 tracking-wide leading-tight">{section.title}</h3>
                          <div className="w-16 h-0.5 bg-[#C6A87D] mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
                          <p className="text-gray-600 text-lg leading-relaxed mb-8">{section.summary}</p>
                          <button
                            onClick={() => handleContentClick(section.title, section.text, section.image)}
                            className="inline-flex items-center space-x-3 text-[#C6A87D] hover:text-[#a88d68] transition-all duration-300 group/btn"
                          >
                            <span className="text-lg tracking-wider">Continuar lendo</span>
                            <svg className="w-6 h-6 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {selectedContent && (
        isMobile ? (
          <Modal
            isOpen={true}
            onClose={() => setSelectedContent(null)}
            title={selectedContent.title}
            content={selectedContent.text}
          />
        ) : (
          <BlogPost
            title={selectedContent.title}
            content={selectedContent.text}
            image={selectedContent.image}
            onClose={() => setSelectedContent(null)}
          />
        )
      )}
      
      <WhatsAppButton />
    </main>
  )
}