import React from 'react'
import {  Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar__link">
      <Link to="/about">About</Link>
    </div>
    <div className="navbar__link">
      <Link to="/posts">Posts</Link>
    </div>
  </div>
  )
}

export default Navbar