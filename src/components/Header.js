import React from 'react'
import logo from "../images/Logonetflix.png" 
import {Link} from "react-router-dom"
import {FiSearch} from "react-icons/fi"

const Header = () => {
  return (
    <nav className='header'>
        <img src={logo}/>
        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recentlyadded">Recently Added</Link>
            <Link to="/tvshows">My List</Link>
        </div>
        
            <FiSearch/>
    </nav>
  )
}

export default Header