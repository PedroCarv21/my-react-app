import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio'
import Contato from './Pages/Contato'
import Header from './components/Header';
import Footer from './components/Footer';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/contato' element={<Contato/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


export default AppRoutes;