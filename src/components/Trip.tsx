import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Car, Bus, Phone } from 'lucide-react';
import { IncaDivider, IntiSun, IncaStar, MamaKilla, MountainSilhouette } from '@/components/ui/inca-patterns';
import { AnimatedSection } from '@/hooks/use-scroll-animation';

export const Trip = () => {
  const { t } = useLanguage();

  const drivers = [
    { name: 'Paul', phone: '+51 993 880 766' },
    { name: 'Zenobio', phone: '+51 984 645 193' },
    { name: 'Alberto', phone: '+51 926 065 431' },
    { name: 'Freddie', phone: '+51 994 204 951' },
    { name: 'Roger (varios autos)', phone: '+51 979 798 481' },
    { name: 'Edu', phone: '+51 912 144 218' },
    { name: 'Isaac', phone: '+51 984 800 860' },
    { name: 'Eliud', phone: '+51 951 995 982' },
    { name: 'Miguel (15 pax)', phone: '+51 994 731 023' },
  ];

  return (
    <section id="trip" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-8"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/ruinas-de-saqsaywaman-cusco_rm66q5)',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      
      {/* Celestial decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <IntiSun className="absolute top-20 left-[5%] w-36 h-36 text-primary/5 animate-spin-slow" />
        <MamaKilla className="absolute top-[40%] right-[3%] w-16 h-16 text-primary/10 animate-float" />
        <IncaStar className="absolute top-[25%] left-[20%] w-4 h-4 text-primary/15 animate-pulse-glow" />
        <IncaStar className="absolute top-[55%] right-[15%] w-3 h-3 text-primary/20 animate-pulse-glow" style={{ animationDelay: '0.8s' }} />
        <IncaStar className="absolute bottom-[35%] left-[12%] w-5 h-5 text-primary/15 animate-pulse-glow" style={{ animationDelay: '1.3s' }} />
        <IntiSun className="absolute bottom-20 right-[8%] w-28 h-28 text-primary/5 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with celestial elements */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <IncaStar className="w-5 h-5 text-primary/50" />
              <IntiSun className="w-12 h-12 opacity-60" />
              <IncaStar className="w-5 h-5 text-primary/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-primary uppercase tracking-wider">
              {t('trip.title')}
            </h2>
            <IncaDivider className="max-w-md mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-1 gap-8 mt-12">
          {/* Flights */}
          <AnimatedSection animation="fade-left" delay={100}>
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
            <CardHeader className="bg-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display">
                  {t('trip.flights.title')}
                </CardTitle>
              </div>
              <IncaStar className="absolute top-4 right-4 w-6 h-6 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed">
                {t('trip.flights.description')}
              </p>
            </CardContent>
          </Card>
          </AnimatedSection>

          {/* Transport */}
          <AnimatedSection animation="fade-right" delay={200}>
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
            <CardHeader className="bg-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display">
                  {t('trip.transport.title')}
                </CardTitle>
              </div>
              <IntiSun className="absolute top-4 right-4 w-8 h-8 text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed mb-6">
                {t('trip.transport.description')}
              </p>
              
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                {t('trip.transport.drivers')}
              </h4>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {drivers.map((driver, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/${driver.phone.replace(/\s+/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-accent hover:shadow-md transition-all duration-300 hover:scale-[1.02] group/driver"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/driver:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">{driver.name}</p>
                      <p className="text-muted-foreground text-xs">{driver.phone}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground mt-4 p-3 bg-muted/50 rounded-lg">
                {t('trip.transport.cost')}
              </p>
            </CardContent>
          </Card>
          </AnimatedSection>

          {/* Shuttle */}
          <AnimatedSection animation="fade-up" delay={300}>
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
            <CardHeader className="bg-secondary/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <Bus className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-display">
                  {t('trip.shuttle.title')}
                </CardTitle>
              </div>
              <MamaKilla className="absolute top-4 right-4 w-8 h-8 text-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed">
                {t('trip.shuttle.description')}
              </p>
            </CardContent>
          </Card>
          </AnimatedSection>
        </div>

        <MountainSilhouette className="mt-16 opacity-20" />
      </div>
    </section>
  );
};