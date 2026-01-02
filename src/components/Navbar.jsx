import React from 'react';

const Navbar = ({ onBookClick }) => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/80 border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-white bg-clip-text text-transparent">
          ✨ MINE Studio
        </div>
        <button 
          onClick={onBookClick}
          className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;