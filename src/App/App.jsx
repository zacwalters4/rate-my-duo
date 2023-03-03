import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from '../Header/Header'
import Home from '../Home/Home'
import Account from '../Account/Account'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />}>
          <Route index element={<Account />} />
          <Route path=":accountName" element={<Account />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
