import React  from "react";
import '../css/Hero.css'
export default function Hero (){
    return (
        <div className = "hero">
            <img className = "hero--img" src = "/images/photo-grid.png"/>
            <div className = "hero--text">
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}