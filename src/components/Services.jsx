import React from 'react'
import '../assets/css/Services.css'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/images/services/web development.png'
import img2 from '../assets/images/services/ui-ux design.png'
import img3 from '../assets/images/services/dashboard creation.png'
import img4 from '../assets/images/services/database management.png'
import img5 from '../assets/images/services/content writing.png'
import img6 from '../assets/images/services/photography.png'

const Services = () => {
    const cardData1 = [
        {
            icon: img1,
            title: "Web Development",
            content: "Crafting dynamic and responsive websites tailored to your unique needs."
        },
        {
            icon: img2,
            title: "UI/UX Design",
            content: "Elevating user experiences through intuitive and visually appealing designs."
        },
        {
            icon: img3,
            title: "Dashboard Creation",
            content: "Transforming data into insightful visualizations for informed decision-making."
        },
        {
            icon: img4,
            title: "Database Management",
            content: "Efficient organization and maintenance of data for seamless operations."
        },
        {
            icon: img5,
            title: "Content Writing",
            content: "Compelling and engaging content creation for effective communication and better reach."
        },
        {
            icon: img6,
            title: "Photography",
            content: "Capturing moments with precision, bringing visuals to life. Elevating your brand through captivating imagery."
        }
    ]

    return (
        <>
            <div className='services-section' id='services'>
                <Container>
                    <h1 className='heading'>Services</h1>
                    <p className='separator'>Unlock the gateway to tailored solutions and transformative experiences – my Services are designed to elevate your digital presence and bring your ideas to life. As a developer, designer, and freelancer, I offer a spectrum of services encompassing web development, UI/UX design, photography, and more. Explore the array of services I offer and let's embark on a journey to enhance your digital footprint and make your vision a reality.</p>
                    <Row>
                        {cardData1.map((a) => {
                            return (
                                <Col lg={4} md={6} sm={12} className='services-card col-style'>
                                    <div className='d-flex'>
                                        <div className="icon-container">
                                            <img src={a.icon} alt="" />
                                        </div>
                                        <div className="text-container">
                                            <h3>{a.title}</h3>
                                            <p>{a.content}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Services