import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '916362475882';
  const message = encodeURIComponent('Hi Gagan! I saw your portfolio and would like to connect.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const contactSection = document.getElementById('contact');

    if (!contactSection) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }

      if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
        setIsVisible(false);
      }
    }, { threshold: 0.1 });

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40" data-testid="whatsapp-button-container">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float relative block w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        aria-label="Chat on WhatsApp"
        data-testid="whatsapp-button"
      >
        <FaWhatsapp />
        {/* Pulse ring - pointer-events-none so it doesn't block clicks */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
