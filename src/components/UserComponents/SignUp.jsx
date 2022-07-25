import React, {useState} from 'react';
import Axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

const SIGNUP_URL = 'http://localhost:4000/mba/user/signup';

function SignUp(props) {

    let navigate = useNavigate();

    const [PhNumber, setPhNumber] = useState("");
    const [Password, setPassword] = useState("");
    const [GetError, setGetError] = useState(false);

    const onSubmit = async () => {
        try {

            const userData = {
                numUser: PhNumber,
                password: Password
            };

            let now = new Date();
            let time = now.getTime();
            let expireTime = time + 60*60*6;
            now.setTime(expireTime);

            const res = await Axios.post(SIGNUP_URL, userData);

            document.cookie = `token=${res.data.token}; expires=${now.toUTCString}`;

            handleLogged();
            
        } catch (error) {
            GetError(true);
        } finally {
            window.location.href = "/messages";
        }
    };

    const handleLogged = () => {
        const isLogged = props.handleLogged;
        isLogged(true);
    };


    return (
        <div className="one-container tl-background">
            <div className="card bg-light login-card-width">
                <div className="card-header">Sign Up</div>
                <div className="card-body">
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="form-label mt-3">Phone number</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your phone number"
                            onChange={(e) => setPhNumber(e.target.value)} 
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your phone number with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" className="form-label mt-3">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}  
                        />
                    </div>
                    <small id="emailHelp" className="form-text text-muted">
                        <Link to="/signin">If you have an account yet, you click here for login.</Link>
                    </small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => onSubmit()}>Sign Up...</button>
            </div>    
        </div>
    )
}

export default SignUp