import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 const User= props =>(

        
     

      
       <ul>Your booking from Dr.{props.user.firstName} {props.user.lastName} is {props.user.bookingstatus}. {props.user.reason}</ul>
     
   
       
       
      
    
     



 



 )

export class patmsg extends Component {

    constructor(props) {
        super(props);
        this.state={homemedic: []};
    }


    componentDidMount(){
        axios.get('http://localhost:3500/homemedic/api/patients/'+this.props.match.params.id)
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
            <div> 
                <h1>Your Messages</h1>
                
                          <div>
          
                
                           {this.PatientList()}

                 
                
      </div>
      </div>
 
        )
    }
}

export default patmsg
