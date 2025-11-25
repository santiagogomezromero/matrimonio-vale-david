import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Car, Bus, Phone } from 'lucide-react';

export const Trip = () => {
  const { t } = useLanguage();

  const drivers = [
    { name: 'Paul', phone: '+51 993 880 766' },
    { name: 'Zenobio', phone: '+51 984 645 193' },
    { name: 'Alberto', phone: '+51 926 065 431' },
    { name: 'Freddie', phone: '+51 994 204 951' },
    { name: 'Miguel', phone: '+51 994 731 023' },
    { name: 'Edu', phone: '+51 912 144 218' },
    { name: 'Isaac', phone: '+51 984 800 860' },
    { name: 'Eliud', phone: '+51 951 995 982' },
    { name: 'Miguel (15 pax)', phone: '+51 994 731 023' },
    { name: 'Roger (6+ pax)', phone: '+51 979 798 481' },
  ];

  return (
    <section id="trip" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-primary uppercase tracking-wider">
          {t('trip.title')}
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-1 gap-8 mt-12">
          {/* Flights */}
          <Card className="overflow-hidden animate-fade-in">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-3">
                <Plane className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl font-display">
                  {t('trip.flights.title')}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed">
                {t('trip.flights.description')}
              </p>
            </CardContent>
          </Card>

          {/* Transport */}
          <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-3">
                <Car className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl font-display">
                  {t('trip.transport.title')}
                </CardTitle>
              </div>
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
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-accent hover:shadow-md transition-all"
                  >
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold">{driver.name}</p>
                      <p className="text-muted-foreground text-xs">{driver.phone}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                {t('trip.transport.cost')}
              </p>
            </CardContent>
          </Card>

          {/* Shuttle */}
          <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="bg-secondary/5">
              <div className="flex items-center gap-3">
                <Bus className="w-6 h-6 text-secondary" />
                <CardTitle className="text-2xl font-display">
                  {t('trip.shuttle.title')}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed">
                {t('trip.shuttle.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};