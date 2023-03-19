import NotFoundPage from './components/notFound/notFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Home from './components/homePage/HomePage';
function App() {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
        React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
        React.createElement(Route, { path: "*", element: React.createElement(NotFoundPage, null) })));
}
export default App;
