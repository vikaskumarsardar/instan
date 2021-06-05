import React from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'
export default function Nav() {
    return (
        <div className="Nav">
            <NavLink className="NavLink" to='/home'><p>home</p></NavLink>
            <NavLink className="NavLink" to='/service'><p>service</p></NavLink>
            <NavLink className="NavLink" to='/contact'><p>contact</p></NavLink>
        </div>
    )
}

