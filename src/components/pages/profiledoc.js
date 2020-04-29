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
    localStorage.removeItem('usertoken')
    this.props.history.push(`/doctorlogin`)
  }  

  
    
  
      componentDidMount() {
      
        const token = localStorage.usertoken
        getProfileDoc(token).then(res => {
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
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
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
              <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
             </a>
            </tbody>
          </table>
          <p>Signed in</p>
         
            <button> <a href="chatbot">Chatbot</a> </button> <br/>
            <button> <a href= {"/docappointments/"+this.state.doc_id}>Appointments</a> </button>
 
        
          

 
        </div>
      </div>
    )
  }
}

export default profiledoc