const socialLink =
  'text-foreground border-border hover:text-accent border-b no-underline hover:border-current';

export const Contact = () => (
  <section id='contact' className='bg-muted border-border section-y border-t'>
    <div className='container-page grid items-start gap-7 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-[clamp(32px,6vw,80px)]'>
      <h2 className='m-0 max-w-[22ch] text-[clamp(30px,4.5vw,50px)] leading-[1.12] md:max-w-[18ch]'>
        Whether it's a new site, an old one, or a broken one, write to me.
      </h2>

      <div className='pb-1.5'>
        <a
          className='link-ink font-display inline-block text-[clamp(20px,2.4vw,26px)]'
          href='mailto:vikpremsingh@pm.me'
        >
          vikpremsingh@pm.me
        </a>
        <p className='text-muted-foreground mt-[clamp(22px,3vw,28px)] mb-0 text-base leading-loose'>
          GitHub:{' '}
          <a className={socialLink} href='https://github.com/s1nghularity' target='_blank' rel='noreferrer'>
            github.com/s1nghularity
          </a>
          <br />
          LinkedIn:{' '}
          <a className={socialLink} href='https://www.linkedin.com/in/vikramsinghca/' target='_blank' rel='noreferrer'>
            linkedin.com/in/vikramsinghca
          </a>
        </p>
      </div>
    </div>
  </section>
);
