import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/Navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbarStyle">
                <Container>
                    <Navbar.Brand href="#">PORTFOLIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about" className='navFont'>About</Nav.Link>
                            <Nav.Link href="#resume" className='navFont'>Resume</Nav.Link>
                            <Nav.Link href="#projects" className='navFont'>Projects</Nav.Link>
                            <Nav.Link href="#services" className='navFont'>Services</Nav.Link>
                            <Nav.Link href="#contact" className='navFont'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
