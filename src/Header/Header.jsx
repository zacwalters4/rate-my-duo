import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Header() {
    const locationData = useLocation()
    const activePage = locationData.pathname

    return (
        <header className="header">
            <Link to={`/`}>
            {(activePage == '/') &&
                <button className="header-button active">Rate my Duo</button>}
            {(activePage !== '/') &&
                <button className="header-button">Rate my Duo</button>}
            </Link>

        </header>
    )
  }
  
  export default Header