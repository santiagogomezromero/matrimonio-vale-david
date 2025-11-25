import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Place {
  id: string;
  nameEs: string;
  nameEn: string;
  category: 'cusco' | 'valley' | 'beyond';
  descriptionEs: string;
  descriptionEn: string;
  image: string;
  duration?: string;
  rating?: number;
  mapLink?: string;
}

const places: Place[] = [
  {
    id: 'sacsayhuaman',
    nameEs: 'Sacsayhuamán',
    nameEn: 'Sacsayhuaman',
    category: 'cusco',
    descriptionEs: 'Impresionante complejo arqueológico inca con enormes muros de piedra perfectamente ensamblados.',
    descriptionEn: 'Impressive Inca archaeological complex with enormous perfectly assembled stone walls.',
    image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/ruinas-de-saqsaywaman-cusco_rm66q5',
    duration: '2-3 hrs',
    rating: 4.8,
    mapLink: 'https://maps.google.com/?q=Sacsayhuaman+Cusco'
  },
  {
    id: 'plaza-armas',
    nameEs: 'Plaza de Armas',
    nameEn: 'Plaza de Armas',
    category: 'cusco',
    descriptionEs: 'El corazón histórico de Cusco, rodeada de arquitectura colonial española sobre bases incas.',
    descriptionEn: 'The historic heart of Cusco, surrounded by Spanish colonial architecture on Inca foundations.',
    image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/plaza-armas-cusco_av5a4e',
    duration: '1-2 hrs',
    rating: 4.9,
    mapLink: 'https://maps.google.com/?q=Plaza+de+Armas+Cusco'
  },
  {
    id: 'san-blas',
    nameEs: 'Barrio de San Blas',
    nameEn: 'San Blas Neighborhood',
    category: 'cusco',
    descriptionEs: 'El barrio de artesanos más pintoresco de Cusco, con calles empedradas y talleres tradicionales.',
    descriptionEn: 'The most picturesque artisan neighborhood in Cusco, with cobblestone streets and traditional workshops.',
    image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/san_blas_portada_fvwoyf',
    duration: '2-3 hrs',
    rating: 4.7,
    mapLink: 'https://maps.google.com/?q=San+Blas+Cusco'
  },
  {
    id: 'ollantaytambo',
    nameEs: 'Ollantaytambo',
    nameEn: 'Ollantaytambo',
    category: 'valley',
    descriptionEs: 'Fortaleza inca con impresionantes terrazas y el único pueblo inca aún habitado.',
    descriptionEn: 'Inca fortress with impressive terraces and the only still-inhabited Inca town.',
    image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/San_Blas_antiguo_gxzega',
    duration: '3-4 hrs',
    rating: 4.9,
    mapLink: 'https://maps.google.com/?q=Ollantaytambo'
  },
  {
    id: 'pisac',
    nameEs: 'Písac',
    nameEn: 'Pisac',
    category: 'valley',
    descriptionEs: 'Ruinas incas en la montaña y famoso mercado artesanal dominical.',
    descriptionEn: 'Mountain Inca ruins and famous Sunday artisan market.',
    image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/YL6XPN6O5JG6TJL7FAJJ7WYVNY_fa9fzx',
    duration: '3-4 hrs',
    rating: 4.7,
    mapLink: 'https://maps.google.com/?q=Pisac+Peru'
  },
  {
    id: 'moray',
    nameEs: 'Moray',
    nameEn: 'Moray',
    category: 'valley',
    descriptionEs: 'Terrazas circulares incas usadas como laboratorio agrícola experimental.',
    descriptionEn: 'Circular Inca terraces used as an experimental agricultural laboratory.',
    image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/machu-picchu-ruinas-naturaleza-llamas_etvodn',
    duration: '1-2 hrs',
    rating: 4.6,
    mapLink: 'https://maps.google.com/?q=Moray+Peru'
  },
  {
    id: 'maras',
    nameEs: 'Salineras de Maras',
    nameEn: 'Maras Salt Mines',
    category: 'valley',
    descriptionEs: 'Miles de pozas de sal en las laderas, explotadas desde tiempos preincaicos.',
    descriptionEn: 'Thousands of salt pools on the hillsides, exploited since pre-Inca times.',
    image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/san_blas_portada_fvwoyf',
    duration: '1-2 hrs',
    rating: 4.7,
    mapLink: 'https://maps.google.com/?q=Salineras+de+Maras'
  },
  {
    id: 'machu-picchu',
    nameEs: 'Machu Picchu',
    nameEn: 'Machu Picchu',
    category: 'beyond',
    descriptionEs: 'La ciudadela inca más famosa del mundo, una de las 7 maravillas modernas.',
    descriptionEn: 'The most famous Inca citadel in the world, one of the 7 modern wonders.',
    image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/machu-picchu-ruinas-paisaje-natural_sqrwlx',
    duration: 'Full day',
    rating: 5.0,
    mapLink: 'https://maps.google.com/?q=Machu+Picchu'
  },
  {
    id: 'rainbow-mountain',
    nameEs: 'Montaña de 7 Colores',
    nameEn: 'Rainbow Mountain',
    category: 'beyond',
    descriptionEs: 'Montaña multicolor a 5,200 metros de altura, una maravilla natural única.',
    descriptionEn: 'Multicolored mountain at 5,200 meters altitude, a unique natural wonder.',
    image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/ruinas-de-saqsaywaman-cusco_rm66q5',
    duration: 'Full day',
    rating: 4.8,
    mapLink: 'https://maps.google.com/?q=Rainbow+Mountain+Peru'
  }
];

