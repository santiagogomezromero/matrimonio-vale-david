import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Animated section wrapper component
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur';
  delay?: number;
  duration?: number;
}

export const AnimatedSection = ({ 
  children, 
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 700
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const baseStyles = 'transition-all ease-out';
  
  const animationStyles = {
    'fade-up': {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0'
    },
    'fade-down': {
      initial: 'opacity-0 -translate-y-8',
      animate: 'opacity-100 translate-y-0'
    },
    'fade-left': {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0'
    },
    'fade-right': {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0'
    },
    'scale': {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100'
    },
    'blur': {
      initial: 'opacity-0 blur-sm',
      animate: 'opacity-100 blur-0'
    }
  };

  const { initial, animate } = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        baseStyles,
        isVisible ? animate : initial,
        className
      )}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

// Staggered children animation wrapper
interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale';
}

export const StaggeredContainer = ({
  children,
  className,
  staggerDelay = 100,
  animation = 'fade-up'
}: StaggeredContainerProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <AnimatedSection
              key={index}
              animation={animation}
              delay={isVisible ? index * staggerDelay : 0}
            >
              {child}
            </AnimatedSection>
          ))
        : children
      }
    </div>
  );
};
