import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './admin.css';

export class adminuser extends Component {
    constructor (props){
        super(props)
   


        this.onTextboxChangeFirstNam=this.onTextboxChangeFirstNam.bind(this);  
        this.onTextboxChangeLastNam=this.onTextboxChangeLastNam.bind(this);
        this.onTextboxChangeContact=this.onTextboxChangeContact.bind(this);
        this.onDelete=this.onDelete.bind(this);  
        this.onSubmit=this.onSubmit.bind(this);
   
        this.state = {
        first_name: '',
        last_name:'',
     
        phone:'',
        gender:'',
    
        email:'',
        user_id:''
  
  
  
       
      };

    }


   

    userinfo(){                                                            
        axios.get('http://localhost:3500/homemedic/register/user/'+this.props.match.params.id)
             .then(response=>{
                this.setState({
                  first_name: response.data.first_name,
                  last_name: response.data.last_name,
                  user_id: response.data._id,
                  email: response.data.email,
                  phone:response.data.phone,
                  gender:response.data.gender,
                  
  
                })
  
             })
         .catch(function(error) {
            console.log(error)
            
         }
         )    
    } 


    componentDidMount() {
        
        this.userinfo()
     
     }
       



     onTextboxChangeFirstNam(event) {
        this.setState({
          first_name: event.target.value,
        });
      }
    
      onTextboxChangeLastNam(event) {
        this.setState({
          last_name: event.target.value,
        });
      }
    
      onTextboxChangeContact(event) {
        this.setState({
          phone: event.target.value,
        });
      }
    

  
      onDelete(){
         if(window.confirm('Are you sure?')) {  
        axios.delete('http://localhost:3500/homemedic/api/user/delete/'+ this.props.match.params.id)
        .then(response => {
            console.log(response);
        });
        this.props.history.push('/userretrieval');
    }
    }
      
        
        
        onSubmit(e){
            e.preventDefault();
            const user = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                phone: this.state.phone,
              }
            axios.post('http://localhost:3500/homemedic/user/update/'+ this.props.match.params.id, user)
                  .then(res => console.log(res.data));
                  
             //return to homepage after once it is updated
             
             this.props.history.push('/userretrieval');
           
               }

    render() {
        return (
            <div id="profile">  
            <h1 className="jkl">PROFILE</h1>
            <table className="tabling">
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>     <input   type="text"
                             className="form-control"
                             value={this.state.first_name}
                             onChange={this.onTextboxChangeFirstNam}
                               /></td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td> <input   type="text"
                             className="form-control"
                             value={this.state.last_name}
                             onChange={this.onTextboxChangeLastNam}
                               /></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.email}</td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td> <input   type="text"
                             className="form-control"
                             value={this.state.phone}
                             onChange={this.onTextboxChangeContact}
                               /></td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{this.state.gender}</td>
                </tr>
              
            
                <tr>
                  <td>Doctor Id</td>
                  <td>{this.state.user_id}</td>
                </tr>
             
              </tbody>
            </table>
          
            <div className="form-group"   >
                   <input type="submit"  style={{background: "black" , textAlign:"center", marginLeft:"280px", marginTop:"50px"}} value="Update Profile" className="btn btn-primary" onClick={this.onSubmit}/>
                
                    </div>
   
                    <div className="form-group"      >       
                    <input type="submit"  style={{background: "black" , textAlign:"center", marginLeft:"280px", marginTop:"0px"}} value="Delete Profile" className="btn btn-primary" onClick={this.onDelete}/>

                    </div>

    </div>
        )
    }
}

export default adminuser
