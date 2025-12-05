import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { IncaDivider, IntiSun, MountainSilhouette, IncaStar } from '@/components/ui/inca-patterns';
import { Heart, Plane } from 'lucide-react';
import { Lightbox } from '@/components/ui/lightbox';
import { AnimatedSection } from '@/hooks/use-scroll-animation';

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

  // Complete timeline as specified
  const timelineEvents = [
    { 
      date: language === 'es' ? 'Abril 2022' : 'April 2022',
      title: language === 'es' ? 'Nos conocemos en Huarán - Cusco' : 'We meet in Huarán - Cusco',
      description: language === 'es' 
        ? 'Un encuentro que no planeamos que cambió nuestras vidas.'
        : 'An unplanned encounter that changed our lives.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967461/Abril_2022_Valeria_y_David_gxvgou.jpg'
    },
    { 
      date: language === 'es' ? 'Julio 2022' : 'July 2022',
      title: language === 'es' ? 'Salíamos como amigos' : 'We went out as friends',
      description: language === 'es' 
        ? 'Nos fuimos de caminatas y nos veíamos muy seguido.'
        : 'We went hiking and saw each other very often.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967573/JULIO_2022_Valeria_y_David_iogg21.jpg'
    },
    { 
      date: language === 'es' ? 'Setiembre 2022' : 'September 2022',
      title: language === 'es' ? 'David le preguntó a Valeria si estaban en algo serio' : 'David asked Valeria if they were serious',
      description: language === 'es' 
        ? 'Valeria le dijo que sí e iniciaron su relación como pareja.'
        : 'Valeria said yes and they started their relationship as a couple.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967570/SEPTIEMBRE_2022_Valeria_y_David_gvdzsd.jpg'
    },
    { 
      date: language === 'es' ? 'Noviembre 2022' : 'November 2022',
      title: language === 'es' ? 'David conoció a los papás de Valeria' : 'David met Valeria\'s parents',
      description: language === 'es' 
        ? 'Él estaba nervioso. Felizmente la mamá de Valeria dijo "está aprobado".'
        : 'He was nervous. Fortunately, Valeria\'s mom said "he\'s approved".',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967575/NOVIEMBRE_2022_Valeria_y_David_mlwvhh.jpg'
    },
    { 
      date: language === 'es' ? 'Enero 2023' : 'January 2023',
      title: language === 'es' ? 'Valeria aprende a montar bicicleta' : 'Valeria learns to ride a bike',
      description: language === 'es' 
        ? 'Valeria le pidió a David que le enseñara a montar bicicleta para poder unirse a un viaje familiar de David y poder conocer y disfrutar con sus papás. ¡David fue el mejor profesor de todos!'
        : 'Valeria asked David to teach her to ride a bike so she could join a family trip with David and meet his parents. David was the best teacher ever!',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967580/ENERO_2023_q188nu.jpg'
    },
    { 
      date: language === 'es' ? 'Marzo 2023' : 'March 2023',
      title: language === 'es' ? 'Valeria conoce a los papás de David' : 'Valeria meets David\'s parents',
      description: language === 'es' 
        ? 'Finalmente Valeria conoció a los papás de David en Florida, fue un road trip con muchos momentos lindos compartidos.'
        : 'Finally, Valeria met David\'s parents in Florida, it was a road trip with many beautiful shared moments.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967461/MARZO_2023_Valeria_y_David_mm3dmp.jpg'
    },
    { 
      date: language === 'es' ? 'Agosto 2023' : 'August 2023',
      title: language === 'es' ? 'Nos mudamos juntos' : 'We move in together',
      description: language === 'es' 
        ? 'Vale y Dave firmaron un contrato para vivir juntos, un nuevo capítulo inició.'
        : 'Vale and Dave signed a contract to live together, a new chapter began.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967565/AGOSTO_DEL_2023_VALERIA_Y_DAVID_rjbk2x.jpg'
    },
    { 
      date: language === 'es' ? 'Noviembre 2023' : 'November 2023',
      title: language === 'es' ? 'Descubrimos que nos encanta viajar' : 'We discover we love to travel',
      description: language === 'es' 
        ? 'Empezamos por visitar distintos lugares de Perú.'
        : 'We started by visiting different places in Peru.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967580/NOVIEMBRE_DEL_2023_VALERIA_Y_DAVID_gyutdc.jpg'
    },
    { 
      date: language === 'es' ? 'Marzo 2024' : 'March 2024',
      title: language === 'es' ? 'Viaje a India y Nepal' : 'Trip to India and Nepal',
      description: language === 'es' 
        ? 'Un viaje que disfrutamos mucho de inicio a fin.'
        : 'A trip we enjoyed from start to finish.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967570/MARZO_2024_VALERIA_Y_DAVID_qdo1fa.jpg'
    },
    { 
      date: language === 'es' ? 'Abril 2025' : 'April 2025',
      title: language === 'es' ? 'Viaje a Japón y Taiwán' : 'Trip to Japan and Taiwan',
      description: language === 'es' 
        ? 'Nos quedamos enamorados de estos lugares y de su gente.'
        : 'We fell in love with these places and their people.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967575/ABRIL_2025_VALERIA_Y_DAVID_yobexi.jpg'
    },
    { 
      date: language === 'es' ? 'Mayo 2025' : 'May 2025',
      title: language === 'es' ? 'Pedida en Japón' : 'Proposal in Japan',
      description: language === 'es' 
        ? 'En esta mágica tierra, nos elegimos con más firmeza.'
        : 'In this magical land, we chose each other more firmly.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967492/MAYO_2025_VALERIA_Y_DAVID_ibxkn2.jpg'
    },
    { 
      date: language === 'es' ? 'Mayo 2026' : 'May 2026',
      title: language === 'es' ? 'Matrimonio' : 'Wedding',
      description: language === 'es' 
        ? 'El día del reafirmar el SÍ y seguir dedicándonos mucho amor.'
        : 'The day to reaffirm our YES and continue dedicating much love to each other.',
      image: 'https://res.cloudinary.com/dlyvsy67u/image/upload/v1764967924/MAYO_2026_VALERIA_Y_DAVID_pgivsk.jpg'
    },
  ];

  const galleryCategories = [
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

  // Check if David's story has content
  const davidStoryText = t('story.david.text');
  const hasDavidStory = davidStoryText && davidStoryText.trim().length > 0;

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
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <IntiSun className="mx-auto mb-4 w-12 h-12 opacity-60" />
          <h2 className="text-4xl md:text-5xl font-display text-primary uppercase tracking-wider mb-4">
            {t('story.title')}
          </h2>
          <IncaDivider className="max-w-md mx-auto" />
        </AnimatedSection>

        {/* Their Stories - Side by Side */}
        <div className={`grid ${hasDavidStory ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-3xl mx-auto'} gap-8 mb-20`}>
          {/* Vale's Story */}
          <AnimatedSection animation="fade-left" delay={100}>
          <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500">
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
          </AnimatedSection>

          {/* David's Story - Only show if has content */}
          {hasDavidStory && (
            <AnimatedSection animation="fade-right" delay={200}>
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500">
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
                  {davidStoryText.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="first-letter:text-3xl first-letter:font-display first-letter:text-primary first-letter:mr-1">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>
          )}
        </div>

        {/* Mountain divider */}
        <MountainSilhouette className="my-12" />

        {/* Timeline - Enhanced with all events */}
        <AnimatedSection animation="fade-up" delay={100}>
        <div className="mb-20">
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
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <Card className="inline-block bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        {event.image && (
                          <div 
                            className="aspect-[16/9] overflow-hidden cursor-pointer"
                            onClick={() => openLightbox([{ src: event.image, alt: event.title }], 0)}
                          >
                            <img 
                              src={event.image} 
                              alt={event.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <CardContent className="p-6">
                          <p className="font-display text-primary text-xl mb-1">{event.date}</p>
                          <p className="font-semibold text-foreground mb-2">{event.title}</p>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Center icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                        <Heart className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </AnimatedSection>

        {/* Photo Gallery - Categorized */}
        <AnimatedSection animation="scale" delay={150}>
          <div className="space-y-16">
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
        </AnimatedSection>
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