import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/About.css";
import FearlessGirl from "../assests/FearlessGirl3.jpeg"
import { Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
            <Row className="pt-5 justify-content-center" >
                <Col md={6}>
                    <Image src={FearlessGirl} className="about-image" />
                </Col>
                <Col md={6} style={{ backgroundColor: '' }} className="d-flex flex-column align-items-center">
                    
                        <h1 className='about-heading'>About Us</h1>
                        <p className='pt-4 about-text'>
                            Welcome to Money Mentor! We're thrilled that you've chosen
                            to embark on this exciting journey of financial learning with us.
                            Our mission is to empower teenagers like you with essential
                            knowledge about the stock market in a fun and engaging way.
                        
                            We believe that understanding the stock
                            market can be not only educational but also enjoyable. We know that
                            learning about finance and investing might sound intimidating at
                            first, but we're here to change that perception.
                        
                            At Money Mentor, we provide a safe and risk-free environment
                            for you to explore the stock market through a simulated experience.
                            Our interactive quizzes, investment simulations, and educational
                            resources are designed to make learning about financial concepts a
                            breeze.
                        
                        </p>
                        
                        
                </Col>
            </Row>
        </Container>
  );
};

export default About;
