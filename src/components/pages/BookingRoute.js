import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';


import logo from "./a.jpg";






 const User= props =>(
    
    <div class="doc" style={{display: "inline-block" }} >
   <div className="imgn"  style={{display: "inline-block" }}>
    <img  width='170' src={logo} alt="Card image"/>
    </div>
    
     <div className="right"  >
      <h4> Dr. {props.user.firstName} {props.user.lastName}</h4>
      </div>
      <div className="bot">
      <p>{props.user.qualification}</p> 
      <p>{props.user.specialisation}</p>
      <a href="#" class="btn btn-primary">BOOK NOW</a>
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