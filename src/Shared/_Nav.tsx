import React, {useState, useEffect} from 'react';
import {    NavLink  } from "react-router-dom";



import SociamMediaIcons from '../Shared/_SociamMedia';
import Footer from './_Footer'

function Nav(){
  const [hamburger, setHamburger] = useState({set: false, isBig: false});

  let isBig = false
  if(window.innerWidth > 1200){
    isBig = true
  }
  if(window.innerWidth < 1201){
    isBig = false
  }

  function toggleNav(){
    if(window.innerWidth < 1201){
      setHamburger((hamburger) =>{
        return {set: !hamburger.set, isBig: false}
      } )
    }
  }

  function closeNav(){
    if(window.innerWidth < 1201 && hamburger){
      setHamburger((hamburger) =>{
        return {set: !hamburger.set, isBig: false}
      } )
    }
  }
useEffect(() => {
  if(window.innerWidth > 1200){
  //@ts-ignore
 
  setHamburger(() =>{
    return {set: true, isBig: true}
  } )
}
 
}, [hamburger.set, hamburger.isBig])

    return(
        <nav>
          <div id={hamburger.set ? "close" : ""} onClick={toggleNav} className="hamburgerMenu" style={hamburger.isBig ?  {display: 'none'} : {display: 'flex'}}><i className="fa fa-bars"></i></div>
          <div className ="NavContainer" style={hamburger.set ?  {width: "100%"} : {width: "0px"}}>
            <div className = "NavHeader">
                
                <NavLink to="/" className = "LogoLink">
                  <img src="./MeTwo.png" alt="logo"></img>
                </NavLink>
                <div className="MyName">
                  <h2 className="Title White">Robert <br/> <span className="Green">Csöllei</span></h2>
                </div>
                 
               
            </div>
            <div className="soMe">

            <SociamMediaIcons />
            </div>

            <ul className = "NavLinks">
              <li onClick={closeNav}>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li  onClick={closeNav}>
                <NavLink exact activeClassName="active" to="/Portfolio">Portfolio</NavLink>
              </li>
              <li  onClick={closeNav}>
                <NavLink exact activeClassName="active" to="/About"> About</NavLink>
              </li>
              <li  onClick={closeNav}>
                <NavLink exact activeClassName="active" to="/Contacts"> Contacts</NavLink>
              </li>
            </ul>
            <Footer/>
          </div>
          
        </nav>
    );
}


export default Nav;