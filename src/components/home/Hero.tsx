
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToQuote = () => {
    const element = document.querySelector("#cotacao");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white">
        <div 
          className="absolute inset-0 opacity-100 bg-cover bg-[center_right_35%] sm:bg-center"
          style={{ 
            backgroundImage: `url(${heroBanner})` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:via-white/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-left duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            Excelência em Transporte e Logística
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-left duration-700 delay-100">
            Conectando destinos, <span className="text-gold italic md:block">transportando</span> o futuro.
          </h1>
          
          <p className="text-xl text-slate-700 mb-10 max-w-2xl animate-in fade-in slide-in-from-left duration-700 delay-200">
            A Transflorio oferece soluções completas de transporte rodoviário com foco em segurança, 
            agilidade e transparência para todo o território nacional.
          </p>
          
          {/* Buttons removed by user request */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm">100% Seguro</p>
                <p className="text-slate-500 text-xs uppercase">Carga Segurada</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm">Entrega Rápida</p>
                <p className="text-slate-500 text-xs uppercase">Agilidade Garantida</p>
              </div>
            </div>
            <div className="flex items-center gap-3 hidden md:flex">
              <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm">Todo o Brasil</p>
                <p className="text-slate-500 text-xs uppercase">Cobertura Nacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-1 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </section>
  );
};

export default Hero;
