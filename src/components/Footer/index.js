import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center text-sm border-t border-gray-800">
      <p className="mb-2">
        <span className="text-yellow-500">SenacFlix</span> &copy; {new Date().getFullYear()}
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:text-yellow-500 transition duration-150">Contato</a>
        <span>|</span>
        <a href="#" className="hover:text-yellow-500 transition duration-150">Saiba Mais</a>
      </div>
    </footer>
  );
};

export default Footer;