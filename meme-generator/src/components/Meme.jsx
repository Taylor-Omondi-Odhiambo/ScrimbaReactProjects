import React from 'react'
import '../css/Meme.css'
import memes  from '../memesData'

export default function Meme (){
    const [meme, setMeme] = React.useState("")

    function getMemeImage (){
        const length = memes.data.memes.length
        setMeme(memes.data.memes[Math.floor(Math.random() * length)].url)
    }

    return (
        <div>
        <main className = "meme">
            <input className = "meme--input" type = "text" placeholder = "Top text"/>
            <input className = "meme--input" type = "text" placeholder = "Bottom text"/>
            <button onClick = {getMemeImage} className = "meme--btn">Get a new meme image🖼</button>
        </main>
        <img className = "meme--img" src = {meme} />
        </div>
        
        
    )
}