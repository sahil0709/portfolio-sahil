import React from 'react';
import '../assets/css/Hero.css';
import { Container } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';
import img from '../assets/images/Me.jpg';

const Hero = () => {
    const heroStyle = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <div id='#hero' className='home' style={heroStyle}>
            <Container>
                <div className='hero-content'>
                    <h1>I'm
                        <ReactTyped
                            strings={['Sahil Atul','a Developer', 'a Designer', 'a Photographer', 'a Freelancer']}
                            typeSpeed={70}
                            backSpeed={35}
                            loop
                            className='ms-2'
                        />
                    </h1>
                    <p>Developer, Designer, Photographer, Freelancer</p>
                    <ul className='list-unstyled list-social d-flex gap-4'>
                        <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="#"><i class="bi bi-twitter-x"></i></a></li>
                        <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                        <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Hero;