import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './admin.css';


const API_URL = "http://localhost:3500/";
 const User= props =>(
   <tr>
       <td>{props.user.imageName}</td>
       <td>{props.user.imageData}</td>
       
       
      
    
     



   </tr>



 )

export class imgret extends Component {

    constructor(props) {
        super(props);
        this.state={homemedic: []};
    }


    componentDidMount(){
        axios.get('http://localhost:3500/homemedic/uploadmulter/get')
        .then(response => {
            this.setState({homemedic: response.data});
        })
        .catch(function(error){
            console.log(error);
        }
        )
    }

    
MessageList(){
    return this.state.homemedic.map(function(currentUser, i){

     return<User user={currentUser} key={i} />;

    });
}


    render() {
        return (
            <div id="div23">
            <h3  id="abcdef"> Messages </h3>
            <table className="school" style={{marginTop:20}} >
                 <thead>
                         <tr>
                             <th> Name</th>
                            
                             <th>Image</th>
                          
                        
                      
                          
                         </tr>

                 </thead>
                 <tbody>
                           {this.MessageList()}

                 </tbody>
                
            </table>
           </div>
        )
    }
}

export default imgret
