import cityscape from '../assets/img/cityscape.svg';

export const About = () => {
  return (

    <div className='about'>
      <img src = {cityscape} alt="cityscape"/>
      <div className='about-bx' >
        <h2>
          Hello! I'm Vikram. Nice to meet you. 
        </h2>

        <br/>
        
        <p>As a <b>Winter 2022</b> graduate of MIT's MERN bootcamp, I'm eager to work with agencies, startups, as well as small and large corporations. I've worked with teams all over the world, supporting artists, activists, entreprenuers and executives alike.
        </p>

      </div>
    </div>
  );
};