export const PlaceGallery = () => {
  const { language, t } = useLanguage();
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'cusco' | 'valley' | 'beyond'>('all');

  const categories = [
    { id: 'all', labelEs: 'Todos', labelEn: 'All' },
    { id: 'cusco', labelEs: 'Cusco', labelEn: 'Cusco' },
    { id: 'valley', labelEs: 'Valle Sagrado', labelEn: 'Sacred Valley' },
    { id: 'beyond', labelEs: 'Más Allá', labelEn: 'Beyond' }
  ];

  const filteredPlaces = activeCategory === 'all' 
    ? places 
    : places.filter(p => p.category === activeCategory);

  return (
    <section className="py-12">
      <h3 className="text-2xl font-display text-center mb-6 text-primary uppercase tracking-wider">
        {language === 'es' ? 'Lugares para Visitar' : 'Places to Visit'}
      </h3>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
            className="transition-all duration-300"
          >
            {language === 'es' ? cat.labelEs : cat.labelEn}
          </Button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPlaces.map((place, index) => (
          <Card 
            key={place.id}
            className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
            onClick={() => setSelectedPlace(place)}
          >
            <div className="aspect-square relative overflow-hidden bg-muted">
              <img 
                src={place.image} 
                alt={language === 'es' ? place.nameEs : place.nameEn}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display text-sm">
                  {language === 'es' ? place.nameEs : place.nameEn}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Detail modal */}
      <Dialog open={!!selectedPlace} onOpenChange={() => setSelectedPlace(null)}>
        <DialogContent className="max-w-lg">
          {selectedPlace && (
            <>
              <div className="aspect-video relative overflow-hidden rounded-lg mb-4 bg-muted">
                <img 
                  src={selectedPlace.image} 
                  alt={language === 'es' ? selectedPlace.nameEs : selectedPlace.nameEn}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-xl font-display text-primary">
                  {language === 'es' ? selectedPlace.nameEs : selectedPlace.nameEn}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {language === 'es' ? selectedPlace.descriptionEs : selectedPlace.descriptionEn}
                </p>
                <div className="flex flex-wrap gap-3">
                  {selectedPlace.duration && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {selectedPlace.duration}
                    </Badge>
                  )}
                  {selectedPlace.rating && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {selectedPlace.rating}
                    </Badge>
                  )}
                </div>
                {selectedPlace.mapLink && (
                  <Button asChild className="w-full">
                    <a href={selectedPlace.mapLink} target="_blank" rel="noopener noreferrer">
                      <MapPin className="w-4 h-4 mr-2" />
                      {language === 'es' ? 'Ver en Mapa' : 'View on Map'}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
