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
import admin from './components/pages/admin';
import doctor from './components/pages/doctor';
import UserRetrieval from './components/pages/UserRetrieval';
import DoctorRetrieval from './components/pages/DoctorRetrieval';
import ContactusRetrieval from './components/pages/ContactusRetrieval';
import patientRetrieval from './components/pages/patientRetrieval';
import BookingRoute from './components/pages/BookingRoute';
import DoctorSignUp from './components/pages/DoctorSignUp';
import DoctorLogin from './components/pages/DoctorLogin';
import chatbot from './components/pages/chatbot';
import Profile from './components/pages/Profile';
import profiledoc from './components/pages/profiledoc';
import appointments from './components/pages/appointments';
import docappointments from './components/pages/docappointments';
import extra from './components/pages/extra';
import updateinfouser from './components/pages/updateinfouser';
import updateinfodoc from './components/pages/updateinfodoc';
import weeklytimetable from './components/pages/weeklytimetable';
import connectivity from './components/pages/connectivity';
import bookingStatus from './components/pages/bookingStatus';




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
     <Route path ="/patient/:id" component= {patient} />
     <Route path ="/signup" component= {Signup} />
     <Route path ="/admin" component= {admin} />
     <Route path ="/doctor" component= {doctor} />
     <Route path ="/userretrieval" component= {UserRetrieval} />
     <Route path ="/doctorretrieval" component= {DoctorRetrieval} />
     <Route path ="/contactretrieval" component= {ContactusRetrieval} /> 
     <Route path ="/patientretrieval" component= {patientRetrieval} /> 
     <Route path ="/bookingroute" component= {BookingRoute} /> 
     <Route path ="/doctorsignup" component= {DoctorSignUp} /> 
     <Route path ="/doctorlogin" component= {DoctorLogin} /> 
     <Route path ="/chatbot" component= {chatbot} />     
     <Route path="/profile" component={Profile} />
     <Route path="/profiledoc" component={profiledoc} />
     <Route path="/appointments/:id" component={appointments} />
     <Route path="/docappointments/:id" component={docappointments} />
     <Route path="/updateinfouser/:id" component={updateinfouser} />
     <Route path="/updateinfodoc/:id" component={updateinfodoc} />
     <Route path="/weeklytimetable/:id" component={weeklytimetable} />
     <Route path="/connectivity" component={connectivity} />
     <Route path="/bookingstatus/:id" component={bookingStatus} />
     <Route path ="/extra" component= {extra} />
   

  
      

        
     
     
   
    </div>   
    </div>
    </Router>
    

     
    );
  }
}

export default App;
