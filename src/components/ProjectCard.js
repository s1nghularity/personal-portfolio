import { Col } from "react-bootstrap"


export const ProjectCard = ({ title, description, imgUrl }) => {
return(
<Col sm ={8} md={6}>
  <div className="proj-imgbx">
    <img src={imgUrl} alt="project-img" />
    <div className="proj-txtx">
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  </div>
</Col>
)

}