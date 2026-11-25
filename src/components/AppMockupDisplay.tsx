import { useState } from 'react';
import { Smartphone } from 'lucide-react';

interface AppMockupDisplayProps {
  src: string;
  alt: string;
  caption?: string;
  accent?: 'orange' | 'blue' | 'purple';
  className?: string;
  priority?: boolean;
}

const GLOW_GRADIENT: Record<'orange' | 'blue' | 'purple', string> = {
  orange: 'from-[#FF5C1A]/30 via-[#7C3AED]/15 to-[#2563EB]/25',
  blue: 'from-[#2563EB]/30 via-[#FF5C1A]/15 to-[#7C3AED]/25',
  purple: 'from-[#7C3AED]/30 via-[#FF5C1A]/20 to-[#2563EB]/20',
};

export function AppMockupDisplay({
  src,
  alt,
  caption,
  accent = 'orange',
  className = '',
  priority = false,
}: AppMockupDisplayProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`relative flex flex-col items-center ${className}`}>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br ${GLOW_GRADIENT[accent]} opacity-70 blur-2xl`}
      />
      <div className="relative z-10 overflow-hidden rounded-[2rem] bg-transparent transition-transform duration-300 hover:-translate-y-1">
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="mx-auto block h-auto max-h-[470px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(17,19,24,0.22)]"
          />
        ) : (
          <div className="flex h-[420px] w-[220px] flex-col items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F5F6F8] p-6 text-center">
            <Smartphone className="h-10 w-10 text-[#FF5C1A]" aria-hidden="true" />
            <p className="mt-3 text-sm font-semibold text-[#111318]">SUGA App Preview</p>
            <p className="mt-1 text-xs text-[#555B68]">{alt}</p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="relative z-10 mt-3 text-center text-sm font-medium text-[#555B68]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
