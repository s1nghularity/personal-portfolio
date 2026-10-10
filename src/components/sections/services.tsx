import { Reveal } from '@/components/reveal';

const services: { name: string; desc: string; price?: string }[] = [
  {
    name: 'New websites',
    desc: 'Strategy, copy, design, and build, start to finish. React, WordPress, or Shopify. Photography when the product deserves it.',
    // price: '',  // e.g. 'From $X' — left empty until real figures
  },
  {
    name: 'Redesigns & refreshes',
    desc: "Your site works, mostly. I fix the parts that don't — structure, UX, and copy — without tearing out what's still earning its keep.",
  },
  {
    name: 'Ongoing care',
    desc: 'Updates, security, fixes, and small improvements on a steady schedule — so the site you paid for stays the site you paid for.',
  },
];

export const Services = () => (
  <section id='offerings' className='border-border section-y border-t'>
    <div className='container-page'>
      <Reveal className='mb-[clamp(28px,4vw,44px)] max-w-[720px]'>
        <h2 className='section-title'>Services</h2>
        <p className='mt-4 mb-0 max-w-[48ch] text-[clamp(18px,1.2vw,20px)] leading-relaxed'>
          Three ways to work together.
        </p>
      </Reveal>

      <ul className='mb-[clamp(28px,4vw,40px)] list-none p-0'>
        {services.map((s, i) => (
          <li
            key={s.name}
            className='border-border border-t last:border-b'
          >
            <Reveal
              delay={i * 0.06}
              className='grid items-baseline gap-1.5 py-[clamp(20px,3vw,28px)] sm:grid-cols-[1fr_auto] sm:gap-[clamp(12px,3vw,40px)]'
            >
              <div>
                <h3 className='mb-2 text-[clamp(21px,2.4vw,27px)] leading-tight'>
                  {s.name}
                </h3>
                <p className='m-0 max-w-[58ch] leading-relaxed'>{s.desc}</p>
              </div>
              {s.price && (
                <div className='font-display text-[clamp(16px,1.4vw,19px)] whitespace-nowrap'>
                  {s.price}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ul>

      <a className='link-ink text-[17px]' href='#contact'>
        Start a conversation →
      </a>
    </div>
  </section>
);
