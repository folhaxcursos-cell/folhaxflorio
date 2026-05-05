
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-0">
              <div className="flex items-center">
                <img 
                  src={logo}
                  alt="Transflorio Logo" 
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Especialistas em transporte rodoviário nacional, oferecendo excelência, 
              segurança e compromisso com o sucesso do seu negócio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-slate-950 transition-all duration-300 border border-white/10">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-slate-950 transition-all duration-300 border border-white/10">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-slate-950 transition-all duration-300 border border-white/10">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest border-l-4 border-gold pl-4">Navegação</h4>
            <ul className="space-y-4">
              {["Home", "Sobre Nós", "Serviços", "Segurança", "Cotação"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "")}`} 
                    className="text-slate-400 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest border-l-4 border-gold pl-4">Serviços</h4>
            <ul className="space-y-4">
              {["Transporte Intermunicipal", "Transporte Interestadual", "Transporte Pesado", "Transporte de Grãos", "Distribuição"].map((item) => (
                <li key={item} className="text-slate-400 hover:text-gold transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest border-l-4 border-gold pl-4">Contato</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-gold flex-shrink-0" size={20} />
                <span className="text-slate-400 text-sm">
                  R. Adélia Teixeira de Melo, nº 185<br/>
                  Parque Industrial - Guaxupé/MG
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-gold flex-shrink-0" size={20} />
                <span className="text-slate-400 text-sm">
                  (35) 3551-1128
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-gold flex-shrink-0" size={20} />
                <span className="text-slate-400 text-sm">
                  fernando@transflorio.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-slate-500 text-xs">
            © {currentYear} Transflorio Transporte e Logística Ltda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/crm" className="text-slate-600 hover:text-white text-[10px] uppercase tracking-widest transition-colors">
              Área Administrativa
            </Link>
            <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gold hover:bg-gold hover:text-slate-950 transition-all duration-300 shadow-lg"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
