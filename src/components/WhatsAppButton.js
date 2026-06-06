import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/919104129341';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse Rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none -z-10"></span>
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-pulse -z-10"></span>
      
      <MessageCircle className="h-7 w-7 fill-white text-[#25D366]" />
      
      {/* Tooltip */}
      <span className="absolute right-14 bg-navy text-white text-xs font-semibold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-navy-light/10">
        Chat with us
      </span>
    </a>
  );
}
