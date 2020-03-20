import React from 'react'

export default function Signup() {
    return(
    <div className="wrapper fadeInDown">
        <div id="formContent">
        
        <h2 className="inactive underlineHover"> <a href="login">Sign In</a> </h2>
        <h2  className="active" >Sign Up</h2>
         {/*   Icon 
          <div className="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
       </div> */}
  
          {/* Login Form */}
          <form>
            <input type="text" id="login" className="fadeIn second" name="signup" placeholder="Username" />
            <input type="text" id="password" className="fadeIn third" name="signup" placeholder="Password" />
            <input type="text" id="email" className="fadeIn third" name="signup" placeholder=" E-mail address"/>
            <input type="text" id="phone" className="fadeIn third" name="signup" placeholder=" Phone Number"/>
            <input type="submit" value="Sign Up" className="fadeIn fourth" defaultValue="Sign Up" />
          </form>
        
          {/* Remind Passowrd */}
          <div id="formFooter">
            <a className="underlineHover" href="#"></a>
          </div>
        </div>
      </div>
    )

}

