import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, DollarSign, ExternalLink, Utensils } from 'lucide-react';

interface Restaurant {
  id: string;
  name: string;
  specialtyEs: string;
  specialtyEn: string;
  rating: number;
  priceRange: 1 | 2 | 3;
  image: string;
  mapLink: string;
  featured?: boolean;
}

const restaurants: Restaurant[] = [
  {
    id: 'tres-keros',
    name: 'Tres Keros',
    specialtyEs: 'Cocina de autor peruana',
    specialtyEn: 'Peruvian signature cuisine',
    rating: 4.8,
    priceRange: 3,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Tres+Keros+Urubamba',
    featured: true
  },
  {
    id: 'huacatay',
    name: 'El Huacatay',
    specialtyEs: 'Fusión andina contemporánea',
    specialtyEn: 'Contemporary Andean fusion',
    rating: 4.7,
    priceRange: 2,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=El+Huacatay+Urubamba',
    featured: true
  },
  {
    id: 'wayra',
    name: 'Wayra',
    specialtyEs: 'Cocina novo-andina',
    specialtyEn: 'Novo-Andean cuisine',
    rating: 4.6,
    priceRange: 3,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Wayra+Restaurant+Urubamba'
  },
  {
    id: 'paca',
    name: 'Paca',
    specialtyEs: 'Granja a la mesa',
    specialtyEn: 'Farm to table',
    rating: 4.5,
    priceRange: 2,
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Paca+Restaurant+Urubamba'
  },
  {
    id: 'kaia',
    name: 'Kaia',
    specialtyEs: 'Cocina saludable orgánica',
    specialtyEn: 'Organic healthy cuisine',
    rating: 4.4,
    priceRange: 2,
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Kaia+Restaurant+Urubamba'
  },
  {
    id: 'chichas',
    name: 'Chichas',
    specialtyEs: 'Cocina tradicional cusqueña',
    specialtyEn: 'Traditional Cusco cuisine',
    rating: 4.3,
    priceRange: 1,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.google.com/?q=Chichas+Urubamba'
  }
];

export const RestaurantPreview = () => {
  const { language } = useLanguage();

  const renderPriceRange = (range: number) => {
    return (
      <span className="flex">
        {[1, 2, 3].map(i => (
          <DollarSign 
            key={i} 
            className={`w-3 h-3 ${i <= range ? 'text-primary' : 'text-muted-foreground/30'}`}
          />
        ))}
      </span>
    );
  };

  return (
    <section className="py-12">
      <h3 className="text-2xl font-display text-center mb-2 text-primary uppercase tracking-wider">
        {language === 'es' ? 'Restaurantes Recomendados' : 'Recommended Restaurants'}
      </h3>
      <p className="text-center text-muted-foreground mb-8">
        {language === 'es' 
          ? 'Los mejores lugares para comer en Urubamba y alrededores' 
          : 'The best places to eat in Urubamba and surroundings'}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <Card 
            key={restaurant.id}
            className={`group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in ${
              restaurant.featured ? 'ring-2 ring-primary/20' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-muted">
              <img 
                src={restaurant.image} 
                alt={restaurant.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              {restaurant.featured && (
                <Badge className="absolute top-3 right-3 bg-primary">
                  {language === 'es' ? 'Destacado' : 'Featured'}
                </Badge>
              )}
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display text-lg text-foreground">{restaurant.name}</h4>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Utensils className="w-3 h-3" />
                    {language === 'es' ? restaurant.specialtyEs : restaurant.specialtyEn}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    {restaurant.rating}
                  </span>
                  {renderPriceRange(restaurant.priceRange)}
                </div>
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                asChild
              >
                <a href={restaurant.mapLink} target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-2" />
                  {language === 'es' ? 'Ver ubicación' : 'View location'}
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
