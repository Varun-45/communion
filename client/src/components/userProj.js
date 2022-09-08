import React, { useEffect, useState } from 'react';

export default function Disp() {



    const [userName, setUserName] = useState()
    const userNamepage = async () => {
        try {
            const res = await fetch('/userNamedata', {
                method: "POST",
                headers: {

                    "Conntent-Type": "application/json"
                }

            });

            const data = await res.json();
            console.log(data);
            setUserName(data);

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
        userNamepage();
    }, [])

    console.log(userName);

    if (!userName) {
        return (
            <div>NO PROJECTS CREATED</div>
        )
    }
    const a = userName.projects

    console.log(a[0].projname)
    return (

        <div className='bx'>

            {
                a.map(v => {
                    return (<div style={{ marginTop: '1rem' }}>
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
                                            <tr>
                                                <td>Remarks</td>
                                                <td>:</td>
                                                <td>{v.projlink}</td>
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
