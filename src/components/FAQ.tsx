import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IncaDivider, Chakana } from '@/components/ui/inca-patterns';
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
    <section id="faq" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Chakana className="mx-auto mb-4 opacity-60" />
          <h2 className="text-4xl md:text-5xl font-display text-primary uppercase tracking-wider mb-4">
            {t('faq.title')}
          </h2>
          <IncaDivider className="max-w-md mx-auto" />
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-20">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 animate-fade-in bg-card"
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
