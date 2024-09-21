import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
