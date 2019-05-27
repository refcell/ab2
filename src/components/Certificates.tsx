import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const newNextIcon = <span aria-hidden="true">
    <img style={{ height: "10vw", width: "10vw", backgroundSize: "contain" }} src={require("../assets/other/next.png")} alt="next icon" />
</span>;

const newPrevIcon = <span aria-hidden="true">
    <img style={{ height: "10vw", width: "10vw", backgroundSize: "contain" }} src={require("../assets/other/previous.png")} alt="next icon" />
</span>;

export interface CertificatesProps { }

const Certificates: React.SFC<CertificatesProps> = () => {
    return (
        <Carousel className="certificatesWrapper" prevIcon={newPrevIcon} nextIcon={newNextIcon}>
            <Carousel.Item>
                <img className="certificates" src={require("../assets/certificates/react.png")} alt="react certificate"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img className="certificates" src={require("../assets/certificates/nodejs.png")} alt="nodejs certificate"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img className="certificates" src={require("../assets/certificates/stk.png")} alt="stk certificate"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img className="certificates" src={require("../assets/certificates/docker.png")} alt="docker certificate"></img>
            </Carousel.Item>
        </Carousel >
    );
}

export default Certificates;