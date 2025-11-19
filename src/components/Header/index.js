import React, { useState } from 'react';
// Importa NavLink para gerenciar o estado ativo do menu
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Film, Globe } from 'lucide-react'; 

const Header = () => {
  const navItems = [
    { name: "Início", path: "/" },
    { name: "Filmes", path: "/filmes" }, // Rota fictícia, mapeia para Inicio
    { name: "Sobre", path: "/sobre" }, // Rota fictícia, mapeia para Inicio
    { name: "Contato", path: "/contato" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Função para definir a classe, usando o estado 'isActive' do NavLink
  const getNavLinkClass = ({ isActive }) => 
    `text-lg font-medium transition duration-150 p-2 rounded-lg 
      ${isActive 
        ? 'text-yellow-400 border-b-2 border-yellow-400' 
        : 'hover:text-yellow-400 hover:bg-gray-800 text-white'
      }`;
      
  const getMobileNavLinkClass = ({ isActive }) => 
    `block w-full text-left px-4 py-2 text-base font-medium transition duration-150 
      ${isActive 
        ? 'bg-gray-700 text-yellow-400' 
        : 'text-white hover:bg-gray-700 hover:text-yellow-400'
      }`;

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo SenacFlix com Link para a Home */}
        <Link to="/" className="text-3xl font-extrabold cursor-pointer">
          <span className="text-yellow-500">Senac</span>
          <span className="text-blue-500">Flix</span>
        </Link>
        
        {/* Menu Desktop (usando NavLink) */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <NavLink 
              key={item.name} 
              to={item.path}
              className={getNavLinkClass} // Usa a função NavLink
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        {/* Menu Hamburguer (Botão para Mobile) */}
        <button 
          className="md:hidden text-white text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
            &#9776;
        </button>
      </div>
      
      {/* Menu Mobile (usando NavLink) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 pb-2">
          {navItems.map(item => (
            <NavLink 
              key={item.name} 
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={getMobileNavLinkClass} // Usa a função NavLink
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;