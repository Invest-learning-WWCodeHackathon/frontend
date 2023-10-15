import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import HeroImage from "../assests/Hero.png"
import "../styles/Hero.css";

const Hero = () =>{
    return(
        <Container>
            <Row className="pt-5 justify-content-center" style={{ height: '100%', backgroundColor: ""}}>
            <Col md={6} style={{ backgroundColor: '' }} className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="hero-heading">Money Mentor</h1>
                <h4 className="hero-text">Welcome to the World of <span> Stock Market</span> Adventures</h4>
            </Col>

                <Col md={6}>
                    <Image src={HeroImage} style={{ width: '100%', height: 'auto' }} />
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;