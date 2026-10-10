import type { ReactNode } from 'react';
import { BlurFade } from '@/components/ui/blur-fade';

/** Scroll reveal used across sections: a soft rise-and-unblur, once. */
export const Reveal = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <BlurFade
    inView
    direction='up'
    offset={14}
    duration={0.6}
    delay={delay}
    inViewMargin='-80px'
    className={className}
  >
    {children}
  </BlurFade>
);
