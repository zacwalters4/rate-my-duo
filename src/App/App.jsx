import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Header from '../Header/Header'
import Home from '../Home/Home'
import Account from '../Account/Account'
import Error404 from '../Error404/Error404'
import Saved from '../Saved/Saved'

function App() {


  const [savedAccounts, saveAccount] = React.useState([
    {
        "accountName": "wutt-1337",
        "accountScore": 182826
    },
    {
        "accountName": "Rokit-11457",
        "accountScore": 416045
    }
])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account saveAccount={saveAccount} savedAccounts={savedAccounts}/>}>
          <Route index element={<Account />} />
          <Route path=":accountName" element={<Account />} />
        </Route>
        <Route path="/saved" element={<Saved savedAccounts={savedAccounts} saveAccount={saveAccount}/>} />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/404" replace />}
    />
      </Routes>
    </div>
  )
}

export default App;
