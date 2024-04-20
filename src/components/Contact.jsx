import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import '../assets/css/Contact.css';

const Contact = () => {
    const [rows, setRows] = useState(5); // Default number of rows
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission status
    const formRef = useRef(null); // Ref for accessing the form element

    useEffect(() => {
        const adjustRows = () => {
            const viewportWidth = window.innerWidth;
            if (viewportWidth >= 768 && viewportWidth <= 1024) {
                // Tablet view: Adjust rows to 3
                setRows(3);
            } else {
                // Default view: Keep rows at 5
                setRows(5);
            }
        };

        adjustRows();
        window.addEventListener('resize', adjustRows);
        return () => {
            window.removeEventListener('resize', adjustRows);
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true); // Set submitting state to true
        const formData = new FormData(event.target);
        formData.append("access_key", "4bbc7df8-c449-42f7-ad58-90e0aa93462a");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                console.log("Form submitted successfully!");
                window.alert("Your message has been sent!"); // Notify user with an alert
                formRef.current.reset(); // Reset the form fields
            } else {
                console.error("Form submission failed!");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false); // Reset submitting state
        }
    };

    return (
        <div className='contacts-section' id='contact'>
            <Container>
                <h1 className='heading'>Get In Touch!</h1>
                <p className='separator'>Ready to connect and collaborate? Reach out to me! Whether you have a project in mind, a question to ask, or just want to say hello, I'm here to listen. Your thoughts and ideas matter, and I'm excited to explore how we can work together to bring them to life. Feel free to drop me a message, and let's start the conversation.</p>
                <Row>
                    <Col lg={5} md={6} sm={12}>
                        <div className="contact-left-item d-flex">
                            <div className="icon-container">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="text-container">
                                <h3>Location:</h3>
                                <p>L-09, Navin Chawl, Upnagar, Nasik 422006</p>
                            </div>
                        </div>
                        <div className="contact-left-item d-flex">
                            <div className="icon-container">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <div className="text-container">
                                <h3>Email:</h3>
                                <p><a href="mailto:a.sahil0709@gmail.com">a.sahil0709@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="contact-left-item d-flex">
                            <div className="icon-container">
                                <i className="bi bi-phone"></i>
                            </div>
                            <div className="text-container">
                                <h3>Call:</h3>
                                <p><a href="tel:+9192841600068">+91 9284160068</a></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} md={6} sm={12}>
                        <div className="contact-right-item">
                            <div className="form">
                                <Form ref={formRef} onSubmit={handleSubmit}>
                                    <div className='form-column'>
                                        <Row>
                                            <Col lg={6} md={6} sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Your Name</Form.Label>
                                                    <Form.Control type="text" name="name" required />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} sm={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Your Email</Form.Label>
                                                    <Form.Control type="email" name="email" required />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="text" name="subject" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={rows} name="message" className='tablet-textarea' required />
                                        </Form.Group>
                                    </div>
                                    <div className="submit-container">
                                        <input type="submit" value={isSubmitting ? 'Submitting...' : 'Submit'} className='form-submit'/>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.3672067973011!2d73.82552458592761!3d19.97174546255595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebfa97d5a397%3A0xce4476ed2aee9add!2sCuemath%20Online%20Tution%20Center!5e0!3m2!1sen!2sin!4v1713459246574!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='home-location'></iframe>
                </div>
            </Container>
        </div >
    );
};

export default Contact;