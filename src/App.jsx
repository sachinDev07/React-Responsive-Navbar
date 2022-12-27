import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product';
import Services from './pages/Services';
import Navigation from './components/Navigation/Navigation'

 const  App = () => {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Product />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>
  );

}

export default App;
