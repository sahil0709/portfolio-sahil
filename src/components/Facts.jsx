import React from 'react';
import '../assets/css/Facts.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Facts = () => {
    const cardData = [
        {
            icon: <i className="bi bi-emoji-smile"></i>,
            count: 4,
            text: `Happy Clients`,
        },
        {
            icon: <i className="bi bi-journal-code"></i>,
            count: 3,
            text: `Projects Delivered`,
        },
        {
            icon: <i className="bi bi-headset"></i>,
            count: 540,
            text: `Hours Of Support Provided`,
        },
        {
            icon: <i className="bi bi-people"></i>,
            count: 7,
            text: `Cups Of Coffee`,
        },
    ];

    return (
        <>
            <div className='facts'>
                <Container>
                    <h1 className='heading'>Facts</h1>
                    <p className='separator'>Dive into the fascinating facets of my journey as a software developer and UI/UX designer. From lines of code to pixel-perfect designs, these fun facts illuminate the unique blend of creativity and technical prowess that define my path in the world of development and design.</p>
                    <Row className='fact-cards'>
                        {cardData.map((a) => (
                            <Col md={6} lg={3}>
                                <Card.Body>
                                    <Row>
                                        <Col className='icon'>{a.icon}</Col>
                                        <Col>
                                            <h1 className='count'><CountUp start={0} end={a.count} duration={3} /></h1>
                                            <p className='text'>{a.text}</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Facts;