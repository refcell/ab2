import * as React from 'react';

export interface ProjectsProps {

}

const Projects: React.SFC<ProjectsProps> = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="column">
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/D2C.png")} alt="d2c"></img>
                        <div className="text">District 2 Capital</div>
                    </div>
                    {/*<div className="text">District 2 Capital</div>*/}
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/ringtune.png")} alt="ringtune"></img>
                        <div className="text">RingTune</div>
                    </div>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/adms.png")} alt="adms"></img>
                        <div className="text">ADMS</div>
                    </div>
                </div>
                <div className="column">
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/hacksc.png")} alt="hacksc"></img>
                        <div className="text">HackSC</div>
                    </div>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/cshrobotics.jpg")} alt="cshrobotics"></img>
                        <div className="text">CSH Robotics</div>
                    </div>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/pkt.png")} alt="pkt"></img>
                        <div className="text">PKT</div>
                    </div>
                </div>
                <div className="column">
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/birds.png")} alt="birds"></img>
                        <div className="text">Birds</div>
                    </div>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/particles.png")} alt="particles"></img>
                        <div className="text">Particles</div>
                    </div>
                    <div className="imgWrapper">
                        <img src={require("../assets/projects/asteroid.png")} alt="asteroid"></img>
                        <div className="text">Asteroid</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Projects;