import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LogIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        }

        else {

            window.location.replace('/')
        }

    }


    return (
        <div>
            <div className="container2" id="container">

                <div className="form-container sign-in-container">
                    <form method='POST'>
                        <h1 style={{ marginTop: "1rem", marginLeft: "5%" }}>Login</h1>


                        <input type="email" placeholder="Email" style={{ marginTop: "2rem" }} value={email} onChange={(e) => setEmail(e.target.value)} />

                        <input type="password" placeholder="Password" style={{ marginTop: "1.5rem" }} value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button className="err_btn1 btt" style={{ marginTop: '2rem' }} onClick={loginUser}>LogIn</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">

                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>

                            <p>New Here?</p>
                            <a href='/signup'>  <button className="err_btn1">Signup </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn