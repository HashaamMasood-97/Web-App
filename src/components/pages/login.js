import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

export default function login() {
    
  
  
  
  
  return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
      
          {/* Tabs Titles */}
          <h2 className="active"> Sign In </h2>
         
          <h2 className="inactive underlineHover"><a href="signup">Sign Up</a> </h2>
        
         {/*   Icon 
          <div className="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
       </div> */}
  
          {/* Login Form */}
          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username" />
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
            <input type="submit" value="Sign In" className="fadeIn fourth" defaultValue="Log In" />
          </form>
        
          {/* Remind Passowrd */}
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    )
}
