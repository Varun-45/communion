import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import axios from 'axios'

export default function Write() {



    ///new
    // const history = useHistory();
    const [user, setUser] = useState(0);

    const userContact = async () => {
        try {
            const res = await fetch('/projects', {
                method: "GET",
                headers: {

                    "Conntent-Type": "application/json"
                }

            });

            const data = await res.json();
            console.log(data);
            setUser(data);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);

            window.location.replace('/login')

        }
    }

    useEffect(() => {
        userContact();
    }, [])

    // ///inp storing
    let name;
    let value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    // }
    // ///backend

    const subForm = async (e) => {
        e.preventDefault();

        const { projname, member, modname, percent, remarks } = user;
        const res = await fetch('/projdata', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                projname, member, modname, percent, remarks
            })
        });

        const data = await res.json();
        if (!data) {
            window.alert('Cannot Save the data(an error ocurred)')
        }
        else {
            window.alert('project saved');
            setUser({ ...user, projname: '', member: '', modname: '', percent: '', remarks: '' })
        }


    }

    // const [input, setInput] = useState({
    //     projname: "",
    //     member: "",
    //     modname: "",
    //     percent: "",
    //     remarks: ""
    // })

    // function handleChange(event) {
    //     const { name, value } = event.target;

    //     setInput(prevInput => {
    //         return {
    //             ...prevInput,
    //             [name]: value
    //         }
    //     })
    // }

    // function handleClick(event) {
    //     event.preventDefault();
    //     const newProj = {
    //         projname: input.projname,
    //         member: input.member,
    //         modname: input.modname,
    //         percent: input.percent,
    //         remarks: input.remarks
    //     }

    //     axios.post('http://localhost:3001/create', newProj)

    // }

    return (

        <div className='bx'>

            <Container maxWidth="sm" >
                <h1 >WELCOME <span style={{
                    color: '#0097e6'
                }}>{user.name}</span></h1>
                <h4>Enter your Project details here: </h4>
                <form style={{ marginTop: '1rem' }} method='POST'>
                    <TextField fullWidth label="Project name" id="fullWidth" style={{ marginTop: '1rem' }} onChange={handleInputs} name='projname' value={user.projname} />
                    <TextField fullWidth label="member name(s)" id="fullWidth" style={{ marginTop: '1rem' }} onChange={handleInputs} name='member' value={user.member} />
                    <TextField fullWidth label="Project/repo link" id="fullWidth" style={{ marginTop: '1rem' }} onChange={handleInputs} name='modname' value={user.modname} />
                    <h4 style={{ marginTop: '1rem' }} >Progress Percentage:</h4>
                    <Slider
                        size="small"
                        defaultValue={50}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={handleInputs}
                        name='percent'
                        value={user.percent}
                    />
                    {/* <TextField fullWidth label="Project/repo link" id="fullWidth" style={{ marginTop: '1rem' }} onChange={handleInputs} name='projlink' value={user.projlink} /> */}
                    <TextField fullWidth label="write about your project" id="fullWidth" style={{ marginTop: '1rem' }} onChange={handleInputs} name='remarks' value={user.remarks} />
                    <Button variant="contained" type='submit' style={{ marginTop: '1rem' }} onClick={subForm}>
                        Submit
                    </Button>
                </form></Container>
        </div >
    )
}
