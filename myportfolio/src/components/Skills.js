import { Container, Row, Col } from "react-bootstrap"
import  Carousel from "react-multi-carousel"

import htmlimg from "../assets/img/skills/html-1.svg"
import cssimg from "../assets/img/skills/css-3.svg"
import javascriptimg from "../assets/img/skills/javascript-1.svg"
import reactimg from "../assets/img/skills/react-2.svg"
import materialuiimg from "../assets/img/skills/material-ui-1.svg"
import bootstrapimg from "../assets/img/skills/bootstrap-5-1.svg"

import nodejsimg from "../assets/img/skills/nodejs-2.svg"
import mongodbimg from "../assets/img/skills/mongodb-icon-1.svg"

import colorSharp from "../assets/img/color-sharp.png"

import "react-multi-carousel/lib/styles.css"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                                <div className="item">
                                    <img src={htmlimg} alt="Skill1" />
                                    <h5>HTML</h5>
                                </div>

                                <div className="item">
                                    <img src={cssimg} alt="Skill1" />
                                    <h5>CSS</h5>
                                </div>

                                <div className="item">
                                    <img src={javascriptimg} alt="Skill 1" />
                                    <h5>Javascript</h5>
                                </div>    

                                <div className="item">
                                    <img src={reactimg} alt="Skill 1" />
                                    <h5>ReactJS</h5>
                                </div>
     

                                <div className="item">
                                    <img src={nodejsimg} alt="Skill1" />
                                    <h5>NodeJS</h5>
                                </div>

                                <div className="item">
                                    <img src={mongodbimg} alt="Skill 1" />
                                    <h5>MongoDB</h5>
                                </div>        
                            </Carousel>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={bootstrapimg} alt="Skill 1" />
                                    <h5>Bootstrap</h5>
                                </div> 

                                <div className="item">
                                    <img src={materialuiimg} alt="Skill 1" />
                                    <h5>MaterialUI</h5>
                                </div> 
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="skills background"/>
        </section>
    )
}

export default Skills
