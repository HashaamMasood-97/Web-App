import React, { Component } from 'react';
import axios from 'axios';

export class patient extends Component {
    constructor (props){
        super(props)

        this.onChangePname=this.onChangePname.bind(this);
        this.onChangePaddress=this.onChangePaddress.bind(this);
        this.onChangePphone=this.onChangePphone.bind(this);
        this.onChangePemail=this.onChangePemail.bind(this);
        this.onChangePsex=this.onChangePsex.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
 



 
 this.state={
 
     p_name: '',
     p_address:'',
     p_phone:'',
     p_email:'',
     p_sex:'',
 
 }
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


onSubmit(e){
    e.preventDefault(); 
// code to connect backend 
const newTodo ={
p_name: this.state.p_name,
p_address: this.state.p_address,
p_phone: this.state.p_phone,
p_email: this.state.p_email,
p_sex: this.state.p_sex
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
                       
                       
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                          <span className="label-input100">Email:</span>
                          <input className="input100" type="text" name="email" placeholder="Enter email addess" value={this.state.p_email}  onChange={this.onChangePemail} />
                          <span className="focus-input100" />
                        </div>

                    <div className="form-group">
                        <p  style={{marginTop: 10 }}>GENDER</p>
                        <div className="form-check form-check-inline">
                           <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityLow"
                    value="Male"
                    checked={this.state.p_sex=='Male'}
                    onChange={this.onChangePsex}
                    />
             <label className="form-check-label">       Male     </label>

                    

                  
                 <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityMedium"
                    value="Female"
                    checked={this.state.p_sex=='Female'}
                    onChange={this.onChangePsex}
                    />
             <label className="form-check-label" >   Female   </label>

                  </div>   

                

                    
                           <br/>
                    <div className="form-group"  Align='center' >
                   <input type="submit" value="Submit" className="btn btn-primary" />
                   
                   
                   </div>  
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

