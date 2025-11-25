import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

interface PatternProps {
  className?: string;
  style?: CSSProperties;
}

export const IncaDivider = ({ className }: PatternProps) => (
  <div className={cn("flex items-center justify-center gap-4 py-8", className)}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-primary/60" />
    <IntiSun className="w-8 h-8" />
    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/40 to-primary/60" />
  </div>
);

// Inti - Incan Sun God (Primary symbol)
export const IntiSun = ({ className }: PatternProps) => (
  <svg 
    viewBox="0 0 100 100" 
    className={cn("w-16 h-16 text-primary", className)}
    fill="currentColor"
  >
    {/* Central sun face */}
    <circle cx="50" cy="50" r="18" />
    {/* Inner glow ring */}
    <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    {/* Sun rays - alternating long and short */}
    {[...Array(16)].map((_, i) => {
      const isLong = i % 2 === 0;
      return (
        <rect
          key={i}
          x="48"
          y={isLong ? "5" : "12"}
          width="4"
          height={isLong ? "18" : "12"}
          rx="2"
          transform={`rotate(${i * 22.5} 50 50)`}
        />
      );
    })}
  </svg>
);

// Mama Killa - Moon Goddess
export const MamaKilla = ({ className }: PatternProps) => (
  <svg 
    viewBox="0 0 100 100" 
    className={cn("w-12 h-12 text-primary", className)}
    fill="currentColor"
  >
    {/* Crescent moon */}
    <path d="M50 10 C25 10, 10 35, 10 55 C10 80, 30 90, 50 90 C40 80, 35 65, 35 50 C35 35, 40 20, 50 10" />
    {/* Moon face accent */}
    <circle cx="30" cy="50" r="3" opacity="0.5" />
    <circle cx="25" cy="40" r="2" opacity="0.3" />
  </svg>
);

// Stars constellation - Collca (Pleiades)
export const StarConstellation = ({ className }: PatternProps) => (
  <svg 
    viewBox="0 0 100 100" 
    className={cn("w-12 h-12 text-primary", className)}
    fill="currentColor"
  >
    {/* Main stars in constellation pattern */}
    <polygon points="50,5 52,12 60,12 54,17 56,25 50,20 44,25 46,17 40,12 48,12" />
    <polygon points="25,30 26.5,35 32,35 28,38.5 29.5,44 25,40 20.5,44 22,38.5 18,35 23.5,35" transform="scale(0.8) translate(5,5)" />
    <polygon points="75,25 76.5,30 82,30 78,33.5 79.5,39 75,35 70.5,39 72,33.5 68,30 73.5,30" transform="scale(0.7) translate(20,10)" />
    <polygon points="30,60 31.5,65 37,65 33,68.5 34.5,74 30,70 25.5,74 27,68.5 23,65 28.5,65" transform="scale(0.6) translate(15,20)" />
    <polygon points="70,55 71.5,60 77,60 73,63.5 74.5,69 70,65 65.5,69 67,63.5 63,60 68.5,60" transform="scale(0.65) translate(30,25)" />
    <polygon points="50,75 51.5,80 57,80 53,83.5 54.5,89 50,85 45.5,89 47,83.5 43,80 48.5,80" transform="scale(0.5) translate(50,30)" />
  </svg>
);

// Single decorative star
export const IncaStar = ({ className, style }: PatternProps) => (
  <svg 
    viewBox="0 0 24 24" 
    className={cn("w-6 h-6 text-primary", className)}
    fill="currentColor"
    style={style}
  >
    <polygon points="12,2 14,9 21,9 15.5,13.5 17.5,21 12,16 6.5,21 8.5,13.5 3,9 10,9" />
  </svg>
);

// Cosmic spiral - representing the universe/galaxy
export const CosmicSpiral = ({ className }: PatternProps) => (
  <svg 
    viewBox="0 0 100 100" 
    className={cn("w-16 h-16 text-primary", className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M50,50 Q55,45 55,40 Q55,30 45,30 Q30,30 30,50 Q30,75 55,75 Q85,75 85,45 Q85,10 45,10" strokeLinecap="round" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    {/* Small stars around */}
    <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    <circle cx="80" cy="25" r="1" fill="currentColor" />
    <circle cx="75" cy="80" r="1.5" fill="currentColor" />
    <circle cx="15" cy="70" r="1" fill="currentColor" />
  </svg>
);

// Sun rays pattern for backgrounds
export const SunRays = ({ className }: PatternProps) => (
  <svg 
    viewBox="0 0 100 100" 
    className={cn("w-16 h-16 text-primary", className)}
    fill="currentColor"
  >
    <circle cx="50" cy="50" r="15" />
    {[...Array(12)].map((_, i) => (
      <rect
        key={i}
        x="48"
        y="10"
        width="4"
        height="20"
        rx="2"
        transform={`rotate(${i * 30} 50 50)`}
      />
    ))}
  </svg>
);

export const MountainSilhouette = ({ className }: PatternProps) => (
  <div className={cn("w-full overflow-hidden", className)}>
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className="w-full h-16 text-primary/10"
      fill="currentColor"
    >
      <path d="M0,120 L0,80 L100,40 L200,70 L300,20 L400,50 L500,10 L600,60 L700,30 L800,55 L900,15 L1000,45 L1100,25 L1200,60 L1200,120 Z" />
    </svg>
  </div>
);

export const IncaBorder = ({ className }: PatternProps) => (
  <div className={cn("flex justify-center gap-4", className)}>
    <IncaStar className="w-4 h-4 opacity-40" />
    <IntiSun className="w-6 h-6 opacity-60" />
    <IncaStar className="w-4 h-4 opacity-40" />
  </div>
);

// Stepped pyramid pattern (non-religious geometric)
export const SteppedPyramid = ({ className }: PatternProps) => (
  <svg viewBox="0 0 60 30" className={cn("w-16 h-8 text-primary", className)} fill="currentColor">
    <rect x="0" y="26" width="6" height="4" />
    <rect x="6" y="22" width="6" height="8" />
    <rect x="12" y="18" width="6" height="12" />
    <rect x="18" y="14" width="6" height="16" />
    <rect x="24" y="10" width="6" height="20" />
    <rect x="30" y="10" width="6" height="20" />
    <rect x="36" y="14" width="6" height="16" />
    <rect x="42" y="18" width="6" height="12" />
    <rect x="48" y="22" width="6" height="8" />
    <rect x="54" y="26" width="6" height="4" />
  </svg>
);

export const GeometricPattern = ({ className }: PatternProps) => (
  <div className={cn("flex items-center justify-center gap-3", className)}>
    {[...Array(5)].map((_, i) => (
      <IncaStar 
        key={i}
        className="w-3 h-3"
        style={{ 
          opacity: 1 - Math.abs(i - 2) * 0.25
        }}
      />
    ))}
  </div>
);

export const WaveDivider = ({ className }: PatternProps) => (
  <div className={cn("w-full", className)}>
    <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-8">
      <path 
        d="M0,20 Q150,0 300,20 T600,20 T900,20 T1200,20 V40 H0 Z" 
        className="fill-primary/10"
      />
      <path 
        d="M0,25 Q150,10 300,25 T600,25 T900,25 T1200,25" 
        className="stroke-primary/30 fill-none"
        strokeWidth="1"
      />
    </svg>
  </div>
);

// Legacy export for backwards compatibility
export const Chakana = IntiSun;
