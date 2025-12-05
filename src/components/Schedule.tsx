import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Shirt, ExternalLink } from 'lucide-react';
import { IncaDivider, IntiSun, IncaStar, MamaKilla } from '@/components/ui/inca-patterns';
import { AnimatedSection } from '@/hooks/use-scroll-animation';
import logo from '@/assets/logo.png';

export const Schedule = () => {
  const { t, language } = useLanguage();

  return (
    <section id="schedule" className="min-h-screen py-20 px-4 bg-muted relative overflow-hidden">
      {/* Parallax background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/machu-picchu-ruinas-paisaje-natural_sqrwlx)',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted via-muted/95 to-muted" />
      
      {/* Celestial decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <IntiSun className="absolute top-10 right-[5%] w-32 h-32 text-primary/5 animate-spin-slow" />
        <MamaKilla className="absolute top-[30%] left-[3%] w-20 h-20 text-primary/10 animate-float" />
        <IncaStar className="absolute top-[20%] right-[15%] w-4 h-4 text-primary/20 animate-pulse-glow" />
        <IncaStar className="absolute top-[60%] left-[8%] w-3 h-3 text-primary/15 animate-pulse-glow" style={{ animationDelay: '0.7s' }} />
        <IncaStar className="absolute bottom-[25%] right-[10%] w-5 h-5 text-primary/20 animate-pulse-glow" style={{ animationDelay: '1.2s' }} />
        <IntiSun className="absolute bottom-10 left-[10%] w-24 h-24 text-primary/5 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Logo */}
        <AnimatedSection animation="fade-up">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src={logo} 
                alt="V&D" 
                className="h-20 w-20 md:h-24 md:w-24 opacity-80"
              />
              <IncaStar className="absolute -top-2 -right-2 w-5 h-5 text-primary/60 animate-pulse-glow" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-primary uppercase tracking-wider">
            {t('schedule.title')}
          </h2>
          
          <IncaDivider className="max-w-md mx-auto mb-8" />
          
          {/* Intro text */}
          <p className="text-center text-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {language === 'es' 
              ? 'Serán 2 días de celebraciones, baile, comida rica, tradición y diversión. No será una boda típica, serán dos encuentros casuales donde disfrutaremos con nuestras personas más importantes, entre ellas tú.'
              : 'It will be 2 days of celebrations, dancing, delicious food, tradition and fun. It won\'t be a typical wedding, but two casual gatherings where we\'ll enjoy with our most important people, including you.'}
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Day 1 - Wedding Fest */}
          <AnimatedSection animation="fade-left" delay={100}>
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group">
            <CardHeader className="bg-primary/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <IntiSun className="absolute top-4 right-4 opacity-20 w-10 h-10 group-hover:animate-spin-slow" />
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <Calendar className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl font-display">
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
              
              {/* Map button */}
              <Button 
                asChild 
                variant="outline" 
                size="sm"
                className="w-full mt-4"
              >
                <a 
                  href="https://maps.app.goo.gl/jYtFVruzQPhtXuT17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {language === 'es' ? 'Ver mapa' : 'View map'}
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
          </AnimatedSection>

          {/* Day 2 - Lake & Traditions */}
          <AnimatedSection animation="fade-right" delay={200}>
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group">
            <CardHeader className="bg-secondary/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <MamaKilla className="absolute top-4 right-4 opacity-20 w-10 h-10 group-hover:animate-float" />
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <Calendar className="w-6 h-6 text-secondary" />
                <CardTitle className="text-2xl font-display">
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
              
              {/* Map button */}
              <Button 
                asChild 
                variant="outline" 
                size="sm"
                className="w-full mt-4"
              >
                <a 
                  href="https://maps.app.goo.gl/B2KApJNHSqBcB9zr5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {language === 'es' ? 'Ver mapa' : 'View map'}
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};