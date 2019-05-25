import * as React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logos/ABWhite.png';
import clickDown from '../assets/other/angle-down.svg';

export interface HeaderProps {

}

const Header: React.SFC<HeaderProps> = () => {
    return (
        <div className="frontpage">
            <div className="navbar">
                <a href="/">
                    <img src={logo} alt="logoNoBackground" />
                </a>
            </div>
            <div className="HeaderBody">
                <div className="centeredTitle">
                    <h1 className="title">Relentlessly Creating.</h1>
                    <h1 className="title">More Below.</h1>
                </div>
            </div>
            <div className="click-down-container">
                <Link to="main" smooth={true} duration={1000}>
                    <img className="click-down" src={clickDown} alt="Click to Scroll" />
                </Link>
            </div>
        </div>
    );
}

export default Header;