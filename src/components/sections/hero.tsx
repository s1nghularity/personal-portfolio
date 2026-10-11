import { BlurFade } from '@/components/ui/blur-fade';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { TextAnimate } from '@/components/ui/text-animate';

export const Hero = () => (
  <section
    id='home'
    className='border-border border-b pt-[clamp(72px,12vw,148px)] pb-[clamp(56px,9vw,128px)]'
  >
    <div className='container-page'>
      <div className='max-w-[900px]'>
        <BlurFade delay={0.05}>
          <p className='eyebrow mb-[22px] text-[15px]'>Vikram Singh</p>
        </BlurFade>

        <TextAnimate
          as='h1'
          by='word'
          animation='blurInUp'
          duration={0.7}
          delay={0.15}
          startOnView={false}
          once
          className='max-w-[15ch] text-[clamp(40px,7vw,80px)] leading-[1.06] tracking-[-0.015em]'
        >
          A digital strategist who builds.
        </TextAnimate>

        <BlurFade delay={0.55}>
          <p className='mt-[clamp(24px,3.5vw,34px)] max-w-[56ch] text-[clamp(18px,1.3vw,21px)] leading-relaxed text-pretty'>
            Most websites are built for launch day. I build them for the years
            after — strategy, copy, design, and code, then the upkeep nobody
            budgets for.
          </p>
        </BlurFade>

        <BlurFade delay={0.7}>
          <p className='font-display mt-[18px] max-w-[56ch] text-[clamp(16px,1.2vw,18px)] leading-normal italic'>
            Currently with the Foundation for California Community Colleges and
            the Starfish Accelerator Foundation. Taking on select client work.
          </p>
        </BlurFade>

        <BlurFade delay={0.85}>
          <div className='mt-[clamp(30px,4vw,42px)] flex flex-wrap items-center gap-x-7 gap-y-4'>
            <InteractiveHoverButton
              href='#work'
              className='border-foreground px-7 py-3 text-base font-medium max-[480px]:w-full'
            >
              See the work
            </InteractiveHoverButton>
            <a className='link-ink py-1 text-base' href='#contact'>
              Get in touch
            </a>
          </div>
        </BlurFade>
      </div>
    </div>
  </section>
);
