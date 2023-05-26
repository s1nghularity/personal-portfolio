import { Card, Col, Button } from 'react-bootstrap';
import { FileCodeFill, FilePlayFill } from 'react-bootstrap-icons';

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  codeLink,
  liveLink,
}) => {
  return (
    <Col sm={12} md={6} lg={6}>
      <Card >
        <Card.Img variant='top' src={imgUrl} alt='project-img' className='card-img-top' />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className='card-links'>
            <Button href={codeLink} variant='success'>
              <FileCodeFill size={'2em'} />
            </Button>
            <Button href={liveLink} variant='danger'>
              <FilePlayFill size={'2em'} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};