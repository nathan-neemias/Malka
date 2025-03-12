'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'

// Definição de interface para o tipo de projeto
interface ProjectDetails {
  cliente: string;
  local: string;
  ano: string;
  area: string;
  galeria: string[];
  descricaoLonga: string;
}

interface Project {
  id: string;
  image: string;
  title: string;
  project: string;
  description: string;
  categoria: string;
  detalhes: ProjectDetails;
}

// Mesmos projetos da página de listagem
const projects = [
  {
    id: 'vila-ultra-luxuosa',
    image: '/images/foto1.jpg',
    title: 'VILA ULTRA-LUXUOSA',
    project: 'PROJETO P.01',
    description: 'Arquitetura viverra tristique justo duis vitae diaminte neque nivamus aestan ateuene artine aringiangu the miss finibus viverra lacus fermen.',
    categoria: 'Residencial',
    detalhes: {
      cliente: 'Cliente Particular',
      local: 'São Paulo, Brasil',
      ano: '2023',
      area: '850 m²',
      galeria: ['/images/foto1.jpg', '/images/foto2.jpg', '/images/foto3.jpg'],
      descricaoLonga: `
        Este projeto de vila ultra-luxuosa combina elegância contemporânea com elementos clássicos, criando uma residência única que reflete o estilo de vida sofisticado dos proprietários.
        
        A distribuição dos espaços foi cuidadosamente planejada para proporcionar fluidez entre ambientes internos e externos, com amplas áreas de convivência e espaços íntimos bem delimitados.
        
        Materiais nobres como mármore, madeira de lei e vidros especiais foram empregados em harmonia, criando contrastes visuais e táteis que enriquecem a experiência sensorial dos moradores.
        
        A iluminação foi projetada para destacar elementos arquitetônicos e criar diferentes atmosferas ao longo do dia, com sistemas automatizados que se adaptam às necessidades dos usuários.
      `
    }
  },
  {
    id: 'mansao-moderna',
    image: '/images/foto2.jpg',
    title: 'MANSÃO MODERNA',
    project: 'PROJETO P.02',
    description: 'Design contemporâneo com linhas clean e acabamentos premium, criando espaços que harmonizam luxo e funcionalidade.',
    categoria: 'Residencial',
    detalhes: {
      cliente: 'Família Silva',
      local: 'Rio de Janeiro, Brasil',
      ano: '2022',
      area: '1200 m²',
      galeria: ['/images/foto2.jpg', '/images/foto3.jpg', '/images/foto1.jpg'],
      descricaoLonga: `
        A Mansão Moderna representa o ápice do design contemporâneo aplicado à arquitetura residencial de alto padrão. Com linhas minimalistas e proporções generosas, o projeto cria uma conexão harmoniosa com o entorno natural.
        
        Os interiores seguem o conceito de luxo discreto, com espaços amplos e integrados que favorecem a convivência familiar e o entretenimento. A paleta de cores neutras serve como base para destacar peças de design exclusivas e obras de arte cuidadosamente selecionadas.
        
        Tecnologias de automação residencial foram incorporadas de forma discreta, permitindo o controle total de iluminação, climatização, som e segurança através de sistemas intuitivos que elevam a experiência de moradia.
        
        A sustentabilidade foi considerada desde a concepção do projeto, com sistemas de captação de água da chuva, painéis solares e soluções de eficiência energética que reduzem significativamente o impacto ambiental da edificação.
      `
    }
  },
  {
    id: 'residencia-elegante',
    image: '/images/foto3.jpg',
    title: 'RESIDÊNCIA ELEGANTE',
    project: 'PROJETO P.03',
    description: 'Sofisticação em cada detalhe, combinando materiais nobres e iluminação estratégica para criar ambientes únicos.',
    categoria: 'Residencial',
    detalhes: {
      cliente: 'Casal Oliveira',
      local: 'Belo Horizonte, Brasil',
      ano: '2023',
      area: '650 m²',
      galeria: ['/images/foto3.jpg', '/images/foto1.jpg', '/images/foto2.jpg'],
      descricaoLonga: `
        A Residência Elegante foi concebida para um casal de colecionadores de arte que desejava um espaço que refletisse sua paixão pela estética e pelo design. O projeto explora a interação entre volumes e vazios, criando perspectivas surpreendentes e espaços de contemplação.
        
        A distribuição vertical da residência aproveita o desnível natural do terreno, com áreas sociais no nível intermediário, íntimas na parte superior e de lazer no pavimento inferior, conectadas por uma escada escultural que serve como elemento central da composição.
        
        O tratamento acústico recebeu atenção especial, com soluções técnicas que garantem privacidade sem comprometer a estética dos ambientes. A iluminação foi planejada em camadas, permitindo ajustes que transformam completamente a percepção dos espaços.
        
        O paisagismo se integra à arquitetura, com jardins verticais e espelhos d'água que amenizam o clima e criam uma transição suave entre o construído e o natural.
      `
    }
  },
  {
    id: 'projeto-comercial',
    image: '/images/foto1.jpg',
    title: 'EDIFÍCIO COMERCIAL',
    project: 'PROJETO P.04',
    description: 'Espaço comercial com design arrojado, priorizando funcionalidade e fluxo de trabalho otimizado para empresas modernas.',
    categoria: 'Comercial',
    detalhes: {
      cliente: 'Empresa XYZ Tecnologia',
      local: 'São Paulo, Brasil',
      ano: '2022',
      area: '3500 m²',
      galeria: ['/images/foto1.jpg', '/images/foto2.jpg', '/images/foto3.jpg'],
      descricaoLonga: `
        O Edifício Comercial foi projetado como sede para uma empresa de tecnologia em expansão, com foco na criação de ambientes que estimulam a criatividade e a colaboração entre equipes. A fachada dinâmica com elementos móveis responde às condições climáticas, otimizando a eficiência energética.
        
        Os espaços internos foram organizados seguindo conceitos de trabalho ágil, com áreas abertas para colaboração, salas de reunião flexíveis e espaços de descompressão que incentivam interações informais entre os colaboradores.
        
        O projeto incorpora tecnologias de ponta em conectividade, permitindo que todos os espaços sejam utilizados para trabalho com o mesmo nível de eficiência. Sistemas de monitoramento de qualidade do ar e iluminação biodinâmica contribuem para o bem-estar dos usuários.
        
        A incorporação de áreas verdes internas e terraços acessíveis proporcionam contato com elementos naturais, reduzindo o estresse e aumentando a produtividade.
      `
    }
  },
  {
    id: 'projeto-corporativo',
    image: '/images/foto2.jpg',
    title: 'SEDE CORPORATIVA',
    project: 'PROJETO P.05',
    description: 'Sede empresarial com conceito aberto, integrando áreas de trabalho, lazer e reuniões em um ambiente estimulante e produtivo.',
    categoria: 'Comercial',
    detalhes: {
      cliente: 'Corporação Global Finance',
      local: 'Rio de Janeiro, Brasil',
      ano: '2021',
      area: '12000 m²',
      galeria: ['/images/foto2.jpg', '/images/foto3.jpg', '/images/foto1.jpg'],
      descricaoLonga: `
        A Sede Corporativa foi concebida como um marco arquitetônico que representa os valores e a visão de futuro da instituição financeira. Com 15 pavimentos, o edifício se destaca na paisagem urbana por sua forma escultural e fachada de alto desempenho.
        
        O térreo funciona como uma praça pública coberta, com espaços culturais e comerciais que atraem não apenas os funcionários, mas também a comunidade local, criando uma relação de permeabilidade com o entorno.
        
        Os andares corporativos foram planejados para maximizar a flexibilidade, permitindo rearranjos conforme as necessidades organizacionais evoluem. Núcleos de serviço centralizam a infraestrutura, liberando as áreas periféricas para espaços de trabalho com ampla visibilidade para o exterior.
        
        O projeto implementa conceitos avançados de sustentabilidade, com certificação LEED Platinum, utilizando sistemas regenerativos de energia e gestão inteligente de recursos que reduzem drasticamente o impacto ambiental da operação.
      `
    }
  },
  {
    id: 'espaco-gourmet',
    image: '/images/foto3.jpg',
    title: 'ESPAÇO GOURMET',
    project: 'PROJETO P.06',
    description: 'Ambiente gastronômico sofisticado que combina praticidade e elegância, perfeito para receber e desfrutar momentos especiais.',
    categoria: 'Interiores',
    detalhes: {
      cliente: 'Chef Renomado',
      local: 'Florianópolis, Brasil',
      ano: '2023',
      area: '180 m²',
      galeria: ['/images/foto3.jpg', '/images/foto1.jpg', '/images/foto2.jpg'],
      descricaoLonga: `
        O Espaço Gourmet foi projetado para um chef que desejava um ambiente onde pudesse receber convidados e compartilhar sua paixão pela gastronomia. O projeto equilibra a funcionalidade necessária para o preparo profissional de alimentos com a estética refinada de um espaço de entretenimento.
        
        A planta aberta permite que os convidados acompanhem o processo de preparo dos alimentos, transformando a culinária em um espetáculo visual. Os materiais selecionados priorizam a durabilidade e a facilidade de manutenção, sem comprometer a sofisticação do conjunto.
        
        O mobiliário foi desenhado sob medida, otimizando o aproveitamento do espaço e permitindo múltiplas configurações conforme o número de convidados e o tipo de evento. A iluminação cênica valoriza tanto os pratos quanto os momentos de convivência.
        
        A adega climatizada, o jardim de ervas integrado e os equipamentos de última geração completam um ambiente que celebra a arte da gastronomia em todos os seus aspectos.
      `
    }
  }
];

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Encontrar o projeto com base no ID da URL
    const foundProject = projects.find(p => p.id === params.id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [params.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-2xl text-gray-600">Projeto não encontrado</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.detalhes.galeria.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.detalhes.galeria.length) % project.detalhes.galeria.length);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner Header */}
      <div className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <p className="text-sm font-medium text-gray-300 mb-4">
              {project.project}
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info Card */}
            <div className="bg-gray-50 p-8 h-fit">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Informações</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Cliente</p>
                  <p className="text-base text-gray-800">{project.detalhes.cliente}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Localização</p>
                  <p className="text-base text-gray-800">{project.detalhes.local}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ano</p>
                  <p className="text-base text-gray-800">{project.detalhes.ano}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Área</p>
                  <p className="text-base text-gray-800">{project.detalhes.area}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Categoria</p>
                  <p className="text-base text-gray-800">{project.categoria}</p>
                </div>
              </div>
              <div className="mt-8">
                <Link 
                  href="/projetos" 
                  className="inline-flex items-center px-4 py-2 border border-[#C6A87D] text-base font-medium text-[#C6A87D] hover:bg-[#C6A87D] hover:text-white transition-colors duration-300"
                >
                  ← Voltar para Projetos
                </Link>
              </div>
            </div>
            
            {/* Description and Gallery */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Sobre o Projeto</h2>
                {project.detalhes.descricaoLonga.split('\n\n').map((paragraph: string, idx: number) => (
                  <p key={idx} className="mb-4 text-gray-600">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
              
              {/* Gallery */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Galeria</h2>
                <div className="relative overflow-hidden">
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src={project.detalhes.galeria[currentImageIndex]}
                      alt={`Imagem ${currentImageIndex + 1} do projeto ${project.title}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <button 
                      onClick={prevImage}
                      className="bg-black bg-opacity-50 p-2 rounded-r-lg text-white hover:bg-opacity-70 transition-opacity"
                    >
                      ←
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <button 
                      onClick={nextImage}
                      className="bg-black bg-opacity-50 p-2 rounded-l-lg text-white hover:bg-opacity-70 transition-opacity"
                    >
                      →
                    </button>
                  </div>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 px-3 py-1 rounded-full text-white text-sm">
                    {currentImageIndex + 1} / {project.detalhes.galeria.length}
                  </div>
                </div>
                
                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {project.detalhes.galeria.map((img: string, idx: number) => (
                    <div 
                      key={idx} 
                      className={`relative h-24 cursor-pointer ${idx === currentImageIndex ? 'ring-2 ring-[#C6A87D]' : ''}`}
                      onClick={() => setCurrentImageIndex(idx)}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 