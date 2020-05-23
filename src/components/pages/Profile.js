import React, { Component } from 'react'
import { getProfile, getAppointment } from './UserFunctions'
import {Link} from 'react-router-dom';
import './admin.css';
import axios from 'axios';

class Profile extends Component {
  constructor() {
    super()


    
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      gender:'',
      phone:'',
      user_id:'',
      firstName:'',
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
         try{
          if(token){
          this.setState({
            first_name: res.first_name,
            last_name: res.last_name,
            email: res.email,
            phone:res.phone,
            gender:res.gender,
            user_id:res._id
          })}
          else{
            this.props.history.push(`/login`)
            console.log('error')
         
          }
        } catch(error){
                 localStorage.removeItem('usertoken') 
                this.props.history.push(`/login`)
        }
        }) 
      }
      
       
       
   

  render() {
 /*   const token = localStorage.usertoken
    if(!token){
     return (
       <div id="news">
         <h1>USER NAME OR PASSWORD INCORRECT</h1>
         <a href="/logins">
         <button>Login Again</button>
         </a>
       </div>
     )
  
         
    }*/
    return (
     <div>
            <p class="botp" style={{display: "inline-block"}}>Welcome  {this.state.first_name} {this.state.last_name} </p>
            <div class="botss"  style={{display: "inline-block"}}>
            <button  onClick={this.logOut.bind(this)}   > Logout</button>
            </div>
            <div class="botsss"  style={{display: "inline-block"}   } >
             <Link to="./bookingroute"   style={{ textDecoration: 'none' }}> <h1>Book Doctor</h1></Link>
                </div>
                <div class="botsss1"    style={{display: "inline-block"}}>     <a href="chatbot"   style={{ textDecoration: 'none' }}> <h1> Chatbot  </h1> </a> </div>
                <div class="botsss2"    style={{display: "inline-block"}}>     <Link to={"/appointments/"+this.state.user_id}    style={{ textDecoration: 'none' }}> <h1> Appointments  </h1> </Link> </div>
                <div class="botsss3"    style={{display: "inline-block"}}>     <Link to={"/updateinfouser/"+this.state.user_id}    style={{ textDecoration: 'none' }}> <h1> Update Info  </h1> </Link> </div>
                <div class="botssss"    style={{display: "inline-block"}}>     <Link to={"/patmsg/"+this.state.user_id}    style={{ textDecoration: 'none' }}> <h1> Your Messages </h1> </Link> </div> 
          <div id="profile">  
          <h1 className="jkl">PROFILE</h1>
          <table className="tabling">
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
              <tr>
                <td>User Id</td>
                <td>{this.state.user_id}</td>
              </tr>
              </tbody>
          </table>
              </div>
            </div>
    )
  }
}

export default Profile
