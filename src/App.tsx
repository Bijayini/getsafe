import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Buyflow, { ProductIds } from './buyflow/Buyflow'
import Logo from './assets/Logo'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Logo />
        </header>
        <Routes>
          <Route
            path="/buy/insurance_dev"
            element={<Buyflow productId={ProductIds.devIns} />}
          />
          <Route
            path="/"
            element={
              <div>
                <p>Welcome to Getsafe's Developer Insurance</p>
                <Link to="/buy/insurance_dev">Get started!</Link>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
