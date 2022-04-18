import React from 'react';
import { useNavigate } from 'react-router-dom';
import RequireAuth from '../Login/RequireAuth/RequireAuth';
import './CheckOut.css'

const CheckOut = () => {
    const navigate = useNavigate()
    const handleCheckOut=(event) => {
        event.preventDefault();
        navigate('/registration')
    }
    return (
        <div >
            <h1 className="bg-dark py-4 text-white">Please Check Out</h1>
            <form onSubmit={handleCheckOut} className="checkOut-form" >

                <input type="text" name="name" id="" placeholder='Your Name'/>
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                <input type="text" name="address" id="" placeholder='Your Address' required/>
                <input type="number" name="number" id="" placeholder='Your Phone' required/>
                <input className="bg-dark text-white" type="submit" value="Proceed CheckOut" />
                
            </form>
        </div>
    );
};

export default CheckOut;