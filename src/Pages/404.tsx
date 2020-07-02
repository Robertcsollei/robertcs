import * as React from 'react';
import {    NavLink  } from "react-router-dom";



function ForOFor(){
    return(
        <div className="loadingContainer">
            <h2 className="loading">Sorry We couldn't find the page which you were looking for</h2>
            <div className="PItems-buttons">
                
                <NavLink exact activeClassName="active" className="PItem-Button" to="/PortfolioItem">Home</NavLink>
                <NavLink exact activeClassName="active" className="PItem-Button" to="/Portfolio">Go to portfolio</NavLink>
                  
                    
                    
                </div>
        </div>
    );
}


export default ForOFor;