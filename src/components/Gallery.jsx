import React, { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const gallery = [
    { id: 1, category: "wedding", color: "from-pink-300 to-rose-400" },
    { id: 2, category: "graduation", color: "from-purple-300 to-pink-300" },
    { id: 3, category: "party", color: "from-amber-300 to-orange-400" },
    { id: 4, category: "wedding", color: "from-rose-400 to-pink-500" },
    { id: 5, category: "birthday", color: "from-violet-400 to-purple-500" },
    { id: 6, category: "graduation", color: "from-sky-300 to-blue-400" },
    { id: 7, category: "party", color: "from-fuchsia-400 to-pink-500" },
    { id: 8, category: "birthday", color: "from-teal-300 to-emerald-400" }
  ];

  const filteredGallery = activeTab === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeTab);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">Our Work</h2>
          <p className="text-gray-600 text-lg mb-8">Portfolio makeup kami</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['all', 'wedding', 'graduation', 'party', 'birthday'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full font-semibold transition ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item) => (
            <div 
              key={item.id}
              className={`aspect-square bg-gradient-to-br ${item.color} rounded-2xl overflow-hidden cursor-pointer group relative`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/90 px-6 py-3 rounded-full font-semibold text-gray-800">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;