import React from 'react'
import MTGLogo from "./images/MTG-Logo.png";
import Axios from "axios"
export default function Navbar() {


  const [card, setNewCard] = React.useState("")  
  const getCard = () =>{
    Axios.get("https://api.magicthegathering.io/v1/cards").then(
        (response)=>{
            setNewCard(response.data.cards[0].imageUrl)
        }
    )
  }   

  return (
    <div><nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand"> <img src={MTGLogo} alt="" width="100" className="d-inline-block align-text-top"/></a>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Type your card's name" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <button onClick={getCard}>Click</button>
  <img src={card}></img>
  </div>
  )
}
