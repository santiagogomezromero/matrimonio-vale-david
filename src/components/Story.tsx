import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { IncaDivider, Chakana, MountainSilhouette } from '@/components/ui/inca-patterns';
import { Heart, MapPin, Calendar, Sparkles } from 'lucide-react';

import japan1 from '@/assets/japan-1.jpg';
import japan2 from '@/assets/japan-2.jpg';
import japan3 from '@/assets/japan-3.jpg';
import peru1 from '@/assets/peru-1.jpg';
import peru2 from '@/assets/peru-2.jpg';
import peru3 from '@/assets/peru-3.jpg';

export const Story = () => {
  const { t, language } = useLanguage();

  const timelineEvents = [
    { 
      date: t('story.timeline.met'), 
      label: t('story.timeline.metLabel'),
      icon: Heart,
      description: language === 'es' 
        ? 'Un encuentro casual que cambió nuestras vidas para siempre.' 
        : 'A casual encounter that changed our lives forever.'
    },
    { 
      date: t('story.timeline.moved'), 
      label: t('story.timeline.movedLabel'),
      icon: MapPin,
      description: language === 'es'
        ? 'Decidimos comenzar nuestra aventura juntos en un nuevo país.'
        : 'We decided to start our adventure together in a new country.'
    },
    { 
      date: t('story.timeline.engaged'), 
      label: t('story.timeline.engagedLabel'),
      icon: Sparkles,
      description: language === 'es'
        ? 'En la mágica tierra del sol naciente, sellamos nuestra promesa.'
        : 'In the magical land of the rising sun, we sealed our promise.'
    },
    { 
      date: t('story.timeline.wedding'), 
      label: t('story.timeline.weddingLabel'),
      icon: Calendar,
      description: language === 'es'
        ? 'El día que hemos soñado, rodeados de quienes más amamos.'
        : 'The day we have dreamed of, surrounded by those we love most.'
    },
  ];

  const galleryImages = [
    { src: japan1, alt: 'Engagement in Japan', location: 'Kyoto, Japan' },
    { src: japan2, alt: 'Engagement in Japan', location: 'Tokyo, Japan' },
    { src: japan3, alt: 'Engagement in Japan', location: 'Osaka, Japan' },
    { src: peru1, alt: 'Life in Peru', location: 'Cusco, Peru' },
    { src: peru2, alt: 'Life in Peru', location: 'Sacred Valley, Peru' },
    { src: peru3, alt: 'Life in Peru', location: 'Lima, Peru' },
  ];

  return (
    <section id="story" className="min-h-screen py-20 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header with Inca elements */}
        <div className="text-center mb-16">
          <Chakana className="mx-auto mb-4 opacity-60" />
          <h2 className="text-4xl md:text-5xl font-display text-primary uppercase tracking-wider mb-4">
            {t('story.title')}
          </h2>
          <IncaDivider className="max-w-md mx-auto" />
        </div>

        {/* Their Stories - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vale's Story */}
          <Card className="animate-fade-in overflow-hidden group hover:shadow-xl transition-all duration-500">
            <div className="h-2 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-display text-primary">V</span>
                </div>
                <h3 className="text-2xl font-display text-primary">
                  {t('story.vale.title')}
                </h3>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                {t('story.vale.text').split('\n\n').map((paragraph, index) => (
                  <p key={index} className="first-letter:text-3xl first-letter:font-display first-letter:text-primary first-letter:mr-1">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* David's Story */}
          <Card className="animate-fade-in overflow-hidden group hover:shadow-xl transition-all duration-500" style={{ animationDelay: '0.15s' }}>
            <div className="h-2 bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60" />
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-2xl font-display text-secondary-foreground">D</span>
                </div>
                <h3 className="text-2xl font-display text-primary">
                  {t('story.david.title')}
                </h3>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                {t('story.david.text').split('\n\n').map((paragraph, index) => (
                  <p key={index} className="first-letter:text-3xl first-letter:font-display first-letter:text-primary first-letter:mr-1">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mountain divider */}
        <MountainSilhouette className="my-12" />

        {/* Timeline - Enhanced */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-display text-center mb-12 text-primary uppercase flex items-center justify-center gap-3">
            <Heart className="w-5 h-5" />
            {t('story.timeline.title')}
            <Heart className="w-5 h-5" />
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 rounded-full"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <Card className="inline-block bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6">
                          <p className="font-display text-primary text-xl mb-1">{event.date}</p>
                          <p className="font-semibold text-foreground mb-2">{event.label}</p>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Center icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Photo Gallery - Enhanced */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-display text-center mb-8 text-primary uppercase">
            {t('story.photos.title')}
          </h3>
          <IncaDivider className="max-w-xs mx-auto mb-12" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {image.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
