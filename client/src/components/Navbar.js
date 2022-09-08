import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import logo1 from '../img/dev.png'

const Navbar = () => {
  const [userName, setuserName] = useState()
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
      setuserName(data.name);
      setShow(true);
      sethide(false);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);



    }
  }

  useEffect(() => {
    userProjpage();
  }, [])

  const [show, setShow] = useState(false);
  const [hide, sethide] = useState(true);
  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-light" style={{ width: "100%" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href='/'><img src={logo1} className='logo3' /></a>
          <button class="navbar-toggler first-button bnt" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <div className="animated-icon3 bnt"><span></span><span></span><span></span></div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginLeft: "1rem" }}>
                <a className="nav-link active" aria-current="page" href='/'>Home</a>
              </li>
              <li className="nav-item" style={{ marginLeft: "1rem" }}>
                <a className="nav-link" href='/profile'>Profile</a>
              </li>
              <li className="nav-item" style={{ marginLeft: "1rem" }}>
                <a className="nav-link" href='/write'>Add Project</a>
              </li>
              <li className="nav-item" style={{ marginLeft: "1rem" }}>
                <a className="nav-link" href='/aboutme'>About us</a>
              </li>
              <li className="nav-item" style={{ marginLeft: "1rem" }}>
                <a className="nav-link" href='/project'>Your Projects</a>
              </li>
              <li className="nav-item" style={{ marginLeft: "1rem" }}>
                <a className="nav-link" href='/srch1'>Search Users</a>
              </li>     {
                hide &&
                <li className="nav-item" style={{ marginLeft: "1rem" }}>
                  <a className="nav-link" href='/login'>LOGIN</a>
                </li>

              }
              {
                show &&
                <li className="nav-item" style={{ marginLeft: "1rem" }}>
                  <a className="nav-link" href='/lgout'>Logout</a>
                </li>
              }

            </ul>

          </div>
        </div>
      </nav>

    </div>


  )
}

export default Navbar