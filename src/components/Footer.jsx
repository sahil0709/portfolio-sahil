import React from 'react'
import '../assets/css/Footer.css'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <>

                <div className='footer-section'>
                    <div className="social-media">
                        <ul className='list-unstyled list-social d-flex gap-4'>
                            <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                            <li><a href="#"><i class="bi bi-twitter-x"></i></a></li>
                            <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                            <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <p>&#169; COPYRIGHT SAHIL ATUL. ALL RIGHTS RESERVED.</p>
                    </div>
                    <div className="designed-by">
                        <p>Designed by <strong>Sahil Atul.</strong></p>
                    </div>
                </div >

        </>
    )
}

export default Footer
