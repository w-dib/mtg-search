import React from 'react'
import MTGLogo from "./images/MTG-Logo.png";

export default function Navbar() {
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
  </div>
  )
}
