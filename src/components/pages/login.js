import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import {
  setInStorage,
  getFromStorage,
} from './storage';





export class login extends Component {
  constructor(props) {
    super(props);
    
    
    
    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      firstName:'',
    
     
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
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
     
  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
      
    } = this.state;
    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('http://localhost:3500/homemedic/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
        
      }),
    }).then(res => res.json())
    
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: '',
      
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
     
      }) 
    
  }

/* getPosts =() =>{
  fetch('http://localhost:3500/homemedic/api/account/signup/get')
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2 class="mb-4">Posts</h2>';
        data.forEach(function(post){
          output += `
            <div class="card card-body mb-3">
              <h3> DR.${post.firstName}</h3>
              <p>${post.lastName}</p>
              <p>${post.contact}</p>
            
            </div>
          `;
        });
        document.getElementById('output').innerHTML =output;
      })
    } 
  
 } */

 logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('http://localhost:3500/homemedic/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
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

 
  



  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
 
     
    } = this.state;
    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }
    if (!token) {
      return (
        
          <div>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
   
    
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
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username"    value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail} />
          <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password"   value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword} />
         
          <input type="submit" value="Sign In" className="fadeIn fourth" defaultValue="Log In"    onClick={this.onSignIn}     />
        </form>
      
        {/* Remind Passowrd */}
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
    </div>
  );
  }
 return (
     <div>
      <p>Signed in</p>
      <button onClick={this.logout}>logout</button> <br/>
      <button> <a href="bookingroute"> next</a> </button> <br/>
      <button> <a href="http://127.0.0.1:5501/src/components/pages/userprofile.html"> next3</a> </button>
      
      
      
      
 
   {/*   <div id='output'>  
      {this.getPosts()}
    </div>  */} 
    </div>
    
         
   //<Redirect to="/userinfo"/>

  ); 
}
}
export default login

