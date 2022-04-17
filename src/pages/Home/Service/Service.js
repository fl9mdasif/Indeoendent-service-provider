import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { id, img, price, name, description, } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className=' service-container'>
            <img className='w-50 h-50' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>

        </div>
    );
};

export default Service;