import React from 'react'
import '../assets/css/Resume.css'
import { Col, Container, Row } from 'react-bootstrap'

const Resume = () => {
    return (
        <>
            <div className='resume-section' id='resume'>
                <Container>
                    <h1 className='heading'>Resume</h1>
                    <p className='separator'>From impactful work experiences and educational pursuits to innovative projects that reflect my skills and passions, this section encapsulates the essence of my career so far. Dive into the details of my journey, witnessing the convergence of education, hands-on experience, and a commitment to delivering excellence in every project.</p>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h3 className='resume-title'>Education</h3>
                            <div className="resume-item">
                                <h4>Bachelor of Engineering (Information Technology)</h4>
                                <h5>Batch of 2022</h5>
                                <p className='inst'><em>K. K. Wagh Institute of Engineering Education and Research (SPPU)</em></p>
                                <p className='ed-sum'>As a Bachelor of Engineering in Information Technology graduate, I have acquired a solid foundation in IT fundamentals, covering a diverse range of subjects. My academic journey has equipped me with in-depth knowledge in areas such as software development, database management, networking, and system analysis. The practical aspects of my education, combined with hands-on projects and coursework, have refined my problem-solving skills and prepared me to navigate the dynamic and ever-evolving landscape of information technology.</p>
                            </div>
                            <div className="resume-item">
                                <h4>10+2 Science (PCM)</h4>
                                <h5>Batch of 2018</h5>
                                <p className='inst'><em>Bhonsala Military School (MSBSHSE)</em></p>
                                <p className='ed-sum'>My educational journey through 11th and 12th grades at Bhonsala Military School has been a transformative experience. This institution has not only provided me with a strong academic foundation but has also instilled essential values of discipline, leadership, and teamwork.</p>
                            </div>
                            <div className="resume-item">
                                <h4>10th</h4>
                                <h5>Batch of 2016</h5>
                                <p className='inst'><em>St. Xavier's High School (MSBSHSE)</em></p>
                                <p className='ed-sum'>My formative years at St. Xavier's High School were marked by a nurturing academic environment that prioritized both intellectual growth and character development. As a student, I benefited from a comprehensive curriculum that fostered a love for learning and encouraged holistic development.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h3 className='resume-title'>Professional Experience</h3>
                            <div className="resume-item">
                                <h4>MERN Developer Trainee</h4>
                                <h5>Nov, 2023 - Present</h5>
                                <p className='inst'><em>Sumago Infotech Private Limited</em></p>
                                <ul>
                                    <li>Actively participated in both front-end and back-end development tasks.</li>
                                    <li>Worked on projects involving React.js for creating responsive UIs and Node.js and Express.js for crafting RESTful APIs.</li>
                                    <li>Developed proficiency in crafting user-friendly interfaces.</li>
                                    <li>Actively took part in team-based projects.</li>
                                    <li>Aimed for clear communication within the development team and a solid understanding of project components.</li>
                                    <li>Applied current programming standards and methodologies to all relevant projects and activities.</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Graduate Trainee</h4>
                                <h5>Sep, 2022 - Nov, 2022</h5>
                                <p className='inst'><em>KPIT Technologies Private Limited</em></p>
                                <ul>
                                    <li>Underwent training in Object-Oriented Programming principles, learning the fundamentals of encapsulation, inheritance, and polymorphism.</li>
                                    <li>Understood the basics of C++ programming, gaining hands-on experience in developing efficient and object-oriented solutions. Applied concepts like classes, objects, and templates to solve real-world problems.</li>
                                    <li>Engaged in various coding exercises and projects, strengthening my problem-solving skills by implementing algorithms and logical structures using C++ and Java.</li>
                                    <li>Received mentorship from professionals in the field, providing valuable guidance. Benefited from a supportive learning environment conducive to skill development.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Resume
