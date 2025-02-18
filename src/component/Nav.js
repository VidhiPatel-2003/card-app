import React from "react";
import './nav.css';
import { NavLink } from "react-router-dom";
 const Nav = ({userName})=>{
    
     return(
        <>
        <div className="nav">
        <nav>
            <ul>
                <div className="navbar">
                <li className="name">{userName}</li>
                 <NavLink  to="/"><li>Home</li></NavLink>
                 <NavLink to="/About"><li>About</li></NavLink>
                 <NavLink to="/Contact"><li>Contact</li></NavLink>
                 <NavLink to="/Login"><li>Login</li></NavLink>
                </div>
            </ul>
        </nav>
        </div>
        </>
     );
}



export default Nav;