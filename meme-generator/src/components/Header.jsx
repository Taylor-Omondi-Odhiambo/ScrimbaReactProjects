import React from 'react'
import '../css/Header.css'
export default function Header (){
    return (
        <nav className = 'header'>
            <img className = "header--img" src = "/images/troll-face.png"/>
            <h1 className = 'header--title'>Meme Generator</h1>
            <p className = 'header--project'>React Course - Project 3</p>
        </nav>
    )
}