import React from 'react'
import SavedTile from '../SavedTile/SavedTile'
import './Saved.css'
import PropTypes from 'prop-types'

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

 Saved.propTypes = {
    props: PropTypes.shape({
        saveAccount: PropTypes.func.isRequired,
        savedAccounts: PropTypes.arrayOf(PropTypes.object)
    })
  }