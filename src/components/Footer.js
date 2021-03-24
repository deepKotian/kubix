import React, {Component} from 'react';
import reactDom from 'react-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
     render(){
         return(
           <div>
        <div id="footer" className="container-fluid">
             <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="address-holder">
                        <div className="phone"><i className="fas fa-phone"></i>+91 77384 79381/ <br/>+91 95941 27932</div>
                        <div className="email"><i className="fas fa-envelope"></i> 
                            <a href="#">kubixsquare@gmail.com</a>
                            </div>
                        <div className="address">
                            <i className="fas fa-map-marker"></i>
                            <div>Mira Road(East),<br/>
                                Thane, Maharashtra,<br/>
                                India.</div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-2">
                    <div className="footer-menu-holder">
                        <h4>Company</h4>
                        <ul className="footer-menu">
                            <li><Link to="/aboutus">About us</Link></li>
                            <li><Link to="/contactus">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="footer-menu-holder">
                        <h4>Services</h4>
                        <ul className="footer-menu">
                            <li><Link to="/technicaltraining">Technical Training</Link></li>
                            <li><Link to="/websitedevelopment">Website Development</Link></li>
                            <li><Link to="/softwaredevelopment">Software Development</Link></li>
                            <li><Link to="/blockchainconsulting">Blockchain Consulting</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-1">
                    <div className="social-menu-holder">
                        <div className="footer-menu-holder">
                            <h4>Follow us on</h4>
                        <ul className="social-menu">
                            <li><a href="https://www.facebook.com/kubixsquare/" target="_blank"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/kubixsquare/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.twitter.com/kubixsquare/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/kubixsquare/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="copyright">
                    <span>&copy; Copyright KubixSquare 2020.All rights reserved</span>
                </div>
            </div>  
           </div> 
         </div>
         </div> 
           
         )
     }
}

export default Footer;

