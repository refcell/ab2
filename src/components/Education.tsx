import * as React from 'react';

export interface EducationProps {

}

const Education: React.SFC<EducationProps> = () => {
    return (
        <div className="education">
            <div className="school">
                <img src={require("../assets/education/usc.png")} alt="usc"></img>
                <div className="headerWrapper"><h2>University of Southern California</h2></div>
                <p>I am a Viterbi Fellow majoring in computer science at USC.</p>
            </div>
            <div className="school">
                <img src={require("../assets/education/harvard.png")} alt="harvard"></img>
                <div className="headerWrapper"><h2>Harvard University Summer School</h2></div>
                <p>I studied "Voie-First/Text to Speech" with Professor Arthur Toth, a creator of Alexa.</p>
            </div>
            <div className="school">
                <img src={require("../assets/education/csh.jpg")} alt="csh"></img>
                <div className="headerWrapper"><h2>Cold Spring Harbor High School</h2></div>
                <p>I graduated Cold Spring Harbor High School in a class of 160 students.</p>
            </div>
        </div>
    );
}

export default Education;