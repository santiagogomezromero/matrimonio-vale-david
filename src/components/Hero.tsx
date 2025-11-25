import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dlyvsy67u/image/upload/v1764103527/peak-of-machu-picchu-lit_peirp6.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Valeria & David" 
              className="h-24 w-24 md:h-32 md:w-32 drop-shadow-lg"
            />
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 tracking-wider">
            {t('hero.title')}
          </h1>
          
          <p className="font-script text-2xl md:text-3xl text-secondary mb-12">
            {t('hero.subtitle')}
          </p>

          {/* Date Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-card/90 backdrop-blur-sm p-6 border-border">
              <p className="font-display text-lg font-semibold text-primary mb-2">
                {t('hero.date1')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('hero.location1')}
              </p>
            </Card>
            
            <Card className="bg-card/90 backdrop-blur-sm p-6 border-border">
              <p className="font-display text-lg font-semibold text-primary mb-2">
                {t('hero.date2')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('hero.location2')}
              </p>
            </Card>
          </div>

          {/* Intro Text */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('hero.intro')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('#schedule')}
            >
              {t('hero.btn.schedule')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#rsvp')}
              className="bg-card/90 hover:bg-card"
            >
              {t('hero.btn.rsvp')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
