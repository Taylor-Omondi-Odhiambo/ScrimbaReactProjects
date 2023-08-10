import React from 'react'
import '../css/MainSection.css'
export default function MainSection (){
    return (
        <main className = 'content'>
            <h2>Fun Facts about React</h2>
            <ul className = "list"> 
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enteprise apps,including mobile apps</li>
            </ul>
        </main>
    )
}