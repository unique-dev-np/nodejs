import React from 'react'
import '../CSS/header.css'
import {Link} from "react-router-dom";



export default function header__right() {
    return (
        <div className="header__right">
            <ul className="header__items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/services">Tools</Link></li>
            </ul>
        </div>
    )

  
}
