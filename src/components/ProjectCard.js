import { Col, Button } from 'react-bootstrap';

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  codeLink,
  liveLink,
}) => {
  return (
    <Col sm={8} md={6}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt='project-img' />
        <div className='proj-txtx'>
          <h3>{title}</h3>
          <span>{description}</span>
          <div>
            <br />
            <Button variant='outline-primary' size='sm' href={codeLink}>
              Code
            </Button>{' '}
            <span />
            <Button variant='outline-secondary' size='sm' href={liveLink}>
              Live
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
