import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Registration.css'
import SocialLogin from '../../Login/SocialLogin/SocialLogin'

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()
    
    const registrationLogin =(event) =>{
        navigate('/login');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password,{sendEmailVerification: true})
        navigate('/home');

        console.log(name, email, password);
    }

    let errorElement;
    if (error ) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }
    return (
        <div className='register-form'>
            <h2 className="my-4 bg-dark text-white py-3 text-center" >Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className="pe-auto text-decoration-none" onClick={registrationLogin}  to="/login">Login</Link> </p>
            <p>{errorElement}</p>
            <SocialLogin/>
        </div>
    );
};

export default Registration;