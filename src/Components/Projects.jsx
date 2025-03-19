import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Notes Finder",
      description: "Notes Finder website",
      imgUrl: projImg1,
    },
    {
      title: "Notes Finder",
      description: "Notes Finder website",
      imgUrl: projImg2,
    },
    {
      title: "Notes Finder",
      description: "Notes Finder website",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h2>Projects</h2>
            <p>suiofvghsuiogh siohuisrh pshp whrfpis</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="Pills" defaultActiveKey="/home" className="pills">
                <Nav.Item className="nav-item1">
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item2">
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item3">
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">fgsdfg sgsd r</Tab.Pane>
                <Tab.Pane eventKey="third">dfgihdighosd gsriogh</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
