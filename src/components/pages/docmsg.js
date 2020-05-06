import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 const User= props =>(

        
     

      
       <ul>Your new booking from {props.user.user_first} {props.user.user_last}. Scheduled  at  {props.user.timeslot}</ul>
     
   
       
       
      
    
     



 



 )

export class docmsg extends Component {

    constructor(props) {
        super(props);
        this.state={homemedic: []};
    }


    componentDidMount(){
        axios.get('http://localhost:3500/homemedic/api/doc/'+this.props.match.params.id)
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

export default docmsg
