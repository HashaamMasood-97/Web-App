import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

import { loginsDoc } from './DoctorFunctions'





export class DoctorLogin extends Component {
 
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this)
  }



  onChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }


  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password

    
    }

    const errors = {}
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    errors.email = !user.email.match(emailformat) ?
       console.log("Invalid Email" ): ""
    errors.password = user.password.length < 6 ?
        "Password should be more than 6 characters" : ""
    console.log(errors)

    if (errors.email === "" && errors.password === "") {
        loginsDoc(user).then(res => {
            this.props.history.push(`/profiledoc`)
        })
    }

   

  }






  render() {
    const token = localStorage.doctortoken
    if(!token){
      return (
        
          
    
      <div className="wrapper fadeInDown">
      <div id="formContent">
    
        {/* Tabs Titles */}
        <h2 className="active"> Sign In </h2>

        <h2 className="inactive underlineHover"><a href="doctorsignup">Sign Up</a> </h2>
       

      
       {/*   Icon 
        <div className="fadeIn first">
          <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
     </div> */}

        {/* Login Form */}
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username"    value={this.state.email}
              onChange={this.onChangeEmail} />
          <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password"   value={this.state.password}
              onChange={this.onChangePassword} />
          <input type="submit" value="Sign In" className="fadeIn fourth" defaultValue="Log In"  onClick={this.onSubmit} />
        </form>
      
        {/* Remind Passowrd */}
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password? Doctor</a>
        </div>
      </div>
    </div>
     );}
    return(
      <div>
        <Redirect to='./profiledoc'/>
      </div>
  );
    
  
     
  

}
}
export default DoctorLogin

