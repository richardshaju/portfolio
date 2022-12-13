import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import License from './License';
function App() {

  return (
    <div className="App" id='home' style={{ background: '#0000' }}>
      <Router>
          <Routes>
            <Route exact path="/portfolio"  element={<Home />} />
            <Route exact path="/portfolio/license" element={<License />} />
          </Routes>
        </Router>
    </div> 

  );
}

export default App;
