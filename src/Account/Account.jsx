import React from 'react'
import './Account.css'
import { useLocation } from "react-router-dom"
import { formatAccountName, formatBattleTag } from '../Utilities/Helper'
import { fetchAccount } from '../Utilities/APICalls'
import StatBox from '../StatBox/StatBox'
import { calculateScore } from '../Utilities/Calculations'
import PropTypes from 'prop-types'

function Account(props) {
    const locationData = useLocation()
    const accountName = formatAccountName(locationData.pathname)
    const [accountData, setAccountData] = React.useState([])
    const [isSaved, setSaved] = React.useState(false)
    const [error, setError] = React.useState('')

    const getAccount = () => {
        fetchAccount(accountName)
        .then(data => {
            setAccountData(data[1].stats)
            setAccountData(accountData => [...accountData, data[2].stats[1], data[2].stats[2]])
        })
        .catch(error => {
            setError(error)
        })
    }

    const saveAccount = (e) => {
        e.preventDefault()
        props.saveAccount(saved => [...saved, { accountName: accountName, accountScore: calculateScore(accountData)}])
        setSaved(true)
    }

    React.useEffect(() => {
        getAccount()
        props.savedAccounts.forEach((account) => {
            if(account.accountName === accountName) {
                setSaved(true)
            } else {
                setSaved(false)
            }
        })
      }, [locationData])

    return (
        <main className="account">
            <div className="account-alignment">
                <div className="account-info">
                    <h1>{formatBattleTag(accountName)}</h1>
                    {(accountData.length > 0) && <h2>{calculateScore(accountData)}</h2>}
                    {(error) && <h2>This battletag is invalid or does not exist.</h2>}
                </div>
                <div className="save-button-container">
                    {(!isSaved) && <button className="save-button unsaved" onClick={saveAccount}>Save</button>}
                    {(isSaved) && <button className="save-button saved">Saved</button>}
                </div>
            </div>
            <div className="account-stats">
                {accountData.map((stat, index) => {
                    return ( <StatBox stat={stat} key={index} /> )
                })}
            </div>
        </main>
    )
  }
  
  export default Account

  Account.propTypes = {
    props: PropTypes.shape({
        saveAccount: PropTypes.func.isRequired,
        savedAccounts: PropTypes.arrayOf(PropTypes.object)
    })
  }