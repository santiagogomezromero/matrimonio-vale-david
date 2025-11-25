import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IntiSun, IncaStar } from '@/components/ui/inca-patterns';
import { Countdown } from '@/components/Countdown';
import logo from '@/assets/logo.png';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dlyvsy67u/image/upload/v1764103527/peak-of-machu-picchu-lit_peirp6.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/95"></div>
      </div>

      {/* Decorative sun rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
        <IntiSun className="w-full h-full text-secondary animate-spin-slow" />
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <IncaStar className="absolute top-[15%] left-[10%] w-4 h-4 text-secondary/30 animate-pulse" />
        <IncaStar className="absolute top-[25%] right-[15%] w-3 h-3 text-secondary/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <IncaStar className="absolute top-[40%] left-[20%] w-2 h-2 text-secondary/25 animate-pulse" style={{ animationDelay: '1s' }} />
        <IncaStar className="absolute bottom-[30%] right-[25%] w-3 h-3 text-secondary/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          {/* Couple Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary/50 shadow-2xl ring-4 ring-secondary/20 ring-offset-4 ring-offset-transparent">
                <img 
                  src="https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110246/IMG_8020_uwzc1c.jpg" 
                  alt="Valeria & David"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Sun */}
              <IntiSun className="absolute -bottom-3 -right-3 w-12 h-12 text-secondary drop-shadow-lg" />
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="Valeria & David" 
              className="h-16 w-16 md:h-20 md:w-20 drop-shadow-lg opacity-90"
            />
          </div>

          {/* Title - Enhanced visibility */}
          <div className="relative mb-6">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-wider 
              drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] 
              [text-shadow:_0_2px_20px_rgba(0,0,0,0.8),_0_4px_40px_rgba(0,0,0,0.6)]">
              {t('hero.title')}
            </h1>
            {/* Decorative line under title */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-secondary/70" />
              <IntiSun className="w-6 h-6 text-secondary" />
              <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-secondary/70" />
            </div>
          </div>
          
          <p className="font-script text-2xl md:text-3xl text-white mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {t('hero.subtitle')}
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <Countdown />
          </div>

          {/* Date Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-card/95 backdrop-blur-md p-6 border-border shadow-xl">
              <p className="font-display text-lg font-semibold text-primary mb-2">
                {t('hero.date1')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('hero.location1')}
              </p>
            </Card>
            
            <Card className="bg-card/95 backdrop-blur-md p-6 border-border shadow-xl">
              <p className="font-display text-lg font-semibold text-primary mb-2">
                {t('hero.date2')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('hero.location2')}
              </p>
            </Card>
          </div>

          {/* Intro Text */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md">
            {t('hero.intro')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('#schedule')}
              className="shadow-lg"
            >
              {t('hero.btn.schedule')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#rsvp')}
              className="bg-card/90 hover:bg-card shadow-lg"
            >
              {t('hero.btn.rsvp')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};