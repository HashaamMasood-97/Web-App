import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';


import logo from "./a.jpg";






 const User= props =>(
    <div class="card" style={{width: '400' ,display: "inline-block" }} >
    <img class="card-img-top"  width='200' src={logo} alt="Card image"/>
    <div class="card-body">
     
      <h4 class="card-title"> {props.user.firstName} {props.user.lastName}</h4>
      <p class="card-text">{props.user.qualification}</p>
      <p class="card-text">{props.user.specialisation}</p>
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