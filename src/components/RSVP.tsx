import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink } from 'lucide-react';
import { IncaDivider, Chakana, MountainSilhouette } from '@/components/ui/inca-patterns';
import { AnimatedSection } from '@/hooks/use-scroll-animation';

export const RSVP = () => {
  const { t } = useLanguage();

  return (
    <section id="rsvp" className="min-h-screen py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-background relative overflow-hidden flex items-center">
      {/* Background decorative image */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dlyvsy67u/image/upload/f_webp/ruinas-de-saqsaywaman-cusco_rm66q5)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Decorative Chakanas */}
      <Chakana className="absolute top-20 left-10 w-24 h-24 opacity-5" />
      <Chakana className="absolute bottom-20 right-10 w-32 h-32 opacity-5" />
      <Chakana className="absolute top-1/3 right-20 w-16 h-16 opacity-5" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Couple image */}
        <AnimatedSection animation="scale">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dlyvsy67u/image/upload/v1764110243/IMG_7753_jxuijl.jpg"
                  alt="Vale & David"
                  className="w-full h-full object-cover"
                />
              </div>
              <Heart className="absolute -bottom-2 -right-2 w-10 h-10 text-primary fill-primary/20" />
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
          <Chakana className="mx-auto mb-4 opacity-60" />
          
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary uppercase tracking-wider">
            {t('rsvp.title')}
          </h2>
          <IncaDivider className="max-w-md mx-auto mb-8" />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={200}>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            {t('rsvp.description')}
          </p>
          
          <p className="text-muted-foreground mb-8">
            {t('rsvp.deadline')}
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 py-6 hover-scale shadow-lg"
          >
            <a 
              href="https://forms.gle/gcTnUFHU1rForuRt7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {t('rsvp.button')}
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-8 italic">
            {t('rsvp.thanks')}
          </p>
        </AnimatedSection>
        
        <MountainSilhouette className="mt-16 opacity-20" />
      </div>
    </section>
  );
};