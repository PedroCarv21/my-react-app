import React from 'react';
import { movieCovers } from '../../assets/images'; // Caminho corrigido para referenciar src/assets/images.js

/**
 * Componente Card
 * Exibe o pôster e o título do filme, sendo clicável para o link.
 */
const Card = ({ movie }) => {
  // 2. Busca a URL real da imagem usando a referência (key) do movie.cover
  // Se a chave não existir, usa o asset 'default' como fallback.
  const imageUrl = movieCovers[movie.cover] || movieCovers.default;
  
  // Tratamento de erro para imagens
  const handleImageError = (e) => {
    e.target.onerror = null; // Evita loop infinito
    // Se a imagem falhar, esconde a tag img e mostra o fallback de texto
    e.target.style.display = 'none'; 
    const fallback = e.target.parentNode.querySelector('.placeholder-fallback');
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };
  

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
          src={imageUrl} // 3. Usa a URL resolvida
          alt={`Capa do filme ${movie.title}`}
          className="w-full h-full object-cover transition duration-300 group-hover:opacity-80"
          onError={handleImageError}
        />
        
        {/* Fallback de texto (Aparece SOMENTE se a imagem falhar) */}
        <div 
          className="placeholder-fallback absolute inset-0 w-full h-full bg-gray-700 text-white 
                     flex items-center justify-center text-center p-2 text-sm font-semibold"
          style={{ display: 'none' }}
        >
          {movie.title}
        </div>
      </div>

      {/* Título do filme (Sempre visível, abaixo da capa) */}
      <div className="p-2 text-white text-sm font-medium truncate">
        {movie.title}
      </div>
    </a>
  );
};

export default Card;