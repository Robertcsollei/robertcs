import * as React from 'react';

import {    NavLink  } from "react-router-dom";

import Square from '../Shared/_SquareGraphic'
import testFunctions from '../js/functions';

function Home(){
    return(
        <div id="Home" className="Home">
            <canvas id="canvas" ref={testFunctions}></canvas>
            <Square idName={'HomeSquare'} />
            <div className="homeContent">
                <h1 className="HeroTitle">Hi,<br/> I am Rob,<br/> a front-end dev.</h1>
                <h4 className="HeroSubTitle">Front-end / Web design / UX / UI</h4>
                <div className="icons">
               
                <NavLink exact className="PItem-Button" activeClassName="active" to="/Portfolio">Portfolio</NavLink>
                </div>
                
            </div>
            
        </div>
    );
}


export default Home;