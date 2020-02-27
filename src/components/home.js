import React, { Component } from 'react'

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
                                <h4>New Website Launched</h4>
                                <h5>June 1st, 2014</h5>
                                <p>2014 sees the redesign of our website. Take a look around and let us know what you think.<br /><a href="#">Read more</a></p>
                              </div>
                              <div className="sidebar_base" />
                            </div>
                            <div className="sidebar">
                              <div className="sidebar_top" />
                              <div className="sidebar_item">
                                <h3>Useful Links</h3>
                                <ul>
                                  <li><a href="#">link 1</a></li>
                                  <li><a href="#">link 2</a></li>
                                  <li><a href="#">link 3</a></li>
                                  <li><a href="#">link 4</a></li>
                                </ul>
                              </div>
                              <div className="sidebar_base" />
                            </div>
                            <div className="sidebar">
                              <div className="sidebar_top" />
                              <div className="sidebar_item">
                                <h3>Search</h3>
                                <form method="post" action="#" id="search_form">
                                  <p>
                                    <input className="search" type="text" name="search_field" defaultValue="Enter keywords....." />
                                    <input name="search" type="image" style={{border: 0, margin: '0 0 -9px 5px'}} src="style/search.png" alt="Search" title="Search" />
                                  </p>
                                </form>
                              </div>
                              <div className="sidebar_base" />
                            </div>
                          </div>
                          <div id="content">
                            {/* insert the page content here */}
                            <h1>Online Medical Facilitation</h1>
                            <p>This standards compliant, simple, fixed width website template is released as an 'open source' design (under a <a href="http://creativecommons.org/licenses/by/3.0">Creative Commons Attribution 3.0 Licence</a>), which means that you are free to download and use it for anything you want (including modifying and amending it). All I ask is that you leave the 'design from HTML5webtemplates.co.uk' link in the footer of the template, but other than that...</p>
                            <p>This template is written entirely in <strong>HTML5</strong> and <strong>CSS</strong>, and can be validated using the links in the footer.</p>
                            <p>You can view more free HTML5 web templates <a href="http://www.html5webtemplates.co.uk">here</a>.</p>
                            <p>This template is a fully functional 5 page website, with an <a href="examples.html">examples</a> page that gives examples of all the styles available with this design.</p>
                            <h2>Browser Compatibility</h2>
                            <p>This template has been tested in the following browsers:</p>
                            <ul>
                              <li>Internet Explorer 9</li>
                              <li>FireFox 25</li>
                              <li>Google Chrome 31</li>
                            </ul>
                          </div>
                        </div>
                        <div id="content_footer" />
                        <div id="footer">
                          <p><a href="index.html">Home</a> | <a href="examples.html">Examples</a> | <a href="page.html">A Page</a> | <a href="another_page.html">Another Page</a> | <a href="contact.html">Contact Us</a></p>
                          <p>Copyright © textured_orbs | <a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> | <a href="http://www.html5webtemplates.co.uk">Website templates</a></p>
                        </div>
                      </div>
                    </div>
                  );
                }
              };
        

export default home
