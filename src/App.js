import React, { Component } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';
import login from './components/pages/login';
import contactus from './components/pages/contactus';
import './App.css';
import home from './components/home';
import patient from './components/pages/patient';
import Signup from './components/pages/Signup';


class App extends Component {
  render(){
     return (
      <Router>
    <div className="App">
     <div className="container">
     
       <Header  />
     <Route exact path="/" component={home} />
     <Route path ="/about" component= {About} />
     <Route path ="/login" component= {login} />
     <Route path ="/contactus" component= {contactus} />
     <Route path ="/patient" component= {patient} />
     <Route path ="/signup" component= {Signup} />
    
    

   
    </div>   
    </div>
    </Router>
    

     
    );
  }
}

export default App;
