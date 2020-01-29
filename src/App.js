import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Mainpage from './containers/Mainpage'
import Cards from './components/Cards'



function App() {
  return (
    <div className="App">
      <Header />
     <Mainpage />
     <Cards />
    
      <Footer />
    </div>
  );
}

export default App;
