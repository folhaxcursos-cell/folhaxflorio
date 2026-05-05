
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Quality from "@/components/home/Quality";
import Fleet from "@/components/home/Fleet";
import { QuoteForm } from "@/components/home/QuoteForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-gold/30 selection:text-gold">
      <Helmet>
        <title>Transflorio | Transporte e Logística Nacional</title>
        <meta name="description" content="A Transflorio oferece soluções completas de transporte rodoviário com foco em segurança, agilidade e transparência para todo o território nacional." />
        <meta property="og:title" content="Transflorio | Transporte e Logística Nacional" />
        <meta property="og:description" content="Soluções completas de transporte rodoviário com foco em segurança e agilidade." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="transporte, logística, transportadora, guaxupé, frete, caminhão, transflorio" />
      </Helmet>
      <Navbar />
      
      <main>
        <Hero />
        
        <About />
        
        <Services />
        
        <Fleet />
        
        <Quality />

        {/* Quote Section */}
        <section id="cotacao" className="py-24 bg-slate-900 relative">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-12 bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
              {/* Left Side: Info */}
              <div className="lg:w-2/5 p-8 md:p-12 bg-gold flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-6 leading-tight">
                  PRONTO PARA<br/>DECOLAR SUA<br/>LOGÍSTICA?
                </h2>
                <p className="text-slate-900 font-medium mb-8 leading-relaxed">
                  Preencha o formulário ao lado e receba uma proposta personalizada em até 1 hora útil. 
                  Nossos especialistas estão prontos para encontrar a melhor rota para sua carga.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-950 font-bold">
                    <div className="w-8 h-8 rounded-full bg-slate-950 text-gold flex items-center justify-center text-sm">1</div>
                    <span>Cotação rápida e gratuita</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-950 font-bold">
                    <div className="w-8 h-8 rounded-full bg-slate-950 text-gold flex items-center justify-center text-sm">2</div>
                    <span>Sem letras miúdas</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-950 font-bold">
                    <div className="w-8 h-8 rounded-full bg-slate-950 text-gold flex items-center justify-center text-sm">3</div>
                    <span>Atendimento 24/7</span>
                  </div>
                </div>
              </div>
              
              {/* Right Side: Form */}
              <div className="lg:w-3/5 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gold rounded-full" />
                  Solicite seu Orçamento
                </h3>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
