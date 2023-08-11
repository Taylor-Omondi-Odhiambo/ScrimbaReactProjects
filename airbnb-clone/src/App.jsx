import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data.js'

export default function App (){
  const cards = data.map((card)=>{
    return (
      <Card 
        key = {card.id}
        img = {card.coverImg}
        rating = {card.stats.rating}
        reviewCount = {card.stats.reviewCount}
        location = {card.location}
        price = {card.price}
        openSpots = {card.openSpots}
        title = {card.title}
        />
    )
  })
  
  return (
    <div>
      <Navbar />
      <Hero />
      <section className = 'card--list'>
        {cards}
      </section>
    </div>
  )
}