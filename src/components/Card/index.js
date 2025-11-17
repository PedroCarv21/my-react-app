import React from 'react';

/**
 * Componente Card
 * Exibe o pôster e o título do filme, sendo clicável para o link.
 */
const Card = ({ movie }) => {
  // Tratamento de erro para imagens
  const handleImageError = (e) => {
    e.target.onerror = null; // Evita loop infinito
    // Se a imagem falhar, usa um placeholder visual
    e.target.style.display = 'none'; 
    e.target.parentNode.querySelector('.placeholder-fallback').style.display = 'flex';
  };
  
  // Usando a cover do filme (que é um placeholder neste exemplo)
  const imageUrl = movie.cover; 

  return (
    <a 
      href={movie.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-40 md:w-48 h-auto rounded-lg shadow-xl overflow-hidden cursor-pointer 
                 transition duration-300 transform hover:scale-105 hover:shadow-2xl group 
                 bg-gray-800 focus:ring-4 focus:ring-yellow-500/50"
    >
      <div className="relative w-full h-56 md:h-64">
        {/* Imagem da capa do filme (ou placeholder) */}
        <img
          src={imageUrl}
          alt={`Capa do filme ${movie.title}`}
          className="w-full h-full object-cover transition duration-300 group-hover:opacity-80"
          onError={handleImageError}
        />
        
        {/* Fallback de texto se a imagem falhar */}
        <div 
          className="placeholder-fallback absolute inset-0 w-full h-full bg-gray-700 text-white 
                     flex items-center justify-center text-center p-2 text-sm font-semibold"
          style={{ display: 'none' }}
        >
          {movie.title}
        </div>
      </div>

      {/* Título do filme */}
      <div className="p-2 text-white text-sm font-medium truncate">
        {movie.title}
      </div>
    </a>
  );
};

export default Card;