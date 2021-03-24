import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

class SoftwareDevelopment extends React.Component{
    render(){
        return(
            <div>
                <Helmet>
                <title>Kubixsquare - Software Development</title>
                </Helmet> 
                     
                <div id="header-holder" class="inner-header hosting-page">
   <nav id="nav" class=" navbar-default navbar-full">
        <div class="container-fluid">
            <div class="container container-nav">
                <div class="row">
                    <div class="col-md-12">
                        <div class="navbar-header">
                            <button aria-expanded="false" type="button" class="navbar-toggle collapsed"
                                data-toggle="collapse" data-target="#bs">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <Link to="/" class="logo-holder" >
                                <div class="logo" style={{width:'165px', height:'38px'}}></div>
                            </Link>
                        </div>
                        <div style={{height: '1px'}} role="main" aria-expanded="false" class="navbar-collapse collapse"
                            id="bs">
                            <ul class="nav navbar-nav navbar-right">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/aboutus">About us</Link></li>
                                <li class="dropdown unity-menu">
                                    <a href="#">Services <i class="fas fa-caret-down"></i></a>
                                    <ul class="dropdown-menu dropdown-unity">
                                        <li>
                                            <Link to="/technicaltraining" class="unity-link" >
                                                <div class="unity-box">
                                                    <div class="unity-icon">
                                                        <img src="assets/images/technicaltraining.svg" alt=""/>
                                                    </div>
                                                    <div class="unity-title">
                                                        Technical Training
                                                    </div>
                                                    <div class="unity-details">
                                                        Training by Industrial experts
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/websitedevelopment" class="unity-link" >
                                                <div class="unity-box">
                                                    <div class="unity-icon">
                                                        <img src="assets/images/webdev.svg" alt=""/>
                                                    </div>
                                                    <div class="unity-title">
                                                        Website Development
                                                    </div>
                                                    <div class="unity-details">
                                                        We bring your business online!
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" class="unity-link" >
                                                <div class="unity-box">
                                                    <div class="unity-icon">
                                                        <img src="assets/images/softdev.svg" alt=""/>
                                                    </div>
                                                    <div class="unity-title">
                                                        Software Development
                                                    </div>
                                                    <div class="unity-details">
                                                        Customized Business softwares
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blockchainconsulting" class="unity-link" >
                                                <div class="unity-box">
                                                    <div class="unity-icon">
                                                        <img src="assets/images/blockchain.svg" alt=""/>
                                                    </div>
                                                    <div class="unity-title">
                                                        Blockchain Consulting
                                                    </div>
                                                    <div class="unity-details">
                                                        Strategize, Develop & Grow
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/contactus">Contact us</Link></li>
                                <li class="support-button-holder support-dropdown">
                                    <a class="support-button" href="#">Support</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#"><i class="fas fa-phone"></i>+91 77384 79381</a></li>
                                        <li><a href="#"><i class="fas fa-envelope"></i>kubixsquare@gmail.com</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div id="page-head" class="container-fluid inner-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="page-title">Software Development</div>
                    <div id="page-icon">
                        <div class="pricing-icon">
                            <img src="assets/images/softdev.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="h-info" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="info-text grey-text">We offer complete Web-Based Solutions, Web-Based Software and online Custom Web applications software, at the cost that fits every business owner's pocket. We will develop your company's WebApp that addresses unique challenges.</div>
            </div>
        </div>
    </div>
</div>
<div id="pricing" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-4">
                <div class="pricing-box pricing-box-simple pricing-color1">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">WebApp Development</div>
                            <div class="pricing-features">
                                <p>We offer complete Web-Based Solutions, Web-Based Software and online Custom Web applications software, at the cost that fits every business owner's pocket. We will develop your company's WebApp that addresses unique challenges.</p>
                            </div>
                        </div>
                        <div class="pricing-link webapp-dev-margin-top">
                            <Link to="/contactus" class="ybtn" >Enquire Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="pricing-box pricing-box-simple pricing-color2 bestbuy">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">WebApp Feature Addition</div>
                            <div class="pricing-features">
                                <p>Keep your WebApp fresh and updated with new features added timely to regain your customers, your customer will surely like to have additional features added timely to enhance their user engagements! It is an important aspect for WebApp to regain customers and maintain effective online business with effective analytics.</p>
                            </div>
                        </div>
                        <div class="pricing-link">
                            <Link to="/contactus" class="ybtn" >Enquire Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4">
                <div class="pricing-box pricing-box-simple pricing-color3">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">Desktop Software Development</div>
                            <div class="pricing-features">
                               <p>Having small or large business and want to manage a particular operation from your system ? We are here to create a customized desktop software specially designed for you to automate and make your manual work simpler and easier.</p>
                            </div>
                        </div>
                        <div class="pricing-link desktop-dev-margin-top">
                            <Link to="/contactus" class="ybtn">Enquire Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="more-features" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row-title">Our Promise</div>
                <div class="row-subtitle">Your satisfaction is guaranteed. Indeed.</div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <i class="htfy htfy-trophy"></i>
                    </div>
                    <div class="mfeature-title">Best Price</div>
                    <div class="mfeature-details">We at KubixSquare provide the competitive price with a focus to make our courses and services affordable to every individual.</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <i class="htfy htfy-like"></i>
                    </div>
                    <div class="mfeature-title">Quality Work</div>
                    <div class="mfeature-details">We assure quality work because we at KubixSquare believe in work and understand the priority of quality.<br/><br/></div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <i class="htfy htfy-cogwheel"></i>
                    </div>
                    <div class="mfeature-title">Best Support</div>
                    <div class="mfeature-details">We give the best support in market to satisfy the needs of our students and clients.<br/><br/></div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        )
    }
}
export default SoftwareDevelopment;