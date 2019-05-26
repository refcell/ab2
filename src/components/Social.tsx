import * as React from 'react';

export interface SocialProps {

}

const Social: React.SFC<SocialProps> = () => {
    return (
        <div className="social">
            <a href="http://instagram.com/andreaslbigger/"><img src={require("../assets/social/instagram.png")} alt="instagram"></img></a>
            <a href="http://twitter.com/abigger87"><img src={require("../assets/social/twitter.png")} alt="twitter"></img></a>
            <a href="http://github.com/abigger87"><img src={require("../assets/social/github.png")} alt="github"></img></a>
            <a href="http://bitbucket.com/abigger87"><img src={require("../assets/social/bitbucket.png")} alt="github"></img></a>
            <a href="http://facebook.com/abigger87"><img src={require("../assets/social/facebook.png")} alt="facebook"></img></a>
            <a href="http://linkedin.com/in/andreasbigger/"><img src={require("../assets/social/linkedin.png")} alt="linkedin"></img></a>
        </div>
    );
}

export default Social;