import React, { Component } from 'react'
import { register } from './UserFunctions'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      gender:'',
      phone:'',
      password: '',
      errors: {}
    }
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeFirstname(event) {
    this.setState({
      first_name: event.target.value,
    });
  }

  onChangeLastname(event) {
    this.setState({
      last_name: event.target.value,
    });
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


  onChangeGender(event) {
    this.setState({
      gender: event.target.value,
    });
  }

  onChangePhone(event) {
    this.setState({
      phone: event.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      gender:this.state.gender,
      phone: this.state.phone
    }

    const errors = {}
        const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        errors.email = !user.email.match(emailformat) ?
            "Invalid Email" : ""
        errors.password = user.password.length < 6 ?
            "Password should be more than 6 characters" : ""
        console.log(errors)

        if (errors.email === "" && errors.password === "") {
            register(user).then(res => {
                this.props.history.push(`/login`)
            })
        }
  }

  
  
  render(){
        return (    
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
              <input type="text" id="firstname" className="fadeIn second" name="signup" placeholder="First Name"   value={this.state.first_name}
              onChange={this.onChangeFirstname} />
              <input type="text" id="lastname" className="fadeIn second" name="signup" placeholder="Last Name"     value={this.state.last_name}
                  onChange={this.onChangeLastname} />
                    <input type="text" id="phone" className="fadeIn second" name="signup" placeholder="Contact  Number"     value={this.state.phone}
                  onChange={this.onChangePhone} />
        
              <input type="email" id="email" className="fadeIn third" name="signup" placeholder=" E-mail address"      value={this.state.email}
                  onChange={this.onChangeEmail}/>
              <input type="password" id="password" className="fadeIn third" name="signup" placeholder="Password"  value={this.state.password}
                  onChange={this.onChangePassword}/>
              
             
                   
                    <div className="form-group">
                    <p  style={{marginTop: 10 }}>GENDER</p>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityLow"
                    value="Male"
                    checked={this.state.gender=='Male'}
                    onChange={this.onChangeGender}
                    />
             <label className="form-check-label">       Male     </label>

                    

                  
                 <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityMedium"
                    value="Female"
                    checked={this.state.gender=='Female'}
                    onChange={this.onChangeGender}
                    />
             <label className="form-check-label" >   Female   </label>

                  </div>   
               
                   </div>
  
                    
                           <br/>
              <input type="submit" value="Sign Up" className="fadeIn fourth" defaultValue="Sign Up" onClick={this.onSubmit}/>
            </form>
          
            {/* Remind Passowrd */}
            <div id="formFooter">
              <a className="underlineHover" href="#"></a>
            </div>
          </div>
        </div>
        
      );    
  }
}

export default Signup


