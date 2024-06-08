import React from 'react'
import './About.css'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
                <hr />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>Hello! I’m Karthik, a recent graduate with a B.Tech in Electronics and Communication Engineering from Sri Sarathi Institute of Engineering and Technology. I have completed a 6-month Java Full Stack Development course at Skill Buz. My technical skills span across front-end and back-end development, and I am proficient in Java, React.js, and various web technologies. I am passionate about building scalable web applications and continuously improving my skill set.</p>


                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>React</p><hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>Java</p><hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>J2EE</p><hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>SQL</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default About
