import React, {useState, useEffect } from 'react'
// import Axios from "axios"

export default function SearchCard() {
    
    const [query,setQuery] = useState("") 
    const [card, setCard] = useState([])
    const findCard = async (e) =>{
        e.preventDefault()
    
        const url = `https://api.magicthegathering.io/v1/cards?name=${query}`
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.cards);
            setCard(data.cards)
        }catch(err){
          console.error(err);
        }
    }

    return (
      <>
        <form className="form" onSubmit={findCard}>
          <label htmlFor="query" className="label">
            Find MTG cards
          </label>
          <input
            className="input"
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type card name here"
          ></input>
          <button className="button" type="submit">
            Search
          </button>
        </form>
        <div className="card-list">
          {card.filter(chosenCard =>chosenCard.imageUrl).map((chosenCard, id) => (
            <div className="card" key={card.id}>
              <img
                className="card--image"
                src={chosenCard.imageUrl}
                alt={chosenCard.name + " card"}
              />
              <div className="card--content">
                <h3 className='card--title'>{chosenCard.name}</h3>
                <p><small>Mana Cost: {chosenCard.manaCost}</small></p>
                <p><small>Type: {chosenCard.type}</small></p>
                <p className='card--desc'>{chosenCard.text}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}