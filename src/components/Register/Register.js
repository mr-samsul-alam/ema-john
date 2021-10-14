import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register :create ACcount</h2>
                <form  onSubmit="" >
                <input type="email" name="" placeholder="Your Email" />
                <br />
                <input type="password" name=""  placeholder="Your passWord" />
                <br />
                <input type="password" name=""  placeholder="Re enter passWord" />
                <br />
                <input type="submit" name="" value="Submit"  />
                </form>
                <p>already have account ?</p><Link 
                to="/login"><button className="btn-regular"> Log in</button></Link>
                 <p>---------or------------</p>
                <button className="btn-regular"> Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;