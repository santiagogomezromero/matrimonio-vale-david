import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ExternalLink } from 'lucide-react';

export const FAQ = () => {
  const { t, language } = useLanguage();

  const faqs = [
    { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
    { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
    { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
    { question: t('faq.q4.question'), answer: t('faq.q4.answer') },
    { question: t('faq.q5.question'), answer: t('faq.q5.answer') },
    { question: t('faq.q6.question'), answer: t('faq.q6.answer') },
    { question: t('faq.q7.question'), answer: t('faq.q7.answer') },
    { question: t('faq.q8.question'), answer: t('faq.q8.answer') },
  ];

  const restaurants = [
    { name: 'Biga - Cocina Local', maps: 'https://maps.app.goo.gl/your-link' },
    { name: 'Tierra', maps: 'https://maps.app.goo.gl/your-link' },
    { name: 'Ama', maps: 'https://maps.app.goo.gl/your-link' },
    { name: 'Cervecería del Valle Sagrado', maps: 'https://maps.app.goo.gl/your-link' },
  ];

  const placesToVisit = {
    cusco: ['Plaza de Armas', 'Catedral', 'Qorikancha', 'San Blas', 'Mercado de San Pedro', 'Saqsaywamán'],
    valley: ['Pisac', 'Ollantaytambo', 'Maras & Moray', 'Chinchero'],
    beyond: ['Machu Picchu', 'Valle Sur', 'Montaña de 7 Colores']
  };

  return (
    <section id="faq" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-primary uppercase tracking-wider">
          {t('faq.title')}
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Restaurants */}
        <div className="mt-16">
          <h3 className="text-2xl font-display text-center mb-8 text-primary uppercase">
            {t('faq.restaurants.title')}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.05}s` }}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">{restaurant.name}</span>
                  </div>
                  <a 
                    href={restaurant.maps} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Places to Visit */}
        <div className="mt-16">
          <h3 className="text-2xl font-display text-center mb-8 text-primary uppercase">
            {t('faq.places.title')}
          </h3>
          
          <div className="space-y-6">
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h4 className="font-semibold text-lg mb-3 text-secondary">{t('faq.places.cusco')}</h4>
              <div className="flex flex-wrap gap-2">
                {placesToVisit.cusco.map((place, index) => (
                  <span key={index} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    {place}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <h4 className="font-semibold text-lg mb-3 text-secondary">{t('faq.places.valley')}</h4>
              <div className="flex flex-wrap gap-2">
                {placesToVisit.valley.map((place, index) => (
                  <span key={index} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    {place}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h4 className="font-semibold text-lg mb-3 text-secondary">{t('faq.places.beyond')}</h4>
              <div className="flex flex-wrap gap-2">
                {placesToVisit.beyond.map((place, index) => (
                  <span key={index} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};