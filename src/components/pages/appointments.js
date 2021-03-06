import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';
import { getProfile } from './UserFunctions'


 const User= props =>(
   <tr><td id="spc">{props.user.bookingstatus}</td>
       <td>{props.user.firstName} {props.user.lastName}</td>
       <td>{props.user.specialisation}</td>
       <td>{props.user.user_first} {props.user.user_last}</td>
       <td>{props.user.p_name}</td>
       <td>{props.user.p_phone}</td>
       <td>{props.user.p_email}</td>
       <td>{props.user.p_address}</td>
       <td>{props.user.DOB}</td>
       <td>{props.user.medhistory}</td> 
       <td>{props.user.details}</td>
        <td>{props.user.p_sex}</td>
        <td>{props.user.status}</td>
        <td>{props.user.fee}</td>
        <td>{props.user.timeslot}</td>
       
       
      
    
     



   </tr>



 )

export class appointments extends Component {

    constructor(props) {
        super(props);
        this.state={
            homemedic: [],
            user_first:'',
            user_last:''
        
        
        
        };
            
            
            
    }


    userid(){
     
        const token = localStorage.usertoken
        getProfile(token).then(res => {
         if(token){
          this.setState({
            user_id:res._id,
            user_first:res.first_name,
            user_last:res.last_name, 
          })}
          else{
            console.log('error')
         
          }
        }) 
      }

      form(){
        axios.get('http://localhost:3500/homemedic/api/patients/'+this.props.match.params.id)
        .then(response => {
            this.setState({homemedic: response.data});
        })
        .catch(function(error){
            console.log(error);
        }
        )
      }
    componentDidMount(){
       this.form()
       this.userid()
    }

    
PatientList(){
    return this.state.homemedic.map(function(currentUser, i){

     return<User user={currentUser} key={i} />;

    });
}


    render() {
        return (
            <div id="div23">
            <h3  id="abcdef">{this.state.user_first}, Your Appointments </h3>
            <table className="school" style={{marginTop:20}} >
                 <thead>
                         <tr>
                         <th>Booking Status</th>
                            <th>Doctor Name</th>
                            <th>Specialisation</th>
                            <th>User Name</th>                      
                             <th>Patient Name</th>
                             <th>Contact Number</th>
                             <th>E-mail</th>
                             <th>Address</th>
                             <th>Date Of Birth</th>
                             <th>Medical History</th>
                             <th>Details</th>
                             <th>Gender</th>
                             <th>Marital Status</th>
                             <th>FEE</th>
                             <th>Timeslot</th>
                                                       
                           
                      
                          
                         </tr>

                 </thead>
                 <tbody>
                           {this.PatientList()}

                 </tbody>
                
            </table>
           </div>
        )
    }
}

export default appointments
