import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Header from '../Header/Header'
import Home from '../Home/Home'
import Account from '../Account/Account'
import Error404 from '../Error404/Error404'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />}>
          <Route index element={<Account />} />
          <Route path=":region/:accountName" element={<Account />} />
        </Route>
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/404" replace />}
    />
      </Routes>
    </div>
  )
}

export default App;
