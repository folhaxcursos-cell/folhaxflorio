
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
import diretorImage from "@/assets/diretor-avatar.webp";

const About = () => {
  const highlights = [
    "Experiência sólida no mercado de transportes",
    "Frota moderna e monitorada via satélite",
    "Equipe treinada e capacitada constantemente",
    "Comprometimento com prazos e integridade",
    "Atendimento personalizado para cada cliente",
    "Seguro de carga em todas as operações",
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Equipe Transflorio" 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-gold p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-slate-950 font-black text-4xl leading-none">15+</p>
              <p className="text-slate-900 font-bold text-sm uppercase leading-tight">Anos de<br/>Experiência</p>
            </div>
            {/* Decorative BG */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-gold font-bold text-sm uppercase tracking-[0.3em] mb-4">Quem Somos</h2>
            <h3 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
              Uma história pautada na <span className="italic text-gold md:block">confiança</span> e na eficiência
            </h3>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              A Transflorio nasceu com a missão de simplificar a logística para empresas que buscam 
              parceiros comprometidos. Localizada estrategicamente, operamos com tecnologia de ponta 
              para garantir que sua mercadoria chegue ao destino com total segurança.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0">
                <img 
                  src={diretorImage}
                  alt="Diretor Transflorio" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-white italic text-lg leading-snug">
                  "Nossa prioridade não é apenas mover carga, é mover os negócios de nossos clientes."
                </p>
                <p className="text-gold font-bold text-sm mt-2 uppercase tracking-widest">
                  — Direção Transflorio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
