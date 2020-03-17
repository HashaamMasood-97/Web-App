import React from 'react'

export default function login() {
    
  
  
  
  
  return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
        
          {/* Tabs Titles */}
          <h2 className="active"> Sign In </h2>
          <h2 className="inactive underlineHover">Sign Up </h2>
        
         {/*   Icon 
          <div className="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
       </div> */}
  
          {/* Login Form */}
          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username" />
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
            <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
          </form>
        
          {/* Remind Passowrd */}
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    )
}
