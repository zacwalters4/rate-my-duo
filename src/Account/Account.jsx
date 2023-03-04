import React from 'react'
import './Account.css'
import { useLocation } from "react-router-dom"
import { formatAccountName } from '../Utilities/Helper'
import { fetchAccount } from '../Utilities/APICalls'

function Account() {
    const locationData = useLocation()
    const accountName = formatAccountName(locationData.pathname)
    const [accountData, setAccountData] = React.useState([])

    const getAccount = () => {
        fetchAccount(accountName)
        .then(data => {
            setAccountData(data)
        })
    }

    React.useEffect(() => {
        getAccount()
      }, [])

    return (
        <main className="Account">
            <div>
                <h1>{accountName}</h1>
            </div>
        </main>
    )
  }
  
  export default Account