import * as React from 'react';
import {    NavLink  } from "react-router-dom";



import ProgressIcons from '../Shared/ProgressIcons';

interface ObjectType{
    Title: string,
    Plot: string,
    dev: string,
    des: string,
    tags: string,
    link: string,
    isDev: boolean,
    Description: string,
    images?: string[],
    thumbnails: string[],
    length?: number,
    active?: number
}


function PPage(props : ObjectType){


    
    
    return (
        <div className="full">
            <h1 className="PItem-Title">{props.Title || "Woops, soething went wrong"}</h1>
            <div className="PItems-container">
            <p className="PItem-Desc">{props.Plot}</p>
            <span className="tags">{props.tags}</span>

            <div className="PItems-buttons">
                
            <NavLink exact activeClassName="active" className="PItem-Button" to={{
                pathname: "/PortfolioItem",
                state: {
                    title: props.Title,
                    desc: props.Description,
                    images: props.images,
                    dev: props.dev,
                    des: props.des,
                    link: props.link
                    
                }
            }}>Learn More</NavLink>
              
              {props.Title.includes("Asset") ? 
                 null
                :
                <button onClick={() => window.open(`${props.link}`, '_blank')}  className="hollow">{props.isDev ? 'GitHub' : 'Video'}</button>
            }
              
              
       
                
            </div>
            </div>
           
            
            <div className="ImageContainer">
                
                
                { props.thumbnails !== undefined && <img src={props.thumbnails[0] || "images/default.png"} alt={props.Title ||"title" + '1'} className="FImage"/>}
                { props.thumbnails !== undefined && <img src={props.thumbnails[1] || "images/default.png"} alt={props.Title || "title" + '2'} className="BImage"/>}
            </div>
            <ProgressIcons length={props.length} active={props.active}/>
        </div>

     );  
    
}





export default PPage;