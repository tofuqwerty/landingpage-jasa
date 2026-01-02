import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  const handleWhatsApp = () => {
    // GANTI NOMOR INI dengan nomor WhatsApp kamu
    window.open('https://wa.me/6281234567890?text=Halo, saya mau booking makeup!', '_blank');
  };

  return (
    <div className="min-h-screen bg-black from-pink-50 via-white to-purple-50">
      <Navbar onBookClick={handleWhatsApp} />
      <Hero onBookClick={handleWhatsApp} />
      <Packages onBookClick={handleWhatsApp} />
      <Gallery />
      <Testimonials />
      <CTA onBookClick={handleWhatsApp} />
      <Footer />
    </div>
  );
};

export default Home;