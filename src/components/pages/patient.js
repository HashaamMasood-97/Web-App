import React, { Component } from 'react';
import axios from 'axios';
import { getProfile } from './UserFunctions'

import './admin.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

     
     





export class patient extends Component {
    constructor (props){
        super(props)
 

        this.onChangePname=this.onChangePname.bind(this);
        this.onChangePaddress=this.onChangePaddress.bind(this);
        this.onChangePphone=this.onChangePphone.bind(this);
        this.onChangePemail=this.onChangePemail.bind(this);
        this.onChangePsex=this.onChangePsex.bind(this);
        this.onChangeDetails=this.onChangeDetails.bind(this);
        this.onChangeHistory=this.onChangeHistory.bind(this);
        this.onChangeDOB=this.onChangeDOB.bind(this);
        this.onChangeStatus=this.onChangeStatus.bind(this);
        this.onChangeTimeSlot=this.onChangeTimeSlot.bind(this);
      
        this.onSubmit=this.onSubmit.bind(this);
 



 
 this.state={
 
     p_name: '',
     p_address:'',
     p_phone:'',
     p_email:'',
     p_sex:'',
     DOB:'',
     history:'',
     details:'',
     status:'',
     firstName:'',
     lastName:'',
     specialisation:'',
     doc_id:'',
     user_id:'',
     user_last:'',
     user_first:'',
     timeslot:'',
     fee:'',
     slot1:'',
     slot2:'',
     slot3:'',
     slot4:'',
     slot5:'',
  
    
     
     
   
 
 }
    }
 
    
 
