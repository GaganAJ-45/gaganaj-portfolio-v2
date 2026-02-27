import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/GaganAJ-45', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/gagan-a-j', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/gagan__aj', label: 'Instagram' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/gagan.aj.900', label: 'Facebook' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close mobile menu first
      setMobileMenuOpen(false);
      
      // Small delay to allow menu to close, then scroll
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card py-3 shadow-sm' : 'py-5 bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-syne font-800 text-accent cursor-pointer" 
            data-testid="nav-logo"
          >
            Gagan A J
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 hover:text-brand-blue transition-colors duration-200 font-medium text-sm cursor-pointer"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social + Download */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-brand-blue text-lg transition-colors duration-200"
                aria-label={social.label}
                data-testid={`nav-social-${social.label.toLowerCase()}`}
              >
                {social.icon}
              </a>
            ))}
            <a
  href={`${import.meta.env.BASE_URL}assets/Gagan_CV.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="ml-3 btn-primary text-sm py-2 px-5"
  data-testid="nav-download-cv"
>
              <FaDownload /> CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 text-xl p-2"
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-card rounded-2xl p-5 overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2.5 text-slate-600 hover:text-brand-blue transition-colors font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 mt-4 pt-4 border-t border-slate-200">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-brand-blue text-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <a
  href={`${import.meta.env.BASE_URL}assets/Gagan_CV.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 btn-primary text-sm w-full justify-center"
>
  <FaDownload /> Download CV
</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
