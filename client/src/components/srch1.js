import React, { useEffect, useState } from 'react';
import cancel from '../img/cancel.png';
import dev from '../img/developer.png'
import mail from '../img/email.png';
export default function UserNameSearch() {
    const [userName, setuserName] = useState('')

    const [userProject, setuserProject] = useState([{}])
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([{
        name: "",
        email: "",
        phone: "",
        work: "",
        devprof: "",
        projects: [{
            projname: "a",
            member: "a",
            modname: "a",
            percent: 0,
            remarks: "a"
        }]
    }])

    const callAboutPage = async () => {
        try {
            const res = await fetch('/members', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Conntent-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUsers(data);
            setuserProject(data);
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
        callAboutPage();
    }, [])
    console.log(users)

    // ///inp storing
    let name;
    let value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuserName({ ...userName, [name]: value })
    }

    // }
    // ///backend

    const subForm = async (e) => {
        e.preventDefault();

        const { username } = userName;
        const res = await fetch('/userNamedata', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username
            })
        });


        const data = await res.json();
        console.log(data)
        setuserName(data);
        setuserProject(data.projects);

        if (res.status === 400 || !data) {
            window.alert("User Not Found");
            window.location.reload();
        }
        else {
            setShow(prev => !prev); setHide(prev => !prev);
        }



    }
    useEffect(() => {
        subForm();
    }, [])


    const a = userProject;
    // console.log(!a);

    const b = userName.name
    // console.log(b)


    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(true);


    return (
        <div>

            <form method='POST' onSubmit={subForm} className="search-wrapper cf">

                <input type='text' onChange={handleInputs} name='username' value={userName.name} autoComplete='off' placeholder='Try Searching Varun'></input>
                {
                    hide &&
                    <button type='Submit' disabled={!userName}
                        className=''>Submit</button>
                }
                {
                    show &&

                    <button onClick={() => {
                        window.location.reload();
                    }} > reset </button>
                }

            </form>
            <div>
                {hide &&

                    users.map((user) => (



                        <div>

                            <div class="user-profile-details">
                                <ul>
                                    <li class="blue">
                                        <div style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                                            <div className='avatar' dataLabel={user.name.slice(0, 2)}></div>
                                            <h2>{user.name}</h2></div>

                                        <h3>{user.work}</h3>
                                        <div style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                                            <a href={user.devprof}><img src={dev} /></a>
                                            <div><a href={`mailto:${user.email}`}><img src={mail} style={{ 'height': '32px', 'width': '32px', marginLeft: '1rem' }} /></a></div></div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    ))}
            </div>
            {/* <div style={{ marginTop: '2rem', backgroundColor: 'whitesmoke' }}>
                <div className='profcard' style={{ marginTop: '2rem', }}>
                    <h2 style={{ marginLeft: '5%' }}>{userName.name}</h2>
                    {show &&
                        <a href={userName.devprof} style={{ marginLeft: '80%' }}><img src={dev} style={{ marginTop: '2rem' }} /></a>}
                    {show &&
                        <div><a href={`mailto:${userName.email}`} style={{ marginLeft: '10%' }}><img src={mail} style={{ 'height': '32px', 'width': '32px', marginLeft: '1rem', marginTop: '2rem' }} /></a></div>
                    }
                </div>
                <div>  <h3 style={{ marginLeft: '5%' }}>{userName.work}</h3>
                </div>
            </div> */} {show &&
                <div className="card1 card">
                    <div>
                        <div className='avatar' dataLabel={userName.name.slice(0, 2)}></div>
                        <div className="name">
                            <h1>{userName.name}</h1>

                        </div>
                    </div>
                    <div className="infos">


                        <h3 style={{ color: "#198cff" }}>{userName.work}</h3>

                        <ul className="stats">

                            <li>
                                <h3>{a.length}</h3>
                                <h4>Projects</h4>
                            </li>

                        </ul>
                        <div className="links">
                            <a href={`mailto:${userName.email}`} ><button className="follow" >Follow</button></a>
                            <a href={userName.devprof} >  <button className="view" >View profile</button></a>
                        </div>
                    </div>
                </div>
            }
            {show &&

                a.map(v => {
                    return (<div style={{ marginTop: '1rem', marginLeft: '5%' }}> {a.length} Project
                        <div className="main1">
                            <div className="card">
                                <div className="card-body">

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>PROJECT&nbsp;NAME</td>
                                                <td>:</td>
                                                <td>{v.projname}</td>
                                            </tr>
                                            <tr>
                                                <td>MEMBERS</td>
                                                <td>:</td>
                                                <td>{v.member}</td>
                                            </tr>
                                            <tr>
                                                <td>Modification Name</td>
                                                <td>:</td>
                                                <td>{v.modname}</td>
                                            </tr>

                                            <tr>
                                                <td>Progress</td>
                                                <td>:</td>
                                                <td>{v.percent}</td>
                                            </tr>
                                            <tr>
                                                <td>Remarks</td>
                                                <td>:</td>
                                                <td>{v.remarks}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                    )
                })
            }




        </div >
    )
}