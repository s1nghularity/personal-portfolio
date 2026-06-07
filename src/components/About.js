import cityscape from '../assets/img/cityscape.svg';

export const About = () => {
  return (
    <div className='about' id='about'>
      <img src={cityscape} alt='cityscape' />
      <div className='about-bx'>
        <div className='about-inner'>
          <span className='kicker'>About</span>
          <h2>Hello! I'm Vikram.</h2>

          <p className='lead'>
            I came up as a communicator. Newsrooms first, then comms desks, then
            building brands, and somewhere along the way I learned to build the
            websites too.
          </p>

          <p>
            So now I do both. I'll take a brand from a blank page to a live
            site: the strategy, the words, the design, sometimes the product
            photos, and the code. I built beechler.com as a custom React site
            and shot the product photography myself. Start to finish, solo. I
            designed and built privateaffairband.com end to end for the band.
          </p>

          <p>
            Day to day, I'm the first responder for a fleet of 40-plus WordPress
            sites. I keep them running on ManageWP and Cloudways, triage what
            breaks, fix what I can, and hand the deep engineering to the devs who
            live in it. I'm not a career software engineer and I won't pretend to
            be one. What I am is the person who can hold the whole thing in one
            head: the story, the brand, the build, and the upkeep.
          </p>

          <p>
            That range is the point. Most people pick a lane. I write, build, and
            maintain, and I like it that way.
          </p>
        </div>
      </div>
    </div>
  );
};
