import React, { Component } from 'react'
import './send.png'

export class home extends Component {
    render() {
        return (
           
                    <div>
                      <title>textured_orbs</title>
                      <meta name="description" content="website description" />
                      <meta name="keywords" content="website keywords, website keywords" />
                      <meta httpEquiv="content-type" content="text/html; charset=windows-1252" />
                      <link rel="stylesheet" type="text/css" href="style/style.css" />
                      <div id="main">
                       
                        <div id="content_header" />
                        <div id="site_content">
                          <div id="banner" />
                          <div id="sidebar_container">
                            <div className="sidebar">
                              <div className="sidebar_top" />
                              <div className="sidebar_item">
                                {/* insert your sidebar items here */}
                                <h3>Latest News</h3>
                                <h4>COVID'19 ALERT!</h4>
                                <h5>June 1st, 2020</h5>
                                <p>Confirmed Cases: 80463.<br/> Recovered Cases: 28,923 <br/>Total Deaths: 1,688 <br /><a href="https://en.wikipedia.org/wiki/COVID-19_pandemic_by_country_and_territory">Read more</a></p>
                              </div>
                              <div className="sidebar_base" />
                            </div>
                            <div className="sidebar">
                              <div className="sidebar_top" />
                              <div className="sidebar_item">
                                <h3>Connect With Us!</h3>
                                <ul>
                                  <li><a href="https://web.facebook.com/">Facebook</a></li>
                                  <li><a href="https://www.instagram.com/">Instagram</a></li>
                                  <li><a href="https://twitter.com/">Twitter</a></li>
                                  <li><a href="https://www.snapchat.com/">Snapchat</a></li>
                                </ul>
                              </div>
                              <div className="sidebar_base" />
                            </div>
                            <div className="sidebar">
                              <div className="sidebar_top" />
                              <div className="sidebar_item">
                                <h3>Feedback</h3>
                                <form method="post" action="#" id="search_form">
                                  <p>
                                    <input className="search" type="text" name="search_field" placeholder="..." />
                                     <button style={{marginLeft:10}}> Send</button>
                                  </p>
                                </form>
                              </div>
                              <div className="sidebar_base" />
                            </div>
                          </div>
                          <div id="content">
                            {/* insert the page content here */}
                            <h1>Online Medical Facilitation</h1>
                            <p>As Pakistan slowly becomes one of the prime destinations for medical care in the world, we at HomeMedic believe in bringing that care to you. <strong>HomeMedic</strong> works and engages with some of the best doctors in Pakistan, to ensure that you get the best medical treatment. In times like this, what is needed is a guiding hand to coordinate and simplify every step of your treatment</p>
                            <p>We bring to you the best doctors and state of the art facilities and tailor the entire journey to your every need, to ensure you have the best and most comfortable experience.</p>
                            <p>Health is an experience of happiness in the soul, mind, and senses.</p>
                            <p>Life is a combination of body, mind, senses, and spirit. In HomeMedic, we help you heal.</p>
                            <h2>What we Offer?</h2>
                            <p>We connect you to your desired doctor at your doorstep.</p>
                            <ul>
                              <li>Chatting Service, talk to our expert chatbot.</li>
                              <li>Book your Appoinment Online.</li>
                              <li>Keep track of your Health.</li>
                            </ul>
                          </div>
                        </div>
                        <div id="content_footer" />
                        <div id="footer">
                          <p><a href="/">Home</a> | <a href="http://localhost:3000/about">ABOUT US</a> | <a href="http://localhost:3000/doctor">DOCTORS</a> |  <a href="http://localhost:3000/contactus">Contact Us</a></p>
                          <p>HOME MEDIC | <a href="http://validator.w3.org/check?uri=referer">HASHAAM MASOOD</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">USMAN BASHIR</a> </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              };
        

export default home
