import React from 'react'
import '../CSS/header.css'
import Left from './header_left'
import Right from './header__right'

export default function header({title}) {
    return (
        <div className= "header">
                <Left title = {title}/>
                <Right/>
        </div>
    )
}
