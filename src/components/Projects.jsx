import React from 'react';
import '../assets/css/Projects.css';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../assets/images/projects/sumago.jpg';
import img2 from '../assets/images/projects/taxi.jpg';
import img3 from '../assets/images/projects/music player.jpg';
import img4 from '../assets/images/projects/restaurant.jpg';
import img5 from '../assets/images/projects/shopping app.jpg';
import img6 from '../assets/images/projects/money app.jpg';
import img7 from '../assets/images/projects/landing page.jpg';
import img8 from '../assets/images/projects/dashboard.jpg';
import img9 from '../assets/images/projects/portfolio.jpg';

const projectImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const projectData = [
    { id: 'all', label: 'All', projects: [
        { image: 0, title: 'Sumago Infotech Pvt Ltd Main Website' },
        { image: 1, title: 'Demand-Supply Oriented Taxi Recommendation System Android App' },
        { image: 2, title: 'Offline Music Player React App' },
        { image: 3, title: 'RDBMS for Restaurant Management' },
        { image: 4, title: 'UI Design for Mock Shopping App' },
        { image: 5, title: 'UI Design for Mock Finance App' },
        { image: 6, title: 'UI Design for the Landing Page of a Mock Credit Card Company' },
        { image: 7, title: 'Admin Dashboard for Sumago Infotech\'s Main Website' },
        { image: 8, title: 'The Portfolio You\'re Looking At Right Now 😉' }
    ]},
    { id: 'academic', label: 'Academic', projects: [
        { image: 1, title: 'Demand-Supply Oriented Taxi Recommendation System Android App' },
        { image: 3, title: 'RDBMS for Restaurant Management' }
    ]},
    { id: 'mern', label: 'MERN', projects: [
        { image: 0, title: 'Sumago Infotech Pvt Ltd Main Website' },
        { image: 2, title: 'Offline Music Player React App' },
        { image: 7, title: 'Admin Dashboard for Sumago Infotech\'s Main Website' },
        { image: 8, title: 'The Portfolio You\'re Looking At Right Now 😉' }
    ]},
    { id: 'design', label: 'UI/UX', projects: [
        { image: 4, title: 'UI Design for Mock Shopping App' },
        { image: 5, title: 'UI Design for Mock Finance App' },
        { image: 6, title: 'UI Design for the Landing Page of a Mock Credit Card Company' }
    ]}
];

const Projects = () => {
    return (
        <>
            <div className='project-section' id='projects'>
                <Container>
                    <h1 className='heading'>Projects</h1>
                    <p className='separator'>Step into the realm of innovation and creativity – my Projects showcase the culmination of my passion for development, design, and problem-solving. Each project is a journey, a story, and a testament to my skills as a developer, designer, and freelancer. From crafting seamless websites to conceptualizing visually stunning designs, my projects reflect a dedication to excellence and a commitment to pushing the boundaries of what's possible.</p>
                    <ul className="nav mt-5 mb-3 justify-content-center" id="pills-tab" role="tablist">
                        {projectData.map((tab, index) => (
                            <li className="nav-item" role="presentation" key={index}>
                                <button className={`nav-link ${index === 0 ? 'active' : ''} tab-style`} id={`pills-${tab.id}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${tab.id}`} type="button" role="tab" aria-controls={`pills-${tab.id}`} aria-selected={index === 0 ? 'true' : 'false'}>{tab.label}</button>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        {projectData.map((tab, index) => (
                            <div className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} id={`pills-${tab.id}`} role="tabpanel" aria-labelledby={`pills-${tab.id}-tab`} key={index}>
                                <Row>
                                    {tab.projects.map((project, projectIndex) => (
                                        <Col lg={4} md={6} sm={12} key={projectIndex}>
                                            <div className="img-container">
                                                <img src={projectImages[project.image]} alt={project.title} />
                                                <div className="textbox">{project.title}</div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Projects;