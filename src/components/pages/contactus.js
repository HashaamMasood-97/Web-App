import React, { Component } from 'react'
import './contactus.css';
import axios from 'axios';





export class contactus extends Component {
  
  
  constructor (props){
    super(props)

    this.onChangeCname=this.onChangeCname.bind(this);
    this.onChangeCaddress=this.onChangeCaddress.bind(this);
    this.onChangeCphone=this.onChangeCphone.bind(this);
    this.onChangeCmessage=this.onChangeCmessage.bind(this);
    
    this.onSubmit=this.onSubmit.bind(this);





this.state={

 c_name: '',
 c_address:'',
 c_phone:'',
 c_message:''

}
}

onChangeCname(e){
  this.setState({
      c_name: e.target.value
  });
}

onChangeCaddress(e){
  this.setState({
      c_address: e.target.value
  });
}


onChangeCphone(e){
  this.setState({
      c_phone: e.target.value
  });
}


onChangeCmessage(e){
  this.setState({
      c_message: e.target.value
  });
}



onSubmit(e){
  e.preventDefault(); 
// code to connect backend 
const newodo ={
c_name: this.state.c_name,
c_address: this.state.c_address,
c_phone: this.state.c_phone,
c_message: this.state.c_message

};

axios.post('http://localhost:3500/homemedic/api/contact/add', newodo)
.then(res => console.log(res.data));

this.props.history.push('/');





  }


  
  
  render(){ 
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
                          Contact Us
                        </span>
                        <span className="contact100-form-title-2">
                          Feel free to drop us a line below!
                        </span>
                      </div>
                      <form className="contact100-form validate-form"  onSubmit={this.onSubmit}>
                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                          <span className="label-input100">Full Name:</span>
                          <input className="input100"
                           type="text"
                            name="name" 
                            placeholder="Enter full name" 
                            value={this.state.c_name} 
                            onChange={this.onChangeCname}/>
                          <span className="focus-input100" />
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                          <span className="label-input100">Email:</span>
                          <input className="input100" type="email" name="email" placeholder="Enter email addess" value={this.state.c_address}  onChange={this.onChangeCaddress} />
                          <span className="focus-input100" />
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Phone is required">
                          <span className="label-input100">Phone:</span>
                          <input className="input100" type="text" name="phone" placeholder="Enter phone number"  value={this.state.c_phone}  onChange={this.onChangeCphone} />
                          <span className="focus-input100" />
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Message is required">
                          <span className="label-input100">Message:</span>
                          <textarea className="input100" name="message" placeholder="Your Comment..." defaultValue={""} value={this.state.c_message}  onChange={this.onChangeCmessage}/>
                          <span className="focus-input100" />
                        </div>

                       
                        <div className="form-group"  Align='center' >
                       <input type="submit" value="Submit" className="btn btn-primary"  />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="dropDownSelect1" />
    
                </div>
              );
            }
          }     
    

          export default contactus