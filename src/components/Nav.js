import React  from "react";
import { NavLink} from "react-router-dom"
const Nav = ()=>{
    return(
        <div className="navbar"> 
        <div className="container">
          <a href="# " className="logo">logo</a>
          
          <ul>
              <NavLink exact to ="/">home</NavLink>
              <NavLink to="/about">about</NavLink>
              <NavLink to="/blog">blog</NavLink>
              
          </ul>  
        </div>
        </div>
    )
}
export default Nav;