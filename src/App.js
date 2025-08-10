import './App.css';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
function App() {
  return (
        <Router>

    <div className="App">
            <Routes>

      <Route path='/' element={<Home />} />
      
           </Routes>

    </div>
       </Router>
  );
}

export default App;
