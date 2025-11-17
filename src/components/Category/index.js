import React from 'react';
// CORRIGIDO: O caminho de importação agora aponta corretamente para a pasta Card.
import Card from '../Card'; 

/**
 * Componente Category
 * Renderiza o título da categoria e a linha de Cards.
 */
const Category = ({ title, movies }) => {
  if (movies.length === 0) return null;

  // Estilo para esconder a barra de rolagem horizontal (webkit/firefox)
  const noScrollbarStyle = `
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  `;

  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-100 mb-4 px-6 md:px-10">
        {title}
      </h2>
      
      {/* Container de Cards com Scroll Horizontal */}
      <div className="flex space-x-4 overflow-x-scroll no-scrollbar px-6 md:px-10 pb-4">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      
      {/* Insere o estilo no DOM */}
      <style dangerouslySetInnerHTML={{ __html: noScrollbarStyle }} />
    </section>
  );
};

export default Category;