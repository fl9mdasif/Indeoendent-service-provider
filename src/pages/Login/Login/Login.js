import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
const Login = () => {
    const navigate = useNavigate();

    const navigateRegistration = (event) => {
        navigate('/registration');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const email = event.target.email.value;
        const password = event.target.password.value;
        

        console.log( email, password)
    }
    return (
        <div className="login-form">
            <h2 style={{textAlign: 'center'}}>Please Login</h2>
            <form onSubmit={handleSubmit}>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="submit" value="Register" />

            </form>
            <p>Don't have an account? <Link className="pe-auto text-decoration-none" onClick={navigateRegistration} to="/registration"> Create new account</Link> </p>
        </div>
    );
};

export default Login;