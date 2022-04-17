import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { id, img, price, name, description, } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate('/checkout');
    }
    return (
        <div className=' service-container'>
            <img className='w-75 h-50 py-4' src={img} alt="" />
            <h2>Package: {name}</h2>
            <p>Price: {price}/tk</p>
            <p className="px-5 text-center"><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>

        </div>
    );
};

export default Service;