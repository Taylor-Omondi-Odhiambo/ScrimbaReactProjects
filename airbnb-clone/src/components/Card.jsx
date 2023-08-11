import React from 'react'
import '../css/Card.css'

export default function Card (props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "Online"
    }

    return(
        <div className = 'card'>
            {badgeText && <p className = 'card--badge'>{badgeText}</p>}
            <img className = "card--img" src ={`/images/${props.img}`}/>
            <div className = 'card--stats'>
                <img className = "card--star" src = "/images/star.png"/>
                <span className = 'card--review'>{props.rating}</span>
                <span>({props.reviewCount}) . </span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className = 'card--description'> From ${props.price} </span>/ person</p>
        </div>
    )
}