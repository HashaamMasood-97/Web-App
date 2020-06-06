import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 

export class signinup extends Component {

   


    render() {
        return (
          <div id="siu">
             
                  <div id="equal">
                    <h1>Welcome!</h1>
                    <h1>Are you a?</h1>
                    </div>
                    <div id="nc">
                        <div className="form-group" style={{display: "inline-block"}} ><a href="/login">
                       <input type="submit" value="   USER   " className="btn btn-primary"  />
                       </a> </div>
                        <div className="form-group"   style={{display: "inline-block"}} ><a href="/doctorlogin">
                       <input type="submit" value="DOCTOR" className="btn btn-primary"  />
                       </a></div>
                       </div>
    
                </div>

     
            
        );
    }
}

export default signinup
