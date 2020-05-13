import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 const User= props =>(
   <tr>
       <td>{props.user.firstName}</td>
       <td>{props.user.lastName}</td>
       <td>{props.user.contact}</td>
       <td>{props.user.email}</td>
       <td>{props.user.gender}</td>
       <td>{props.user.CNIC}</td>
       <td>{props.user.DOB}</td>
       <td>{props.user.qualification}</td>
       <td>{props.user.workexp}</td>
       <td>{props.user.specialisation}</td>
       <td>{props.user.date}</td>
   </tr>



 )

export class DoctorRetrieval extends Component {

    constructor(props) {
        super(props);
        this.state={homemedic: [],  search:''};
    }


    componentDidMount(){
        axios.get('http://localhost:3500/homemedic/register/doctor/get')
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

    
DoctorList(){
    return this.state.homemedic.filter(
        (currentUser)=>{
            return currentUser.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
    ).map(function(currentUser, i){

     return<User user={currentUser} key={i} />;

    });
}


    render() {
        return (
            <div id="div23">
            <h3  id="abcdef"> DOCTORS </h3>
            <div id="search1">
              <input id="searchs" placeholder="Search Doctor" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
              </div>
            <table className="school" style={{marginTop:20}} >
                 <thead>
                         <tr>
                             <th>First Name</th>
                             <th>Last Name</th>                            
                             <th>Contact Number</th>
                             <th>E-mail</th>
                             <th>Gender</th>
                             <th>CNIC</th>
                             <th>DOB</th>
                             <th>Qualification</th>
                             <th>Work Experience</th>
                             <th>Specialisation</th>                        
                             <th>User Joined</th>
                          
                         </tr>

                 </thead>
                 <tbody>
                           {this.DoctorList()}

                 </tbody>
                
            </table>
           </div>
        )
    }
}

export default DoctorRetrieval
