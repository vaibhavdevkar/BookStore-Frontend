import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <NavLink to="/" className="navbar-brand">BOOK STORE</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      
      <NavLink className="nav-item nav-link active" to="/" >Booklist </NavLink>
      <NavLink className="nav-item nav-link active" to="addbook" >Addbook</NavLink>

    </div>
  </div>
</nav>
  )
}

export default Navbar