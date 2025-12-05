import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink, Utensils } from 'lucide-react';

interface Restaurant {
  id: string;
  name: string;
  specialtyEs: string;
  specialtyEn: string;
  image: string;
  mapLink: string;
}

const restaurants: Restaurant[] = [
  {
    id: 'migas',
    name: 'Migas del Valle',
    specialtyEs: 'Panadería artesanal y café gourmet',
    specialtyEn: 'Artisan bakery and gourmet coffee',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.app.goo.gl/TcuhaknScEsWmJ7aA'
  },
  {
    id: 'tierra',
    name: 'Tierra',
    specialtyEs: 'Cocina peruana contemporánea',
    specialtyEn: 'Contemporary Peruvian cuisine',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.app.goo.gl/bauFPaAi5X7hr9mn8'
  },
  {
    id: 'ama',
    name: 'Ama',
    specialtyEs: 'Cocina de autor del Valle Sagrado',
    specialtyEn: 'Sacred Valley signature cuisine',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop',
    mapLink: 'https://maps.app.goo.gl/yNQqQJXGkpaHELkKA'
  }
];

export const RestaurantPreview = () => {
  const { language } = useLanguage();

  return (
    <section className="py-12">
      <h3 className="text-2xl font-display text-center mb-2 text-primary uppercase tracking-wider">
        {language === 'es' ? '¿Dónde Comer en Urubamba?' : 'Where to Eat in Urubamba?'}
      </h3>
      <p className="text-center text-muted-foreground mb-8">
        {language === 'es' 
          ? 'Aquí algunos de nuestros restaurantes favoritos' 
          : 'Here are some of our favorite restaurants'}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <Card 
            key={restaurant.id}
            className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
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
            </div>
            <CardContent className="p-4 space-y-3">
              <div>
                <h4 className="font-display text-xl text-foreground">{restaurant.name}</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <Utensils className="w-3 h-3" />
                  {language === 'es' ? restaurant.specialtyEs : restaurant.specialtyEn}
                </p>
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