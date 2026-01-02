import React from 'react';

const Hero = ({ onBookClick }) => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold">
              📸 Professional Photographer Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Your Dream Look,
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 bg-clip-text text-transparent leading-[1.4]">
              Perfectly Done
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Foto profesional untuk momen spesial kamu. Wedding, wisuda, party, atau ulang tahun - kami siap!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBookClick}
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105"
            >
              📱 Book via WhatsApp
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-pink-50 hover:text-black transition">
              Lihat Portfolio
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">4.9★</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">3th</div>
              <div className="text-sm text-gray-600">Experience</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[3/4] bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full"></div>
                  <div>
                    <div className="font-bold text-gray-800">Graduation Photo</div>
                    <div className="text-sm text-gray-600">Photographer by MINE Studio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-300 rounded-full blur-2xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
