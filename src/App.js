import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Header from './components/Header';
import Home from './components/Home';
import Navbarmenu from './components/menu/Navbarmenu';
import Subscribe from './components/subscribe';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Router basename="/">
        <Header/>
        <Navbarmenu />
        <Home/>
        {/* <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Online" component={Online}/>
          <Route path="/Offline" component={Offline}/>
          <Route path="/Contact" component={Contact}/>
          
          
        </Switch> */}
        <Accordion/>
        <Subscribe/>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
