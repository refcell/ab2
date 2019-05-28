import * as React from 'react';

export interface IntroProps {

}

const Intro: React.SFC<IntroProps> = () => {
    return (
        <div className="Intro">
            <h4>Hi, I'm Andreas Bigger, an undergraduate Viterbi Fellow studying computer science at USC with an entrepreneurial flair.</h4>
        </div>
    );
}

export default Intro;