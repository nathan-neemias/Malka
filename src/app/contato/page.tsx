'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Mail, MapPin, Phone, Upload, X } from 'lucide-react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    mensagem: ''
  })
  
  const [fileSelected, setFileSelected] = useState<File | null>(null)
  const [fileName, setFileName] = useState('')
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setFileSelected(file)
      setFileName(file.name)
      
      // Criar preview para imagens
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = () => {
          setPreviewUrl(reader.result as string)
        }
        reader.readAsDataURL(file)
      } else {
        setPreviewUrl(null)
      }
    }
  }

  const removeFile = () => {
    setFileSelected(null)
    setFileName('')
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar o formulário
    // Incluindo o arquivo anexado (fileSelected)
    
    console.log('Formulário enviado:', formData)
    console.log('Arquivo anexado:', fileSelected)
    
    // Limpar o formulário após envio
    setFormData({
      nome: '',
      sobrenome: '',
      email: '',
      mensagem: ''
    })
    removeFile()
    
    // Normalmente aqui você faria uma chamada de API
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Conteúdo principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Formulário */}
            <div className="w-full md:w-7/12">
              <h2 className="text-3xl font-light text-[#C6A87D] mb-8 tracking-wide">
                Queremos fazer parte do seu projeto! Fale conosco.
              </h2>
              <p className="text-gray-600 mb-8">
                Deixe uma mensagem preenchendo o formulário ou clique no botão do whatsapp e converse já com a gente.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C6A87D] focus:border-transparent transition-colors duration-300"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700 mb-1">Sobrenome</label>
                    <input
                      type="text"
                      id="sobrenome"
                      name="sobrenome"
                      value={formData.sobrenome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C6A87D] focus:border-transparent transition-colors duration-300"
                      placeholder="Seu sobrenome"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Seu e-mail*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C6A87D] focus:border-transparent transition-colors duration-300"
                    placeholder="Seu endereço de e-mail"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem*</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C6A87D] focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Digite aqui sua mensagem"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Anexar planta ou foto (opcional)
                  </label>
                  
                  {!fileSelected ? (
                    <div 
                      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#C6A87D] transition-colors duration-300"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        Clique para fazer upload ou arraste e solte
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        PNG, JPG, PDF até 10MB
                      </p>
                    </div>
                  ) : (
                    <div className="relative border border-gray-300 rounded-lg p-4">
                      <div className="flex items-center">
                        {previewUrl ? (
                          <div className="relative h-20 w-20 mr-4 rounded-md overflow-hidden">
                            <Image
                              src={previewUrl}
                              alt="Preview"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-20 w-20 rounded-md bg-gray-200 mr-4 flex items-center justify-center">
                            <Upload className="h-8 w-8 text-gray-400" />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-700">{fileName}</p>
                          <p className="text-xs text-gray-500">
                            {fileSelected && (fileSelected.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleFileChange}
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-[#C6A87D] text-white font-medium hover:bg-[#a88d68] transition-colors duration-300"
                  >
                    Enviar mensagem
                  </button>
                </div>
              </form>
            </div>
            
            {/* Informações de contato */}
            <div className="w-full md:w-5/12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-light text-gray-800 mb-8">
                Informações de contato
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-6 mt-1">
                    <Phone className="h-6 w-6 text-[#C6A87D]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Telefone</h4>
                    <p className="text-gray-600">
                      (11) 99999-9999
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-6 mt-1">
                    <Mail className="h-6 w-6 text-[#C6A87D]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Email</h4>
                    <p className="text-gray-600">
                      contato@malkaarquitetura.com.br
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-6 mt-1">
                    <MapPin className="h-6 w-6 text-[#C6A87D]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Áurea, 232, Vila Mariana
                      <br />
                      São Paulo – SP
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 w-full h-[300px] overflow-hidden rounded-lg shadow-md relative">
                <Image
                  src="/images/ProjetoLirioParte2/Enscape_2025-02-14-18-12-50.jpg"
                  alt="Projeto Lírio - Malka Arquitetura"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-light">Projeto Lírio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  )
} 