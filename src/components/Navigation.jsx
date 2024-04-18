import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/Navigation.css';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 600;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className={scrolled ? 'navbarStyle scrolled' : 'navbarStyle'}
            style={{ display: scrolled ? 'block' : 'none' }}
        >
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
                        <a href='/Sahil (April 2024).pdf' className='download-resume' download>Download Latest Resume</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;