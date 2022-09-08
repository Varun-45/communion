import React from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact';
import Signup from './components/Signup'
import Write from './components/write';
import Footer from './components/footer';
import Login from './components/Login';
import Disp from './components/disproject';
import Userinfo from './components/Userinfo';
import UserProj from './components/userProj'
import Members from './components/member';
import Srch2 from './components/srch2'
import Srch1 from './components/srch1'
import Logout from './components/logout'
import Fof from './components/404'
import Aboutme from './components/aboutme'

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
          <Footer />
        </Route>
        <Route path='/profile'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/write'>
          <Write />
        </Route>
        <Route path='/login'>
          < Login />
        </Route>
        <Route path='/project'>
          < Disp />
        </Route>
        {/* <Route path='/srch'>
        < Userinfo />
      </Route> */}
        {/* <Route path='/srch2'>
        < Srch2 />
      </Route>*/}
        <Route path='/srch1'>
          < Srch1 />
        </Route>
        <Route path='/lgout'>
          < Logout />
        </Route>
        {/* <Route path='/userProj'>
        < UserProj />
      </Route>
      <Route path='/users'>
        < Members />
      </Route> */}
        <Route path='/aboutme'>
          < Aboutme />
        </Route>
        <Route >
          < Fof />

        </Route></Switch>

    </>
  )
}

export default App