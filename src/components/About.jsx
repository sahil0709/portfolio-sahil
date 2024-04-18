import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../assets/css/About.css'
import img from '../assets/images/Photo.jpg'

const About = () => {
    return (
        <>
            <div className="about-bg" id='about'>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} className='about-desc'>
                            <p className='p-heading'>As a MERN developer, I specialize in crafting end-to-end web applications. My commitment lies in delivering seamless and user-centric experiences.</p>
                            <p className='separator'>Within the MERN stack, my focus extends to front-end development using React, ensuring engaging and responsive user interfaces. On the back end, my proficiency lies in Node.js and Express, guaranteeing efficient server-side functionality. With a keen eye on data management, I leverage MongoDB to maintain a robust and streamlined database structure. Passionate about delivering high-quality, feature-rich applications, I continuously seek innovative solutions for an enhanced user experience.</p>
                        </Col>
                    </Row>
                    <Row className='about-row-2'>
                        <Col lg={4} md={6} sm={12}>
                            <div className='img-bg'>
                                <img src={img} alt="" />
                            </div>
                        </Col>
                        <Col className='deets'>
                            <h1 className='p-heading'>MERN Developer & UI/UX Designer</h1>
                            <p className='separator'>Proficient in building web applications using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. Additionally, well-versed with tools such as Figma and Adobe Photoshop for creating impressive UI/UX Design.</p>
                            <Row className='too-much-deets'>
                                <Col>
                                    <ul className='list-unstyled'>
                                        <li><span>&#62; Birth Date:</span> 7 September 2000</li>
                                        <li><span>&#62; Education:</span> Bachelor of Engineering (IT)</li>
                                        <li><span>&#62; Contact:</span> <a href="tel:+919284160068">+91 9284160068</a></li>
                                        <li><span>&#62; City:</span> Nasik, Maharashtra, India</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul className='list-unstyled'>
                                        <li><span>&#62; E-mail:</span> <a href="mailto:a.sahil0709@gmail.com" target='blank'>a.sahil0709@gmail.com</a></li>
                                        <li><span>&#62; LinkedIn:</span> <a href="https://www.linkedin.com/in/asahilatul/" target='blank'>www.linkedin.com/in/asahilatul/</a></li>
                                        <li><span>&#62; GitHub:</span> <a href="https://github.com/sahil0709" target='blank'> https://github.com/sahil0709</a></li>
                                        <li><span>&#62; Freelance:</span> Available</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default About