import React, { useEffect, useState } from 'react';

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
            <form method='POST' onSubmit={subForm}>

                <input type='text' onChange={handleInputs} name='username' value={userName.name} className='inp'></input>
                {
                    hide &&
                    <button type='Submit' disabled={!userName}
                        className='err_btn1'>Submit</button>
                }
                {
                    show &&

                    <button onClick={() => {
                        window.location.reload();
                    }}>Search another</button>
                }

            </form>
            <div>
                {hide &&

                    users.map((user) => (

                        <div>
                            {user.name}



                            <a href={user.devprof}>DEV PROFILE</a>


                        </div>
                    ))}
            </div>

            <h2>{userName.name}</h2>
            {show &&
                <a href={userName.devprof}>DEV PROFILE</a>}
            {/* <a href="mailto"+{userName.email}></a> */}
            <div>

                {show &&

                    a.map(v => {
                        return (<div style={{ marginTop: '1rem' }}> {a.length}
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


            </div>


        </div >
    )
}