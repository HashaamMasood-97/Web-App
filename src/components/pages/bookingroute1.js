import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import './admin.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';

export class bookingroute1 extends Component {
    constructor (props){
        super(props)
 

 



 
 this.state={
 
   
     firstName:'',
     lastName:'',
     specialisation:'',
     workexp:'',
     qualification:'',
     _id:'', 
     fee:'',
     slot1:'',
     slot2:'',
     slot3:'',
     slot4:'',
     slot5:'',
  
    
     
     
   
 
 }
    }


    componentDidMount(){                                                            
        axios.get('http://localhost:3500/homemedic/register/doctor/'+this.props.match.params.id)
             .then(response=>{
                this.setState({
                  firstName: response.data.firstName,
                  lastName: response.data.lastName,
                  specialisation: response.data.specialisation,
                  qualification:response.data.qualification,
                  workexp:response.data.workexp,
                  email:response.data.email,
                  _id: response.data._id,
                  fee:response.data.fee,
                  slot1:response.data.slot1,
                  slot2:response.data.slot2,
                  slot3:response.data.slot3,
                  slot4:response.data.slot4,
                  slot5:response.data.slot5,
                 
  
                })
  
             })
         .catch(function(error) {
            console.log(error)
            
         }
         )    
    } 


    render() {
        const token = localStorage.usertoken
          if(!token){
            return(
                <div>
                   {this.props.history.push(`/login`)}
                </div>
            );
          }
        return (
            <div id="doc" >
  
            <h4 class="hey"> Dr. {this.state.firstName} {this.state.lastName}</h4>
             
             <div class="bota">
            <h5>SPECIALIZATION</h5> 
            <p>{this.state.specialisation}</p>
            <h5>QUALIFICATION</h5> 
            <p>{this.state.qualification}</p>
            <h5>EXPERIENCE</h5> 
            <p>{this.state.workexp}</p>
            <h5>Email Address</h5> 
            <p>{this.state.email}</p>
            <h5>Fee</h5> 
            <p>{this.state.fee}</p>
           
           
            <Dropdown  options={['Slot 1: ' + this.state.slot1, 'Slot 2: ' +this.state.slot2, 'Slot 3: ' +this.state.slot3,
            'Slot 4: ' +this.state.slot4,'Slot 5: ' +this.state.slot5]}   placeholder="Available Time Slots" />
            
            </div>
            
            <div class="botaa"> 
              <Link to= {"/patient/" +  this.state._id}> 
                      <input type="submit" value="BOOK NOW" className="btn btn-primary" /> 
              </Link>  
             </div> 
           </div>           
        )
    
   
    
    
    }
}

export default bookingroute1
