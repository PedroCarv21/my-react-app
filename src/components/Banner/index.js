import React from 'react';

const Banner = () => {
  return (
    <div className="bg-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Assista aqui os melhores filmes!
      </h1>
      <p className="text-lg md:text-xl text-blue-200 mb-8">
        A plataforma para você assistir sempre o melhor.
      </p>
      <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
        Saiba mais
      </button>
    </div>
  );
};

export default Banner;