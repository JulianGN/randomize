import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'

import MainMenu from './components/MainMenu'
import SortNumbers from './components/SortNumbers'
import ResultSortNumbers from './components/ResultSortNumbers'

import logo from './logo.svg'

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <header className='header-logo'>
          <img src={logo} alt="Ranzomize Logo" />
          <button className='btn-clean info-right'><i className="fas fa-info-circle"></i></button>
        </header>

        
          <Routes>
            <Route path="/" element={<SortNumbers />} />
            <Route path="numbers" element={<ResultSortNumbers sortedNumbers={[3, 4, 5, 7, 8, 10]} />} />
          </Routes>
        
        
        <MainMenu active="number" />

      </div>

    </BrowserRouter>
  )
}

export default App