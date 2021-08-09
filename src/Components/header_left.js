import React from 'react'
import '../CSS/header.css'
import {Link} from "react-router-dom";

export default function header_left({title}) {
    return (
        <div className="header__left">
              <Link to="/">  <img alt="" src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/216189589_2624960357806820_8114534400970733344_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=aee45a&_nc_ohc=KqUchW0E2m0AX-tnRwZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=1cd74d3539cf2630ca08ea348cd0bc5f&oe=60F92D45" className="header__logo"></img></Link>
                <p className="title">{title}</p>
        </div>


    )
}
