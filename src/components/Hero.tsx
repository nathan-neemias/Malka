'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/foto1.jpg"
            alt="Interior luxuoso"
            fill
            className="object-cover brightness-[0.35] transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl transform transition-all duration-500">
              <p className="text-sm font-medium text-[#C6A87D] mb-4 tracking-wider">
                PROJETO RESIDENCIAL
              </p>
              <h1 className="text-5xl sm:text-7xl font-light text-white mb-6 leading-tight">
                ARQUITETURA DE EXCELÊNCIA
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Transformando espaços em experiências únicas, onde cada detalhe conta uma história de sofisticação e elegância.
              </p>
              <Link
                href="/projetos"
                className="inline-flex items-center px-8 py-4 border-2 border-[#C6A87D] text-base font-medium text-white hover:bg-[#C6A87D] transition-all duration-300"
              >
                Conheça Nossos Projetos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Etapas do Projeto (anteriormente Sobre) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-sm text-[#C6A87D] uppercase tracking-[0.2em] mb-4">+ ETAPAS DO PROJETO</span>
            <h2 className="text-4xl font-light tracking-wide text-gray-800 mt-2">Como Trabalhamos</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Etapa 1 */}
              <div className="relative pl-8 border-l-2 border-[#C6A87D]">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#C6A87D] flex items-center justify-center text-white font-medium">1</div>
                <h3 className="text-xl font-medium text-[#C6A87D] mb-3">Briefing e Necessidades</h3>
                <p className="text-gray-600 mb-2"><strong>Entender o cliente e o espaço</strong></p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Reuniões para alinhar estilo, prioridades e orçamento.</li>
                  <li>• Identificação de problemas e referências visuais.</li>
                </ul>
              </div>
              
              {/* Etapa 2 */}
              <div className="relative pl-8 border-l-2 border-[#C6A87D]">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#C6A87D] flex items-center justify-center text-white font-medium">5</div>
                <h3 className="text-xl font-medium text-[#C6A87D] mb-3">Planejamento e Orçamento</h3>
                <p className="text-gray-600 mb-2"><strong>Controlar custos e prazos</strong></p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Orçamento de materiais e mão de obra.</li>
                  <li>• Definição do cronograma e fornecedores.</li>
                </ul>
              </div>
              
              {/* Etapa 3 */}
              <div className="relative pl-8 border-l-2 border-[#C6A87D]">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#C6A87D] flex items-center justify-center text-white font-medium">2</div>
                <h3 className="text-xl font-medium text-[#C6A87D] mb-3">Levantamento do Local</h3>
                <p className="text-gray-600 mb-2"><strong>Obter dados do espaço atual</strong></p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Medições, fotos e análise de estrutura e instalações.</li>
                  <li>• Verificação de normas legais.</li>
                </ul>
              </div>
              
              {/* Etapa 4 */}
              <div className="relative pl-8 border-l-2 border-[#C6A87D]">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#C6A87D] flex items-center justify-center text-white font-medium">6</div>
                <h3 className="text-xl font-medium text-[#C6A87D] mb-3">Obra e Acompanhamento</h3>
                <p className="text-gray-600 mb-2"><strong>Garantir a execução fiel</strong></p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Contratação de equipe e supervisão.</li>
                  <li>• Solução de imprevistos.</li>
                </ul>
              </div>
              
              {/* Etapa 5 */}
              <div className="relative pl-8 border-l-2 border-[#C6A87D]">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#C6A87D] flex items-center justify-center text-white font-medium">3</div>
                <h3 className="text-xl font-medium text-[#C6A87D] mb-3">Estudo Preliminar</h3>
                <p className="text-gray-600 mb-2"><strong>Criar um conceito inicial</strong></p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Desenvolvimento de layout e croquis.</li>
                  <li>• Apresentação das imagens em 3D e validação com o cliente.</li>
                </ul>
              </div>
              
              {/* Etapa 6 */}
              <div className="relative pl-8 border-l-2 border-[#C6A87D]">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#C6A87D] flex items-center justify-center text-white font-medium">7</div>
                <h3 className="text-xl font-medium text-[#C6A87D] mb-3">Entrega e Pós-Obra</h3>
                <p className="text-gray-600 mb-2"><strong>Finalizar e ajustar detalhes</strong></p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Limpeza, revisão e entrega do espaço.</li>
                  <li>• Ajustes pós-entrega, se necessário.</li>
                </ul>
              </div>
              
              {/* Etapa 7 */}
              <div className="relative pl-8 border-l-2 border-[#C6A87D]">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#C6A87D] flex items-center justify-center text-white font-medium">4</div>
                <h3 className="text-xl font-medium text-[#C6A87D] mb-3">Projeto Executivo</h3>
                <p className="text-gray-600 mb-2"><strong>Detalhar o projeto técnico</strong></p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Plantas, pontos técnicos e desenhos de móveis.</li>
                  <li>• Especificação de materiais e acabamentos.</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                href="/contato" 
                className="inline-flex items-center px-8 py-4 border border-[#C6A87D] text-base font-medium text-[#C6A87D] hover:bg-[#C6A87D] hover:text-white transition-colors duration-300"
              >
                Inicie seu Projeto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-light tracking-wide flex items-center text-[#C6A87D]">
              CONTATO
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="mr-6 mt-1">
                  <Clock color="#C6A87D" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Horário de funcionamento</h3>
                  <p className="text-gray-600">
                    Das 8:00 às 18:00 de seg. a sex.
                    <br />
                    Aos sábados das 9:00 às 13:00hs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-6 mt-1">
                  <MapPin color="#C6A87D" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Endereço</h3>
                  <p className="text-gray-600">
                    Rua Áurea, 232, Vila Mariana 
                    <br />
                    São Paulo – SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-6 mt-1">
                  <Mail color="#C6A87D" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    contato@malkaarquitetura.com.br
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.758786733761!2d-46.63880332378736!3d-23.58574776150721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bc6cb4e7531%3A0x6beca185c94ca851!2sR.%20%C3%81urea%2C%20232%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1719867225793!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero 