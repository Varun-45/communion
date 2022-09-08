// import React, { useEffect, useState } from 'react';

// const mem = () => {
//     const [users, setUsers] = useState([{
//         name: "",
//         email: "",
//         phone: "",
//         work: "",
//         devprof: "",
//         projects: [{
//             projname: "",
//             member: "",
//             modname: "",
//             percent: "",
//             remarks: ""
//         }]
//     }])
//     useEffect(() => {
//         fetch('/members').then(res => {
//             if (res.ok) {
//                 return res.json()

//             }

//         }).then(jsonRes => setUsers(jsonRes));
//     })
//     return (
//         <div> hh</div>

//     )
// }

// export default mem