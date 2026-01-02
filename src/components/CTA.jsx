import React from 'react';

const CTA = ({ onBookClick }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-12 md:p-16 text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Ready to Photo? ✨
          </h2>
          <p className="text-xl mb-8 opacity-95 text-gray-800">
            Book sekarang dan dapatkan konsultasi foto GRATIS!
          </p>
          <button 
            onClick={onBookClick}
            className="px-10 py-5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
          >
            📱 Chat WhatsApp Sekarang
          </button>
          <p className="mt-6 text-sm opacity-80 text-gray-600">
            📍 Area: Jakarta, Depok, Tangerang & Bekasi
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;