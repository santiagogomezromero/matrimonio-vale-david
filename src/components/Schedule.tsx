import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Shirt } from 'lucide-react';

export const Schedule = () => {
  const { t } = useLanguage();

  return (
    <section id="schedule" className="min-h-screen py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-primary uppercase tracking-wider">
          {t('schedule.title')}
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Day 1 - Wedding Fest */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
            <CardHeader className="bg-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl font-display uppercase">
                  {t('schedule.day1.date')}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg">{t('schedule.day1.time')}</p>
                  <p className="text-muted-foreground">{t('schedule.day1.event')}</p>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed">
                {t('schedule.day1.description')}
              </p>
              
              <div className="flex items-start gap-3 pt-4 border-t">
                <Shirt className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{t('schedule.day1.dress.title')}</p>
                  <p className="text-muted-foreground">{t('schedule.day1.dress.code')}</p>
                  <a 
                    href="https://pin.it/5bulOfaRK" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm mt-1 inline-block"
                  >
                    {t('schedule.day1.dress.reference')}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 pt-4 border-t">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{t('schedule.day1.location.title')}</p>
                  <p className="text-muted-foreground text-sm">
                    {t('schedule.day1.location.address')}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {t('schedule.day1.location.note')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Day 2 - Lake & Traditions */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="bg-secondary/10">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-secondary" />
                <CardTitle className="text-2xl font-display uppercase">
                  {t('schedule.day2.date')}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg">{t('schedule.day2.time')}</p>
                  <p className="text-muted-foreground">{t('schedule.day2.event')}</p>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed">
                {t('schedule.day2.description')}
              </p>
              
              <div className="flex items-start gap-3 pt-4 border-t">
                <Shirt className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{t('schedule.day2.dress.title')}</p>
                  <p className="text-muted-foreground">{t('schedule.day2.dress.code')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 pt-4 border-t">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{t('schedule.day2.location.title')}</p>
                  <p className="text-muted-foreground text-sm">
                    {t('schedule.day2.location.address')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};