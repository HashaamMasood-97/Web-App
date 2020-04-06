import React from 'react'
import{Link} from 'react-router-dom';


 function Header() {
    return (
        <div id="header">
        <div id="logo">
          <div id="logo_text">
       
         
   
             
            {/* class="logo_colour", allows you to change the colour of the text */}
            <h1><a href="index.html">Home<span className="logo_colour">Medic</span></a></h1>
            <h2>We connect you to your desired doctor at your doorstep</h2>
              
          </div>
        </div>
        <div id="menubar">
          <ul id="menu">
            {/* put class="selected" in the li tag for the selected page - to highlight which page you're on */}
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="login">Sign In/Up</a></li>
            <li><a href="doctor">Doctors</a></li>
            <li><a href="contactus">Contact Us</a></li>
            <li><a href="admin">Admin</a></li>
           
            
            
          </ul>
        </div>
      </div>
    )
}

 
export default Header;