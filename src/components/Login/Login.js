import React from 'react';
import { Link, useLocation ,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
 
import "./Login.css"
const Login = () => {
    const {SignInUsingGoogle}= useAuth();
    const location =useLocation() 
    const history =useHistory()
    const redirect_uri = location.state?.from ||"/";

    const handleGoogleLogIn =()=>{
        SignInUsingGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user);
            history.push(redirect_uri)
           
        }).catch((error) => {
            const errorMessage = error.message;
             console.log(errorMessage);
        });
    }
    return (
        <div className="login-form">
            <div>
                <h2>Log in</h2>
                <form  onSubmit="" >
                <input type="email" name="" placeholder="Your Email" />
                <br />
                <input type="password" name=""  placeholder="Your passWord" />
                <br />
                <input type="submit" name="" value="Submit"  />
                </form>
                <p>New to ema-john?</p><Link 
                to="register">Create Account</Link>
                <p>---------or------------</p>
                <button onClick= {handleGoogleLogIn} className="btn-regular"> Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;