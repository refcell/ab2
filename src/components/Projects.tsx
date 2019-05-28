import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export interface ProjectsProps { }

const Projects: React.SFC<ProjectsProps> = () => {
    return (
        <Container fluid={true} className="projContainer">
            <Row noGutters={true}>
                <Col>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/D2C.png")} alt="d2c"></img>
                        <div className="text">District 2 Capital</div>
                    </div>
                </Col>
                <Col>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/hacksc.png")} alt="hacksc"></img>
                        <div className="text">HackSC</div>
                    </div>
                </Col>
                <Col >
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/birds.png")} alt="birds"></img>
                        <div className="text">Birds</div>
                    </div>
                </Col>
            </Row>
            <Row noGutters={true}>
                <Col>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/ringtune.png")} alt="ringtune"></img>
                        <div className="text">RingTune</div>
                    </div>
                </Col>
                <Col>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/cshrobotics.jpg")} alt="cshrobotics"></img>
                        <div className="text">CSH Robotics</div>
                    </div>
                </Col>
                <Col>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/particles.png")} alt="particles"></img>
                        <div className="text">Particles</div>
                    </div>
                </Col>
            </Row>
            <Row noGutters={true}>
                <Col>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/adms.png")} alt="adms"></img>
                        <div className="text">ADMS</div>
                    </div>
                </Col>
                <Col>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/pkt.png")} alt="pkt"></img>
                        <div className="text">PKT</div>
                    </div>
                </Col>
                <Col>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/asteroid.png")} alt="asteroid"></img>
                        <div className="text">Asteroid</div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;