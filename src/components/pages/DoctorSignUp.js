import React, { Component } from 'react'
import './contactus.css';
import { registerDoc } from './DoctorFunctions'


  export class DoctorSignUp extends Component {
    constructor(props) {
      super(props);
      
      
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
  
  
  
       
      };
  
  
  
      
      this.onTextboxChangeEmail = this.onTextboxChangeEmail.bind(this);
      this.onTextboxChangePassword = this.onTextboxChangePassword.bind(this);
      this.onTextboxChangeFirstName=this.onTextboxChangeFirstName.bind(this);  
      this.onTextboxChangeLastName=this.onTextboxChangeLastName.bind(this);
      this.onTextboxChangeContact=this.onTextboxChangeContact.bind(this);
      this.onTextboxChangeGender=this.onTextboxChangeGender.bind(this);
      this.onTextboxChangeCNIC=this.onTextboxChangeCNIC.bind(this);
      this.onTextboxChangeDOB=this.onTextboxChangeDOB.bind(this);
      this.onTextboxChangeNationality=this.onTextboxChangeNationality.bind(this);
      this.onTextboxChangeQualification=this.onTextboxChangeQualification.bind(this);
      this.onTextboxChangeSpecialisation=this.onTextboxChangeSpecialisation.bind(this);
      this.onTextboxChangeWorkexp=this.onTextboxChangeWorkexp.bind(this);
   
      this.onSubmit = this.onSubmit.bind(this);
    
    }
  
    onSubmit(e) {
      e.preventDefault()
  
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        gender:this.state.gender,
        contact: this.state.contact,
        DOB: this.state.DOB,
        CNIC: this.state.CNIC,
        workexp: this.state.workexp,
        specialisation: this.state.specialisation,
        qualification: this.state.qualification,
        nationality: this.state.nationality,
        slot1:this.state.slot1,
        slot2:this.state.slot2,
        slot3:this.state.slot3,
        slot4:this.state.slot4,
        slot5:this.state.slot5,
      }
  
      const errors = {}
          const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          errors.email = !user.email.match(emailformat) ?
              "Invalid Email" : ""
          errors.password = user.password.length < 6 ?
              "Password should be more than 6 characters" : ""
          console.log(errors)
  
          if (errors.email === "" && errors.password === "") {
              registerDoc(user).then(res => {
                  this.props.history.push(`/doctorlogin`)
              })
          }
    }
  
    onTextboxChangeEmail(event) {
      this.setState({
        email: event.target.value,
      });
    }
  
    onTextboxChangePassword(event) {
      this.setState({
        password: event.target.value,
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
  
    onTextboxChangeGender(event) {
      this.setState({
        gender: event.target.value,
      });
    }

    onTextboxChangeCNIC(event) {
        this.setState({
          CNIC: event.target.value,
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
    
      
      
      onTextboxChangePIC(event) {
        this.setState({
        picture: event.target.value,
        });
      }
    
    

  
    
    
    
    render() {
       
     
        return (
          
            
       
    
            <div>
            <title>Contact V15</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/*===============================================================================================*/}
            <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />
            {/*===============================================================================================*/}
            <link rel="stylesheet" type="text/css" href="css/util.css" />
            <link rel="stylesheet" type="text/css" href="css/main.css" />
            {/*===============================================================================================*/}
            <div className="container-contact100">
              <div className="contact100-map" id="google_map" data-map-x="40.722047" data-map-y="-73.986422" data-pin="images/icons/map-marker.png" data-scrollwhell={0} data-draggable={1} />
              <div className="wrap-contact100">
                <div className="contact100-form-title" style={{backgroundImage: 'url(images/bg-01.jpg)'}}>
                  <span className="contact100-form-title-1">
                    DOCTOR Sign Up
                  </span>
                  <span className="contact100-form-title-2">
                    Join us and make this world a healthy place to live!
                  </span>
                </div>
                <form className="contact100-form validate-form"  >
                  <div className="wrap-input100 validate-input" data-validate="Name is required">
                    <span className="label-input100">First Name:</span>
                    <input className="input100"
                     type="text"
                      name="name" 
                      placeholder="Enter full name" 
                      value={this.state.firstName} 
                      onChange={this.onTextboxChangeFirstName}/>
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Name is required">
                    <span className="label-input100">Last Name:</span>
                    <input className="input100"
                     type="text"
                      name="name" 
                      placeholder="Enter full name" 
                      value={this.state.lastName} 
                      onChange={this.onTextboxChangeLastName}/>
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Phone is required">
                    <span className="label-input100">Phone:</span>
                    <input className="input100" type="text" name="phone" placeholder="Enter phone number"  value={this.state.contact}  onChange={this.onTextboxChangeContact} />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <span className="label-input100">Email:</span>
                    <input className="input100" type="text" name="email" placeholder="Enter email addess" value={this.state.email}  onChange={this.onTextboxChangeEmail} />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="password is required">
                    <span className="label-input100">Password:</span>
                    <input className="input100" type="password" name="password" placeholder="Password" value={this.state.password}  onChange={this.onTextboxChangePassword} />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="CNIC is required">
                    <span className="label-input100">CNIC:</span>
                    <input className="input100" type="text" name="CNIC" placeholder="Enter your CNIC" value={this.state.CNIC}  onChange={this.onTextboxChangeCNIC} />
                    <span className="focus-input100" />
                  </div>
                  
                  <div className="wrap-input100 validate-input" data-validate="Nationality is required">
                    <span className="label-input100">Nationality:</span>
                    <input className="input100" type="text" name="Nationality" placeholder="Nationality" value={this.state.nationality}  onChange={this.onTextboxChangeNationality} />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="DOB is required">
                    <span  className="label-input100">Date of Birth:</span>
                    <input  className="input100" type="date" name="date" placeholder="date" value={this.state.DOB}  onChange={this.onTextboxChangeDOB} />
                    <span className="focus-input100" />
                  </div>
                 

                  <div className="wrap-input100 validate-input" data-validate="Message is required">
                    <span className="label-input100">Specialisation:</span>
                    <textarea className="input100" name="Specialisation" placeholder="Your Specialisation..." defaultValue={""} value={this.state.specialisation}  onChange={this.onTextboxChangeSpecialisation}/>
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Message is required">
                    <span className="label-input100">Qualification:</span>
                    <textarea className="input100" name="qualification" placeholder="Your Qualification..." defaultValue={""} value={this.state.qualification}  onChange={this.onTextboxChangeQualification}/>
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Message is required">
                    <span className="label-input100">Work Experience:</span>
                    <textarea className="input100" name="work Experience" placeholder="Your Work Experienc..." defaultValue={""} value={this.state.workexp}  onChange={this.onTextboxChangeWorkexp}/>
                    <span className="focus-input100" />
                  </div>
                {/*  <div className="wrap-input100 validate-input" data-validate="DOB is required">
                    <span  className="label-input100">Upload  Picture:</span>
                    <input  className="input100" type="file" name="picture"  value={this.state.picture}  onChange={this.onTextboxChangePIC} />
                    <span className="focus-input100" />
            </div>  */}
                  <div className="form-group">
                        <p  style={{marginTop: 10 }}>GENDER</p>
                        <div className="form-check form-check-inline">
                           <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityLow"
                    value="Male"
                    checked={this.state.gender=='Male'}
                    onChange={this.onTextboxChangeGender}
                    />
             <label className="form-check-label">       Male     </label>

                    

                  
                 <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityMedium"
                    value="Female"
                    checked={this.state.gender=='Female'}
                    onChange={this.onTextboxChangeGender}
                    />
             <label className="form-check-label" >   Female   </label>

             </div>   

</div>

 
        <br/>
<input type="submit" value="Sign Up" className="fadeIn fourth" defaultValue="Sign Up" onClick={this.onSubmit}/>
</form>

{/* Remind Passowrd */}
<div id="formFooter">
<a className="underlineHover" href="#"></a>
</div>
</div>
</div>
</div>

); }


}


export default DoctorSignUp

