import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// Dados simulados para contato
const contactInfo = [
  { icon: Phone, text: "+55 (11) 98765-4321", label: "Telefone" },
  { icon: Mail, text: "contato@exemplo.com.br", label: "E-mail" },
  { icon: MapPin, text: "Av. Paulista, 1000 - São Paulo, SP", label: "Endereço" },
];

// Componente principal da página de Contato
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Manipulador de mudança de formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manipulador de envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Por favor, preencha todos os campos.');
      setIsSubmitting(false);
      return;
    }
    
    // Simulação de envio de dados
    setTimeout(() => {
      console.log('Dados enviados:', formData);
      setStatusMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      setIsSubmitting(false);
    }, 1500); // Atraso de 1.5 segundo para simular o processamento
  };

  // Componente de Cartão de Informação
  const InfoCard = ({ icon: Icon, text, label }) => (
    <div className="flex items-start p-4 space-x-4 bg-gray-800 rounded-xl shadow-lg transition duration-300 hover:bg-gray-700/80">
      <Icon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-semibold text-sm text-gray-400">{label}</h4>
        <p className="text-white text-base break-words">{text}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 font-sans p-4 sm:p-8 flex-grow">
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
        {/* Cabeçalho */}
        <header className="p-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
            Fale Conosco
          </h1>
          <p className="text-gray-400 text-lg">
            Estamos aqui para ajudar. Envie-nos uma mensagem!
          </p>
        </header>

        {/* Conteúdo principal: 2 Colunas (Formulário e Informações) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 sm:p-12">
          
          {/* Coluna 1: Informações de Contato */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4 border-l-4 border-yellow-500 pl-3">
              Detalhes de Contato
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <InfoCard key={index} icon={info.icon} text={info.text} label={info.label} />
              ))}
            </div>
            {/* Mapa Placeholder */}
            <div className="mt-8 bg-gray-800 p-4 rounded-xl h-48 flex items-center justify-center text-gray-500 shadow-inner">
              [Image of Mapa de localização]
            </div>
          </div>
          
          {/* Coluna 2: Formulário de Contato */}
          <div className="lg:col-span-2 p-6 bg-gray-800 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-150"
                />
              </div>

              {/* Campo E-mail */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-150"
                />
              </div>

              {/* Campo Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Digite sua mensagem aqui..."
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-150 resize-none"
                ></textarea>
              </div>

              {/* Mensagem de Status (sucesso/erro) */}
              {statusMessage && (
                <div 
                  className={`p-3 rounded-lg text-sm font-medium ${
                    statusMessage.includes('sucesso') 
                      ? 'bg-green-600 text-white' 
                      : 'bg-red-600 text-white'
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* Botão de Envio */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 text-lg font-semibold rounded-lg transition duration-300 
                  ${isSubmitting
                    ? 'bg-yellow-700 cursor-not-allowed opacity-70'
                    : 'bg-yellow-500 text-gray-900 hover:bg-yellow-400 hover:shadow-lg'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-gray-900" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Rodapé (Opcional, para estética) */}
        <footer className="p-4 sm:p-6 text-center text-gray-500 border-t border-gray-800 mt-8">
          <p>&copy; {new Date().getFullYear()} Empresa Exemplo. Todos os direitos reservados.</p>
        </footer>

      </div>
    </div>
  );
};

export default ContactPage;