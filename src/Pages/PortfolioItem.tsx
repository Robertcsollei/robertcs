import * as React from 'react';
import {    NavLink  } from "react-router-dom";

import Slideshow from '../Shared/SlideShow'


function PortfolioItem(props: any) {

    

let subTitles = ['Overview', 'Design', 'Development']


    return(
        <div className="full">
            <Slideshow images={[props.location.state.image1 || "images/default.png", props.location.state.image2 || "images/default.png"]}/>
            <div className="PortfolioContent">
                
                <div className="header">
                    <h1>{props.location.state.title}</h1>
                    {/* <NavLink exact activeClassName="active" className="PItem-Button" to= "/Portfolio">DEMO</NavLink> */}
                    
                </div>
               
                
                <section className="articles">

                {subTitles.map((title, index) => {
                    return <article key={index} className="subTitle">
                                <h2>{title}</h2>
                                <p>{props.location.state.desc}</p>
                            </article>
                })}

                </section>
                
                
            </div>
        </div>
    );
}


export default PortfolioItem