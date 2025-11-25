import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { IncaDivider, IntiSun, MountainSilhouette, IncaStar } from '@/components/ui/inca-patterns';
import { Heart, MapPin, Calendar, Sparkles, Plane } from 'lucide-react';
import { Lightbox } from '@/components/ui/lightbox';

export const Story = () => {
  const { t, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; alt: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: { src: string; alt: string }[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const timelineEvents = [
    { 
      date: t('story.timeline.met'), 
      label: t('story.timeline.metLabel'),
      icon: Heart,
      description: language === 'es' 
        ? 'Un encuentro casual que cambió nuestras vidas para siempre.' 
        : 'A casual encounter that changed our lives forever.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110322/IMG_1160_fq1o3m.jpg'
    },
    { 
      date: t('story.timeline.moved'), 
      label: t('story.timeline.movedLabel'),
      icon: MapPin,
      description: language === 'es'
        ? 'Decidimos comenzar nuestra aventura juntos en un nuevo país.'
        : 'We decided to start our adventure together in a new country.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110232/IMG_4636_fkzoml.jpg'
    },
    { 
      date: t('story.timeline.engaged'), 
      label: t('story.timeline.engagedLabel'),
      icon: Sparkles,
      description: language === 'es'
        ? 'En la mágica tierra del sol naciente, sellamos nuestra promesa.'
        : 'In the magical land of the rising sun, we sealed our promise.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110141/IMG_7219_fqs5un.jpg'
    },
    { 
      date: t('story.timeline.wedding'), 
      label: t('story.timeline.weddingLabel'),
      icon: Calendar,
      description: language === 'es'
        ? 'El día que hemos soñado, rodeados de quienes más amamos.'
        : 'The day we have dreamed of, surrounded by those we love most.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110246/IMG_8020_uwzc1c.jpg'
    },
  ];

  const galleryCategories = [
    {
      titleEs: 'La Propuesta en Japón',
      titleEn: 'The Proposal in Japan',
      icon: Sparkles,
      images: [
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/IMG_7351_2_wt2gyz', alt: 'Japan Trip', location: 'Japan' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110141/IMG_7219_fqs5un.jpg', alt: 'Proposal', location: 'Japan' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110141/IMG_7170_me7goa.jpg', alt: 'Proposal', location: 'Japan' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110140/IMG_7205_jwjseo.jpg', alt: 'Proposal', location: 'Japan' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110141/IMG_7223_npq7ph.jpg', alt: 'Proposal', location: 'Japan' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110140/IMG_7196_wni8xp.jpg', alt: 'Proposal', location: 'Japan' },
      ]
    },
    {
      titleEs: 'Nuestra Vida en Perú',
      titleEn: 'Our Life in Peru',
      icon: Heart,
      images: [
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110246/IMG_8020_uwzc1c.jpg', alt: 'Life in Peru', location: 'Peru' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110243/IMG_7753_jxuijl.jpg', alt: 'Life in Peru', location: 'Peru' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110236/IMG_7592_qdfjwm.jpg', alt: 'Life in Peru', location: 'Peru' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110232/IMG_4636_fkzoml.jpg', alt: 'Life in Peru', location: 'Peru' },
      ]
    },
    {
      titleEs: 'Nuestros Viajes',
      titleEn: 'Our Travels',
      icon: Plane,
      images: [
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110352/IMG_9506_u08hrv.jpg', alt: 'Travels', location: 'Adventure' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110351/IMG_5943_lhcbji.jpg', alt: 'Travels', location: 'Adventure' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110348/IMG_5031_jmxcfm.jpg', alt: 'Travels', location: 'Adventure' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110334/IMG_6210_xvc3zq.jpg', alt: 'Travels', location: 'Adventure' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110325/IMG_3872_lhctjn.jpg', alt: 'Travels', location: 'Adventure' },
        { src: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110322/IMG_1160_fq1o3m.jpg', alt: 'Travels', location: 'Adventure' },
      ]
    }
  ];

  return (
    <section id="story" className="min-h-screen py-20 px-4 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <IntiSun className="absolute -top-20 -right-20 w-64 h-64 text-primary/5 animate-spin-slow" />
        <IncaStar className="absolute top-1/4 left-[5%] w-6 h-6 text-primary/10 animate-pulse-glow" />
        <IncaStar className="absolute top-1/3 right-[10%] w-4 h-4 text-primary/10 animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <IncaStar className="absolute bottom-1/4 left-[15%] w-5 h-5 text-primary/10 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with Inca elements */}
        <div className="text-center mb-16">
          <IntiSun className="mx-auto mb-4 w-12 h-12 opacity-60" />
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
                      <Card className="inline-block bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        {event.image && (
                          <div className="aspect-[16/9] overflow-hidden">
                            <img 
                              src={event.image} 
                              alt={event.label}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
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

        {/* Photo Gallery - Categorized */}
        <div className="animate-fade-in space-y-16" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-display text-center mb-8 text-primary uppercase">
            {t('story.photos.title')}
          </h3>
          <IncaDivider className="max-w-xs mx-auto mb-12" />
          
          {galleryCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            const categoryImages = category.images.map(img => ({ src: img.src, alt: img.alt }));
            return (
              <div key={catIndex} className="space-y-6">
                <h4 className="text-xl font-display text-center text-foreground flex items-center justify-center gap-2">
                  <CategoryIcon className="w-5 h-5 text-primary" />
                  {language === 'es' ? category.titleEs : category.titleEn}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {category.images.map((image, index) => (
                    <div 
                      key={index}
                      className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                      onClick={() => openLightbox(categoryImages, index)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Zoom indicator */}
                      <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox 
        images={lightboxImages}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </section>
  );
};
