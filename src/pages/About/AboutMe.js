import React from 'react';
import anando from '../../images/anando.jpg';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div className="aboutME-Container m-5 ">
            <h3 className='m-3 p-3'>About Me</h3>
            <div className=" overflow-hidden item-center">
                <h2 className="text-xl">Name : Md Anando </h2>
                <img className="w-25" alt="" src={anando} />
                <p className="m-5">
                    The biggest achievement from this contest is Master photographer Greg Moment gave 50% free scholarship on his online workshop to 3 Bangladeshi photographers, and I am one of them. What could me more than this..!? 😍
                    Thanks to my mother who gives me support all the time,thanks to all senior photographers for inspiring me to do well and well.
                <br/>
                <p>Contact with me By<a href="https://www.facebook.com/zahir.anando"> Facebook </a></p> 
                </p>
            </div>
        </div>
    );
};

export default AboutMe;