import * as React from 'react';
import {    NavLink  } from "react-router-dom";


function SociamMediaIcons() {
    return(

        <ul className="SM-Links">
            <a href="https://www.linkedin.com/in/robert-cs/" className="SM-item"><li className="fa fa-linkedin" aria-hidden="true"><span>Link to my linkedin profile</span></li></a>
            <a href="www.facebook.com" className="SM-item"><li className="fa fa-skype" aria-hidden="true"><span>link to skype - feel free to call</span></li></a>
            <NavLink exact  to="/Contacts" className="SM-item"> <li className="fa fa-envelope" aria-hidden="true"><span>go stright to contacts page</span></li></NavLink>
        </ul>

    );
}



export default SociamMediaIcons;