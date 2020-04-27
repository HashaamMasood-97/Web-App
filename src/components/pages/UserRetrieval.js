import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 const User= props =>(
   <tr>
       <td>{props.user.first_name}</td>
       <td>{props.user.last_name}</td>
       <td>{props.user.email}</td>
       <td>{props.user.phone}</td>
       <td>{props.user.gender}</td>   
       <td>{props.user.date}</td>

   </tr>



 )

export class UserRetrieval extends Component {

    constructor(props) {
        super(props);
        this.state={homemedic: []};
    }


    componentDidMount(){
        axios.get('http://localhost:3500/homemedic/register/get')
        .then(response => {
            this.setState({homemedic: response.data});
        })
        .catch(function(error){
            console.log(error);
        }
        )
    }

    
UserList(){
    return this.state.homemedic.map(function(currentUser, i){

     return<User user={currentUser} key={i} />;

    });
}


    render() {
        return (
            <div id="div23">
            <h3  id="abcdef"> MEMBERS </h3>
            <table className="school" style={{marginTop:20}} >
                 <thead>
                         <tr>
                             <th>First Name</th>
                             <th>Last Name</th>
                             <th>E-mail</th>                        
                             <th>Contact Number</th>
                             <th>Gender</th>
                             <th>User Joined</th>
                          
                         </tr>

                 </thead>
                 <tbody>
                           {this.UserList()}

                 </tbody>
                
            </table>
           </div>
        )
    }
}

export default UserRetrieval
