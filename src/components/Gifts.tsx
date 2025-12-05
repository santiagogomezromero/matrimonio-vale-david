import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, CreditCard, Smartphone, ExternalLink } from 'lucide-react';
import { IncaDivider, Chakana } from '@/components/ui/inca-patterns';
import { AnimatedSection } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';

export const Gifts = () => {
  const { t, language } = useLanguage();

  return (
    <section id="gifts" className="min-h-screen py-20 px-4 bg-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A86232' fill-opacity='1'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <Chakana className="absolute top-20 right-10 w-20 h-20 opacity-10" />
      <Chakana className="absolute bottom-20 left-10 w-16 h-16 opacity-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Gift className="w-16 h-16 text-primary" />
                <Chakana className="absolute -top-2 -right-2 w-6 h-6 opacity-50" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display text-primary uppercase tracking-wider mb-4">
              {t('gifts.title')}
            </h2>
            <IncaDivider className="max-w-md mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Message */}
          <AnimatedSection animation="fade-left" delay={100}>
          <div className="space-y-6">
            {/* Decorative image */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg mb-6">
              <img 
                src="https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967924/Foto_regalos_Valeria_y_David_vdz1b3.jpg"
                alt="Vale & David"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <p className="text-lg leading-relaxed text-foreground">
              {t('gifts.message1')}
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              {t('gifts.message2')}
            </p>
            <p className="text-muted-foreground italic">
              {t('gifts.thanks')}
            </p>
          </div>
          </AnimatedSection>

          {/* Right Column - Bank Details (Spanish) or Registry Link (English) */}
          <AnimatedSection animation="fade-right" delay={200}>
          {language === 'es' ? (
            <Card className="bg-card/95 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Chakana className="w-5 h-5 opacity-50" />
                  <h3 className="text-xl font-display text-center text-primary uppercase">
                    {t('gifts.banking.title')}
                  </h3>
                  <Chakana className="w-5 h-5 opacity-50" />
                </div>
                
                {/* BCP Soles */}
                <div className="space-y-2 pb-4 border-b">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CreditCard className="w-5 h-5" />
                    <span>BCP - {t('gifts.banking.soles')}</span>
                  </div>
                  <div className="pl-7 space-y-1 text-sm">
                    <p><span className="font-medium">{t('gifts.banking.account')}:</span> 285-9302-9425-081</p>
                    <p><span className="font-medium">CCI:</span> 002-285-193029425081-53</p>
                  </div>
                </div>

                {/* BCP Dollars */}
                <div className="space-y-2 pb-4 border-b">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CreditCard className="w-5 h-5" />
                    <span>BCP - {t('gifts.banking.dollars')}</span>
                  </div>
                  <div className="pl-7 space-y-1 text-sm">
                    <p><span className="font-medium">{t('gifts.banking.account')}:</span> 285-9302-9634-192</p>
                    <p><span className="font-medium">CCI:</span> 002-285-193029634192-55</p>
                  </div>
                </div>

                {/* Yape/Plin */}
                <div className="space-y-2 pb-4 border-b">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Smartphone className="w-5 h-5" />
                    <span>Yape / Plin</span>
                  </div>
                  <div className="pl-7 text-sm">
                    <p><span className="font-medium">{t('gifts.banking.phone')}:</span> 986 631 003</p>
                  </div>
                </div>

                {/* Beneficiaries */}
                <div className="bg-accent/50 p-4 rounded-lg text-sm">
                  <p className="font-medium mb-1">{t('gifts.banking.beneficiaries')}:</p>
                  <p>David Amoruso</p>
                  <p>Valeria Fabiola Landeo Villarreal</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card/95 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Chakana className="w-5 h-5 opacity-50" />
                  <h3 className="text-xl font-display text-center text-primary uppercase">
                    US Wedding Registry
                  </h3>
                  <Chakana className="w-5 h-5 opacity-50" />
                </div>
                
                <p className="text-center text-muted-foreground">
                  We've set up a wedding registry for our US guests. Click below to view our registry and contribute to our honeymoon fund.
                </p>
                
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full"
                >
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Gift className="w-5 h-5" />
                    View US Wedding Registry
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                
                <p className="text-xs text-center text-muted-foreground italic">
                  Registry link coming soon
                </p>
              </CardContent>
            </Card>
          )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};