import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import './Banner.css';


import b2 from '../../../images/b2.jpg';
import b3 from '../../../images/b3.jpg';
import b4 from '../../../images/b4.jpg';
import b5 from '../../../images/b5.jpg';
import b6 from '../../../images/b6.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className=" ">
            <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item className='item'>
                <img 
                    className="d-inline-block w-100  "
                    src={b4}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Bronze</h3>
                    <p>The best click will provide you by CapturedMoment.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='item'>
                <img 
                    className="d-inline-block w-100  "
                    src={b2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Silver</h3>
                    <p>The best click will provide you by CapturedMoment.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='item'>
                <img 
                    className="d-inline-block w-100  "
                    src={b3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Gold</h3>
                    <p>The best click will provide you by CapturedMoment.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='item'>
                <img
                    className="d-block w-100"
                    src={b5}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Platinum</h3>
                    <p>The best click will provide you by CapturedMoment.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='item'>
                <img
                    className="d-block w-100"
                    src={b6}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Combo</h3>
                    <p>
                    The best click will provide you by CapturedMoment.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;