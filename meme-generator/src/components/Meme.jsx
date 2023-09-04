import React from 'react'
import '../css/Meme.css'
import memes  from '../memesData'

export default function Meme (){
    const [allMemes, setAllMemes] = React.useState("")

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: ""
    })

    React.useEffect(()=>{
        // fetch("https://api.imgflip.com/get_memes")
            // .then(res => res.json)
            // .then(data => setAllMemes(data.data.memes))
        setAllMemes(memes.data.memes)
    },[])

    function getMemeImage (){
        const length = allMemes.length
        // setAllMemes(memes.data.memes[Math.floor(Math.random() * length)].url)
        const link = allMemes[Math.floor(Math.random() * length)].url

        setMeme(prevMeme => ({
            ...prevMeme,
            url: link
        }))
    }

    function handleChange (event){

        const {value, name} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <div>
            <main className = "meme">
                <input className = "meme--input" type = "text" placeholder = "Top text"
                    onChange = {handleChange}
                    value = {meme.topText}
                    name = "topText"
                />
                <input className = "meme--input" type = "text" placeholder = "Bottom text"
                    onChange = {handleChange}
                    value = {meme.bottomText}
                    name = "bottomText"
                />
                <button onClick = {getMemeImage} className = "meme--btn">Get a new meme image🖼</button>
            </main>
            <div className = 'content'>
                <h2 className = 'content--topText'>{meme.topText}</h2>
                <h2 className = 'content--bottomText'>{meme.bottomText}</h2>
                <img className = "content--img" src = {meme.url} />
            </div>
            
        </div>
    )
}