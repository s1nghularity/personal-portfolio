const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#offerings', wide: true },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience', wide: true },
  { label: 'Contact', href: '#contact' },
];

/**
 * Plain sticky text nav. On small screens the Services and Experience links
 * are hidden so the name and the rest fit on one line.
 */
export const SiteNav = () => (
  <header className='bg-background/95 border-border sticky top-0 z-40 border-b backdrop-blur-md'>
    <nav
      aria-label='Primary'
      className='container-page flex h-14 items-center justify-between gap-4'
    >
      <a
        href='#home'
        className='font-display shrink-0 text-lg font-medium no-underline'
      >
        Vikram Singh
      </a>
      <ul className='m-0 flex list-none gap-3.5 p-0 text-[15px] font-medium sm:gap-7'>
        {links.map((l) => (
          <li key={l.href} className={'wide' in l ? 'hidden sm:list-item' : undefined}>
            <a
              href={l.href}
              className='text-muted-foreground hover:text-accent no-underline transition-colors'
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
