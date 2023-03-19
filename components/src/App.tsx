import NotFoundPage from './components/notFound/notFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Home from './components/homePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
