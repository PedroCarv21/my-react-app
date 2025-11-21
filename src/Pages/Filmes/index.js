import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
// IMPORT CORRETO 1: Caminho para os dados (movieData)
import { movieData } from '../../data/movieData';
// IMPORT CORRETO 2: Caminho para as capas (movieCovers) - ESSA LINHA É ESSENCIAL
import { movieCovers } from '../../assets/images'; 
// Importa ícones necessários
import { ListFilter, Film } from 'lucide-react'; 

/**
 * Componente que renderiza a grade de cards de filmes.
 */
const FilmCardGrid = ({ films, title }) => {
  const MOCK_YEAR = 2023;
  const MOCK_RATING = 4.5;
  const MOCK_DURATION = '2h 00m';
  
  // O teste de warning para fins de diagnóstico
  if (!movieCovers || Object.keys(movieCovers).length === 0) {
      console.warn("AVISO: O mapa de capas (movieCovers) parece estar vazio. Verifique src/assets/images.js.");
  }

  if (!films || films.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-400">Nenhum filme encontrado para a sua busca.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-bold text-white mb-8 border-l-4 border-yellow-500 pl-4">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {films.map((film, index) => {
          // Obtém o URL real mapeado, ou o fallback seguro.
          const coverUrl = (movieCovers && movieCovers[film.cover]) || (movieCovers ? movieCovers.default : 'https://placehold.co/192x256/111827/FFFFFF/png?text=Erro+no+Mapeamento');
          
          return (
            <Link 
              key={film.id || index} 
              to={film.url || '#'} 
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 group cursor-pointer relative block"
            >
              
              {/* BLOCO DA CAPA: APENAS a imagem */}
              <div className="aspect-[2/3] bg-gray-700 relative">
                 
                 {/* A tag <img> que usa o URL REAL */}
                 <img 
                   src={coverUrl} 
                   alt={`Capa do filme ${film.title}`} 
                   className="w-full h-full object-cover"
                   // Fallback para caso o URL externo falhe ao carregar
                   onError={(e) => {
                       e.target.onerror = null; 
                       // Se falhar, usa o fallback 'Sem Capa'
                       e.target.src = movieCovers?.default || 'https://placehold.co/192x256/111827/FFFFFF/png?text=Sem+Capa';
                   }}
                 />
                 
              </div>

              {/* Informações no Card */}
              <div className="p-3">
                <h4 className="text-lg font-semibold text-white truncate mb-1">{film.title}</h4>
                <p className="text-xs text-gray-400">{film.category} | {MOCK_YEAR}</p> 
                <div className="flex items-center mt-2 justify-between">
                  <span className="text-yellow-500 font-bold text-sm">{MOCK_RATING}</span>
                  <span className="text-xs text-gray-500">{MOCK_DURATION}</span>
                </div>
              </div>
              
              {/* Botão de Detalhes (Hover Effect) */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 pointer-events-none">
                  Assistir
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

/**
 * Componente de Catálogo Completo (Página /filmes)
 */
const CatalogoCompleto = () => {
  // 1. Obtém todas as categorias únicas do array de filmes
  const allCategories = useMemo(() => {
    const categories = new Set((movieData || []).map(f => f.category));
    return ["Todos", ...Array.from(categories)].filter(c => c !== undefined); 
  }, []);
  
  const [activeCategory, setActiveCategory] = useState("Todos");

  // 2. Lógica de filtragem dos filmes baseada na categoria ativa
  const filteredFilms = useMemo(() => {
    if (!movieData) return []; // Retorna vazio se os dados falharem
    
    if (activeCategory === "Todos") {
      return movieData;
    }
    return movieData.filter(f => f.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex-grow bg-gray-900">
      
      {/* Banner de Catálogo */}
      <div className="relative py-20 px-4 text-center bg-gray-800 border-b border-gray-700">
        <h1 className="text-5xl font-extrabold text-yellow-500 mb-2">
          Catálogo SenacFlix
        </h1>
        <p className="text-xl text-gray-300">
          Encontre seu próximo filme ou série. Filtre por categoria!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Barra de Filtros */}
        <div className="flex flex-wrap gap-3 items-center mb-8 p-4 bg-gray-800 rounded-xl shadow-inner">
          <ListFilter className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          <span className="text-white font-medium mr-2">Filtrar por:</span>
          
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-200 
                ${activeCategory === category 
                  ? 'bg-yellow-500 text-gray-900 shadow-md' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grade de Filmes Filtrados */}
        <FilmCardGrid 
          films={filteredFilms} 
          title={`Resultados: ${activeCategory}`} 
        />
      </div>
    </div>
  );
};

export { FilmCardGrid, CatalogoCompleto };
export default CatalogoCompleto;