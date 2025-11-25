import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IncaDivider, Chakana, MountainSilhouette } from '@/components/ui/inca-patterns';
import { PlaceGallery } from '@/components/PlaceGallery';
import { RestaurantPreview } from '@/components/RestaurantPreview';

export const FAQ = () => {
  const { t } = useLanguage();

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

  return (
    <section id="faq" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A86232' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 0l20 20-20 20L0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Decorative Chakanas */}
      <Chakana className="absolute top-40 left-5 w-12 h-12 opacity-10" />
      <Chakana className="absolute top-60 right-5 w-16 h-16 opacity-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Chakana className="mx-auto mb-4 opacity-60" />
          <h2 className="text-4xl md:text-5xl font-display text-primary uppercase tracking-wider mb-4">
            {t('faq.title')}
          </h2>
          <IncaDivider className="max-w-md mx-auto" />
        </div>

        {/* Decorative image banner */}
        <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-12 shadow-lg">
          <img 
            src="https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/plaza-armas-cusco_av5a4e"
            alt="Cusco"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-20">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 animate-fade-in bg-card/90 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:text-primary font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
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