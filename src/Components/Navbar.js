import React from 'react'
import './Navbar.css'
import line from '../assets/line.png'
import { MdOutlineMenu } from "react-icons/md";
import { useState, useRef } from 'react'
import { Link } from 'react-scroll';
import { AiOutlineCloseCircle } from "react-icons/ai";
const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0"
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }
    return (
        <div className='navbar'>
            <p className='nav-mob-open' onClick={openMenu}><MdOutlineMenu /></p>
            <ul ref={menuRef} className='nav-menu'>
                <p className='nav-mob-close' onClick={closeMenu}><AiOutlineCloseCircle /></p>
                <li><Link to="home" className='link' activeClass="active"
                    smooth={true}
                    offset={20}
                    duration={300}><p onClick={() => setMenu("home")}>Home</p></Link>{menu === "home" ? <img src={line} alt='' /> : <></>}</li>
                <li><Link to="about" className='link'
                    smooth={true}
                    offset={20}
                    duration={500}><p onClick={() => setMenu("about")}>About Me</p></Link>{menu === "about" ? <img src={line} alt='' /> : <></>}</li>
                <li><Link to="projects" className='link' smooth={true}
                    offset={20}
                    duration={500}><p onClick={() => setMenu("projects")}>Projects</p></Link>{menu === "projects" ? <img src={line} alt='' /> : <></>}</li>
                <li><Link to="work" className='link' smooth={true}
                    offset={20}
                    duration={700}><p onClick={() => setMenu("work")}>My work</p></Link>{menu === "work" ? <img src={line} alt='' /> : <></>}</li>
                <li><Link to="contact" className='link' smooth={true}
                    offset={20}
                    duration={800}><p onClick={() => setMenu("contact")}>Contact</p></Link>{menu === "contact" ? <img src={line} alt='' /> : <></>}</li>
            </ul>
            <div className='nav-connect'><Link to="contact" className='link' smooth={true}
                offset={20}
                duration={1000}>Connent With Me</Link></div>

        </div>
    )
}

export default Navbar
