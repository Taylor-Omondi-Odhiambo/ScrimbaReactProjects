import React from 'react'
import '../css/Navbar.css'
export default function Navbar (){
    return (
        <nav className='navbar'>
            <img className = "navbar--img"src = "/images/react-icon.png"/>
            <h2 className = 'navbar--title'>ReactFacts</h2>
            <h4 className = 'navbar--name'>React Course - Project 1</h4>
        </nav>
    )
}