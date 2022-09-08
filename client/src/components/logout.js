import React, { useEffect } from 'react'




const Logout = () => {

    useEffect(() => {

        fetch('/logout', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            window.location.replace('/')
        })
    },);

    return (
        <></>
    )
}

export default Logout