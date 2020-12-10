import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <a href="https://github.com/cblokkeel" target='_blank' rel='noreferrer'>
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/colin-blokkeel-5795531b9/" target='_blank' rel='noreferrer'>
                <FaLinkedin/>
            </a>
        </footer>
    );
};

export default Footer;