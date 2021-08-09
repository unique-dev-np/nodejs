import React from 'react'
import '../CSS/home.css'
import '../CSS/main.css'
import {Link} from "react-router-dom";



export default function home(props) {
    return (
        <div className="home">
            
            <div className="home__section1">
            
            <img alt="" src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/216189589_2624960357806820_8114534400970733344_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=aee45a&_nc_ohc=KqUchW0E2m0AX-tnRwZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=1cd74d3539cf2630ca08ea348cd0bc5f&oe=60F92D45" className="home__section1__img1"/>
               <div className="home__section1__para1">
                    <p className="para">
                    <strong><Link to="/">{props.title}</Link></strong> is all about E-sports and it's Athleties, helping them to grow faster and stronger by giving them many facilities so that they can make strong bond with other Athleties too by sharing ideas, thaughts, feelings, experiences and making lots of fun.
                    </p>

               </div>
            </div>



        </div>
    )
}
