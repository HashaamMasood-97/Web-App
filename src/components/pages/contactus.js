import React from 'react'
import './contactus.css';

export default function contactus() {
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
                      <form className="contact100-form validate-form">
                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                          <span className="label-input100">Full Name:</span>
                          <input className="input100" type="text" name="name" placeholder="Enter full name" />
                          <span className="focus-input100" />
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                          <span className="label-input100">Email:</span>
                          <input className="input100" type="text" name="email" placeholder="Enter email addess" />
                          <span className="focus-input100" />
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Phone is required">
                          <span className="label-input100">Phone:</span>
                          <input className="input100" type="text" name="phone" placeholder="Enter phone number" />
                          <span className="focus-input100" />
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Message is required">
                          <span className="label-input100">Message:</span>
                          <textarea className="input100" name="message" placeholder="Your Comment..." defaultValue={""} />
                          <span className="focus-input100" />
                        </div>
                        <div className="container-contact100-form-btn">
                          <button className="contact100-form-btn">
                            <span>
                              Submit
                              <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true" />
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="dropDownSelect1" />
                  {/*===============================================================================================*/}
                  {/*===============================================================================================*/}
                  {/*===============================================================================================*/}
                  {/*===============================================================================================*/}
                  {/*===============================================================================================*/}
                  {/*===============================================================================================*/}
                  {/*===============================================================================================*/}
                  {/*===============================================================================================*/}
                  {/* Global site tag (gtag.js) - Google Analytics */}
                </div>
              );
            }
          
    

