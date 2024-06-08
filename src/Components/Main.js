import React from 'react'
import './Main.css'
import { Link } from 'react-scroll';
import profileb from '../../src/assets/profileb.png'
const Main = () => {
    return (
        <>
            <div id='home' className='hero'>
                <img src={profileb} alt='' />
                <h1><span>I'm Karthik,</span> Java Full Stack Developer</h1>
                <p>I'm a recent graduate with a B.Tech in Electronics and Communication Engineering. I have completed a 6-month Java Full Stack course at Skill Buz and an internship at TopperWorld. My journey in tech has been driven by curiosity and a desire to create impactful solutions through code</p>
                <div className='hero-action'>
                    <div className='hero-connect'><Link to="contact" className='link' smooth={true}
                        offset={20}
                        duration={1000}>Connect with me</Link></div>
                    <div className='hero-resume'><a href='https://drive.google.com/file/d/1Eo6FlUnIZo63CNeJammwFoIleDmeP2eh/view?usp=drive_link'>My resume</a></div>

                </div>
            </div>
        </>
    )
}

export default Main
