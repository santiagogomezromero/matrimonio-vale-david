import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, CreditCard, Smartphone } from 'lucide-react';

export const Gifts = () => {
  const { t } = useLanguage();

  return (
    <section id="gifts" className="min-h-screen py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6 animate-fade-in">
          <Gift className="w-16 h-16 text-primary" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-primary uppercase tracking-wider">
          {t('gifts.title')}
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Message */}
          <div className="space-y-6 animate-fade-in">
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

          {/* Right Column - Bank Details */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 space-y-6">
              <h3 className="text-xl font-display text-center text-primary uppercase mb-4">
                {t('gifts.banking.title')}
              </h3>
              
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
        </div>
      </div>
    </section>
  );
};