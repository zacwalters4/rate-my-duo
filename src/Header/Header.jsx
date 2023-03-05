import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Search from '../Search/Search'

function Header() {
    const locationData = useLocation()
    const activePage = locationData.pathname

    return (
        <header className="header">
            <h1>Rate my Duo</h1>
            <Link to={`/`}>
            {(activePage == '/') &&
                <button className="header-button active">Home</button>}
            {(activePage !== '/') &&
                <button className="header-button">Home</button>}
            </Link>
            <Link to={`/saved`}>
            {(activePage == '/saved') &&
                <button className="header-button active">Saved</button>}
            {(activePage !== '/saved') &&
                <button className="header-button">Saved</button>}
            </Link>
            <Search />

        </header>
    )
  }
  
  export default Header