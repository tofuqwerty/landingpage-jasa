import React from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-bold mb-4">📸 MINE Studio</div>
        <p className="mb-6 opacity-90">Professional Photographer</p>
        <div className="flex justify-center gap-6 mb-6 text-3x1">
          <a href="#" className="hover:opacity-75 transition"><FaInstagram /></a>
          <a href="#" className="hover:opacity-75 transition"><FaTiktok /></a>
          <a href="#" className="hover:opacity-75 transition"><FaWhatsapp /></a>
        </div>
        <p className="text-sm opacity-75">© 2025 MINE Studio.</p>
      </div>
    </footer>
  );
};

export default Footer;
