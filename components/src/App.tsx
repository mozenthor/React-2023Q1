import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Home from './components/homePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<h1>404 not found</h1>}></Route>
    </Routes>
  );
}

export default App;
