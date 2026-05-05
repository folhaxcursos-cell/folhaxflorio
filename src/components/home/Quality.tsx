
import { ShieldCheck, Eye, Lock, FileText, CheckCircle } from "lucide-react";

const Quality = () => {
  const securityFeatures = [
    {
      icon: <Eye className="w-12 h-12 text-gold" />,
      title: "Rastreamento 24h",
      desc: "Monitoramento em tempo real via satélite para total visibilidade da sua carga.",
    },
    {
      icon: <Lock className="w-12 h-12 text-gold" />,
      title: "Seguro RCF-DC",
      desc: "Sua mercadoria totalmente protegida contra roubos, furtos e acidentes.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-gold" />,
      title: "Gerenciamento de Risco",
      desc: "Protocolos rigorosos e consultoria especializada para prevenir sinistros.",
    },
    {
      icon: <FileText className="w-12 h-12 text-gold" />,
      title: "Compliance Fiscal",
      desc: "Documentação rigorosamente em dia com as normas da SEFAZ e ANTT.",
    },
  ];

  return (
    <section id="seguranca" className="py-24 bg-slate-950 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-gold font-bold text-sm uppercase tracking-[0.3em] mb-4">Qualidade e Segurança</h2>
            <h3 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              Sua tranquilidade é o nosso <span className="italic text-gold md:block">maior compromisso</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="p-4 bg-white/5 w-fit rounded-3xl border border-white/10 hover:border-gold/50 transition-colors shadow-elegant">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 text-white font-medium">
                <CheckCircle className="text-gold w-6 h-6" />
                <span>Certificações reconhecidas pelo setor</span>
              </div>
              <div className="flex items-center gap-3 text-white font-medium">
                <CheckCircle className="text-gold w-6 h-6" />
                <span>Frota com média de idade inferior a 5 anos</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-slate-900 shadow-2xl rotate-3">
                <img 
                  src="https://transflorio.com.br/wp-content/uploads/2022/04/001.jpg" 
                  alt="Segurança na estrada" 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8">
                  <div className="p-6 bg-gold rounded-2xl shadow-xl -rotate-3 mb-4">
                    <p className="text-slate-950 font-black text-2xl uppercase italic">Zero Sinistros</p>
                    <p className="text-slate-900 font-bold text-xs uppercase">Nos últimos 12 meses</p>
                  </div>
                </div>
              </div>
              {/* Decorative dots grid */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[radial-gradient(circle,rgba(212,175,55,0.2)_1px,transparent_1px)] bg-[length:20px_20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
