import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css'

const Registration = () => {

    const navigate = useNavigate()
    
    const registrationLogin =(event) =>{
        navigate('/login');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        

        console.log(name, email, password)
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className="pe-auto text-decoration-none" onClick={registrationLogin}  to="/login">Login</Link> </p>
        </div>
    );
};

export default Registration;