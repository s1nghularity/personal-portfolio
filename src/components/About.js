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
        
        <p>As a Winter 2022 graduate of MIT's MERN bootcamp, I'm eager to work with agencies and startups, small and large coroporations. I've worked with teams all over the world, supporting artists, activists, entreprenuers and executives alike.
        
        <br/><br/>I'm looking for <b>great</b> people <br/>building <b>great</b> things. </p>


      </div>
    </div>
  );
};
