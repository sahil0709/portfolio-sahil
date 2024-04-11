import React from 'react'
import '../assets/css/Contact.css'
import { Col, Container, Row, Form } from 'react-bootstrap'

const Contact = () => {
    return (
        <>
            <div className='contacts-section' id='contact'>
                <Container>
                    <h1 className='heading'>Get In Touch!</h1>
                    <p className='separator'>Ready to connect and collaborate? Reach out to me! Whether you have a project in mind, a question to ask, or just want to say hello, I'm here to listen. Your thoughts and ideas matter, and I'm excited to explore how we can work together to bring them to life. Feel free to drop me a message, and let's start the conversation.</p>
                    <Row>
                        <Col lg={5} md={5} sm={12}>
                            <div className="contact-left-item d-flex">
                                <div className="icon-container">
                                    <i class="bi bi-geo-alt"></i>
                                </div>
                                <div className="text-container">
                                    <h3>Location:</h3>
                                    <p>L-09, Navin Chawl, Upnagar, Nasik 422006</p>
                                </div>
                            </div>
                            <div className="contact-left-item d-flex">
                                <div className="icon-container">
                                    <i class="bi bi-envelope"></i>
                                </div>
                                <div className="text-container">
                                    <h3>Email:</h3>
                                    <p><a href="mailto:a.sahil0709@gmail.com">a.sahil0709@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="contact-left-item d-flex">
                                <div className="icon-container">
                                    <i class="bi bi-phone"></i>
                                </div>
                                <div className="text-container">
                                    <h3>Call:</h3>
                                    <p><a href="tel:+9192841600068">+91 9284160068</a></p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} md={7} sm={12}>
                            <div className="contact-right-item">
                                <div className="form">
                                    <Form>
                                        <Row>
                                            <Col lg={6} md={6} sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Your Name</Form.Label>
                                                    <Form.Control type="text" required />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Your Email</Form.Label>
                                                    <Form.Control type="email" required />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={5} required />
                                        </Form.Group>
                                        <div className="submit-container">
                                            <input type='submit' formMethod='post' className='form-submit' />
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.367420989251!2d73.82555146301421!3d19.97160137339095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb5bff514c67%3A0x1e92eed79709bf40!2sTalathi%20Karyalay%20upnagar!5e0!3m2!1sen!2sin!4v1708694892165!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Container>
            </div >
        </>
    )
}

export default Contact
