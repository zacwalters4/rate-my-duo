import React from 'react'
import './Search.css'
import { useNavigate } from "react-router-dom"
import { formatURL } from "../Utilities/Helper"

function Search() {
    const navigate = useNavigate()
    const [searchInput, getSearchInput] = React.useState('')

    const handleChangeSearch = (event) => {
        getSearchInput(event.target.value)
    }

    const clearSearchInput = () => {
        getSearchInput('')
    }

    const searchAccount = (event) => {
        event.preventDefault()
        navigate({
            pathname: `/account/${formatURL(searchInput)}`
        })
        clearSearchInput()
    }
    return (
        <form className="search-form" onSubmit={searchAccount}>
            <input
                className="search-input"
                type="text"
                placeholder="Enter an account name..."
                value={searchInput}
                onChange={handleChangeSearch}
            />
        </form>
    )
  }
  
  export default Search