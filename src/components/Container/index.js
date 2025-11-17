import React, { useMemo } from 'react';
import Category from '../Category'; // Importa o componente Category
import { movieData } from '../../data/movieData'; // Importa os dados dos filmes

/**
 * Componente Container
 * Agrupa todas as categorias, buscando e processando os dados.
 */
const Container = () => {
  // Agrupar filmes por categoria usando useMemo para performance
  const categorizedMovies = useMemo(() => {
    const categoriesMap = movieData.reduce((acc, movie) => {
      const category = movie.category || 'Outros';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(movie);
      return acc;
    }, {});
    
    // Converte o mapa de volta para um array de objetos, ordenando as chaves
    return Object.keys(categoriesMap).sort().map(category => ({
      title: category,
      movies: categoriesMap[category],
    }));
  }, []);

  return (
    <main className="bg-gray-900 min-h-screen py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-10 px-6 md:px-10 border-l-4 border-yellow-500 pl-4">
          Conteúdo em Destaque
        </h1>
        
        {/* Mapeamento das Categorias */}
        {categorizedMovies.map((categoryData) => (
          <Category
            key={categoryData.title}
            title={categoryData.title}
            movies={categoryData.movies}
          />
        ))}
      </div>
    </main>
  );
};

export default Container;