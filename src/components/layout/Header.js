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
            <li><a href="http://localhost:3000/about">About</a></li>
            <li><a href="http://localhost:3000/login">Sign In/Up</a></li>
            <li><a href="http://localhost:3000/doctor">Doctors</a></li>
            <li><a href="http://localhost:3000/contactus">Contact Us</a></li>
            <li><a href="http://localhost:3000/admin">Admin</a></li>
            <li><a href="http://localhost:3000/images">Images</a></li>
           {/*<li><a href="http://localhost:3000/imgret">ImagesRET</a></li> */}
         
           
            
            
          </ul>
        </div>
      </div>
    )
}

 
export default Header;