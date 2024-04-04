import React from 'react';
import Navbar from './Components/Navbar';

import Home from './Components/Home.js';

import Joinin from './Components/Joinin.js';
import Explore from './Components/Explore.js';
import Add from './Components/Add.js';
import Testomoni from './Components/Testomoni.js';
import Community from './Components/Community.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
 
   <Router>
        <Routes>
          <Route exact path='/Reactjs_website' element={<Home />}/>
          
          <Route exact path='/signin' element={<Home />}/>

          <Route exact path='/Joinin' element={<Joinin />}/>
          
        </Routes>
      </Router>
    
    <Explore />
    <Add />
    <Testomoni />
    <Community />
    <Footer />
     

    </>
  )
}

export default App