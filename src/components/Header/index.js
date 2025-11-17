import React, { useState } from 'react';

const Header = () => {
  const navItems = ["Início", "Filmes", "Sobre", "Contato"];
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 1. Estado para controlar o menu móvel

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 2. Função para alternar o estado
  };
  
  return (
    <header className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo SenacFlix */}
        <div className="text-3xl font-extrabold">
          <span className="text-yellow-500">Senac</span>
          <span className="text-blue-500">Flix</span>
        </div>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <a key={item} href="#" className="text-lg font-medium hover:text-yellow-400 transition duration-150">
              {item}
            </a>
          ))}
        </nav>
        
        {/* Menu Hamburguer (Botão para Mobile) */}
        <button 
          className="md:hidden text-white text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md"
          onClick={toggleMenu} // 2. Adiciona o evento de clique
          aria-label="Abrir menu"
        >
            &#9776;
        </button>
      </div>
      
      {/* Menu Mobile (Aparece se isMenuOpen for true) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 pb-2">
          {navItems.map(item => (
            <a 
              key={item} 
              href="#" 
              className="block px-4 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-yellow-400 transition duration-150"
              onClick={toggleMenu} // Fecha o menu ao clicar em um item
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;