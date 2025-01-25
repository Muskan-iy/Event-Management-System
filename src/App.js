import React from 'react';
import './App.css';
import Main from './components/Main'; 
import Header from './components/Header';
import Service from './components/Service';
import About from './components/About';
import Price from './components/Price'; 
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Service />
      <About />
      <Price />
      <Review />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;

