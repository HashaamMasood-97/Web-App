import React, { Component } from 'react'


import {
  setInStorage,
  getFromStorage,
} from './storage';

export class Signup extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signUpFirstName:'',
      signUpLastName:'',
      signUpEmail: '',
      signUpPassword: '',
     
    };



    
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpFirstName=this.onTextboxChangeSignUpFirstName.bind(this);  
    this.onTextboxChangeSignUpLastName=this.onTextboxChangeSignUpLastName.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('http://localhost:3500/homemedic/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }


  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }
  
  
  onSignUp() {
    // Grab state
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('http://localhost:3500/homemedic/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
            signUpFirstName:'',
            signUpLastName:'',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  
  
  render() {
    
      const {
        isLoading,
        token,
        signUpFirstName,
        signUpLastName,
        signUpEmail,
        signUpPassword,
        signUpError,
      } = this.state;
      if (isLoading) {
        return (<div><p>Loading...</p></div>);
      }
      if (!token) {
        return (
          
            <div>
              {
                (signUpError) ? (
                  <p>{signUpError}</p>
                ) : (null)
              }
     
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
              <input type="text" id="firstname" className="fadeIn second" name="signup" placeholder="First Name"   value={signUpFirstName}
              onChange={this.onTextboxChangeSignUpFirstName} />
              <input type="text" id="lastname" className="fadeIn second" name="signup" placeholder="Last Name"  value={signUpLastName}
              onChange={this.onTextboxChangeSignUpLastName} />
              <input type="text" id="email" className="fadeIn third" name="signup" placeholder=" E-mail address"  value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}/>
              <input type="text" id="password" className="fadeIn third" name="signup" placeholder="Password"  value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}/>
              <input type="submit" value="Sign Up" className="fadeIn fourth" defaultValue="Sign Up" onClick={this.onSignUp}/>
            </form>
          
            {/* Remind Passowrd */}
            <div id="formFooter">
              <a className="underlineHover" href="#"></a>
            </div>
          </div>
        </div>
        </div>
      ); }

    
  }
}

export default Signup

