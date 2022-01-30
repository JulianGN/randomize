import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'

import SortNumbers from './components/SortNumbers'
import ResultSortNumbers from './components/ResultSortNumbers'
import FilterSortNumbers from './components/FilterSortNumbers'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SortNumbers />} />
          <Route path="numbers" element={<ResultSortNumbers />} />
          <Route path="filter-numbers" element={<FilterSortNumbers />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App