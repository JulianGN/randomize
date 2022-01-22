import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'

import SortNumbers from './components/SortNumbers'
import ResultSortNumbers from './components/ResultSortNumbers'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SortNumbers />} />
          <Route path="numbers" element={<ResultSortNumbers />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App