import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { IntiSun } from '@/components/ui/inca-patterns';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const { language } = useLanguage();
  const weddingDate = new Date('2026-05-01T12:00:00');

  const calculateTimeLeft = (): TimeLeft => {
    const difference = weddingDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const labels = {
    days: language === 'es' ? 'Días' : 'Days',
    hours: language === 'es' ? 'Horas' : 'Hours',
    minutes: language === 'es' ? 'Minutos' : 'Minutes',
    seconds: language === 'es' ? 'Segundos' : 'Seconds',
  };

  const timeUnits = [
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.minutes },
    { value: timeLeft.seconds, label: labels.seconds },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-white/80">
        <div className="h-px w-8 bg-white/50" />
        <IntiSun className="w-5 h-5 text-secondary" />
        <span className="text-sm uppercase tracking-widest font-medium text-white">
          {language === 'es' ? 'Cuenta regresiva' : 'Countdown'}
        </span>
        <IntiSun className="w-5 h-5 text-secondary" />
        <div className="h-px w-8 bg-white/50" />
      </div>
      
      <div className="flex gap-3 md:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-3 md:gap-4">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="bg-card/90 backdrop-blur-md border border-secondary/30 rounded-lg px-3 py-2 md:px-5 md:py-3 shadow-lg min-w-[60px] md:min-w-[80px]">
                  <span 
                    className="text-2xl md:text-4xl font-display font-bold text-primary tabular-nums"
                    style={{ 
                      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-secondary/10 rounded-lg blur-xl animate-pulse-glow -z-10" />
              </div>
              <span className="text-[10px] md:text-xs text-white/70 mt-2 uppercase tracking-wider font-medium">
                {unit.label}
              </span>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="text-2xl md:text-3xl text-secondary/50 font-light mb-6">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
