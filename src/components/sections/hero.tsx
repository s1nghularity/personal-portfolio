export const Hero = () => (
  <section
    id='home'
    className='border-border border-b pt-[clamp(72px,12vw,148px)] pb-[clamp(56px,9vw,128px)]'
  >
    <div className='container-page'>
      <div className='max-w-[900px]'>
        <h1 className='max-w-[15ch] text-[clamp(40px,7vw,80px)] leading-[1.06] tracking-[-0.015em]'>
          A digital strategist who builds.
        </h1>

        <p className='mt-[clamp(24px,3.5vw,34px)] max-w-[56ch] text-[clamp(18px,1.3vw,21px)] leading-relaxed text-pretty'>
          Most websites are built for launch day. I build them for the years
          after — strategy, copy, design, and code, then the upkeep nobody
          budgets for.
        </p>

        <p className='text-muted-foreground mt-[18px] max-w-[56ch] text-[clamp(16px,1.2vw,18px)] leading-normal'>
          Currently with the Foundation for California Community Colleges and
          the Starfish Accelerator Foundation. Taking on select client work.
        </p>

        <div className='mt-[clamp(30px,4vw,42px)] flex flex-wrap items-center gap-x-7 gap-y-4'>
          <a
            href='#work'
            className='bg-foreground text-background inline-flex items-center justify-center rounded-sm px-[26px] py-[15px] text-base leading-none font-medium no-underline transition-colors hover:bg-black max-[480px]:w-full'
          >
            See the work
          </a>
          <a className='link-ink py-1 text-base' href='#contact'>
            Get in touch
          </a>
        </div>
      </div>
    </div>
  </section>
);
