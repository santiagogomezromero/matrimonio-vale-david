import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, ExternalLink, Phone, Mail, Home, FileText } from 'lucide-react';
import { IncaDivider, IntiSun, IncaStar } from '@/components/ui/inca-patterns';
import { AnimatedSection } from '@/hooks/use-scroll-animation';

// Real hotel images from official websites
const hotelImages: Record<string, string> = {
  'Tierra Viva Valle Sagrado': 'https://tierravivahoteles.com/wp-content/uploads/2023/03/TVVS-11-Areas-verdes.jpg',
  'Tambo del Inka': 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1765316374/Tambodelinka_idecvb.jpg',
  'Andean Wings': 'https://andeanwingsvalley.com/wp-content/uploads/2024/03/vista-interior-awv.jpg',
  'Casa de la Chola': 'https://casadelachola.com/wp-content/uploads/2019/06/gal5.jpg',
  'Taypikala Deluxe Valle Sagrado': 'https://www.taypikala.com/media/uploads/hotelextra/taypikala-valle-jardin-cuatro.jpg?q=pr:sharp/rs:fill/w:650/h:600/g:ce/f:jpg',
  'Belmond Hotel Río Sagrado': 'https://img.belmond.com/f_auto/t_960x667/photos/rsg/rsg-ext21.jpg',
  'Las Casitas del Arcoiris': 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1765316374/Casitas_arcorirs_xcuj3t.jpg',
  'Lizzy Wasi Boutique Hotel': 'https://lizzywasi.com/assets/img/gallery/lizzy_wasi_6.png',
  'Wifala Harmony Hotel': 'https://s3-cdn.hotellinksolutions.com/hls/data/6312/gallery/fachada-principal_1671809996.jpg',
  'Hotel Amaru Valle': 'https://amaruvalle.com/wp-content/uploads/2022/12/12_amaru_valle-1.webp',
};

