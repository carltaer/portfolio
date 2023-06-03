import React from 'react'
import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import ProjectCards from './ProjectCards'
import colorSharp2 from "../assets/img/color-sharp2.png"

const Projects = () => {

  const projects = [
    {
      title: "Business Start Up",
      description: "Design and Development",
      image: projImg1,
    },
    {
      title: "Business Start Up",
      description: "Design and Development",
      image: projImg2,
    },
    {
      title: "Business Start Up",
      description: "Design and Development",
      image: projImg3,
    },
    {
      title: "Business Start Up",
      description: "Design and Development",
      image: projImg1,
    },
    {
      title: "Business Start Up",
      description: "Design and Development",
      image: projImg2,
    },
    {
      title: "Business Start Up",
      description: "Design and Development",
      image: projImg3,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>My Projects</h2>
            <p>A selection of my projects that I built.</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills">
               <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
               </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
               </Nav.Item>
             </Nav>
               <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) =>{
                        return (
                          <ProjectCards
                            key={index}
                            {...project}  
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem epsom</Tab.Pane>
               </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}

export default Projects
