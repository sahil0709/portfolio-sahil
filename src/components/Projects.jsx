import React from 'react'
import '../assets/css/Projects.css'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/images/projects/sumago.jpg'
import img2 from '../assets/images/projects/taxi.jpg'
import img3 from '../assets/images/projects/music player.jpg'
import img4 from '../assets/images/projects/restaurant.jpg'
import img5 from '../assets/images/projects/shopping app.jpg'
import img6 from '../assets/images/projects/money app.jpg'
import img7 from '../assets/images/projects/landing page.jpg'
import img8 from '../assets/images/projects/dashboard.jpg'
import img9 from '../assets/images/projects/portfolio.jpg'

const Projects = () => {
    return (
        <>
            <div className='project-section' id='projects'>
                <Container>
                    <h1 className='heading'>Projects</h1>
                    <p className='separator'>Step into the realm of innovation and creativity – my Projects showcase the culmination of my passion for development, design, and problem-solving. Each project is a journey, a story, and a testament to my skills as a developer, designer, and freelancer. From crafting seamless websites to conceptualizing visually stunning designs, my projects reflect a dedication to excellence and a commitment to pushing the boundaries of what's possible.</p>
                    <ul class="nav mt-5 mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active tab-style" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tab-style" id="pills-academic-tab" data-bs-toggle="pill" data-bs-target="#pills-academic" type="button" role="tab" aria-controls="pills-academic" aria-selected="false">Academic</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tab-style" id="pills-mern-tab" data-bs-toggle="pill" data-bs-target="#pills-mern" type="button" role="tab" aria-controls="pills-mern" aria-selected="false">MERN</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tab-style" id="pills-design-tab" data-bs-toggle="pill" data-bs-target="#pills-design" type="button" role="tab" aria-controls="pills-design" aria-selected="false">UI/UX</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabindex="0">
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img1} alt="Sumago Infotech Pvt Ltd Main Website" />
                                        <div className="textbox">Sumago Infotech Pvt Ltd Main Website</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img2} alt="Demand-Supply Oriented Taxi Recommendation System Android App" />
                                        <div className="textbox">Demand-Supply Oriented Taxi Recommendation System Android App</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img3} alt="Offline Music Player React App" />
                                        <div className="textbox">Offline Music Player React App</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img4} alt="RDBMS for Restaurant Management" />
                                        <div className="textbox">RDBMS for Restaurant Management</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img5} alt="UI Design for Mock Shopping App" />
                                        <div className="textbox">UI Design for Mock Shopping App</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img6} alt="UI Design for Mock Finance App" />
                                        <div className="textbox">UI Design for Mock Finance App</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img7} alt="UI Design for the Landing Page of a Mock Credit Card Company" />
                                        <div className="textbox">UI Design for the Landing Page of a Mock Credit Card Company</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img8} alt="Admin Dashboard for Sumago Infotech's Main Website" />
                                        <div className="textbox">Admin Dashboard for Sumago Infotech's Main Website</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img9} alt="The Portfolio You're Looking At Right Now" />
                                        <div className="textbox">The Portfolio You're Looking At Right Now 😉</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div class="tab-pane fade" id="pills-academic" role="tabpanel" aria-labelledby="pills-academic-tab" tabindex="0">
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img2} alt="Demand-Supply Oriented Taxi Recommendation System Android App" />
                                        <div className="textbox">Demand-Supply Oriented Taxi Recommendation System Android App</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img4} alt="RDBMS for Restaurant Management" />
                                        <div className="textbox">RDBMS for Restaurant Management</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div class="tab-pane fade" id="pills-mern" role="tabpanel" aria-labelledby="pills-mern-tab" tabindex="0">
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img1} alt="Sumago Infotech Pvt Ltd Main Website" />
                                        <div className="textbox">Sumago Infotech Pvt Ltd Main Website</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img3} alt="Offline Music Player React App" />
                                        <div className="textbox">Offline Music Player React App</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img8} alt="Admin Dashboard for Sumago Infotech's Main Website" />
                                        <div className="textbox">Admin Dashboard for Sumago Infotech's Main Website</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img9} alt="The Portfolio You're Looking At Right Now" />
                                        <div className="textbox">The Portfolio You're Looking At Right Now 😉</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div class="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab" tabindex="0">
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img5} alt="UI Design for Mock Shopping App" />
                                        <div className="textbox">UI Design for Mock Shopping App</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img6} alt="UI Design for Mock Finance App" />
                                        <div className="textbox">UI Design for Mock Finance App</div>
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="img-container">
                                        <img src={img7} alt="UI Design for the Landing Page of a Mock Credit Card Company" />
                                        <div className="textbox">UI Design for the Landing Page of a Mock Credit Card Company</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Projects
