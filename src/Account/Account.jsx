import React from 'react'
import './Account.css'
import { useLocation } from "react-router-dom"
import { formatAccountName, formatBattleTag } from '../Utilities/Helper'
import { fetchAccount } from '../Utilities/APICalls'
import StatBox from '../StatBox/StatBox'
import { calculateScore } from '../Utilities/Calculations'

function Account() {
    const locationData = useLocation()
    const accountName = formatAccountName(locationData.pathname)
    const [accountData, setAccountData] = React.useState([])

    const getAccount = () => {
        fetchAccount(accountName)
        .then(data => {
            setAccountData(data[1].stats)
            setAccountData(accountName => [...accountName, data[2].stats[1], data[2].stats[2]])
        })
    }

    React.useEffect(() => {
        getAccount()
      }, [accountData])

    return (
        <main className="Account">
            <div className="account-info">
                <h1>{formatBattleTag(accountName)}</h1>
                {(accountData) && <h2>{calculateScore(accountData)}</h2>}
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