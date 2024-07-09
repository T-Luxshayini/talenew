import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom"; 
import './App.css';

import Home from './components/Home';

import Faq from './components/Faq';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <> 
            
            <Router> 
              
                <Routes> 
                    <Route path="/" element={<Home />} /> 
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/about" element={<About />} /> 
                    
                    <Route path="/contact" element={<Contact />} /> 
                </Routes> 
            </Router> 
        </> 
    
    );
}


export default App;
