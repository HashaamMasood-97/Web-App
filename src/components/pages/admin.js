import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';



 

export class admin extends Component {

   


    render() {
        return (
          <div className="fill">
             <div class="botsss4"    style={{display: "inline-block"}}>     <a href="/doctorsignup/"    style={{ textDecoration: 'none' }}> <h1> Add Doctor  </h1> </a> </div>
             <div class="botsss6"    style={{display: "inline-block"}}>     <a href="/connectivity/"    style={{ textDecoration: 'none' }}> <h1> Connected DOC/PAT  </h1> </a> </div>
            <div id="aaa">
            <a href="./userretrieval">
              <div class="box" style={{display: "inline-block"}}> 
            <h2>MEMBERS</h2> <br/>
          
            </div>
            </a>
            <a href="./doctorretrieval">
             <div class="box1"   style={{display: "inline-block"}}>
            <h2  >DOCTORS</h2> <br/>
            </div>
            </a>
            </div>
            <div class="bbb">  <a href="./contactretrieval">      
              <div id="box2"  style={{display: "inline-block"}}>
            <h2>MESSAGES</h2> <br/>
            </div>
            </a>
            <a  href="./patientretrieval">
             <div id="box3"  style={{display: "inline-block"}}>
            <h2>BOOKINGS</h2> <br/>
            </div>
            </a>
            </div>

          </div>  
            
        );
    }
}

export default admin
