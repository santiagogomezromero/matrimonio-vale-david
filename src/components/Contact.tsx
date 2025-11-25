import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import { IncaDivider, Chakana, MountainSilhouette } from '@/components/ui/inca-patterns';
import { AnimatedSection } from '@/hooks/use-scroll-animation';

export const Contact = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      name: 'Diana Ochoa',
      role: t('contact.diana.role'),
      email: 'Dochoabaca@gmail.com',
      phone: '+51 956 328 763'
    },
    {
      name: 'David Amoruso',
      role: t('contact.david.role'),
      email: 'davidamo@gmail.com',
      phone: '+1 301-996-3485'
    },
    {
      name: 'Valeria Landeo',
      role: t('contact.valeria.role'),
      email: 'vale.landeo@gmail.com',
      phone: '+51 953 507 585'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-muted relative overflow-hidden">
      {/* Background decorative image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/machu-picchu-ruinas-paisaje-natural_sqrwlx)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Decorative Chakanas */}
      <Chakana className="absolute top-20 left-10 w-16 h-16 opacity-10" />
      <Chakana className="absolute bottom-40 right-10 w-20 h-20 opacity-10" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <Chakana className="mx-auto mb-4 opacity-60" />
            <h2 className="text-4xl md:text-5xl font-display text-primary uppercase tracking-wider mb-4">
              {t('contact.title')}
            </h2>
            <IncaDivider className="max-w-md mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
            <Card 
              className="hover:shadow-xl transition-all duration-300 bg-card/95 backdrop-blur-sm h-full"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4 relative">
                  <span className="text-3xl font-display text-primary">
                    {contact.name.charAt(0)}
                  </span>
                  <Chakana className="absolute -top-1 -right-1 w-5 h-5 opacity-40" />
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-primary mb-1">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {contact.role}
                  </p>
                </div>

                <div className="space-y-2 pt-4">
                  <a 
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{contact.email}</span>
                  </a>
                  
                  <a 
                    href={`https://wa.me/${contact.phone.replace(/[\s-]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>
          ))}
        </div>
        
        <MountainSilhouette className="mt-16 opacity-30" />
      </div>
    </section>
  );
};