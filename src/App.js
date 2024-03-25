  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import HomePage from './pages/HomePage.jsx';
  import Products from './pages/Products.jsx';
  import Services from './pages/Services.jsx';
  import ContactPage from './pages/ContactPage.jsx';
  

  function App() {

    return (
      <Router>
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </Router>
    );
  }

  export default App;
