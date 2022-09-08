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
    const [userproj, setUserproj] = useState()
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
            setUserproj(data);
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


    const handleInputs = (e) => {
        setVal = e.target.value;
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
        if (!data) {
            window.alert('Cannot Save the data(an error ocurred)')
        }
        else {
            // window.alert('project saved');
        }
        // if (message.trim().length !== 0) {
        //     console.log('input value is NOT empty');

        // } else {
        //     window.alert('Please Input An user name');
        //     window.location.reload()
        // }



    }
    useEffect(() => {
        subForm();
    }, [])


    const a = userProject;
    console.log(!a);
    // if (!a) {
    //     return (

    //         <div>
    //             <form method='POST' onSubmit={subForm} >
    //                 <input type='text' onChange={handleInputs} name='username' value={userName.username}></input>
    //                 <button type='Submit'>Submit</button></form>
    //             <h2>{userName.name}</h2>
    //             <div>NO PROJECTS CREATED</div></div>
    //     )
    // }

    const b = userName.name
    console.log(b)
    // if (!b) {

    // return (
    //     <div>
    //         <form method='POST' onSubmit={subForm} >
    //             <input type='text' onChange={handleInputs} name='username' value={userName.username}></input>
    //             <button type='Submit'>Submit</button></form>

    //         <div>NO PROJECTS CREATED</div></div>
    // )
    // }
    const onSearch = (searchTerm) => {
        console.log("sss")
        console.log(searchTerm);
    }

    const [val, setVal] = useState('')
    // const onCha

    const srch = (users) => {
        return users.filter(item => item)
    }

    return (
        <div>
            <form method='POST' onSubmit={subForm} >
                <input type='text' onChange={handleInputs} name='username' value={val}></input>
                <button type='Submit' disabled={!userName}
                    onClick={() => onSearch(val)}>Submit</button>
                <div>
                    {

                        users.map((user) => (<div>
                            {user.name}
                        </div>
                        ))}
                </div></form>

            <h2>{userName.name}</h2>





        </div >
    )
}