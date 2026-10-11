const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#offerings' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience', wide: true },
  { label: 'Contact', href: '#contact' },
];

/**
 * Plain sticky text nav. On small screens the name (shown in the hero) and
 * the Experience link are hidden so the rest fits on one line.
 */
export const SiteNav = () => (
  <header className='bg-background/95 border-border sticky top-0 z-40 border-b backdrop-blur-md'>
    <nav
      aria-label='Primary'
      className='container-page flex h-14 items-center justify-between gap-6'
    >
      <a
        href='#home'
        className='font-display hidden text-lg font-medium no-underline sm:block'
      >
        Vikram Singh
      </a>
      <ul className='m-0 flex w-full list-none justify-between gap-4 p-0 text-[15px] font-medium sm:w-auto sm:gap-7'>
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
