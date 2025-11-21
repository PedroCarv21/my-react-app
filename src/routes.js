import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio'
import Contato from './Pages/Contato'
import Sobre from './Pages/Sobre'
import Header from './components/Header';
import Footer from './components/Footer';
import FilmCardGrid from './Pages/Filmes';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/filmes" element={<FilmCardGrid />} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/sobre' element={<Sobre/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


export default AppRoutes;