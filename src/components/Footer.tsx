import * as React from 'react';
import Social from "./Social";

export interface FooterProps { }

const Footer: React.SFC<FooterProps> = () => {
    return (
        <div className="footer">
            <Social />
            <p>© 2019 Andreas Bigger. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;