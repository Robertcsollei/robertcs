import * as React from 'react';
import {    NavLink  } from "react-router-dom";



import Footer from './_Footer'

function Nav(){
    return(
        <nav>
          <div className ="NavContainer">
            <div className = "NavHeader">
                
                <NavLink to="/" className = "LogoLink">
                  <img src="./MeTwo.png" alt="logo"></img>
                </NavLink>
                <div className="MyName">
                  <h2 className="Title White">Robert <br/> <span className="Green">Csöllei</span></h2>
                </div>
                 
            </div>
            
            <ul className = "NavLinks">
              <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/Portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/About"> About</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/Contacts"> Contacts</NavLink>
              </li>
            </ul>
            <Footer/>
          </div>
          
        </nav>
    );
}


export default Nav;