import * as React from 'react';
import {    NavLink  } from "react-router-dom";

import ForOFor from '../Pages/404'


import ProgressIcons from '../Shared/ProgressIcons';

interface ObjectType{
    Title: string,
    Description: string,
    imagePath1?: string,
    imagePath2?: string,
    length?: number,
    active?: number
}

function PPage(props : ObjectType){



    
    return (
        <div className="full">
            <h1 className="PItem-Title">{props.Title || "Woops, soething went wrong"}</h1>
            <div className="PItems-container">
            <p className="PItem-Desc">{props.Description || "You tried to access this page without chosing a Project from the Portfolio page, Please click on the Portfolio link on the left and see the content"}</p>

            <div className="PItems-buttons">
                
            <NavLink exact activeClassName="active" className="PItem-Button" to={{
                pathname: "/PortfolioItem",
                state: {
                    title: props.Title,
                    desc: props.Description,
                    image1: props.imagePath1,
                    image2: props.imagePath2,
                    
                }
            }}>Learn More</NavLink>
              
                
                <button className="hollow"> DEMO</button>
                
            </div>
            </div>
           
            
            <div className="ImageContainer">
                

                <img src={props.imagePath1 || "images/default.png"} alt={props.Title ||"title" + '1'} className="FImage"/>
                <img src={props.imagePath2 || "images/default.png"} alt={props.Title || "title" + '2'} className="BImage"/>
            </div>
            <ProgressIcons length={props.length} active={props.active}/>
        </div>

     );  
    
}





export default PPage;