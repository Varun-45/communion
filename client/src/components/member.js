
// // import axios from 'axios'
// import React, { useEffect, useState } from 'react';



// export default function Mem() {
// const [users, setUsers] = useState([{
//     name: "",
//     email: "",
//     phone: "",
//     work: "",
//     devprof: "",
//     projects: [{
//         projname: "a",
//         member: "a",
//         modname: "a",
//         percent: 0,
//         remarks: "a"
//     }]
// }])
// const [userproj, setUserproj] = useState()
// const callAboutPage = async () => {
//     try {
//         const res = await fetch('/members', {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Conntent-Type": "application/json"
//             },
//             credentials: "include"
//         });

//         const data = await res.json();
//         console.log(data);
//         setUsers(data);
//         setUserproj(data);
//         if (!res.status === 200) {
//             const error = new Error(res.error);
//             throw error;
//         }

//     } catch (err) {
//         console.log(err);

//         window.location.replace('/login')

//     }
// }

// useEffect(() => {
//     callAboutPage();
// }, [])


//     ///
//     const [userName, setuserName] = useState('')


//     // ///inp storing
//     let name;
//     let value;
//     const handleInputs = (e) => {
//         name = e.target.name;
//         value = e.target.value;

//         setuserName({ ...userName, [name]: value })
//     }

//     // }
//     // ///backend

//     const subForm = async (e) => {
//         e.preventDefault();

//         const { username } = userName;
//         const res = await fetch('/userNamedata', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 username
//             })
//         });



//     }
//     useEffect(() => {
//         subForm();
//     }, [])






//     return (
//         <div>
//             {
//                 users.map(user => {
//                     const nm = user.name;
//                     return <div>{nm}
//                         <h2>{user.email}</h2>
//                         <form method='POST' onSubmit={subForm}>
//                             <input name='username' onChange={handleInputs} value={user.name} style={{ display: 'none' }}></input>
//                             <button type='Submit' onClick={subForm}>ss</button></form></div>
//                 })
//             }
//         </div>

//     )
// }

