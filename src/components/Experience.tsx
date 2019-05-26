import * as React from 'react';

export interface ExperienceProps {

}

const Experience: React.SFC<ExperienceProps> = () => {
    return (
        <div className="experience">
            <div className="company">
                <img src={require("../assets/experience/janam.png")} alt="janam"></img>
                <div className="headerWrapper"><h2>Janam Technologies</h2></div>
                <p>During the summer of 2017, I worked on service repair: fixing scanners, chargers, hardware and software.</p>
            </div>
            <div className="company">
                <img src={require("../assets/experience/hacksc.png")} alt="hacksc"></img>
                <div className="headerWrapper"><h2>Director of Hacker Experience</h2></div>
                <p>I managed much of the logistics relating to the 700+ attendees at HackSC 2019.</p>
            </div>
            <div className="company">
                <img src={require("../assets/experience/adms.jpg")} alt="adms"></img>
                <div className="headerWrapper"><h2>Undergraduate Researcher</h2></div>
                <p>I am building a web dashboard to visualize traffic data.</p>
            </div>
        </div>
    );
}

export default Experience;