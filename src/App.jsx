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
import SortPaperScissorsRock from './components/SortPaperScissorsRock'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SortNumbers />} />
          <Route exact path="/numbers" element={<ResultSortNumbers />} />
          <Route exact path="/filter-numbers" element={<FilterSortNumbers />} />
          <Route exact path="/groups" element={<SortGroups />} />
          <Route exact path="/config-groups" element={<ConfigGroups />} />
          <Route exact path="/result-groups" element={<ResultGroups />} />
          <Route exact path="/paper-scissors-rock" element={<SortPaperScissorsRock />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App