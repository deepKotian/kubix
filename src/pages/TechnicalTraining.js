import React, {Component} from 'react';
import reactDom from 'react-dom';
import * as ReactBootstrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

class TechnicalTraining extends React.Component{
    render(){
        return(
        <div>
            <Helmet>
                <title>Kubixsquare - Technical Training</title>
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
                            <Link to="/" class="logo-holder">
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
                                            <Link to="/softwaredevelopment" class="unity-link" >
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
                    <div class="page-title">TECHNICAL TRAINING</div>
                    <div id="page-icon">
                        <div class="pricing-icon">
                            <img src="assets/images/technicaltraining.svg" alt=""/>
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
                <div class="info-text grey-text">Technical skills development programs to upgrade College Students, Faculties and Corporate professionals on the latest technologies - Check our course offering for our technology offerings.</div>
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
                            <div class="pricing-title">Practical Workshops</div>
                            <div class="pricing-features">
                                <ul>
                                    <li>Customized workshops to equip young professionals and corporate professionals.</li>
                                    <li>Latest programming language, tools and technologies.</li>
                                    <li>Trained by Industrial experts.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="pricing-box pricing-box-simple pricing-color2 bestbuy">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">Customized Courses</div>
                            <div class="pricing-features">
                                <ul>
                                    <li>Unique course structure on latest technologies.</li>
                                    <li>Hands on training and certification at your own campus</li>
                                    <li>Experience of working on production level application.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4">
                <div class="pricing-box pricing-box-simple pricing-color3">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">Courses Offering</div>
                            <div class="pricing-features">
                                <ul>
                                    <li>Blockchain Development</li>
                                    <li>Artificial Intelligence</li>
                                    <li>Web Development</li>
                                    <li>FrontEnd Development</li>
                                    <li>Backend Development</li>
                                    <li>Python Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row-title">Course Details</div>
<div id="pricing" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="pricing-box pricing-box-simple pricing-box-horizontal pricing-color1">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">
                                <div class="courses-logo">
                                    <img src="assets/images/blockchain.svg" alt=""/>
                                </div>Blockchain Developer Course
                            </div>
                        </div>
                        <div class="pricing-features-holder">
                            <div class="pricing-features">
                                <ul>
                                    <li>Become a Blockchain Developer.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-details">       
                            <ul>
                                <h5>Technology Learnings</h5>
                                <li>Solidity Language</li>
                                <li>JavaScript Basic Concepts</li>
                                <li>Smart Contract Creation</li>
                                <li>Smart Contract Interaction</li>
                            </ul>
                        </div>
                        <div class="price-link-holder">
                            <div class="pricing-price-holder">
                                <div>
                                    <div class="pricing-options">
                                        <h5>Description</h5>
                                        <p>Building an optimized blockchain protocols and design the architecture of blockchain systems used in products such as apps and contracts.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-link">
                                <Link to="/contactus" class="ybtn" >Enquire Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="pricing-box pricing-box-simple pricing-box-horizontal pricing-color2 bestbuy">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">
                                <div class="courses-logo">
                                    <img src="assets/images/artificial-intelligence.svg" alt=""/>
                                </div>Ai & ML / Python Development Course
                            </div>
                        </div>
                        <div class="pricing-features-holder">
                            <div class="pricing-features">
                                <ul>
                                    <li>Become a  Artificial Intelligence Developer.</li>
                                    <li>Become a Machine Learning Developer.</li>
                                    <li>Become a Python Developer.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-details">    
                            <ul>
                                <h5>Technology Learnings</h5>
                                <li>Python Programming (Basic)</li>
                                <li>Python Programming (Advance)</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Important Python Libraries</li>
                            </ul>
                        </div>
                        <div class="price-link-holder">
                            <div class="pricing-price-holder">
                                <div>
                                    <div class="pricing-options">
                                        <h5>Description</h5>
                                        <p>Help the Machines to learn in order to understand their environment and take autonomous actions to achieve the goals and solve real world problems.</p>

                                        <p>Create Backend components, connecting web applications to other services and making sure that the frontend works as it should, learning python also opens other roles such as data collection and analytics.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-link">
                                <Link to="/contactus" class="ybtn" >Enquire Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="pricing-box pricing-box-simple pricing-box-horizontal pricing-color3">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">
                                <div class="courses-logo">
                                    <img src="assets/images/html.svg" alt=""/>
                                </div>Frontend Development Course
                            </div>
                        </div>
                        <div class="pricing-features-holder">
                            <div class="pricing-features">
                                <ul>
                                    <li>Become a FrontEnd Developer.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-details">  
                            <ul>
                                <h5>Technology Learnings</h5>
                                <li>Angular Framework</li>
                                <li>React Framework</li>
                                <li>Many more JavaScript Frameworks.</li>
                            </ul>
                        </div>
                        <div class="price-link-holder">
                            <div class="pricing-price-holder">
                                <div>
                                    <div class="pricing-options">
                                        <h5>Description</h5>
                                        <p>Works with the frameworks and web designers to craft the visual elements of web application and ensures they work as they should.</p>
                                    </div>
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
</div>



    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="pricing-box pricing-box-simple pricing-box-horizontal pricing-color1">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">
                                <div class="courses-logo">
                                    <img src="assets/images/webdev.svg" alt=""/>
                                </div>Web Development Course
                            </div>
                        </div>
                        <div class="pricing-features-holder">
                            <div class="pricing-features">
                                <ul>
                                    <li>Become a Web Application Developer.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-details">       
                            <ul>
                                <h5>Technology Learnings</h5>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript Basics</li>
                                <li>Bootstrap Framework</li>
                                <li>Wordpress Website Development</li>
                            </ul>
                        </div>
                        <div class="price-link-holder">
                            <div class="pricing-price-holder">
                                <div>
                                    <div class="pricing-options">
                                        <h5>Description</h5>
                                        <p>Design functional and interactive interfaces for an engaging and secure digital user experience with beginner level tools.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-link">
                                <Link to="/contactus" class="ybtn" >Enquire Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="pricing-box pricing-box-simple pricing-box-horizontal pricing-color2 bestbuy">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">
                                <div class="courses-logo">
                                    <img src="assets/images/softdev.svg" alt=""/>
                                </div>JavaScript Development Course</div>
                        </div>
                        <div class="pricing-features-holder">
                            <div class="pricing-features">
                                <ul>
                                    <li>Become a JavaScript Developer.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-details">    
                            <ul>
                                <h5>Technology Learnings</h5>
                                <li>JavaScript (Basics)</li>
                                <li>JavaScript (Advanced)</li>
                                <li>HTML interaction with API connection and interaction libraries.</li>
                            </ul>
                        </div>
                        <div class="price-link-holder">
                            <div class="pricing-price-holder">
                                <div>
                                    <div class="pricing-options">
                                        <h5>Description</h5>
                                        <p>Build and implement the frontend logic and define how those visual elements will behave, which includes websites programming, development and implementation.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pricing-link">
                                <Link to="/contactus" class="ybtn" >Enquire Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="pricing-box pricing-box-simple pricing-box-horizontal pricing-color3">
                    <div class="pricing-content">
                        <div class="pricing-head">
                            <div class="pricing-title">
                                <div class="courses-logo">
                                    <img src="assets/images/backend.svg" alt=""/>
                                </div>Backend Development Course
                            </div>
                        </div>
                        <div class="pricing-features-holder">
                            <div class="pricing-features">
                                <ul>
                                    <li>Become a BackEnd Developer.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-details">
                            <ul>
                                <h5>Technology Learnings</h5>
                                <li>Java (Basic)</li>
                                <li>Java (Advanced)</li>
                                <li>Database (MySQL)</li>
                                <li>Architecture: Microservices, Restful Webservices</li>
                                <li>Design Patterns: Singleton, factory, facade, proxy.</li>
                                <li>NodeJs with ExpressJs Framework</li>
                                <li>Python with Django Famework</li>
                            </ul>
                        </div>
                        <div class="price-link-holder">
                            <div class="pricing-price-holder">
                                <div>
                                    <div class="pricing-options">
                                        <h5>Description</h5>
                                        <p>Building and implementing the main functional logic of what a particular web application is meant to do ie. the components that are indirectly assessed by the user through the shiny frontend.</p>
                                    </div>
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

    

<div id="ifeatures" class="container-fluid">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row-title">What makes us special?</div>
                <div class="row-subtitle"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-3">
                <div class="feature-box">
                    <div class="feature-icon">
                        <img src="assets/images/content.svg" alt=""/>
                    </div>
                    <div class="feature-title">Unique Content</div>
                    <div class="feature-details">We offer courses based on unique and fresh content so that students should be aware of the latest upgrades in the technologies.</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="feature-box">
                    <div class="feature-icon">
                        <img src="assets/images/teacher.svg" alt=""/>
                    </div>
                    <div class="feature-title">Industrial Experts</div>
                    <div class="feature-details">We have speakers with years of experience in Multi-national Companies. Students will be trained by the Industrial experts with best knowledge.</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="feature-box">
                    <div class="feature-icon">
                        <img src="assets/images/softdev.svg" alt=""/>
                    </div>
                    <div class="feature-title">Project Buliding</div>
                    <div class="feature-details">We believe in hands on practise, we will train the students by building a real-time application so that students will not only have the theoretical knowledge but also the implementation.</div>
                </div>
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="feature-box">
                    <div class="feature-icon">
                        <img src="assets/images/united.svg" alt=""/>
                    </div>
                    <div class="feature-title">Trusted 100%</div>
                    <div class="feature-details">Trusted by multiple students who are trained by KubixSquare experts.</div>
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

export default TechnicalTraining ;