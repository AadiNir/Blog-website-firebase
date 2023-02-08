import './App.css';
import Read from './components/Bookservices'

import Createblog from './components/Createblog';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Updateblog from './components/Updateblog';




function App() {
  
  


  return (
    <div>
      <Router>
    <Routes>
      <Route exact path="/" element={<Createblog/>} />
      <Route path="/updateblog" element={<Updateblog/>} />
      <Route path="/read" element={<Read/>}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
