import { Col } from 'react-bootstrap';
import { FileCodeFill, FilePlayFill } from 'react-bootstrap-icons';

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  codeLink,
  liveLink,
}) => {
  return (
    <Col sm={8} md={6} lg={6}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt='project-img' />
        <div className='proj-txtx'>
          <h3>{title}</h3>

          <span>{description}</span>

          <div>
            <a size='sm' href={codeLink} className='code-link'>
              <FileCodeFill size={'2em'} color='#246a45' />
            </a>{' '}
            <a size='sm' href={liveLink} className='code-link'>
              <FilePlayFill size={'2em'} color='#B51D25' />
            </a>
            <br />
          </div>
        </div>
      </div>
    </Col>
  );
};