export const Accommodation = () => {
  const { t, language } = useLanguage();

  // Featured hotels with wedding discount and shuttle
  const featuredHotels = [
    {
      name: 'Tierra Viva Valle Sagrado',
      price: '$80–140',
      description: t('accommodation.tierraviva.description'),
      location: t('accommodation.tierraviva.location'),
      website: 'https://tierravivahoteles.com/tierra-viva-valle-sagrado-urubamba/',
      phone: '+51 84 600036',
      whatsapp: '+51 945 486 132',
      email: 'reservas@tierravivahoteles.com',
      featured: true,
      promoCode: true,
      soldOut: true,
    },
    {
      name: 'Tambo del Inka',
      price: language === 'es' ? '$350–600' : '$322+',
      description: t('accommodation.tambo.description'),
      location: t('accommodation.tambo.location'),
      website: 'https://www.marriott.com/es/default.mi',
      phone: '+51 84 581 777',
      email: 'corporativo@intursa.com.pe',
      featured: true,
      formLink: language === 'es' 
        ? 'https://docs.google.com/document/d/1GgDTjk7PK6NuBmIOjcMwROHkxr85aiRd/edit?usp=drive_link'
        : 'https://docs.google.com/document/d/1o_yHIJd-ARf1S-72TDS7uvYfN5bKgpnC/edit?usp=drive_link&ouid=101061994273886926109&rtpof=true&sd=true',
    },
    {
      name: 'Andean Wings',
      price: '$70–90',
      description: language === 'es' 
        ? 'Hotel boutique con servicio personalizado.' 
        : 'Boutique hotel with personalized service.',
      location: 'Urubamba',
      website: 'https://maps.app.goo.gl/DyyAdVhzS4eNhdHN9?g_st=ic',
      phone: '+51 933 846 064',
      featured: true,
      notes: language === 'es'
        ? '$70-90 USD/noche (incluye IGV y desayuno). Mencionar grupo "David Amoruso" al reservar. Para reservas, contactar al +51 933 846 064.'
        : '$70-90 USD/night (includes IGV and breakfast). Mention "David Amoruso" group when booking. For reservations, contact +51 933 846 064.',
    },
  ];

  // Other recommended hotels
  const otherHotels = [
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
      notes: language === 'es' ? 'Usa el código "Vale & David Wedding" para tarifa especial de S/280 por noche.' : 'Use code "Vale & David Wedding" for special rate of S/280 per night.',
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
    {
      name: 'Hotel Amaru Valle',
      price: language === 'es' ? 'Consultar' : 'Inquire',
      description: language === 'es' 
        ? 'Hotel acogedor en el Valle Sagrado.' 
        : 'Cozy hotel in the Sacred Valley.',
      location: 'Urubamba',
      website: 'https://maps.app.goo.gl/xgKxGiWsVY1o4JhB6?g_st=ic',
    },
  ];

  const airbnbs = [
    {
      name: 'Villa Urubamba',
      description: language === 'es' ? 'Villa privada con todas las comodidades.' : 'Private villa with all amenities.',
      location: 'Urubamba',
      link: 'https://www.airbnb.mx/rooms/1140113095122242296?viralityEntryPoint=1&s=76',
      image: 'https://a0.muscache.com/im/pictures/airflow/Hosting-1140113095122242296/original/6989f2d7-6ad6-411f-bc0f-1e8a5f5a665c.jpg?im_w=1200',
    },
    {
      name: 'Cabaña Urubamba',
      description: language === 'es' ? 'Cabaña acogedora en el valle.' : 'Cozy cabin in the valley.',
      location: 'Urubamba',
      link: 'https://www.airbnb.mx/rooms/1122410686222748712?viralityEntryPoint=1&s=76',
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1122410686222748712/original/df8faad5-07a5-487f-8601-eed7d2a41bf2.jpeg?im_w=720',
    },
    {
      name: 'Tierra Bella - Casa de Campo',
      description: language === 'es' ? 'Casa de campo con vistas espectaculares.' : 'Country house with spectacular views.',
      location: 'Urubamba',
      link: 'https://www.airbnb.mx/rooms/29076966?viralityEntryPoint=1&s=76',
      image: 'https://a0.muscache.com/im/pictures/airflow/Hosting-29076966/original/57987ffa-1556-41d3-b15b-b8e0a475fc51.jpg?im_w=1200',
    },
    {
      name: 'Villa Tikaywasi',
      description: language === 'es' ? 'Villa tradicional con encanto local.' : 'Traditional villa with local charm.',
      location: 'Urubamba',
      link: 'https://www.airbnb.com/l/DW65nxIQ',
      image: 'https://a0.muscache.com/im/pictures/ff62c626-fd2a-4dd5-bbe1-35ab5f24a75a.jpg?im_w=1200',
    },
  ];

  const renderHotelCard = (hotel: typeof featuredHotels[0] | typeof otherHotels[0], index: number, isFeatured: boolean = false) => (
    <Card 
      key={index} 
      className={`overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${isFeatured ? 'ring-2 ring-primary' : ''}`}
    >
      {/* Hotel Preview Image */}
      <div className="aspect-[16/10] relative overflow-hidden bg-muted">
        <img 
          src={hotelImages[hotel.name]} 
          alt={hotel.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        {isFeatured && (
          <Badge 
            variant="default" 
            className="absolute top-3 right-3"
          >
            {language === 'es' ? 'Descuento' : 'Discount'}
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-display leading-tight">
          {hotel.name}
          {'soldOut' in hotel && hotel.soldOut && (
            <span className="block text-destructive font-medium text-sm mt-1">
              {language === 'es' ? '(Habitaciones Agotadas)' : '(Rooms Sold Out)'}
            </span>
          )}
        </CardTitle>
        <CardDescription className="text-sm">{hotel.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-muted-foreground">{hotel.location}</span>
        </div>
        
        <p className="text-lg font-semibold text-primary">{hotel.price} {language === 'es' ? 'por noche' : 'per night'}</p>
        
        {'promoCode' in hotel && hotel.promoCode && (
          <div className="text-xs text-muted-foreground bg-accent/50 p-3 rounded-md">
            {t('accommodation.tierraviva.notes')}
          </div>
        )}
        
        {'formLink' in hotel && hotel.formLink && (
          <>
            <div className="text-xs text-muted-foreground bg-accent/50 p-3 rounded-md">
              {t('accommodation.tambo.notes')}
            </div>
            <Button 
              asChild 
              variant="secondary" 
              size="sm"
              className="w-full"
            >
              <a href={hotel.formLink} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                {language === 'es' ? 'Ver formulario' : 'View form'}
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>
          </>
        )}
        
        {'notes' in hotel && hotel.notes && (
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
  );

  return (
    <section id="accommodation" className="min-h-screen py-20 px-4 bg-muted relative overflow-hidden">
      {/* Decorative Inca elements - sun, stars */}
      <IntiSun className="absolute top-20 left-10 w-20 h-20 opacity-5" />
      <IncaStar className="absolute top-40 right-20 w-8 h-8 opacity-10" />
      <IncaStar className="absolute bottom-40 left-20 w-6 h-6 opacity-10" />
      <IntiSun className="absolute bottom-20 right-10 w-24 h-24 opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-primary uppercase tracking-wider">
            {t('accommodation.title')}
          </h2>
          <IncaDivider className="max-w-md mx-auto mb-6" />
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            {language === 'es' 
              ? 'Nuestra organizadora de bodas, Diana, nos ha ayudado a investigar buenas opciones de alojamiento en Urubamba y sus alrededores, y es donde recomendamos hospedarse. Nota: Mayo es temporada alta por lo que les recomendamos reservar con anticipación.'
              : 'Our wedding planner, Diana, has helped us research great lodging options in Urubamba and surroundings, and this is where we recommend staying. Note: May is high season so we recommend booking in advance.'}
          </p>
        </AnimatedSection>

        {/* Featured Hotels Section */}
        <AnimatedSection animation="fade-up" delay={100}>
          <h3 className="text-xl font-display text-center text-primary mb-6">
            {language === 'es' 
              ? 'Hoteles con descuento para la boda y donde pasará el bus de cortesía'
              : 'Hotels with wedding discount and shuttle service'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredHotels.map((hotel, index) => renderHotelCard(hotel, index, true))}
          </div>
        </AnimatedSection>

        {/* Other Hotels Section */}
        <AnimatedSection animation="fade-up" delay={150}>
          <h3 className="text-xl font-display text-center text-primary mb-6 mt-12">
            {language === 'es' ? 'Otros hoteles recomendados' : 'Other recommended hotels'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherHotels.map((hotel, index) => renderHotelCard(hotel, index, false))}
          </div>
        </AnimatedSection>

        {/* Airbnb Section */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mt-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-[#FF5A5F]/40" />
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FF5A5F]/10 rounded-full">
                <Home className="w-5 h-5 text-[#FF5A5F]" />
                <span className="font-display text-lg text-[#FF5A5F]">Airbnb</span>
              </div>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-[#FF5A5F]/40" />
            </div>
            
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
              {language === 'es' 
                ? 'También puedes encontrar opciones únicas en Airbnb.'
                : 'You can also find unique options on Airbnb.'}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {airbnbs.map((airbnb, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border-[#FF5A5F]/20 hover:border-[#FF5A5F]/40"
                >
                  {/* Airbnb Preview Image */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                    <img 
                      src={airbnb.image} 
                      alt={airbnb.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <Badge 
                      className="absolute top-3 right-3 bg-[#FF5A5F] hover:bg-[#FF5A5F]/90"
                    >
                      Airbnb
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg font-display leading-tight">
                        {airbnb.name}
                      </CardTitle>
                      <Home className="w-5 h-5 text-[#FF5A5F] flex-shrink-0" />
                    </div>
                    <CardDescription className="text-sm">{airbnb.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-[#FF5A5F] flex-shrink-0" />
                      <span className="text-muted-foreground">{airbnb.location}</span>
                    </div>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full mt-auto border-[#FF5A5F]/30 text-[#FF5A5F] hover:bg-[#FF5A5F]/10 hover:text-[#FF5A5F]"
                    >
                      <a href={airbnb.link} target="_blank" rel="noopener noreferrer">
                        {language === 'es' ? 'Ver en Airbnb' : 'View on Airbnb'}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
