import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 

export class signinup extends Component {

   


    render() {
        return (
          <div className="fill">
             
            <div id="aaa">
            <a href="./doctorlogin">
              <div class="box" style={{display: "inline-block"}}> 
            <h2>Doctor</h2> <br/>
          
            </div>
            </a>
            <a href="./login">
             <div class="box1"   style={{display: "inline-block"}}>
            <h2  >User</h2> <br/>
            </div>
            </a>
            
            {/*<a href="./extra"  >
             <div class="box1"   style={{display: "inline-block"}}>
            <h2>Extra</h2> <br/>
            </div>
            </a> */}
            </div>
           

          </div>  
            
        );
    }
}

export default signinup
