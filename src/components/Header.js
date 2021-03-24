import React, {Component} from 'react';
import reactDom from 'react-dom';
import * as ReactBootstrap from "react-bootstrap";
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
             {/*    <div id="header-holder" className="main-header">
                 <div className="bg-animation">
                <div className="graphic-show">
                  <img className="fix-size" src="assets/images/graphic1.png" alt=""/>
                  <img className="img img1" src="assets/images/graphic1.png" alt=""/>
                  <img className="img img2" src="assets/images/graphic2.png" alt=""/>
                  <img className="img img3" src="assets/images/graphic3.png" alt=""/>
                </div>
                </div> 
    <nav id="nav" className=" navbar-default navbar-full">
        <div className="container-fluid">
            <div className="container container-nav">
                <div className="row">
                    <div className="col-md-12">
                        <div className="navbar-header">
                            <button aria-expanded="false" type="button" className="navbar-toggle collapsed"
                                data-toggle="collapse" data-target="#bs">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a class="logo-holder" href="index.html">
                                <div className="logo" style={{width:'165px', height:'38px'}}></div>
                           </a>
                        </div>
                        <div style={{height: '1px'}} role="main" aria-expanded="false" className="navbar-collapse collapse"
                            id="bs">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li className="dropdown unity-menu">
                                    <a href="#">Services <i className="fas fa-caret-down"></i></a>
                                    <ul className="dropdown-menu dropdown-unity">
                                        <li>
                                            <a className="unity-link" href="technicaltraining.html">
                                                <div className="unity-box">
                                                    <div className="unity-icon">
                                                        <img src="assets/images/technicaltraining.svg" />
                                                    </div>
                                                    <div className="unity-title">
                                                        Technical Training
                                                    </div>
                                                    <div className="unity-details">
                                                        Training by Industrial experts
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="unity-link" href="websitedevelopment.html">
                                                <div className="unity-box">
                                                    <div className="unity-icon">
                                                        <img src="assets/images/webdev.svg" alt=""/>
                                                    </div>
                                                    <div className="unity-title">
                                                        Website Development
                                                    </div>
                                                    <div className="unity-details">
                                                        We bring your business online!
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="unity-link" href="softwaredevelopment.html">
                                                <div className="unity-box">
                                                    <div className="unity-icon">
                                                        <img src="assets/images/softdev.svg" alt="/"/>
                                                    </div>
                                                    <div className="unity-title">
                                                        Software Development
                                                    </div>
                                                    <div className="unity-details">
                                                        Customized Business softwares
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="unity-link" href="blockchainconsulting.html">
                                                <div className="unity-box">
                                                    <div className="unity-icon">
                                                        <img src="assets/images/blockchain.svg" alt=""/>
                                                    </div>
                                                    <div className="unity-title">
                                                        Blockchain Consulting
                                                    </div>
                                                    <div className="unity-details">
                                                        Strategize, Develop & Grow
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="events.html">Events</a></li>
                                <li><a href="contact.html">Contact us</a></li>
                                <li className="support-button-holder support-dropdown">
                                    <a className="support-button" href="#">Support</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#"><i className="fas fa-phone"></i>+91 77384 79381</a></li>
                                        <li><a href="#"><i className="fas fa-envelope"></i>kubixsquare@gmail.com</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav> 
    <div id="top-content" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div id="main-slider">
                            <div className="slide">
                                <div className="noti-holder">
                                    <a href="events.html">
                                        <div className="noti">
                                            <span className="badge">New</span><span className="text">Click here for our latest
                                                Events update.</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="spacer"></div>
                                <div className="big-title">Your very <span>own learning space.</span></div>
                                <p>KubixSquare is a one stop solution for the all the students to build skills in latest technologies and provide business software solutions for our clients.</p>
                                <div className="btn-holder">
                                    <a href="contact.html" className="ybtn ybtn-white ybtn-shadow">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="header-graphic" src="assets/images/graphic1.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div> */} 
</div>
        
        )
    }
}
export default Header;