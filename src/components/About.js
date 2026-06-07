import cityscape from '../assets/img/cityscape.svg';

export const About = () => {
  return (
    <div className='about' id='about'>
      <img src={cityscape} alt='cityscape' />
      <div className='about-bx'>
        <div className='about-inner'>
          <span className='kicker'>About</span>
          <h2>Hello! I'm Vikram. Nice to meet you.</h2>

          <p className='lead'>
            I'm a technical project and product owner for large, multi-site web
            platforms. My job is to own outcomes: turn loosely-defined
            requirements into scoped work, direct the developers and vendors who
            build it, verify the result is right, and keep it running in
            production.
          </p>

          <p>
            I came to tech sideways — journalism first, then a web-development
            bootcamp — which is why I'm as comfortable translating between
            stakeholders, finance, and engineers as I am working in the code
            itself. I can drop into a WordPress plugin, a payment integration,
            or a broken deploy and work the problem, and I lean on modern
            tooling to extend what I can do solo.
          </p>

          <p>
            What I do best is hold the whole system in my head: the roadmap, the
            budget, the vendors, the release, and the documentation that keeps
            it all legible. I'm the person who makes sure the thing actually
            gets built — and keeps working after launch.
          </p>
        </div>
      </div>
    </div>
  );
};
