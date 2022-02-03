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
import SortGroups from './components/SortGroups'
import ConfigGroups from './components/ConfigGroups'
import ResultGroups from './components/ResultGroups'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SortNumbers />} />
          <Route path="numbers" element={<ResultSortNumbers />} />
          <Route path="filter-numbers" element={<FilterSortNumbers />} />
          <Route path="groups" element={<SortGroups />} />
          <Route path="config-groups" element={<ConfigGroups />} />
          <Route path="result-groups" element={<ResultGroups />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App