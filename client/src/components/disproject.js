import React, { useEffect, useState } from 'react';

export default function Disp() {



    const [userProj, setUserProj] = useState()
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
            setUserProj(data);

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
        userProjpage();
    }, [])

    console.log(userProj);

    if (!userProj) {
        return (
            <div>NO PROJECTS CREATED</div>
        )

    }
    const a = userProj.projects

    if (!a) {
        return (
            <div>NO PROJECTS CREATED</div>
        )

    }

    return (


        <div className='bx'><h1>{a.length} projects</h1>
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
                                                <td>Project Link</td>
                                                <td>:</td>
                                                <td><a href={v.modname}>Click here</a></td>
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
