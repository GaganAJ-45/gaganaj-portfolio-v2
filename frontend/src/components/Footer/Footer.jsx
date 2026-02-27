import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/GaganAJ-45', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/gagan-a-j', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/gagan__aj', label: 'Instagram' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/gagan.aj.900', label: 'Facebook' },
  ];

  return (
    <footer className="py-10 border-t border-slate-200 bg-white/40" data-testid="footer">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-5">
          <div>
            <h3 className="text-2xl font-syne font-bold text-accent mb-1">Gagan A J</h3>
            <p className="text-slate-500 text-sm">Data Analyst | Business Intelligence | AI Tools Explorer</p>
          </div>

          <div className="flex justify-center gap-5">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-blue text-xl transition-colors duration-200"
                title={social.label}
                aria-label={social.label}
                data-testid={`footer-social-${social.label.toLowerCase()}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-sm">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-brand-blue transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <div className="text-slate-400 text-xs">
            <p className="flex items-center justify-center gap-1.5">
              &copy; {currentYear} Gagan A J. Made with <FaHeart className="text-red-400" /> and data.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
