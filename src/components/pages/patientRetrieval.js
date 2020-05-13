import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 const User= props =>(
   <tr>
        <td>{props.user.bookingstatus}</td>
       <td>{props.user.firstName} {props.user.lastName}</td>
       <td>{props.user.specialisation}</td>
       <td>{props.user.user_first}  {props.user.user_last}</td>
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

export class patientRetrieval extends Component {

    constructor(props) {
        super(props);
        this.state={
            homemedic: [],
            search:''
        };
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

    updateSearch(event){
        this.setState({
            search: event.target.value.substr(0,20)
        });
    }

    
PatientList(){
    return this.state.homemedic.filter(
        (currentUser)=>{
            return currentUser.p_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
    ).map(function(currentUser, i){

     return<User user={currentUser} key={i} />;

    });
}


    render() {
        return (
            <div id="div23">
            <h3  id="abcdef"> Booking Forms </h3>
            <div id="search1">
              <input id="searchs" placeholder="Search Form" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
              </div>
            <table className="school" style={{marginTop:20}} >
                 <thead>
                         <tr>
                            <th id="spc">Booking Status</th>
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

export default patientRetrieval
