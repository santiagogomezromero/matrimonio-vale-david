import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink } from 'lucide-react';

export const RSVP = () => {
  const { t } = useLanguage();

  return (
    <section id="rsvp" className="min-h-screen py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-background flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6 animate-fade-in">
          <Heart className="w-16 h-16 text-primary fill-primary/20" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary uppercase tracking-wider animate-fade-in">
          {t('rsvp.title')}
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
        
        <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {t('rsvp.description')}
        </p>
        
        <p className="text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('rsvp.deadline')}
        </p>
        
        <Button 
          asChild 
          size="lg" 
          className="text-lg px-8 py-6 animate-fade-in hover-scale"
          style={{ animationDelay: '0.3s' }}
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
        
        <p className="text-sm text-muted-foreground mt-8 italic animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {t('rsvp.thanks')}
        </p>
      </div>
    </section>
  );
};