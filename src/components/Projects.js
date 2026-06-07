import { Container } from "react-bootstrap";
import { FileCodeFill, BoxArrowUpRight } from "react-bootstrap-icons";
import projImg6 from "../assets/img/proj-img/capstone/beechler.png";

export const Projects = () => {
  return (
    <section className ="project" id="projects">
      <Container>
        <div className="reveal">
          <span className="kicker">Featured work</span>
          <h2>Things I've built</h2>
        </div>

        <div className="feature-grid">
          <article className="feature">
            <div className="feature-media">
              <img src={projImg6} alt="The Beechler website I designed and built" />
            </div>
            <div className="feature-body">
              <span className="feature-label">Real build</span>
              <h3 className="feature-title">Beechler</h3>
              <p className="feature-desc">A custom React site I designed and built from scratch. I shot the product photography too. Start to finish, solo.</p>
              <div className="feature-links">
                <a className="feature-link feature-link-primary" href="https://beechler.com/" target="_blank" rel="noreferrer">
                  <BoxArrowUpRight /> Visit site
                </a>
                <a className="feature-link" href="https://github.com/s1nghularity/beechler-website" target="_blank" rel="noreferrer">
                  <FileCodeFill /> View code
                </a>
              </div>
            </div>
          </article>

          <article className="feature">
            {/* TODO: swap placeholder for the uploaded screenshot:
                import privateAffair from '../assets/img/proj-img/private-affair.png';
                <div className="feature-media"><img src={privateAffair} alt="The Private Affair Band website" /></div> */}
            <div className="feature-media feature-media-placeholder" aria-hidden="true">
              <span>Private Affair</span>
            </div>
            <div className="feature-body">
              <span className="feature-label">Real build</span>
              <h3 className="feature-title">Private Affair</h3>
              <p className="feature-desc">A multipage site for the band, designed and built end to end. Their music, their photos, my build.</p>
              <div className="feature-links">
                <a className="feature-link feature-link-primary" href="https://privateaffairband.com/" target="_blank" rel="noreferrer">
                  <BoxArrowUpRight /> Visit site
                </a>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}
