import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IncaDivider, IntiSun, MountainSilhouette, IncaStar, MamaKilla } from '@/components/ui/inca-patterns';
import { PlaceGallery } from '@/components/PlaceGallery';
import { RestaurantPreview } from '@/components/RestaurantPreview';
import { HelpCircle } from 'lucide-react';
import { AnimatedSection } from '@/hooks/use-scroll-animation';

export const FAQ = () => {
  const { t, language } = useLanguage();

  const baseFaqs = [
    { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
    { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
    { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
    { question: t('faq.q4.question'), answer: t('faq.q4.answer') },
    { question: t('faq.q5.question'), answer: t('faq.q5.answer') },
  ];

  // q6 (Can I bring a guest?) only shows in Spanish
  const faqs = language === 'es' 
    ? [
        ...baseFaqs,
        { question: t('faq.q6.question'), answer: t('faq.q6.answer') },
        { question: t('faq.q7.question'), answer: t('faq.q7.answer') },
        { question: t('faq.q8.question'), answer: t('faq.q8.answer') },
      ]
    : [
        ...baseFaqs,
        { question: t('faq.q7.question'), answer: t('faq.q7.answer') },
        { question: t('faq.q8.question'), answer: t('faq.q8.answer') },
      ];

  return (
    <section id="faq" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Cosmic background with stars pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Animated Inca celestial elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <IntiSun className="absolute -top-10 right-[10%] w-40 h-40 text-primary/5 animate-spin-slow" />
        <MamaKilla className="absolute top-[20%] left-[5%] w-16 h-16 text-primary/10 animate-float" />
        <IncaStar className="absolute top-[15%] right-[20%] w-4 h-4 text-primary/20 animate-pulse-glow" />
        <IncaStar className="absolute top-[35%] left-[15%] w-3 h-3 text-primary/15 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <IncaStar className="absolute top-[50%] right-[8%] w-5 h-5 text-primary/20 animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <IncaStar className="absolute bottom-[30%] left-[10%] w-4 h-4 text-primary/15 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <IntiSun className="absolute bottom-[10%] left-[20%] w-24 h-24 text-primary/5 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <IncaStar className="w-6 h-6 text-primary/60" />
              <IntiSun className="w-14 h-14 opacity-70" />
              <IncaStar className="w-6 h-6 text-primary/60" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-primary uppercase tracking-wider mb-4">
              {t('faq.title')}
            </h2>
            <IncaDivider className="max-w-md mx-auto" />
          </div>
        </AnimatedSection>

        {/* Decorative image banner with parallax */}
        <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-12 shadow-lg group">
          <img 
            src="https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/plaza-armas-cusco_av5a4e"
            alt="Cusco"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            style={{ transform: 'translateZ(0)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <IntiSun className="absolute bottom-4 right-4 w-12 h-12 text-secondary/50 animate-spin-slow" />
        </div>

        {/* FAQ Accordion - Enhanced */}
        <div className="max-w-3xl mx-auto mb-20">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-xl px-6 animate-fade-in bg-card/95 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-500 group overflow-hidden"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <AccordionTrigger className="text-left hover:text-primary font-medium py-5 group-hover:text-primary transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <HelpCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-11 animate-accordion-down">
                  <div className="border-l-2 border-primary/30 pl-4">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <MountainSilhouette className="mb-12 opacity-30" />
        
        <IncaDivider />

        {/* Restaurants Section */}
        <RestaurantPreview />

        <IncaDivider />

        {/* Places Gallery */}
        <PlaceGallery />
      </div>
    </section>
  );
};
