import { Link } from 'react-router-dom';
import {Globe, User, Zap, Eye, Heart } from 'lucide-react'; 

const Sobre = () => {
    const values = [
      { 
        icon: Heart, 
        title: "Compromisso com a Qualidade", 
        description: "Oferecer uma plataforma robusta e um catálogo de conteúdo premium, focado em entretenimento de alta definição e relevância cultural.",
        color: "text-red-500"
      },
      { 
        icon: Zap, 
        title: "Inovação Contínua", 
        description: "Buscar constantemente novas tecnologias e parcerias para aprimorar a experiência do usuário e expandir a biblioteca de títulos exclusivos.",
        color: "text-blue-400"
      },
      { 
        icon: User, 
        title: "Foco no Cliente", 
        description: "Colocar as necessidades e o feedback dos nossos usuários no centro de todas as decisões, garantindo satisfação e fidelidade.",
        color: "text-yellow-500"
      },
    ];
  
    return (
      // Adicionando bg-gray-900 aqui para garantir que a área fora do card central seja escura
      <div className="font-sans p-4 sm:p-8 bg-gray-900">
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
          {/* Seção de Introdução */}
          <div className="p-8 sm:p-12 text-center border-b border-gray-700">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-500 mb-4">
              Sobre a SenacFlix
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nascida da paixão pelo entretenimento e pelo desenvolvimento de talentos do Senac, a SenacFlix é a sua nova plataforma de streaming focada em qualidade e conteúdo relevante.
            </p>
          </div>
  
          {/* Seção Missão e Visão */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12">
            {/* Missão */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border-l-4 border-blue-500">
              <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                <Eye className="w-7 h-7 mr-2 text-blue-500"/> Missão
              </h3>
              <p className="text-gray-400 text-lg">
                Oferecer acesso democrático a um vasto catálogo de filmes e séries, promovendo a cultura, o aprendizado e o entretenimento de qualidade para toda a comunidade.
              </p>
            </div>
            
            {/* Visão */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border-l-4 border-red-500">
              <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                <Globe className="w-7 h-7 mr-2 text-red-500"/> Visão
              </h3>
              <p className="text-gray-400 text-lg">
                Ser reconhecida como a plataforma de streaming líder em conteúdo educativo e de entretenimento no Brasil, expandindo nossa presença e impacto globalmente.
              </p>
            </div>
          </div>
  
          {/* Seção Valores */}
          <div className="p-8 sm:p-12 pt-0">
            <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
              Nossos Valores Fundamentais
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-gray-800 rounded-2xl shadow-2xl transition duration-300 hover:bg-gray-700/70 border border-gray-700">
                  <value.icon className={`w-12 h-12 mx-auto mb-4 ${value.color}`} />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chamada para Ação */}
          <div className="bg-black p-10 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Pronto para Maratonar?
            </h4>
            <Link to="/filmes" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Descubra o Catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default Sobre;