
import { Truck, Package, Globe, Shield, Warehouse, Zap } from "lucide-react";

const services = [
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Transporte Intermunicipal",
    description: "Levamos sua carga com segurança dentro da cidade e regiões metropolitanas.",
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Transporte Interestadual",
    description: "De um estado para outro você pode contar com a gente! Cobertura nacional completa.",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Transporte Pesado",
    description: "Veículos preparados e equipe treinada para carregar e movimentar cargas pesadas.",
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Transporte de Grãos",
    description: "Temos a estrutura certa e frota especializada para atender sua necessidade no agronegócio.",
  },
  {
    icon: <Warehouse className="w-10 h-10" />,
    title: "Distribuição",
    description: "Otimizamos seus transportes, ajustando e reduzindo os custos operacionais da logística.",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Carga Segura",
    description: "Monitoramento 24h e gerenciamento de risco para garantir a integridade do seu material.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold font-bold text-sm uppercase tracking-[0.3em] mb-4">O Que Fazemos</h2>
          <h3 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
            Nossos <span className="text-gold italic block">Serviços</span>
          </h3>
          <p className="text-slate-400 text-lg">
            Oferecemos uma gama completa de soluções logísticas projetadas para atender 
            às necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 shadow-elegant"
            >
              <div className="mb-6 p-4 w-fit rounded-2xl bg-gold/5 text-gold group-hover:bg-gold group-hover:text-slate-950 transition-colors duration-300 shadow-gold/20">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="h-1 w-0 bg-gold group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-gold/20 via-gold/10 to-transparent border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Precisa de um serviço customizado?</h4>
            <p className="text-slate-400">Entre em contato para desenvolvermos uma solução logística sob medida para você.</p>
          </div>
          <button 
            onClick={() => document.querySelector("#cotacao")?.scrollIntoView({ behavior: "smooth" })}
            className="whitespace-nowrap px-8 py-5 bg-gold text-slate-950 font-black uppercase tracking-wider rounded-xl hover:scale-105 transition-transform shadow-gold"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
