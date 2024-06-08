import React from 'react';
import './projects.css'
import { FaArrowRightLong } from "react-icons/fa6";
const projects = [
    { s_no: "01", s_name: "BookmyShow", s_desc: "I Developed a 'BookMyShow' clone using HTML, CSS, and JavaScript for online movie ticket booking." },
    { s_no: "02", s_name: "Solar System", s_desc: "Created an interactive solar system model using HTML and CSS." },
    { s_no: "03", s_name: "Travel application", s_desc: "I Developed a travel application using React for an enhanced user experience and dynamic content display." },
    { s_no: "04", s_name: "to-do list application", s_desc: "I Built a to-do list application using React for efficient task management and user interactivity." },
    { s_no: "05", s_name: "Stop Watch", s_desc: "I Developed a stopwatch application using React for precise time tracking and user-friendly interface." },
    { s_no: "06", s_name: "Expense tracker", s_desc: "I Designed an expense tracker app to help users monitor their spending and manage finances effectively." },
    { s_no: "07", s_name: "DashBoard", s_desc: "I Developed a YouTube dashboard using React, enabling content creators to track views, engagement, and analytics effectively" },
    { s_no: "08", s_name: "VotingSystem", s_desc: "I Built a secure and interactive voting system using Java Swing for a user-friendly graphical interface." },
    { s_no: "09", s_name: "Web Design", s_desc: "" },
];
const Projects = () => {
    return (
        <>
            <div id='projects' className='projects'>
                <div className='project-title'>
                    <h1>My Projects</h1>
                    <hr />
                </div>
                <div className='project-container'>
                    {projects.map((project, index) => (
                        <div key={index} className='project-format'>
                            <h3>{project.s_no}</h3>
                            <h2>{project.s_name}</h2>
                            <p>{project.s_desc}</p>
                            <div className='project-readmore'>
                                <p>Read More</p>
                                <p className='icon'><a href="https://github.com/karthikdokiparthi"><FaArrowRightLong /></a></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects
