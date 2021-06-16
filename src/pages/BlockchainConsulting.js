import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router-dom';

class BlockchainConsulting extends React.Component{
    render(){
        return(
        <div>
            <Helmet>
                <title>KubixSquare - Bloackchain Consulting</title>
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
                                            <Link to="/technicaltraining"class="unity-link" >
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
                                            <Link to="/softwaredevelopment" class="unity-link">
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
                    <div class="page-title">Blockchain Consulting</div>
                    <div id="page-icon">
                        <div class="pricing-icon">
                            <img src="assets/images/blockchain.svg" alt=""/>
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
                <div class="info-text grey-text">Team of KubixSquare provides consulting service to the reputed clients in the latest emerging technology which is known as Blockchain.</div>
            </div>
        </div>
    </div>
</div>
<div id="pricing" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-3">
                <div class="pricing-box pricing-box-simple pricing-color1">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">Creating organizational awareness & Analysing the Scope</div>
                            <div class="pricing-features">
                                <p>The aim of the first phase is to raise the level of your awareness, working together to identify blockchain potential and analyze the possible solutions for the product.</p>
                            </div>
                        </div>
                        <div class="pricing-link card1-margin-top">
                            <Link to="/contactus" class="ybtn" >Enquire Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="pricing-box pricing-box-simple pricing-color2 bestbuy">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">Performing a blockchain opportunity assessment</div>
                            <div class="pricing-features">
                                <p>During the second phase, the focus is on identifying the areas of application and use cases that would bring the highest added value.</p>
                            </div>
                        </div>
                        <div class="pricing-link card2-margin-top">
                            <Link to="/contactus" class="ybtn" >Enquire Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="pricing-box pricing-box-simple pricing-color3">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">Developing a transformation road map</div>
                            <div class="pricing-features">
                                <p>In the third phase, we help consolidate, prioritize and build a multi-phase transformational road map.</p>
                            </div>
                        </div>
                        <div class="pricing-link card3-margin-top">
                            <Link to="/contactus" class="ybtn" >Enquire Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-md-3">
                <div class="pricing-box pricing-box-simple pricing-color1">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">Supporting implementation / Development</div>
                            <div class="pricing-features">
                                <p>In this phase, we support you with the definition and implementation of proofs of concept, pilots and full-scale blockchain implementations integrated with your organization and its value chain with our development team to start a successful Blockchain as a Service Product.</p>
                            </div>
                        </div>
                        <div class="pricing-link">
                            <Link to="/contactus" class="ybtn" >Enquire Now</Link>
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
                    <div class="mfeature-details">We assure quality work because we at KubixSquare believe in work and understand the priority of quality.<br/></div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4">
                <div class="mfeature-box">
                    <div class="mfeature-icon">
                        <i class="htfy htfy-cogwheel"></i>
                    </div>
                    <div class="mfeature-title">Best Support</div>
                    <div class="mfeature-details">We give the best support in market to satisfy the needs of our students and clients.<br/></div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
        )
    }
}
export default BlockchainConsulting;