import React from 'react'
import '../assets/css/Footer.css'

const Footer = () => {
    return (
        <>

            <div className='footer-section'>
                <div className="social-media">
                    <ul className='list-unstyled list-social d-flex gap-4'>
                        <li><a href="https://www.facebook.com/a.sahil.923" target='blank'><i class="bi bi-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/sa.hilarious_/" target='blank'><i class="bi bi-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/asahilatul/" target='blank'><i class="bi bi-linkedin"></i></a></li>
                        <li><a href="https://github.com/sahil0709/" target='blank'><i class="bi bi-github"></i></a></li>
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
