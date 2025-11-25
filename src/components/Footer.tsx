import { useLanguage } from '@/contexts/LanguageContext';
import { IntiSun, IncaStar, MountainSilhouette } from '@/components/ui/inca-patterns';
import { Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Mountain silhouette at top */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <MountainSilhouette className="w-full h-full text-background/10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <IncaStar className="absolute top-10 left-[10%] w-3 h-3 text-secondary/20 animate-pulse" />
        <IncaStar className="absolute top-20 right-[15%] w-2 h-2 text-secondary/15 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <IncaStar className="absolute bottom-20 left-[20%] w-2 h-2 text-secondary/20 animate-pulse" style={{ animationDelay: '1s' }} />
        <IncaStar className="absolute top-16 left-[50%] w-2 h-2 text-secondary/10 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-8">
        {/* Main content */}
        <div className="text-center mb-12">
          {/* Logo and couple names */}
          <button 
            onClick={scrollToTop}
            className="inline-block mb-6 transition-transform hover:scale-105"
            aria-label="Scroll to top"
          >
            <img 
              src={logo} 
              alt="Valeria & David" 
              className="h-16 w-16 mx-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </button>
          
          <h2 className="font-display text-3xl md:text-4xl mb-2 tracking-wider">
            VALERIA & DAVID
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-secondary/30" />
            <IntiSun className="w-6 h-6 text-secondary/60" />
            <div className="h-px w-16 bg-secondary/30" />
          </div>
          
          <p className="font-script text-xl text-secondary/80 mb-2">
            27.09.2025
          </p>
          <p className="text-sm text-primary-foreground/60">
            Valle Sagrado, Cusco, Perú
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
          {[
            { href: '#schedule', label: language === 'es' ? 'Agenda' : 'Schedule' },
            { href: '#trip', label: language === 'es' ? 'El Viaje' : 'The Trip' },
            { href: '#rsvp', label: 'RSVP' },
            { href: '#story', label: language === 'es' ? 'Nuestra Historia' : 'Our Story' },
            { href: '#contact', label: language === 'es' ? 'Contacto' : 'Contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/70 hover:text-secondary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col items-center gap-2 text-xs text-primary-foreground/50">
          <div className="flex items-center gap-2">
            <span>{language === 'es' ? 'Hecho con' : 'Made with'}</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>{language === 'es' ? 'para nuestra boda' : 'for our wedding'}</span>
          </div>
          <p>© 2025 Valeria & David. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};
