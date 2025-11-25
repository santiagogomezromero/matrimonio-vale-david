import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navbar
    'nav.home': 'Home',
    'nav.schedule': 'Agenda',
    'nav.trip': 'El viaje',
    'nav.rsvp': 'Confirma tu asistencia',
    'nav.faq': 'FAQs',
    'nav.gifts': 'Regalos',
    'nav.story': 'Nuestra historia',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'VALERIA & DAVID',
    'hero.subtitle': 'Nuestra boda',
    'hero.date1': '1 de mayo – Wedding Fest',
    'hero.location1': 'Pachar, Ollantaytambo, Cusco',
    'hero.date2': '2 de mayo – Laguna y tradición',
    'hero.location2': 'Laguna Piuray, Chinchero, Cusco',
    'hero.intro': 'Nos casamos en el Valle Sagrado de los Incas, rodeados de montañas, historia y naturaleza. Queremos compartir este momento especial contigo.',
    'hero.btn.schedule': 'Ver Agenda',
    'hero.btn.rsvp': 'Confirmar asistencia',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.schedule': 'Schedule',
    'nav.trip': 'The Trip',
    'nav.rsvp': 'RSVP',
    'nav.faq': 'FAQ',
    'nav.gifts': 'Gifts',
    'nav.story': 'Our Story',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'VALERIA & DAVID',
    'hero.subtitle': 'Our Wedding',
    'hero.date1': 'May 1st – Wedding Fest',
    'hero.location1': 'Pachar, Ollantaytambo, Cusco',
    'hero.date2': 'May 2nd – Lake & Traditions',
    'hero.location2': 'Laguna Piuray, Chinchero, Cusco',
    'hero.intro': 'We are getting married in the Sacred Valley of the Incas, surrounded by mountains, history and nature. We want to share this special moment with you.',
    'hero.btn.schedule': 'View Schedule',
    'hero.btn.rsvp': 'RSVP',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
