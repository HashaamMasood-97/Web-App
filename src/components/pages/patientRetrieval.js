import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 const User= props =>(
   <tr>
       <td>{props.user.p_name}</td>
       <td>{props.user.p_phone}</td>
       <td>{props.user.p_email}</td>
       <td>{props.user.p_address}</td>
       <td>{props.user.DOB}</td>
       <td>{props.user.medhistory}</td> 
       <td>{props.user.details}</td>
        <td>{props.user.p_sex}</td>
        <td>{props.user.status}</td>
       
       
      
    
     



   </tr>



 )

export class patientRetrieval extends Component {

    constructor(props) {
        super(props);
        this.state={homemedic: []};
    }


    componentDidMount(){
        axios.get('http://localhost:3500/homemedic/api/patient')
        .then(response => {
            this.setState({homemedic: response.data});
        })
        .catch(function(error){
            console.log(error);
        }
        )
    }

    
PatientList(){
    return this.state.homemedic.map(function(currentUser, i){

     return<User user={currentUser} key={i} />;

    });
}


    render() {
        return (
            <div id="div23">
            <h3  id="abcdef"> Booking Form </h3>
            <table className="school" style={{marginTop:20}} >
                 <thead>
                         <tr>
                             <th>User Name</th>
                             <th>Contact Number</th>
                             <th>E-mail</th>
                             <th>Address</th>
                             <th>Date Of Birth</th>
                             <th>Medical History</th>
                             <th>Details</th>
                             <th>Gender</th>
                             <th>Marital Status</th>
                                                       
                           
                      
                          
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

export default patientRetrieval
