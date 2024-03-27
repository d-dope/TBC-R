  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import HomePage from './pages/HomePage.jsx';
  import Services from './pages/Services.jsx';
  import ContactPage from './pages/ContactPage.jsx';
  import Blogs from './pages/BlogPage.jsx';
  import ProfilePage from './pages/ProfilePage.jsx';
  

  function App() {

    return (
      <Router>
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </Router>
    );
  }

  export default App;
