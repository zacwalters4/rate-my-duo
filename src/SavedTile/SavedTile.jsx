import React from 'react'
import { formatBattleTag } from '../Utilities/Helper'
import './SavedTile.css'

function SavedTile(props) {
    const deleteSaved = (e) => {
        e.preventDefault()
        props.saveAccount(accounts => 
            accounts.filter(account => account.accountName != props.account.accountName)
        )
    }

    return (
        <div className="saved-tile">
            <p>{formatBattleTag(props.account.accountName)}</p>
            <p>{props.account.accountScore}</p>
            <button onClick={deleteSaved}>Remove</button>
        </div>
    )
  }
  
  export default SavedTile