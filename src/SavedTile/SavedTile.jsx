import React from 'react'
import { formatBattleTag } from '../Utilities/Helper'
import './SavedTile.css'
import { Link } from "react-router-dom"

function SavedTile(props) {
    const deleteSaved = (e) => {
        e.preventDefault()
        props.saveAccount(accounts => 
            accounts.filter(account => account.accountName != props.account.accountName)
        )
    }

    return (
        <div className="saved-tile">
            <Link className="account-name" to={`/account/${props.account.accountName}`}>
            <p>{formatBattleTag(props.account.accountName)}</p>
            </Link>
            <p>{props.account.accountScore}</p>
            <button onClick={deleteSaved}>Remove</button>
        </div>
    )
  }
  
  export default SavedTile