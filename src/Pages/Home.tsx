import * as React from 'react';

import SociamMediaIcons from '../Shared/_SociamMedia';
import Square from '../Shared/_SquareGraphic'
import testFunctions from '../js/functions';

function Home(){
    return(
        <div id="Home">
            <canvas id="canvas" ref={testFunctions}></canvas>
            <Square />
            <div className="homeContent">
                <h1 className="HeroTitle">Hi,<br/> I am Rob,<br/> a front-end dev.</h1>
                <h4 className="HeroSubTitle">Front-end / Web design / UX / UI</h4>
                <SociamMediaIcons/>
            </div>
            
        </div>
    );
}


export default Home;