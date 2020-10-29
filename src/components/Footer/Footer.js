import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';

import "./../styles/Footer.scss";

const Footer = () => {
    return (
        <div className="Footer">
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col sm={1}><FaMapMarkerAlt/></Col>
                            <Col sm={11}>21 Revolution Street <br/><b>Parice,France</b></Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={1}><FaPhoneAlt/></Col>
                            <Col sm={11}><b>+1 555 123456</b></Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={1}><FaEnvelope/></Col>
                            <Col sm={11}><b style={{color: '#889de3'}}>support@company.com</b></Col>
                        </Row>
                    </Col>

                    <Col>
                        <b>About the Company</b><br/><br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis quibusdam alias! Eaque blanditiis magni libero, ex perspiciatis dolorum explicabo asperiores similique odio quis a nobis nihil assumenda reiciendis quo?</p>
             
                        <div className="icons"><FaFacebook/></div>
                        <div className="icons"><FaTwitter/></div>
                        <div className="icons"><FaLinkedinIn/></div>
                        <div className="icons"><FaGithubAlt/></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;