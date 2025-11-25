import { cn } from '@/lib/utils';

interface PatternProps {
  className?: string;
}

export const IncaDivider = ({ className }: PatternProps) => (
  <div className={cn("flex items-center justify-center gap-4 py-8", className)}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-primary/60" />
    <svg viewBox="0 0 60 20" className="w-16 h-6 text-primary" fill="currentColor">
      {/* Stepped pyramid pattern */}
      <rect x="0" y="16" width="4" height="4" />
      <rect x="4" y="12" width="4" height="8" />
      <rect x="8" y="8" width="4" height="12" />
      <rect x="12" y="4" width="4" height="16" />
      <rect x="16" y="0" width="4" height="20" />
      <rect x="20" y="0" width="4" height="20" />
      <rect x="24" y="0" width="4" height="20" />
      <rect x="28" y="0" width="4" height="20" />
      <rect x="32" y="0" width="4" height="20" />
      <rect x="36" y="0" width="4" height="20" />
      <rect x="40" y="4" width="4" height="16" />
      <rect x="44" y="8" width="4" height="12" />
      <rect x="48" y="12" width="4" height="8" />
      <rect x="52" y="16" width="4" height="4" />
    </svg>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/40 to-primary/60" />
  </div>
);

export const Chakana = ({ className }: PatternProps) => (
  <svg 
    viewBox="0 0 100 100" 
    className={cn("w-12 h-12 text-primary", className)} 
    fill="currentColor"
  >
    {/* Chakana - Andean Cross */}
    <path d="
      M40,0 H60 V20 H80 V40 H100 V60 H80 V80 H60 V100 H40 V80 H20 V60 H0 V40 H20 V20 H40 Z
      M45,25 H55 V45 H75 V55 H55 V75 H45 V55 H25 V45 H45 Z
    " fillRule="evenodd" />
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
  <div className={cn("flex justify-center", className)}>
    <div className="flex gap-1">
      {[...Array(7)].map((_, i) => (
        <div 
          key={i} 
          className="w-3 h-3 bg-primary/60 rotate-45"
          style={{ opacity: 0.4 + (i < 4 ? i * 0.15 : (6 - i) * 0.15) }}
        />
      ))}
    </div>
  </div>
);

export const SunRays = ({ className }: PatternProps) => (
  <svg 
    viewBox="0 0 100 100" 
    className={cn("w-16 h-16 text-primary", className)}
    fill="currentColor"
  >
    <circle cx="50" cy="50" r="20" />
    {[...Array(12)].map((_, i) => (
      <rect
        key={i}
        x="48"
        y="10"
        width="4"
        height="15"
        transform={`rotate(${i * 30} 50 50)`}
      />
    ))}
  </svg>
);

export const GeometricPattern = ({ className }: PatternProps) => (
  <div className={cn("flex items-center justify-center gap-2", className)}>
    {[...Array(5)].map((_, i) => (
      <div 
        key={i}
        className="w-2 h-2 border border-primary/60 rotate-45"
        style={{ 
          transform: `rotate(45deg) scale(${1 - Math.abs(i - 2) * 0.2})`,
          opacity: 1 - Math.abs(i - 2) * 0.2
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
