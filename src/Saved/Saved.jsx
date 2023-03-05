import React from 'react'
import SavedTile from '../SavedTile/SavedTile'
import './Saved.css'

function Saved(props) {

    return (
        <main className="saved">
            {props.savedAccounts.map((account, index) => {
                return (
                    <SavedTile account={account} key={index} saveAccount={props.saveAccount}/>
                )
            })}
        </main>
    )
  }
  
  export default Saved