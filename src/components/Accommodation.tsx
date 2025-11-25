import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, ExternalLink, Phone, Mail } from 'lucide-react';

export const Accommodation = () => {
  const { t, language } = useLanguage();

  const hotels = [
    {
      name: 'Tierra Viva Valle Sagrado',
      price: '$80–140',
      description: t('accommodation.tierraviva.description'),
      location: t('accommodation.tierraviva.location'),
      website: 'https://tierravivahoteles.com/tierra-viva-valle-sagrado-urubamba/',
      phone: '+51 84 600036',
      whatsapp: '+51 945 486 132',
      email: 'reservas@tierravivahoteles.com',
      badge: 'wedding-discount',
      featured: true,
      notes: t('accommodation.tierraviva.notes')
    },
    {
      name: 'Tambo del Inka',
      price: '$350–600',
      description: t('accommodation.tambo.description'),
      location: t('accommodation.tambo.location'),
      website: 'https://www.marriott.com/es/default.mi',
      phone: '+51 84 581 777',
      email: 'corporativo@intursa.com.pe',
      badge: 'wedding-discount',
      featured: true,
      notes: t('accommodation.tambo.notes')
    },
    {
      name: 'Casa de la Chola',
      price: '$60–100',
      description: language === 'es' ? 'Acogedor y rústico estilo campestre.' : 'Country, rustic, cozy.',
      location: 'Urubamba',
      website: 'https://casadelachola.com/',
      phone: '+51 989 822 956',
      email: 'reservas@casadelachola.com',
    },
    {
      name: 'Taypikala Deluxe Valle Sagrado',
      price: '$90–150',
      description: language === 'es' ? 'Hotel espacioso con fácil acceso.' : 'Spacious hotel; easy access.',
      location: 'Urubamba',
      website: 'https://www.taypikala.com/es/hoteles/hotel-taypikalavalle-en-urubamba/',
      phone: '+51 84 606 262',
      whatsapp: '+51 994 300 428',
      email: 'reservas_urubamba@taypikala.com',
      badge: 'recommended'
    },
    {
      name: 'Belmond Hotel Río Sagrado',
      price: '$320–600',
      description: language === 'es' ? 'Lujo frente al río con amplios jardines.' : 'Riverfront luxury; spacious gardens.',
      location: 'Urubamba',
      website: 'https://www.belmond.com/hotels/south-america/peru/sacred-valley/belmond-hotel-rio-sagrado/',
      phone: '+51 84 201 631',
      email: 'perures.fits@belmond.com',
    },
    {
      name: 'Las Casitas del Arcoiris',
      price: '$60–120',
      description: language === 'es' ? 'Proyecto social con ambiente tranquilo.' : 'Social project; peaceful atmosphere.',
      location: 'Urubamba',
      website: 'https://lascasitasdelarcoiris.com/',
      phone: '+51 960 224 640',
      email: 'lascasitasdelarcoiris@gmail.com',
      badge: 'recommended',
      notes: language === 'es' ? 'Usa el código "Vale & David Wedding" para tarifa especial de S/280 por noche.' : 'Use code "Vale & David Wedding" for special rate of S/280 per night.'
    },
    {
      name: 'Lizzy Wasi Boutique Hotel',
      price: '$70–120',
      description: language === 'es' ? 'Boutique y acogedor; buen servicio.' : 'Boutique and cozy; good service.',
      location: 'Urubamba',
      website: 'https://lizzywasi.com/',
      phone: '+51 966 089 439',
      email: 'info@lizzywasi.com',
    },
    {
      name: 'Wifala Harmony Hotel',
      price: '$80–140',
      description: language === 'es' ? 'Estilo orgánico y minimalista.' : 'Organic / minimalist style.',
      location: 'Urubamba',
      website: 'https://www.wifalaharmonyhotel.com/en/',
      phone: '+51 986 821 511',
      email: 'reservas@wifalaharmonyhotel.com',
    },
  ];

  return (
    <section id="accommodation" className="min-h-screen py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-primary uppercase tracking-wider">
          {t('accommodation.title')}
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          {t('accommodation.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col ${hotel.featured ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl font-display leading-tight">
                    {hotel.name}
                  </CardTitle>
                  {hotel.badge && (
                    <Badge variant={hotel.badge === 'wedding-discount' ? 'default' : 'secondary'} className="shrink-0">
                      {hotel.badge === 'wedding-discount' 
                        ? (language === 'es' ? 'Descuento' : 'Discount')
                        : (language === 'es' ? 'Recomendado' : 'Recommended')}
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm">{hotel.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{hotel.location}</span>
                </div>
                
                <p className="text-lg font-semibold text-primary">{hotel.price} {language === 'es' ? 'por noche' : 'per night'}</p>
                
                {hotel.notes && (
                  <p className="text-xs text-muted-foreground bg-accent/50 p-3 rounded-md">
                    {hotel.notes}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2 text-xs pt-2">
                  {hotel.phone && (
                    <a 
                      href={`tel:${hotel.phone}`}
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary"
                    >
                      <Phone className="w-3 h-3" />
                      {language === 'es' ? 'Teléfono' : 'Phone'}
                    </a>
                  )}
                  {hotel.email && (
                    <a 
                      href={`mailto:${hotel.email}`}
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary"
                    >
                      <Mail className="w-3 h-3" />
                      Email
                    </a>
                  )}
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full mt-auto"
                >
                  <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                    {t('accommodation.visit')}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};