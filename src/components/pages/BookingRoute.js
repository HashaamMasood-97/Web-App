import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';


import logo from "./a.jpg";






 const User= props =>(
    
    <div class="doc" style={{display: "inline-block" }} >
  
      <h4 class="hey"> Dr. {props.user.firstName} {props.user.lastName}</h4>
       
       <div class="bota">
      <h5>SPECIALIZATION</h5> 
      <p>{props.user.specialisation}</p>
      <h5>QUALIFICATION</h5> 
      <p>{props.user.qualification}</p>
      <h5>EXPERIENCE</h5> 
      <p>{props.user.workexp}</p>
      

      </div>
      
      <div class="botaa"> 
      <Link to= {"/patient/" +  props.user._id}> 
  <input type="submit" value="BOOK NOW" className="btn btn-primary" /> 
  </Link>  
      </div> 
    
         </div>









 )

export class BookingRoute extends Component {

    constructor(props) {
        super(props);
       this.state={homemedic: []};
    }


    componentDidMount(){
        axios.get('http://localhost:3500/homemedic/api/doctor/signup/get')
        .then(response => {
            this.setState({homemedic: response.data});
        })
        .catch(function(error){
            console.log(error);
        }
        )
    }



    
  
   
    
DoctorList(){
    return this.state.homemedic.map(function(currentUser, i){

     return<User user={currentUser} key={i} />;

    });
}


    render() {
        return (
            <div >
                          
                           {this.DoctorList()}

                 
                
            
           </div>
        )
    }
}

export default BookingRoute