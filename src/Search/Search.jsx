import React from 'react'
import './Search.css'
import { useNavigate } from "react-router-dom"

function Search() {
    const navigate = useNavigate()
    const [searchInput, getSearchInput] = React.useState('')
    const [regionSelect, getRegion] = React.useState('NA')

    const handleChangeSearch = (event) => {
        getSearchInput(event.target.value)
    }

    const handleChangeSelect = (event) => {
        getRegion(event.target.value)
    }

    const searchAccount = (event) => {
        event.preventDefault()
        navigate({
            pathname: `/account/${regionSelect}/${searchInput}`
        })

    }
    return (
        <form className="search-form" onSubmit={searchAccount}>
            <select 
                className="region-select"
                onChange={handleChangeSelect}
                value={regionSelect}
            >
                <option value="NA">North America</option>
                <option value="EUW">EU West</option>
                <option value="EUNE">EU East/Nordic</option>
            </select>
            <input
                className="search-input"
                type="text"
                placeholder="Enter an account name..."
                value={searchInput}
                onChange={handleChangeSearch}
            />
            {/* <button
                type="submit"
                className="search-button"
            >Go</button> */}
        </form>
    )
  }
  
  export default Search