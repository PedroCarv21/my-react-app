import React from 'react';

// Importando todos os componentes da pasta components
import Header from './components/Header';
import Banner from './components/Banner';
import Container from './components/Container';
import Footer from './components/Footer';

/**
 * Componente principal App
 * Monta a estrutura completa da página.
 */
const App = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      
      {/* O Container fica entre o Banner e o Footer */}
      <div className="flex-grow">
        <Banner />
        <Container />
      </div>
      
      <Footer />
    </div>
  );
};

export default App;