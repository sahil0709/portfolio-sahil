import React from 'react'
import '../assets/css/Testimonials.css'
import { Container } from 'react-bootstrap'
import img1 from '../assets/images/services/content writing.png'
import img2 from '../assets/images/services/dashboard creation.png'
import img3 from '../assets/images/services/database management.png'

const Testimonials = () => {

    return (
        <>
            <div className="testimonials-section">
                <Container>
                    <h1 className='heading'>Testimonails</h1>
                    <p className='separator'>The Testimonials section is a testament to the collaborative spirit and the impact of my services. Discover the authentic reflections and experiences shared by clients, partners, and collaborators. These testimonials speak volumes about the dedication, creativity, and professionalism that define my approach to every project. Dive into the words of those who have witnessed the transformative power of collaboration, and let their stories paint a vivid picture of the quality and excellence that await you.</p>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="testimonial-container">
                                    <div className="testimonial-text">
                                        <p><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ipsum voluptatem quia, odio ratione optio nisi sed nemo alias animi ipsam soluta ut, deserunt explicabo mollitia magni molestiae? Modi, facere?</em></p>
                                    </div>
                                    <div className="testimonial-img">
                                        <img src={img1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={img2} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={img3} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Testimonials