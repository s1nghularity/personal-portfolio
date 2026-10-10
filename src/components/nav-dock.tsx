import type { ComponentType, SVGProps } from 'react';
import { Briefcase, History, Layers, Mail, User } from 'lucide-react';
import { Dock, DockIcon } from '@/components/ui/dock';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';

type Item = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  external?: boolean;
};

const sections: Item[] = [
  { label: 'Work', href: '#work', Icon: Briefcase },
  { label: 'Services', href: '#offerings', Icon: Layers },
  { label: 'About', href: '#about', Icon: User },
  { label: 'Experience', href: '#experience', Icon: History },
  { label: 'Contact', href: '#contact', Icon: Mail },
];

const socials: Item[] = [
  { label: 'GitHub', href: 'https://github.com/s1nghularity', Icon: GitHubIcon, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vikramsinghca/', Icon: LinkedInIcon, external: true },
];

// Dock only magnifies its direct DockIcon children, so this renders the
// icon's contents rather than wrapping DockIcon.
const DockLinkContent = ({ label, href, Icon, external }: Item) => (
  <>
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className='text-foreground flex size-full items-center justify-center rounded-full'
    >
      <Icon className='size-[18px]' aria-hidden='true' />
    </a>
    {/* label above the icon on hover / keyboard focus */}
    <span
      aria-hidden='true'
      className='bg-foreground text-background pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100'
    >
      {label}
    </span>
  </>
);

const iconClass = 'group hover:bg-muted relative transition-colors [&>div]:size-full';

/** Floating Magic UI dock: section links plus GitHub/LinkedIn. */
export const NavDock = () => (
  <nav aria-label='Primary' className='pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4'>
    <Dock
      iconSize={36}
      iconMagnification={52}
      iconDistance={110}
      className='bg-background/85 border-border pointer-events-auto mt-0 h-[54px] gap-1.5 shadow-[0_6px_24px_-12px_rgba(33,28,22,0.35)] backdrop-blur-md'
    >
      {sections.map((item) => (
        <DockIcon key={item.label} className={iconClass}>
          <DockLinkContent {...item} />
        </DockIcon>
      ))}
      <div className='bg-border mx-0.5 h-3/5 w-px self-center' aria-hidden='true' />
      {socials.map((item) => (
        <DockIcon key={item.label} className={iconClass}>
          <DockLinkContent {...item} />
        </DockIcon>
      ))}
    </Dock>
  </nav>
);
