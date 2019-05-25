import * as React from 'react';

export interface IntroProps {

}

const Intro: React.SFC<IntroProps> = () => {
    return (
        <div className="Intro">
            <h2>Hi, I'm Andreas Bigger, an undergraduate Viterbi Fellow studying computer science at USC with a slight entrepreneurial flair.</h2>
        </div>
    );
}

export default Intro;