import React from 'react'
import logo from '../img/logo.png';
import insta from '../img/insta.png';
import github from '../img/github.png';
import linkin from '../img/linkedin.png';
import mail from '../img/email.png';

const footer = () => {
    return (
        <div>

            <footer>

                <b> © 2022 Copyright <a href="https://www.linkedin.com/in/varun-malpani-aaa784233/"
                >Varun</a></b>
                <div className='icons'><a href="https://www.instagram.com/varunmalpani.vm01/" title="instagram" className='socials'><img src={insta} className='logo2' /></a>
                    <a href="https://github.com/Varun-45" title="instagram" className='socials'><img src={github} className='logo2' /></a>
                    <a href="https://www.linkedin.com/in/varun-malpani-aaa784233/" title="instagram" className='socials'><img src={linkin} className='logo2' /></a>
                    <a href="mailto:varunmalpani.vm01@gmail.com" title="instagram" className='socials'><img src={mail} className='logo2' /></a></div>
            </footer>
        </div>
    )
}

export default footer