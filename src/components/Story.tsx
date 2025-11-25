import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

import japan1 from '@/assets/japan-1.jpg';
import japan2 from '@/assets/japan-2.jpg';
import japan3 from '@/assets/japan-3.jpg';
import peru1 from '@/assets/peru-1.jpg';
import peru2 from '@/assets/peru-2.jpg';
import peru3 from '@/assets/peru-3.jpg';

export const Story = () => {
  const { t } = useLanguage();

  const timelineEvents = [
    { date: t('story.timeline.met'), label: t('story.timeline.metLabel') },
    { date: t('story.timeline.moved'), label: t('story.timeline.movedLabel') },
    { date: t('story.timeline.engaged'), label: t('story.timeline.engagedLabel') },
    { date: t('story.timeline.wedding'), label: t('story.timeline.weddingLabel') },
  ];

  return (
    <section id="story" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4 text-primary uppercase tracking-wider">
          {t('story.title')}
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>

        {/* Their Stories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vale's Story */}
          <Card className="animate-fade-in">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-display text-primary text-center mb-4">
                {t('story.vale.title')}
              </h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                {t('story.vale.text').split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* David's Story */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-display text-primary text-center mb-4">
                {t('story.david.title')}
              </h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                {t('story.david.text').split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-display text-center mb-8 text-primary uppercase">
            {t('story.timeline.title')}
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <div className="bg-card p-4 rounded-lg shadow-md border">
                      <p className="font-display text-primary text-lg">{event.date}</p>
                      <p className="text-muted-foreground">{event.label}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-display text-center mb-8 text-primary uppercase">
            {t('story.photos.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src={japan1} alt="Engagement in Japan" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src={japan2} alt="Engagement in Japan" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src={japan3} alt="Engagement in Japan" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src={peru1} alt="Life in Peru" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src={peru2} alt="Life in Peru" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src={peru3} alt="Life in Peru" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
