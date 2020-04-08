import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 const User= props =>(
   <tr>
       <td>{props.user.c_name}</td>
       <td>{props.user.c_address}</td>
       <td>{props.user.c_phone}</td>
 
       <td>{props.user.c_message}</td>
       
      
    
     



   </tr>



 )

export class ContactusRetrieval extends Component {

    constructor(props) {
        super(props);
        this.state={homemedic: []};
    }


    componentDidMount(){
        axios.get('http://localhost:3500/homemedic/api/contact')
        .then(response => {
            this.setState({homemedic: response.data});
        })
        .catch(function(error){
            console.log(error);
        }
        )
    }

    
MessageList(){
    return this.state.homemedic.map(function(currentUser, i){

     return<User user={currentUser} key={i} />;

    });
}


    render() {
        return (
            <div id="div23">
            <h3  id="abcdef"> Messages </h3>
            <table className="school" style={{marginTop:20}} >
                 <thead>
                         <tr>
                             <th>User Name</th>
                            
                             <th>E-mail</th>
                          
                             <th>Contact Number</th>
                             <th>Message</th>
                      
                          
                         </tr>

                 </thead>
                 <tbody>
                           {this.MessageList()}

                 </tbody>
                
            </table>
           </div>
        )
    }
}

export default ContactusRetrieval
