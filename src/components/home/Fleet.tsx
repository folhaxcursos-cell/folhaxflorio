
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// import fleetImage2 from "@/assets/fleet-image-2.jpg";

const fleetImages = [
  "https://transflorio.com.br/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-05-at-16.00.51.jpeg",
  "https://transflorio.com.br/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-05-at-16.11.33.jpeg",
  "https://transflorio.com.br/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-05-at-16.02.09-1.jpeg",
  "https://transflorio.com.br/wp-content/uploads/2023/01/asd-5.jpeg",
  "https://transflorio.com.br/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-05-at-16.11.33.jpeg",
  "https://transflorio.com.br/wp-content/uploads/2023/01/asd-13.jpeg",
];

const Fleet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % fleetImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + fleetImages.length) % fleetImages.length);
  };

  return (
    <section id="frota" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-gold font-bold text-sm uppercase tracking-[0.3em] mb-4">Nossa Estrutura</h2>
            <h3 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Frota <span className="text-gold italic block">Moderna</span> e Monitorada
            </h3>
            <p className="text-slate-400 mt-6 text-lg">
              Contamos com veículos diversificados e manutenção rigorosa para garantir 
              que cada transporte seja realizado com o máximo de eficiência.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full border border-white/10 text-white hover:bg-gold hover:text-slate-950 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full border border-white/10 text-white hover:bg-gold hover:text-slate-950 transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] shadow-elegant border-4 border-slate-900 aspect-[16/9] md:aspect-[21/9]">
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {fleetImages.map((image, index) => (
              <div key={index} className="min-w-full h-full">
                <img 
                  src={image} 
                  alt={`Frota Transflorio ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {fleetImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index ? "bg-gold w-8" : "bg-white/30"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-elegant transition-transform hover:-translate-y-1">
            <p className="text-gold font-black text-4xl mb-2">100%</p>
            <p className="text-slate-400 text-xs uppercase tracking-widest">Rastreado</p>
          </div>
          <div className="text-center p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-elegant transition-transform hover:-translate-y-1">
            <p className="text-gold font-black text-4xl mb-2">24h</p>
            <p className="text-slate-400 text-xs uppercase tracking-widest">Monitoramento</p>
          </div>
          <div className="text-center p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-elegant transition-transform hover:-translate-y-1">
            <p className="text-gold font-black text-4xl mb-2">Diversa</p>
            <p className="text-slate-400 text-xs uppercase tracking-widest">Capacidade</p>
          </div>
          <div className="text-center p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-elegant transition-transform hover:-translate-y-1">
            <p className="text-gold font-black text-4xl mb-2">Própria</p>
            <p className="text-slate-400 text-xs uppercase tracking-widest">Manutenção</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
