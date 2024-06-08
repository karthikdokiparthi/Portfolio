import React from 'react'
import './Contact.css';
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
const contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a94843b5-0379-4239-97a3-a5b08277ede3");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };
    return (
        <>
            <div id='contact' className='contact'>
                <div className='contact-title'>
                    <h1>Get in touch</h1>
                    <hr />
                </div>
                <div className='contact-section'>
                    <div className='contact-left'>
                        <h1>Let's talk</h1>
                        <p>I am actively seeking job opportunities in Full Stack Java Development. Please feel free to contact me through any of the following channels:</p>
                        <div className='contact-details'>
                            <div className='contact-detail'>
                                <p className='icon'>  <CiMail /></p><p>dokiparthikarthik@gmail.com</p>
                            </div>
                            <div className='contact-detail'>
                                <p className='icon'><IoCallOutline /></p><p>+91 8464911426</p>
                            </div>
                            <div className='contact-detail'>
                                <p className='icon'> <CiLinkedin /></p><p>KarthikDokiparthi</p>
                            </div>
                        </div>
                        <p>I am eager to contribute to a dynamic team and take on challenging projects. Looking forward to connecting with you!</p>
                    </div>
                    <form onSubmit={onSubmit} className='contact-right'>
                        <label htmlFor=''>Your Name</label>
                        <input type='text' placeholder='Enter your name' name='name' />
                        <label htmlFor=''>Your Email</label>
                        <input type='text' placeholder='Enter your email' name='email' />
                        <label htmlFor=''>Write your message</label>
                        <textarea name="meassage" rows='8' placeholder='Enter your message'></textarea>
                        <button type='submit' className='contact-submit'>Submit now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default contact
