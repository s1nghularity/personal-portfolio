import { Reveal } from '@/components/reveal';

export const About = () => (
  <section id='about' className='bg-muted section-y'>
    <div className='container-page'>
      <Reveal className='grid items-start gap-7 md:grid-cols-[1fr_1.5fr] md:gap-[clamp(28px,5vw,72px)]'>
        <h2 className='section-title max-w-[14ch]'>About</h2>

        <div className='max-w-[64ch] space-y-[1.1em] text-[19px] leading-relaxed text-pretty'>
          <p className='m-0'>
            I've spent my career in the gap between people and the technology
            that's supposed to serve them. It started in newsrooms — the output
            desk at NDTV in New Delhi, then Bay Area news — and turned into a
            decade of communications work: writing for executives, building
            brands for nonprofits, promoting a CBS comedy. Somewhere along the
            way I started building the websites myself, because someone had to.
          </p>
          <p className='m-0'>
            Today I look after a fleet of program websites for the Foundation
            for California Community Colleges, and I'm Global Digital
            Strategist for the Starfish Accelerator Foundation. In between, I
            take on a few client projects a year — small businesses that need
            a site that works and someone who'll still answer the phone after
            it launches.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
