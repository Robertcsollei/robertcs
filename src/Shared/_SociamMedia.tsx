import * as React from 'react';
import {    NavLink  } from "react-router-dom";


function SociamMediaIcons() {
    return(

        <ul className="SM-Links">
            <a target="_blank"  href="https://www.linkedin.com/in/robert-cs/" className="SM-item"><li className="fa fa-linkedin" aria-hidden="true"><span>Link to my linkedin profile</span></li></a>
            <a target="_blank" href="https://github.com/Robertcsollei" className="SM-item"><li className="fa fa-github" aria-hidden="true"><span>link to my github repos</span></li></a>
            <NavLink exact  to="/Contacts" className="SM-item"> <li className="fa fa-envelope" aria-hidden="true"><span>go stright to contacts page</span></li></NavLink>
        </ul>

    );
}



export default SociamMediaIcons;