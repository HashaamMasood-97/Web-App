import React, { Component } from 'react'
import { getProfile } from './UserFunctions'
import {Link} from 'react-router-dom';
import './admin.css';

class Profile extends Component {
  constructor() {
    super()


    
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      gender:'',
      phone:'',
      errors: {}
    }
  }

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/login`)
  }  

  
    componentDidMount() {
      
       const token = localStorage.usertoken
        getProfile(token).then(res => {
         if(token){
          this.setState({
            first_name: res.first_name,
            last_name: res.last_name,
            email: res.email,
            phone:res.phone,
            gender:res.gender
          })}
          else{
            console.log('error')
         
          }
        }) 
     
      
      }
    
   

  render() {
    const token = localStorage.usertoken
    if(!token){
     return (
       <div id="news">
         <h1>USER NAME OR PASSWORD INCORRECT</h1>
         <a href="/logins">
         <button>Login Again</button>
         </a>
       </div>
     )
  
         
    }
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>{this.state.phone}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{this.state.gender}</td>
              </tr>
              <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
             </a>
            </tbody>
          </table>
          <p>Signed in</p>
           <button> <Link to="./bookingroute"> Book Doctor</Link> </button> <br/>
           <button> <a href="chatbot">Chatbot</a> </button>



 
        </div>
      </div>
    )
  }
}

export default Profile
