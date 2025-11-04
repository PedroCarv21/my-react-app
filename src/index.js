import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header></Header>
    <App />
  <Banner></Banner>
  <Footer></Footer>
  </>
);

