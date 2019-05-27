import * as React from 'react';
import Social from "./Social";

export interface FooterProps {
    color: string
}

const Footer: React.SFC<FooterProps> = ({ color }) => {
    return (
        <div className="footer" style={{ backgroundColor: color }}>
            <Social />
            <p>© 2019 Andreas Bigger. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;