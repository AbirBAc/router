import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Moviecard from './Components/Moviecard';
import Movielist from './Components/Movielist ';
import About from './Components/about';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/Moviecard/' element={<Moviecard />} />
          <Route path='/About' element={<About />} />
          <Route path='/Movielist' element={<Movielist />} />
          
        </Routes>
      </div>
    </BrowserRouter>
    </div>
    )

}

export default App;