 import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './admin.css';
import axios from 'axios';
import { getProfileDoc } from './DoctorFunctions';

class profiledoc extends Component {
  constructor() {
    super()


    
    this.state = {
        firstName: '',
        lastName:'',
        DOB:'',
        CNIC: '',
        password: '',
        contact:'',
        gender:'',
        qualification:'',
        nationality:'',
        specialisation:'',
        workexp:'',
        email:'',
        
      errors: {}
    }
  }

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('doctortoken')
    this.props.history.push(`/doctorlogin`)
  }  

  
    
  
      componentDidMount() {
      
        const token = localStorage.doctortoken
        getProfileDoc(token).then(res => {
          try{
         if(token){
          this.setState({
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
            contact:res.contact,
            gender:res.gender,
            doc_id:res._id,
            DOB:res.DOB,
            CNIC:res.CNIC,           
            qualification:res.qualification,
            nationality:res.nationality,
            specialisation:res.specialisation,
            workexp:res.workexp,
          })}
          else{
            this.props.history.push(`/doctorlogin`)
            console.log('error')
         
          }} catch(error){
            localStorage.removeItem('doctortoken') 
           this.props.history.push(`/doctorlogin`)
   }
        }) 
      }
      
       
       
   

  render() {
  /*const token = localStorage.usertoken
    if(!token){
     return (
       <div id="news">
         <h1>USER NAME OR PASSWORD INCORRECT</h1>
         <a href="/logins">
         <button>Login Again</button>
         </a>
        </div>)} */
     
  
       

    return (
     <div>
       
          
       <p class="botp" style={{display: "inline-block"}}>Welcome  Dr. {this.state.firstName} {this.state.lastName} </p>
           <div class="botss"  style={{display: "inline-block"}}>
           <button  onClick={this.logOut.bind(this)}   > Logout</button>
            </div>
                <div class="botsss1"    style={{display: "inline-block"}}>     <a href="chatbot"  style={{ textDecoration: 'none' }}> <h1> Chatbot  </h1> </a> </div>
                <div class="botsss2"    style={{display: "inline-block"}}>     <Link to={"/docappointments/"+this.state.doc_id}  style={{ textDecoration: 'none' }}> <h1> Appointments  </h1> </Link> </div>
                <div class="botsss3"    style={{display: "inline-block"}}>     <Link to={"/updateinfodoc/"+this.state.doc_id}    style={{ textDecoration: 'none' }}> <h1> Update Info  </h1> </Link> </div>
           
          <div id="profile">  
          <h1 className="jkl">PROFILE</h1>
          <table className="tabling">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.firstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.lastName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>{this.state.contact}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{this.state.gender}</td>
              </tr>
              <tr>
                <td>DOB</td>
                <td>{this.state.DOB}</td>
              </tr>
              <tr>
                <td>CNIC</td>
                <td>{this.state.CNIC}</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>{this.state.qualification}</td>
              </tr>
              <tr>
                <td>Work Experience</td>
                <td>{this.state.workexp}</td>
              </tr>
              <tr>
                <td>Specialisation</td>
                <td>{this.state.specialisation}</td>
              </tr>
              <tr>
                <td>Doctor Id</td>
                <td>{this.state.doc_id}</td>
              </tr>
           
            </tbody>
          </table>
         
 
        
          

  </div>
        
      </div>
    )
  }
}

export default profiledoc