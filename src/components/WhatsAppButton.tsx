
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "553535511128";
  const message = "Olá! Gostaria de solicitar uma cotação com a Transflorio.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce-slow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        Fale conosco agora!
      </span>
    </button>
  );
};

export default WhatsAppButton;
