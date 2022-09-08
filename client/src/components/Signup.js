import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import validator from 'validator';
import eye from '../img/eye.png';
import eyeb from '../img/eyeb.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Signup = () => {
    // const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", work: "", phone: "", password: "", cpassword: "", devprof: "",
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, work, phone, password, cpassword, devprof } = user;

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, work, phone, password, cpassword, devprof
            })
        })
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Email/Username already registered")
        }
        else if (res.status === 423 || !data) {
            window.alert("Incomplete Information")
        }
        else if (res.status === 424 || !data) {
            window.alert("Both Passwwords should match")
        }
        else if (res.status === 500 || !data) {
            window.alert("Failed to register,Inconvenience regretted")
        }
        else {

            window.location.replace('/login')

        }
    }
    //validation

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    const [passwordType, setPasswordType] = useState("password");
    const [cpasswordType, setCpasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const togglePassword2 = () => {
        if (cpasswordType === "password") {
            setCpasswordType("text")
            return;
        }
        setCpasswordType("password")
    }


    return (

        <div>
            <div className="container" id="container">

                <div className="form-container sign-in-container">
                    <form method='POST'>
                        <h1>Sign UP</h1>

                        <input type="text" name='name' placeholder="Name" value={user.name} onChange={handleInputs} />
                        <input type="email" placeholder="Email" name='email' value={user.email} onChange={(e) => { validateEmail(e); { handleInputs(e) } }} />

                        <span style={{
                            color: 'red',
                            fontSize: '1rem',
                            fontWeight: 'bold',

                        }}>{emailError}</span>
                        <input type="text" name='work' placeholder="Profession" value={user.work} onChange={handleInputs} />
                        <input type="text" name='phone' placeholder="Phone" value={user.phone} onChange={handleInputs} />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input type={passwordType} placeholder="Password" name='password' value={user.password} onChange={handleInputs} autoComplete='off' className='inpu' />
                            <div style={{ backgroundColor: '#eeeeee', height: '48px', marginTop: '0.5rem', userSelect: 'none' }} onClick={togglePassword}>{
                                passwordType === "password" ? <img src={eye} style={{ height: '1.5rem', width: '1.5rem', marginTop: '1rem', marginRight: '0.5rem' }} /> : <img src={eyeb} style={{ height: '1.5rem', width: '1.5rem', marginTop: '1rem', marginRight: '0.5rem' }} />
                            }
                            </div></div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <input type={cpasswordType} name='cpassword' placeholder="Confirm Password" value={user.cpassword} onChange={handleInputs} className='inpu' />
                            <div style={{ backgroundColor: '#eeeeee', height: '48px', marginTop: '0.5rem', userSelect: 'none' }} onClick={togglePassword2}>{
                                cpasswordType === "password" ? <img src={eye} style={{ height: '1.5rem', width: '1.5rem', marginTop: '1rem', marginRight: '0.5rem' }} /> : <img src={eyeb} style={{ height: '1.5rem', width: '1.5rem', marginTop: '1rem', marginRight: '0.5rem' }} />
                            }
                            </div></div>
                        <input type="text" name='devprof' placeholder="Enter GITHUB OR PLAYSTORE DEV LINK" value={user.devprof} onChange={handleInputs} />

                        <button className="err_btn1" style={{ marginTop: '1rem', }} value='register' onClick={PostData} >Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">

                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>

                            <p>Already Registered?</p>
                            <a href='/login'>
                                <button className="err_btn1">Log in </button></a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signup