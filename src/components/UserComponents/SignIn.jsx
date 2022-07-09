import React, {useState} from 'react';
import Axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

const SIGNIN_URL = 'http://localhost:4000/mba/user/signin';

function SignIn() {

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

            const res = await Axios.post(SIGNIN_URL, userData);

            document.cookie = `token=${res.data.token}; expires=${now.toUTCString}`;

            //navigate('/messages');
            window.location.href = "/messages";
            
        } catch (error) {
            GetError(true);
        };
    };

    return (
        <div className="one-container tl-background">
            <div class="card bg-light login-card-width">
                <div class="card-header">Sign In</div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="form-label mt-3">Phone number</label>
                        <input 
                            type="text" class="form-control" 
                            placeholder="Enter your phone number" 
                            onChange={(e) => setPhNumber(e.target.value)}
                        />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your phone number with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="form-label mt-3">Password</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" onClick={() => onSubmit()}>Sign In...</button>
            </div>    
        </div>
    )
}

export default SignIn