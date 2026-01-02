import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah",
      event: "Wedding",
      text: "Hasil fotonya bagus bangetttt. Thank you!",
      rating: 5
    },
    {
      name: "Dina",
      event: "Wisuda",
      text: "Fotonya jernih dan baguss kualitasnya. Ramah dan profesional!",
      rating: 5
    },
    {
      name: "Putri",
      event: "Birthday",
      text: "Fotonya baguss! Dibantu arahin pose jugaaaa. Semua tamu pada nanya siapa Fotografer-ku hehe",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What They Say</h2>
          <p className="text-gray-600 text-lg">Testimoni dari client kami</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full"></div>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;