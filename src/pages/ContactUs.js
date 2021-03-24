import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router-dom';

class ContactUs extends React.Component{
    render(){
        return(
        <div>
            <Helmet>
                <title>Kubixsquare - Contact Us</title>
            </Helmet> 
                     
            <div id="header-holder" className="inner-header hosting-page">
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
                            <Link to="/" className="logo-holder" >
                                <div className="logo" style={{width:'165px', height:'38px'}}></div>
                            </Link>
                        </div>
                        <div style={{height: '1px'}} role="main" aria-expanded="false" className="navbar-collapse collapse"
                            id="bs">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/aboutus">About us</Link></li>
                                <li className="dropdown unity-menu">
                                    <a href="#">Services <i className="fas fa-caret-down"></i></a>
                                    <ul className="dropdown-menu dropdown-unity">
                                        <li>
                                            <Link to="/technicaltraining" className="unity-link">
                                                <div className="unity-box">
                                                    <div className="unity-icon">
                                                        <img src="assets/images/technicaltraining.svg" alt=""/>
                                                    </div>
                                                    <div className="unity-title">
                                                        Technical Training
                                                    </div>
                                                    <div className="unity-details">
                                                        Training by Industrial experts
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/websitedevelopment" className="unity-link" >
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
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/softwaredevelopment" className="unity-link">
                                                <div className="unity-box">
                                                    <div className="unity-icon">
                                                        <img src="assets/images/softdev.svg" alt=""/>
                                                    </div>
                                                    <div className="unity-title">
                                                        Software Development
                                                    </div>
                                                    <div className="unity-details">
                                                        Customized Business softwares
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blockchainconsulting" className="unity-link" >
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
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/events" >Events</Link></li>
                                <li><Link to="/contactus">Contact us</Link></li>
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
    <div id="page-head" className="container-fluid inner-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="page-title">Contact us</div>
                    <div id="page-icon">
                        <div className="pricing-icon">
                            <img src="assets/images/contact-us.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- <div className="row-title-contact">We would love to hear from you!</div> --> */}
<div id="contact-info" className="container-fluid">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="row-title">We are here to help you!</div>
                <div className="row-subtitle"></div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="info-box">
                    <div className="info-title phone-icon">Call Us</div>
                    <div className="info-details"><p>We are ready to take up your call anytime ! <a href="#">+91 7738479381</a></p>

                   {/*  <!-- <p>Enjoy a free consultation with Hostino’s
                    best web experts.</p> --> */}
                </div>
                </div><br/>
            </div>
                <div className="col-md-4">
                <div className="info-box">
                    <center><div className="info-title"> Follow us now </div></center>
                    <center><div>
                        <a href="https://www.facebook.com/kubixsquare/" target="_blank"><img src="assets/images/facebookCircle.png" height="50px" width="50px"/></a>
                        <a href="https://www.instagram.com/kubixsquare/" target="_blank"><img src="assets/images/instagramCircle.png" height="50px" width="50px"/></a>
                        <a href="https://www.twitter.com/kubixsquare/" target="_blank"><img src="assets/images/twitterCircle.png" height="50px" width="50px"/></a>
                        <a href="https://www.linkedin.com/company/kubixsquare/" target="_blank"><img src="assets/images/linkedinCircle.png" height="50px" width="50px"/></a>
                    </div></center>
                   
                    {/* <!-- <div className="info-details"><p>CONTACT US</p></div> --> */}
                </div><br/>
            </div>
            <div className="col-md-4">
                <div className="info-box">
                    <div className="info-title chat-icon">Mail us</div>
                    <div className="info-details"><p>We're ready to answer any and all
                    questions.</p>

                    {/* <!-- <p>Start chatting with our representative
                    by clicking the chat icon</p> --> */}
                </div>
                </div><br/>
            </div>
            {/* <!-- <div className="col-md-4">
                <div className="info-box">
                    <div className="info-title location-icon">Visit us</div>
                    <div className="info-details"><p>We are located in Bahrain, Manama
                    Come and have a nice cup of coffee!</p>
                    <p>The City Avenue, Office 38, Floor 3
                    Road 398, Block 125</p></div>
                </div>
            </div> --> */}
        </div>
    </div>
</div>
</div>
        )
    }
}
export default ContactUs;