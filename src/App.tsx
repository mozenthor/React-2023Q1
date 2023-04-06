import NotFoundPage from './components/notFound/notFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Home from './components/homePage/HomePage';
import Header from './components/header/header';
import FormPage from './components/formPage/form/formPage';
import { Provider } from 'react-redux';
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/form" element={<FormPage />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
