import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
        <div className='Navlist'>
          <Header/>
          <Navbar/>
          <Footer/>
        </div>
      
  );
}

export default App;

