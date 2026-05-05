
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Frota", href: "#frota" },
    { name: "Segurança", href: "#seguranca" },
    { name: "Cotação", href: "#cotacao" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/90 backdrop-blur-md py-2 shadow-lg" : "bg-gradient-to-b from-slate-950/60 to-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-0">
          <div className="flex items-center">
            <img 
              src={logo}
              alt="Transflorio Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white hover:text-gold transition-colors text-sm font-black uppercase tracking-wider drop-shadow-md"
            >
              {link.name}
            </a>
          ))}
          <Button
            className="bg-gold hover:bg-gold/90 text-slate-950 font-bold gap-2"
            onClick={() => {
              const element = document.querySelector("#cotacao");
              if (element) {
                window.scrollTo({
                  top: element.getBoundingClientRect().top + window.pageYOffset - 80,
                  behavior: "smooth",
                });
              }
            }}
          >
            <Phone className="w-4 h-4" />
            LIGAMOS PARA VOCÊ
          </Button>
          <Button
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 font-bold gap-2 drop-shadow-md"
            onClick={() => window.open("https://ssw.inf.br/", "_blank")}
          >
            <Search className="w-4 h-4" />
            RASTREAR
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white drop-shadow-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer Content */}
      <div 
        className={`md:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-slate-950 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <X size={28} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white text-xl font-bold py-4 border-b border-white/5 flex justify-between items-center hover:text-gold transition-colors"
                >
                  {link.name}
                  <ChevronRight size={20} className="text-gold" />
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-4 bg-slate-900/50">
            <Button
              className="bg-gold hover:bg-gold/90 text-slate-950 font-bold w-full py-6"
              onClick={() => {
                const element = document.querySelector("#cotacao");
                if (element) {
                   window.scrollTo({
                    top: element.getBoundingClientRect().top + window.pageYOffset - 80,
                    behavior: "smooth",
                  });
                }
                setIsMobileMenuOpen(false);
              }}
            >
              SOLICITAR COTAÇÃO
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white w-full py-6"
              onClick={() => window.open("https://ssw.inf.br/", "_blank")}
            >
              RASTREAR CARGA
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
