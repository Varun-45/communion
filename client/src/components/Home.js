import React, { useState, useEffect } from 'react'
// import img1 from '../img/img1.png'
import PropTypes from 'prop-types';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import footer from './footer.js'

import './home.css'
import Navbar from './Navbar';

const Home = () => {
    const [userName, setuserName] = useState()
    const userProjpage = async () => {
        try {
            const res = await fetch('/projects', {
                method: "GET",
                headers: {

                    "Conntent-Type": "application/json"
                }

            });

            const data = await res.json();
            console.log(data);
            setuserName(data.name);
            setShow(true);
            sethide(false);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);



        }
    }

    useEffect(() => {
        userProjpage();
    }, [])

    const [show, setShow] = useState(false);
    const [hide, sethide] = useState(true);
    return (

        <>

            <div className='homepage'>
                <div className='homepageinfo'>
                    <b style={{ color: '', textAlign: 'center' }}>    WELCOME</b>
                    <strong><h2 style={{ color: 'blue', textAlign: 'center', marginTop: '1rem' }}>{userName}</h2></strong>
                    {
                        hide &&
                        <>
                            <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>Be a part of this amazing community</h1>
                            <a href='/login'>
                                <button className='css-button-gradient--1' >
                                    LOGIN
                                </button></a>
                        </>
                    }
                    {
                        show &&
                        <>
                            <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>Thanks for joining,let's make this community more awesome.</h1>
                            <a href='/write'>
                                <button className='css-button-gradient--1' style={{ marginTop: '1rem' }}>
                                    Add project
                                </button>
                            </a>
                        </>
                    }
                </div>
            </div>

        </>
    )
}

export default Home