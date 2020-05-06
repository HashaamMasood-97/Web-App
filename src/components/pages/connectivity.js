import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 const User= props =>(
   <tr>
       <td>{props.user.firstName} {props.user.lastName}</td>
  
       <td>{props.user.user_first}  {props.user.user_last}</td>
       <td>{props.user.p_name}</td>

   </tr>



 )

export class connectivity extends Component {

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
            <h3  id="abcdef"> Connected Doctors and Patient </h3>
            <table className="schoolss" style={{marginTop:20}} >
                 <thead>
                         <tr>
                            <th>Doctor Name</th>
                            <th>User Name</th>   
                            <th>Patient Name</th>                   
                             
                                                       
                           
                      
                          
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

export default connectivity
