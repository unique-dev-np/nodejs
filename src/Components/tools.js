import React from 'react'
import '../CSS/tools.css'


export default function tools() {

    return (
        <div className="tools">
            
            <img className="mainimg" src="https://images.unsplash.com/photo-1474291102916-622af5ff18bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
            <button onClick={()=>{playA()}} id="bt">Play</button>
            {/* <a href=""><button id="bt">Download</button></a> */}
        </div>
    )

    function playA(){
            let music = new Audio('https://www.youtube.com/embed/DKbfBSrjVHA')
            music.play()
    }
}
