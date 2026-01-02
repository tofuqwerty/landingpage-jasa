import React from 'react';

const Packages = ({ onBookClick }) => {
  const packages = [
    {
      name: "Wedding Package",
      price: "2.5jt - 5jt",
      icon: "💍",
      features: [
        "Dokumentasi Foto Akad & Resepsi",
        "Unlimited shoot selama acara",
        "Editing warna & tone profesional",
        "Semua file foto (via Google Drive)"
      ]
    },
    {
      name: "Graduation Photo",
      price: "300k - 500k",
      icon: "🎓",
      features: [
        "Unlimited shots during session",
        "Professional editing & retouch",
        "Creative photo direction",
        "All photos delivered via Google Drive"
      ]
    },
    {
      name: "Birthday Photo",
      price: "500k - 800k",
      icon: "🎂",
      features: [
        "Creative theme & pose direction",
        "Concept consultation",
        "High resolution edited photos",
        "All photos delivered via Google Drive"
      ]
    },
    {
      name: "Party Photo",
      price: "400k - 700k",
      icon: "🎉",
      features: [
        "Party photoshoot session",
        "Dynamic pose & moment capture",
        "High resolution edited photos",
        "Event highlight coverage"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Packages</h2>
          <p className="text-gray-600 text-lg">Pilih paket yang sesuai dengan kebutuhan kamu</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <div 
              key={i}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl border-2 border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{pkg.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{pkg.name}</h3>
              <div className="text-2xl font-bold mb-6 bg-slate-800 bg-clip-text text-transparent">
                {pkg.price}
              </div>
              <div className="space-y-3">
                {pkg.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-pink-500 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={onBookClick}
                className="mt-auto w-full mt-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black rounded-full font-semibold hover:shadow-lg transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;