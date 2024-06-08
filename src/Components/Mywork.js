import React from 'react'
import './Mywork.css'
import { FaArrowRightLong } from "react-icons/fa6";
import book from '../assets/book.png';
import solar from '../assets/solar.png';
import travel from '../assets/travels.png';
import todolist from '../assets/todolist.png';
import stopwatch from '../assets/stopwatch.png';
import expense from '../assets/expense.png';
import dash from '../assets/dash.png';
import vote from '../assets/vote.png';
const mywork = [
    {
        w_no: 1,
        w_name: "web design",
        w_img: book
    },
    {
        w_no: 2,
        w_name: "web design",
        w_img: solar
    },
    {
        w_no: 3,
        w_name: "web design",
        w_img: travel
    },
    {
        w_no: 4,
        w_name: "web design",
        w_img: todolist
    },
    {
        w_no: 5,
        w_name: "web design",
        w_img: stopwatch
    },
    {
        w_no: 6,
        w_name: "web design",
        w_img: expense
    },
    {
        w_no: 7,
        w_name: "web design",
        w_img: dash
    },
    {
        w_no: 8,
        w_name: "web design",
        w_img: vote
    },
]
const Mywork = () => {
    return (
        <>
            <div id='work' className='mywork'>
                <div className='mywork-title'>
                    <h1>My latest work</h1>
                    <hr />
                </div>
                <div className='mywork-container'>
                    {mywork.map((work, index) => {
                        return <img key={index} src={work.w_img} alt="" />
                    })}
                </div>
                <div className='mywork-showmore'>
                    <p>show More</p>
                    <p className='icon'><FaArrowRightLong /></p>
                </div>
            </div>
        </>
    )
}

export default Mywork
