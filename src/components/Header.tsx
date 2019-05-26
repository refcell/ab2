import * as React from 'react';
import { Link } from 'react-scroll';
import clickDown from '../assets/other/angle-down.svg';
import Social from './Social';
export interface HeaderProps {
    logo: any
}

const Header: React.SFC<HeaderProps> = ({ logo }) => {
    return (
        <div className="frontpage" id="frontpage">
            <div className="navbar">
                <a href="/">
                    <img src={logo} alt="logoNoBackground" />
                </a>
            </div>
            <div className="HeaderBody">
                <div className="centeredTitle">
                    <img src={require("../assets/profile/profileRoundLarge.png")} alt="profile"></img>
                    <Social />
                    <h1 className="title">Relentlessly Creating.</h1>
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