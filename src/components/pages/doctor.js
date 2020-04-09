import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 

export class admin extends Component {

   


    render() {
        return (
          <div className="fill">
             
            <div id="aaa">
            <a href="./doctorsignup">
              <div class="box" style={{display: "inline-block"}}> 
            <h2>Sign Up</h2> <br/>
          
            </div>
            </a>
            <a href="./doctorlogin">
             <div class="box1"   style={{display: "inline-block"}}>
            <h2  >Sign In</h2> <br/>
            </div>
            </a>
            
            <a href="./extra">
             <div class="box1"   style={{display: "inline-block"}}>
            <h2>Extra</h2> <br/>
            </div>
            </a>
            </div>
           

          </div>  
            
        );
    }
}

export default admin
