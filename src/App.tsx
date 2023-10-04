import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import AroundYou from './pages/around you';
import Discover from './pages/discover';
import TopArtists from './pages/top artists';
import TopCharts from './pages/top charts';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Discover />}/>
          <Route path='/around-you' element={<AroundYou />}/>
          <Route path='top-artists' element={<TopArtists />}/>
          <Route path='/top-charts' element={<TopCharts />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
