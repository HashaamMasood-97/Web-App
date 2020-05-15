import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './admin.css';

export class admindoc extends Component {
    constructor (props){
        super(props)
   


        this.onTextboxChangeFirstName=this.onTextboxChangeFirstName.bind(this);  
        this.onTextboxChangeLastName=this.onTextboxChangeLastName.bind(this);
        this.onTextboxChangeContact=this.onTextboxChangeContact.bind(this);
        this.onTextboxChangeFee=this.onTextboxChangeFee.bind(this);
     
        this.onTextboxChangeDOB=this.onTextboxChangeDOB.bind(this);
        this.onTextboxChangeNationality=this.onTextboxChangeNationality.bind(this);
        this.onTextboxChangeQualification=this.onTextboxChangeQualification.bind(this);
        this.onTextboxChangeSpecialisation=this.onTextboxChangeSpecialisation.bind(this);
        this.onTextboxChangeWorkexp=this.onTextboxChangeWorkexp.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onDelete=this.onDelete.bind(this);
   
        this.state = {
        firstName: '',
        lastName:'',
        DOB:'',
        CNIC: '',
        password: '',
        contact:'',
        gender:'',
        qualification:'',
        nationality:'',
        specialisation:'',
        workexp:'',
        email:'',
        doc_id:'',
        fee:''
  
  
  
       
      };

    }


   

    doctorinfo(){                                                            
        axios.get('http://localhost:3500/homemedic/register/doctor/'+this.props.match.params.id)
             .then(response=>{
                this.setState({
                  firstName: response.data.firstName,
                  lastName: response.data.lastName,
                  doc_id: response.data._id,
                  email: response.data.email,
                  contact:response.data.contact,
                  gender:response.data.gender,
                  DOB:response.data.DOB,
                  CNIC:response.data.CNIC,           
                  qualification:response.data.qualification,
                  nationality:response.data.nationality,
                  specialisation:response.data.specialisation,
                  workexp:response.data.workexp,
                  fee:response.data.fee
  
                })
  
             })
         .catch(function(error) {
            console.log(error)
            
         }
         )    
    } 


    componentDidMount() {
        
        this.doctorinfo()
     
     }
       

     onTextboxChangeFee(event) {
      this.setState({
        fee: event.target.value,
      });
    }
  

     onTextboxChangeFirstName(event) {
        this.setState({
          firstName: event.target.value,
        });
      }
    
      onTextboxChangeLastName(event) {
        this.setState({
          lastName: event.target.value,
        });
      }
    
      onTextboxChangeContact(event) {
        this.setState({
          contact: event.target.value,
        });
      }
    

  
      
        onTextboxChangeDOB(event) {
          this.setState({
            DOB: event.target.value,
          });
        }
      
        onTextboxChangeNationality(event) {
          this.setState({
            nationality: event.target.value,
          });
        }
      
        onTextboxChangeQualification(event) {
          this.setState({
            qualification: event.target.value,
          });
        }
      
        onTextboxChangeSpecialisation(event) {
          this.setState({
            specialisation: event.target.value,
          });
        }
      
        onTextboxChangeWorkexp(event) {
          this.setState({
            workexp: event.target.value,
          });
        }
      
        onDelete(){
            
            axios.delete('http://localhost:3500/homemedic/api/doctor/delete/'+ this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
            this.props.history.push('/doctorretrieval');
            
        }
        
        onSubmit(e){
            e.preventDefault();
            const user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                contact: this.state.contact,
                DOB: this.state.DOB,
                workexp: this.state.workexp,
                specialisation: this.state.specialisation,
                qualification: this.state.qualification,
                nationality: this.state.nationality,
                fee:this.state.fee
              }
            axios.post('http://localhost:3500/homemedic/doctor/update/'+ this.props.match.params.id, user)
                  .then(res => console.log(res.data));
                  
             //return to homepage after once it is updated
             
             this.props.history.push('/doctorretrieval');
           
               }

    render() {
        return (
            <div id="profile">  
            <h1 className="jkl">PROFILE</h1>
            <table className="tabling">
              <tbody>
                <tr>
                  <td>Fist Name</td>
                  <td>     <input   type="text"
                             className="form-control"
                             value={this.state.firstName}
                             onChange={this.onTextboxChangeFirstName}
                               /></td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td> <input   type="text"
                             className="form-control"
                             value={this.state.lastName}
                             onChange={this.onTextboxChangeLastName}
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
                             value={this.state.contact}
                             onChange={this.onTextboxChangeContact}
                               /></td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{this.state.gender}</td>
                </tr>
                <tr>
                  <td>DOB</td>
                  <td> <input   type="text"
                             className="form-control"
                             value={this.state.DOB}
                             onChange={this.onTextboxChangeDOB}
                               /></td>
                </tr>
                <tr>
                  <td>CNIC</td>
                  <td>{this.state.CNIC}</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td> <input   type="text"
                             className="form-control"
                             value={this.state.qualification}
                             onChange={this.onTextboxChangeQualification}
                               /></td>
                </tr>
                <tr>
                  <td>Work Experience</td>
                  <td> <input   type="text"
                             className="form-control"
                             value={this.state.workexp}
                             onChange={this.onTextboxChangeWorkexp}
                               /></td>
                </tr>
                <tr>
                  <td>Specialisation</td>
                  <td> <input   type="text"
                             className="form-control"
                             value={this.state.specialisation}
                             onChange={this.onTextboxChangeSpecialisation}
                               /></td>
                </tr>
                <tr>
                  <td>Doctor Id</td>
                  <td>{this.state.doc_id}</td>
                </tr>

<tr>
                <td>Fee</td>
                  <td> <input   type="text"
                             className="form-control"
                             value={this.state.fee}
                             onChange={this.onTextboxChangeFee}
                               /></td>
                                </tr>
             
              </tbody>
            </table>
           
            <div className="form-group"     >
                   <input type="submit"  style={{background: "black" , textAlign:"center", marginLeft:"280px", marginTop:"50px"}} value="Update Profile" className="btn btn-primary" onClick={this.onSubmit}/>

                    </div>
   
                    <div className="form-group"      >       
                    <input type="submit"  style={{background: "black" , textAlign:"center", marginLeft:"280px", marginTop:"0px"}} value="Delete Profile" className="btn btn-primary" onClick={this.onDelete}/>

                    </div>
            
  
    </div>
        )
    }
}

export default admindoc