    doctorinfo(){                                                            
      axios.get('http://localhost:3500/homemedic/register/doctor/'+this.props.match.params.id)
           .then(response=>{
              this.setState({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                specialisation: response.data.specialisation,
                doc_id: response.data._id,
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

  userid(){
     
  const token = localStorage.usertoken
  getProfile(token).then(res => {
   if(token){
    this.setState({
      user_id:res._id,
      user_first:res.first_name,
      user_last:res.last_name, 
    })}
    else{
      console.log('error')
   
    }
  }) 
}

  componentDidMount() {
      this.userid()
      this.doctorinfo()
   
  
   
   }
     
    

    onChangeStatus(e){
        this.setState({
         status: e.target.value
        });
    }

    

    onChangeDetails(e){
        this.setState({
         details: e.target.value
        });
    }
 


 onChangeHistory(e){
    this.setState({
        medhistory: e.target.value
    });
}

onChangeDOB(e){
    this.setState({
        DOB: e.target.value
    });
}
 

onChangePphone(e){
    this.setState({
        p_phone: e.target.value
    });
}


onChangePemail(e){
    this.setState({
        p_email: e.target.value
    });
}

onChangePsex(e){
    this.setState({
        p_sex: e.target.value
    });
}

onChangeTimeSlot(e){
  this.setState({
      timeslot: e.target.value
  });
}

onChangePname(e){
    this.setState({
        p_name: e.target.value
    });
}

onChangePaddress(e){
    this.setState({
        p_address: e.target.value
    });
}


onSubmit(e){
    e.preventDefault(); 
// code to connect backend 

const newTodo ={
p_name: this.state.p_name,
p_address: this.state.p_address,
p_phone: this.state.p_phone,
p_email: this.state.p_email,
p_sex: this.state.p_sex,
details: this.state.details,
medhistory: this.state.medhistory,
DOB: this.state.DOB,
status: this.state.status,
firstName:this.state.firstName,
lastName:this.state.lastName,
specialisation:this.state.specialisation,
doc_id:this.state.doc_id,
user_id:this.state.user_id,
user_first:this.state.user_first,
user_last:this.state.user_last,
fee:this.state.fee,
timeslot:this.state.timeslot,
bookingstatus:'Pending'

};

axios.post('http://localhost:3500/homemedic/api/patient/add', newTodo)
.then(res => console.log(res.data));

this.props.history.push('/');


    }



    render() {
        return (
            <div>
                  <title>Contact V15</title>
                  <div className="container-contact100">
                    <div className="contact100-map" id="google_map" data-map-x="40.722047" data-map-y="-73.986422" data-pin="images/icons/map-marker.png" data-scrollwhell={0} data-draggable={1} />
                    <div className="wrap-contact100">
                      <div className="contact100-form-title" style={{backgroundImage: 'url(images/bg-01.jpg)'}}>
                        <span className="contact100-form-title-1">
                          Patient Form
                        </span>
                        <span className="contact100-form-title-2">
                      
                        </span>
                      </div>
              
       
                <form className="contact100-form validate-form" onSubmit={this.onSubmit}>

                  <div id='hashaam'>
                 <p> Dr. {this.state.firstName}
                  {this.state.lastName}  
                  <br/>
                 
                  {this.state.specialisation}
                  <br/>
                  Fee: {this.state.fee}
                  <br/>
                {/*  <Dropdown  options={['Slot 1: ' + this.state.slot1, 'Slot 2: ' +this.state.slot2, 'Slot 3: ' +this.state.slot3,
                         'Slot 4: ' +this.state.slot4,'Slot 5: ' +this.state.slot5]}  
                          
                         onChange={this.onChangeTimeSlot}
        placeholder="Available Time Slots" />  */}
                  </p>

                      
                  <div className="form-group">
                        <p  style={{marginTop: 10 }}>SELECT TIMESLOT</p>
                        <div className="form-check form-check-inline">
                           <input className="form-check-input"
                    type="radio"
                    name="priorityOpt"
                    id="priorityLows"
                    value={this.state.slot1}
                    checked={this.state.timeslot==this.state.slot1}
                    onChange={this.onChangeTimeSlot}
                    />
             <label className="form-check-label">  SLOT 1:  { this.state.slot1}         </label>
             < br/>

                    

                  
                 <input className="form-check-input"
                    type="radio"
                    name="priorityOpt"
                    id="priorityMediums"
                    value={this.state.slot2}
                    checked={this.state.timeslot==this.state.slot2}
                    onChange={this.onChangeTimeSlot}
                    />
             <label className="form-check-label" > SLOT 2:  {this.state.slot2}   </label>
             < br/>


             <input className="form-check-input"
                    type="radio"
                    name="priorityOpt"
                    id="priorityMediums"
                    value={this.state.slot3}
                    checked={this.state.timeslot==this.state.slot3}
                    onChange={this.onChangeTimeSlot}
                    />
             <label className="form-check-label" > SLOT 3:  {this.state.slot3}   </label>
             < br/>

             <input className="form-check-input"
                    type="radio"
                    name="priorityOpt"
                    id="priorityMediums"
                    value={this.state.slot4}
                    checked={this.state.timeslot==this.state.slot4}
                    onChange={this.onChangeTimeSlot}
                    />
             <label className="form-check-label" > SLOT 4:  {this.state.slot4}   </label>
             < br/>

             <input className="form-check-input"
                    type="radio"
                    name="priorityOpt"
                    id="priorityMediums"
                    value={this.state.slot5}
                    checked={this.state.timeslot==this.state.slot5}
                    onChange={this.onChangeTimeSlot}
                    />
             <label className="form-check-label" > SLOT 5:  {this.state.slot5}   </label>

             

                  
                   
                  </div>  
                 
                  </div>



                  </div>
                               
             
                 
                  < br/> 

                <div className="wrap-input100 validate-input" data-validate="Name is required">
                          <span className="label-input100">Full Name:</span>
                          <input className="input100"
                           type="text"
                            name="name" 
                            placeholder="Enter full name" 
                            value={this.state.p_name} 
                            onChange={this.onChangePname}/>
                          <span className="focus-input100" />
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                          <span className="label-input100">Email:</span>
                          <input className="input100" type="text" name="email" placeholder="Enter email addess" value={this.state.p_email}  onChange={this.onChangePemail} />
                          <span className="focus-input100" />
                        </div>
                    
                   
                     
                        <div className="wrap-input100 validate-input" data-validate="address is required">
                          <span className="label-input100">Address:</span>
                          <input className="input100" type="text" name="address" placeholder="Enter addess" value={this.state.p_address}  onChange={this.onChangePaddress} />
                          <span className="focus-input100" />
                        </div>
                        
                        
                        <div className="wrap-input100 validate-input" data-validate="phone is required">
                          <span className="label-input100">Contact Number:</span>
                          <input className="input100" type="text" name="phone" placeholder="Enter Phone Number" value={this.state.p_phone}  onChange={this.onChangePphone} />
                          <span className="focus-input100" />
                        </div>
                       
                        <div className="wrap-input100 validate-input" data-validate="DOB is required">
                       <span  className="label-input100">Date of Birth:</span>
                    <input  className="input100" type="date" name="date" placeholder="date" value={this.state.DOB}  onChange={this.onChangeDOB} />
                    <span className="focus-input100" />
                  </div>
                 

                  <div className="wrap-input100 validate-input" data-validate="Message is required">
                    <span className="label-input100">Medical History:</span>
                    <textarea className="input100" name="Specialisation" placeholder="(If any)" defaultValue={""}  value={this.state.medhistory}  onChange={this.onChangeHistory}/>
                    <span className="focus-input100" />
                  </div>

                  
                  <div className="wrap-input100 validate-input" data-validate="Message is required">
                    <span className="label-input100">Description:</span>
                    <textarea className="input100" name="Specialisation" placeholder="Breifly describe your illness" defaultValue={""} value={this.state.details}  onChange={this.onChangeDetails}/>
                    <span className="focus-input100" />
                  </div>
                       
                   

                    <div className="form-group">
                        <p  style={{marginTop: 10 }}>GENDER</p>
                        <div className="form-check form-check-inline">
                           <input className="form-check-input"
                    type="radio"
                    name="priorityOptions"
                    id="priorityLows"
                    value="Male"
                    checked={this.state.p_sex=='Male'}
                    onChange={this.onChangePsex}
                    />
             <label className="form-check-label">       Male     </label>

                    

                  
                 <input className="form-check-input"
                    type="radio"
                    name="priorityOptions"
                    id="priorityMediums"
                    value="Female"
                    checked={this.state.p_sex=='Female'}
                    onChange={this.onChangePsex}
                    />
             <label className="form-check-label" >   Female   </label>


                   
                  </div>   
                  </div>

                  <br/>
                  <div className="form-group">
                  <p  style={{marginTop: 10 }}>Marital Status</p>
                
                        <div className="form-check form-check-inline">
                           <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityLow"
                    value="Single"
                    checked={this.state.status=='Single'}
                    onChange={this.onChangeStatus}
                    />
             <label className="form-check-label">       Single     </label>

                    
             <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityMedium"
                    value="Married"
                    checked={this.state.status=='Married'}
                    onChange={this.onChangeStatus}
                    />
             <label className="form-check-label" >   Married   </label>

                  
                 <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityMediumss"
                    value="Divorced"
                    checked={this.state.status=='Divorced'}
                    onChange={this.onChangeStatus}
                    />
             <label className="form-check-label" >   Divorced   </label>



           



                  </div>   

                  </div>


                

                    
                           <br/>
                           <br/>
                           <br/>
                           <br/>
                           <br/>
                           <br/>
                           <br/>
                           <br/>
                           <br/>
                    <div className="form-group"  Align='center' >
                   <input type="submit" value="Submit" className="btn btn-primary" />
                   
                   
                   </div>  
                  
               </form>   
            </div>
            </div>
                  <div id="dropDownSelect1" />
                            
              
                </div>

               
              
   
                
        )
    }
}

export default patient

