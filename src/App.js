import React, { Component } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';
import login from './components/pages/login';
import './App.css';
import home from './components/home';

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

    </div>   
    </div>
    </Router>
    

     
    );
  }
}

export default App;
