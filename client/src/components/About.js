import React, { useEffect, useState } from 'react';
import dev from '../img/developer.png'
import mail from '../img/email.png';

const About = () => {

    const [userData, setUserData] = useState(0);

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Conntent-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);
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
    const b = userData.projects;
    const a = userData.email;
    var link = "mailto:" + a;
    console.log(link)
    return (
        <div>


            <div className="wrapper">
                <div className="left">

                    <h2>{userData.name}</h2>
                    <h4 style={{ margintop: '1rem' }}>{userData.work}</h4>
                </div>
                <div className="right">
                    <div className="info">
                        <h3>Information</h3>
                        <div className="info_data">
                            <div className="data">
                                <h4>Email</h4>
                                <p>{userData.email}</p>
                            </div>
                            <div className="data">
                                <h4>Phone</h4>
                                <p>{userData.phone}</p>
                            </div>
                        </div>
                    </div>



                    <div className="social_media">

                        <a href={link}><img src={mail} style={{ 'height': '32px', 'width': '32px', marginLeft: '1rem' }}></img></a>
                        <a href={userData.devprof}><img src={dev} style={{ marginLeft: '1rem' }}></img></a>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About