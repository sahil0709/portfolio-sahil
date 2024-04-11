import React from 'react'
import '../assets/css/Skills.css'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'

const Skills = () => {
    const progressBars1 = [
        {
            skill: "HTML",
            progress: 95,
        },
        {
            skill: "CSS",
            progress: 85,
        },
        {
            skill: "JavaScript",
            progress: 50,
        },
    ]

    const progressBars2 = [
        {
            skill: "SQL",
            progress: 60,
        },
        {
            skill: "Figma",
            progress: 100,
        },
        {
            skill: "Photoshop",
            progress: 70,
        },
    ]

    return (
        <>
            <div className='skills-section'>
                <Container>
                    <h1 className='heading'>Skills</h1>
                    <p className='separator'>Embarking on the journey of innovation and problem-solving, my skill set serves as the compass guiding me through the ever-evolving landscape of technology. Explore the tools, languages, and frameworks that empower me to turn ideas into reality, and discover the expertise that fuels my passion for creating impactful solutions.</p>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            {
                                progressBars1.map((a) => (
                                    <>
                                        <p className='skill'>{a.skill}</p>
                                        <ProgressBar now={a.progress} className='progBar' />
                                    </>
                                ))
                            }
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            {
                                progressBars2.map((a) => (
                                    <>
                                        <p className='skill'>{a.skill}</p>
                                        <ProgressBar now={a.progress} className='progBar' />
                                    </>
                                ))
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Skills