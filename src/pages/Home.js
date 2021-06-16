import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends React.Component{
    render(){
        return(
            <div>
                <Helmet>
                <title>KubixSquare - Home</title>
                </Helmet> 
                     
    <body>
    <div id="header-holder" className="main-header">
             <div className="bg-animation">
                <div className="graphic-show">
                  <img className="fix-size" src="assets/images/graphic1.png" alt=""/>
                  <img className="img img1" src="assets/images/graphic1.png" alt=""/>
                  <img className="img img2" src="assets/images/graphic2.png" alt=""/>
                  <img className="img img3" src="assets/images/graphic3.png" alt=""/>
                </div>
            </div> 
    <nav id="nav" className="navbar-default navbar-full">
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
                            <Link to="/" class="logo-holder" >
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
                                            <Link to="/technicaltraining" className="unity-link" >
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
                                            <Link to="/softwaredevelopment" className="unity-link" >
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
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blockchainconsulting" className="unity-link">
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
                                <li><Link to="/events">Events</Link></li>
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
    <div id="top-content" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div id="main-slider">
                            <div className="slide">
                                <div className="noti-holder">
                                    <a href="events.html">
                                        <div className="noti">
                                            <span className="badge">New</span><Link to="/events" className="text">Click here for our latest
                                                Events update.</Link>
                                        </div>
                                    </a>
                                </div>
                                <div className="spacer"></div>
                                <div className="big-title">Your very <span>own learning space.</span></div>
                                <p>KubixSquare is a one stop solution for the all the students to build skills in latest technologies and provide business software solutions for our clients.</p>
                                <div className="btn-holder">
                                    <Link to="/contactus" className="ybtn ybtn-white ybtn-shadow">Contact Us</Link>
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
    </div> 

    
    <div id="info" className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="info-text">KubixSquare is an Educational and Information Technology solution organization which focuses on building the quality technical skills in students and make them Industry-ready. <br/>We have a enthusiastic team of developers to serve our reputed clients as per their demand.</div>
                </div>
            </div>
        </div>
    </div>
    <div id="services" className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row-title">Our Services</div>
                    <div className="row-subtitle">Designed to satisfy your creative needs.</div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="service-box">
                        <div className="service-icon">
                            <img src="assets/images/technicaltraining.svg" alt=""/>
                        </div>
                        <div className="service-title"><Link to="/technicaltraining">Technical Training</Link></div>
                        <div className="service-details">
                            <p>Technical Skills development programs to upgrade College Students, Faculties and Corporate professionals on the latest technologies - Check our course offering for our technology offerings.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="service-box">
                        <div className="service-icon">
                            <img src="assets/images/webdev.svg" alt=""/>
                        </div>
                        <div className="service-title"><Link to="/websitedevelopment">Website Development</Link></div>
                        <div className="service-details">
                            <p>We help small and large organizations developing their first business website. Our designs go beyond graphical and visual presentation to get the desired attention from your customer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="service-box">
                        <div className="service-icon">
                            <img src="assets/images/softdev.svg" alt=""/>
                        </div>
                        <div className="service-title"><Link to="/softwaredevelopment">Software Development</Link></div>
                        <div className="service-details">
                            <p>We offer software development for business development and solution for our reputed clients. From core development to support & maintainence we are here for our clients.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="service-box">
                        <div className="service-icon">
                            <img src="assets/images/blockchain.svg" alt=""/>
                        </div>
                        <div className="service-title"><Link to="/blockchainconsulting">Blockchain Consulting</Link></div>
                        <div className="service-details">
                            <p>Blockchain is the hottest and growing technology today in Industry, 
                                our organization has the best blockchain developers and consultants of 
                                the market to offer you Blockchain services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="pricing" className="container-fluid">
        <div className="bg-color"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row-title">COURSES WE OFFER</div>
                    <div className="row-subtitle">Choose what's best for you</div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="pricing-box pricing-unity pricing-color1">
                        <div className="pricing-content">
                            <div className="pricing-icon">
                                <img src="assets/images/blockchain.svg" alt=""/>
                            </div>
                            <div className="pricing-title">Blockchain Development Course</div>
                            <div className="pricing-details">
                                <p>Building an optimized blockchain protocols and design the 
                                    architecture of blockchain systems used in products such as apps 
                                    and contracts.</p>
                            </div><br/>
                            <div className="pricing-link">
                            <Link to="/technicaltraining" className="ybtn">See our Blockchain <br/>Development course</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="pricing-box pricing-unity pricing-color1">
                        <div className="pricing-content">
                            <div className="pricing-icon">
                                <img src="assets/images/artificial-intelligence.svg" alt=""/>
                            </div>
                            <div className="pricing-title">AI & ML / Python Development Course</div>
                            <div className="pricing-details">
                                <p>Help the Machines to learn in order to understand their environment 
                                    and take autonomous actions to achieve the goals and solve 
                                    real world problems.</p>
                            </div>
                            <div className="pricing-link">
                            <Link to="/technicaltraining" className="ybtn">See our Artificial <br/>Intelligence Course</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="pricing-box pricing-unity pricing-color3">
                        <div className="pricing-content">
                            <div className="pricing-icon">
                                <img src="assets/images/html.svg" alt=""/>
                            </div>
                            <div className="pricing-title">FrontEnd Development Course</div>
                            <div className="pricing-details">
                                <p>Works with the frameworks and web designers to craft the visual
                                     elements of web application and ensures they work as they 
                                     should.</p>
                            </div><br/>
                            <div className="pricing-link">
                            <Link to="/technicaltraining" className="ybtn">See Our FrontEnd<br/>Development Course</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="pricing-box pricing-unity pricing-color3">
                        <div className="pricing-content">
                            <div className="pricing-icon">
                                <img src="assets/images/webdev.svg" alt=""/>
                            </div>
                            <div className="pricing-title">Web Development Course</div>
                            <div className="pricing-details">
                                <p> Design functional and interactive interfaces for an engaging and 
                                    secure digital user experience with beginner level tools.
                                </p><br/><br/>
                            </div>
                            <div className="pricing-link">
                            <Link to="/technicaltraining" className="ybtn">See our Web<br/> Development course</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="pricing-box pricing-unity pricing-color3">
                        <div className="pricing-content">
                            <div className="pricing-icon">
                                <img src="assets/images/softdev.svg" alt=""/>
                            </div>
                            <div className="pricing-title">JavaScript Development Course</div>
                            <div className="pricing-details">
                                <p>Build and implement the frontend logic and define how those visual elements
                                     will behave, which includes websites programming, development and 
                                     implementation.</p>
                            </div><br/>
                            <div className="pricing-link">
                            <Link to="/technicaltraining" className="ybtn">See our JavaScript<br/>Development course</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="pricing-box pricing-unity pricing-color3">
                        <div className="pricing-content">
                            <div className="pricing-icon">
                                <img src="assets/images/backend.svg" alt=""/>
                            </div>
                            <div className="pricing-title">Backend Development Course</div>
                            <div className="pricing-details">
                                <p> Building and implementing the main functional logic of what a particular 
                                    web application is meant to do ie. the components that are indirectly assessed 
                                    by the user through the shiny frontend.</p>
                            </div>
                            <div className="pricing-link">
                            <Link to="/technicaltraining" className="ybtn">See Our Backend<br/>Development Course</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="features" className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="row-title">WE PROVIDE</div>
                    <div className="row-subtitle"></div>
                </div>
            </div>
            <div className="row rtl-cols">
                <div className="col-sm-12 col-md-6">
                    <div id="features-links-holder">
                        <div className="icons-axis">
                            <img src="assets/images/kubix-logo.jpg" alt=""/>
                        </div>
                        <div className="feature-icon-holder feature-icon-holder1 opened" data-id="1">
                            <div className="animation-holder">
                                <div className="special-gradiant"></div>
                            </div>
                            <div className="feature-icon">
                                <img src="assets/images/presentation.svg" alt=""/>
                            </div>
                            <div className="feature-title">Quality Training</div>
                        </div>
                        <div className="feature-icon-holder feature-icon-holder2" data-id="2">
                            <div className="animation-holder">
                                <div className="special-gradiant"></div>
                            </div>
                            <div className="feature-icon">
                                <img src="assets/images/teacher.svg" alt=""/>
                            </div>
                            <div className="feature-title">Industry Experts</div>
                        </div>
                        <div className="feature-icon-holder feature-icon-holder3" data-id="3">
                            <div className="animation-holder">
                                <div className="special-gradiant"></div>
                            </div>
                            <div className="feature-icon">
                                <img src="assets/images/seo.svg" alt=""/>
                            </div>
                            <div className="feature-title">SEO Ready Website</div>
                        </div>
                        <div className="feature-icon-holder feature-icon-holder4" data-id="4">
                            <div className="animation-holder">
                                <div className="special-gradiant"></div>
                            </div>
                            <div className="feature-icon">
                                <img src="assets/images/customer-support.svg" alt=""/>
                            </div>
                            <div className="feature-title">Quality Service</div>
                        </div>
                        <div className="feature-icon-holder feature-icon-holder5" data-id="5">
                            <div className="animation-holder">
                                <div className="special-gradiant"></div>
                            </div>
                            <div className="feature-icon">
                                <img src="assets/images/support.svg" alt=""/>
                            </div>
                            <div className="feature-title">Maintenance Support</div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div id="features-holder">
                        <div className="feature-box feature-d1 show-details">
                            <div className="feature-title-holder">
                                <span className="feature-icon">
                                    <img src="assets/images/presentation.svg" alt=""/>
                                </span>
                                <span className="feature-title">Quality Training</span>
                            </div>
                            <div className="feature-details">
                                <p>KubixSquare is focused to give quality training to all the students, teaching faculties and corporate professionals.</p> <p>Customized workshops to equip young professionals and corporate professionals with Latest programming language, tools and technologies.</p>
                            </div>
                        </div>
                        <div className="feature-box feature-d2">
                            <div className="feature-title-holder">
                                <span className="feature-icon">
                                    <img src="assets/images/teacher.svg" alt=""/>
                                </span>
                                <span className="feature-title">Industry Experts</span>
                            </div>
                            <div className="feature-details">
                                <p>Our speakers are best Industrial experts with years of quality and skilled experience in Industry. They will support the students to achieve their goal to be Industry-ready.</p>
                            </div>
                        </div>
                        <div className="feature-box feature-d3">
                            <div className="feature-title-holder">
                                <span className="feature-icon">
                                    <img src="assets/images/seo.svg" alt=""/>
                                </span>
                                <span className="feature-title">SEO Ready Website</span>
                            </div>
                            <div className="feature-details">
                                <p>Do you want to build your own customized website? Or you already have one? but can't get rank in search engines?</p><p>We the team of KubixSquare are here to solve your problems with Search Engine Optimization which will help your website to reach the highest rank and get more business opportunities.</p>
                            </div>
                        </div>
                        <div className="feature-box feature-d4">
                            <div className="feature-title-holder">
                                <span className="feature-icon">
                                    <img src="assets/images/customer-support.svg" alt=""/>
                                </span>
                                <span className="feature-title">Quality Service</span>
                            </div>
                            <div className="feature-details">
                                <p>We assure quality service to our students and clients. With all the required expertise in house we can deliver a stable and reliable solutions.</p>
                            </div>
                        </div>
                        <div className="feature-box feature-d5">
                            <div className="feature-title-holder">
                                <span className="feature-icon">
                                    <img src="assets/images/support.svg" alt=""/>
                                </span>
                                <span className="feature-title">Maintenance Support</span>
                            </div>
                            <div className="feature-details">
                                <p>After every product development and service deployment there is stage known as maintenance support. KubixSquare gives a pocket friendly maintenance support for our clients to handle the project maintenance with professional advisory for clients business expansion.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="testimonials" className="container-fluid">
        <div className="bg-color"></div>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="row-title">Testimonials</div>
                    <div className="row-subtitle">What others said about us?</div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <div id="testimonials-slider">
                    <Slider>
                        <div>
                            <div className="details-holder">
                                <img className="photo" src="assets/images/vidyavardhini.jpg" alt=""/>
                                <h4>Sweety Rupani, Professor</h4>
                                <h5>Vidyavardhini College of Engineering and Technology</h5>
                                <p>The blockchain technology SDP (Student Development Program) conducted by KubixSquare gave all the participants to gain the knowledge on blockchain and work on their projects. Hands-on experience that was conducted was in line with our expectations and was rated has much valued by the participants. The participants were impressed with the whole session and specially with hands-on experiences that they had. Thankyou so much for conducting such a wonderful training. We as an organizing committee appreciate the efforts put by you, and responsiveness and promptness for the training and the betterment of students.</p>
                            </div>
                        </div>
                        
                        <div>
                            <div className="details-holder">
                                <img className="photo" src="assets/images/saintjohn.png" alt=""/>
                                <h4>Vivian Brian Lobo, Professor</h4>
                                <h5>St. John College of Engineering and Management</h5>
                                <p>On behalf of the team MegaHack 2020 at St. John College of Engineering and Management (SJCEM), Palghar, we would like to offer our sincere thanks and gratitude to the entire team of KubixSquare for accepting our invitation and taking out time from their busy schedule and judging the event. We truly appreceiate the level of exposure that was offered to our participants in terms of skills, expertise and knowledge which were indeed liked by our participants. Your rigorous feedback played a major role in deciding the winners.</p>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="more-features" className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row-title">Our Promise</div>
                    <div className="row-subtitle">Your satisfaction is guaranteed. Indeed.</div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="mfeature-box">
                        <div className="mfeature-icon">
                            <i className="htfy htfy-trophy"></i>
                        </div>
                        <div className="mfeature-title">Best Price</div>
                        <div className="mfeature-details">We at KubixSquare provide the competitive price with a focus to make our courses and services affordable to every individual.</div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="mfeature-box">
                        <div className="mfeature-icon">
                            <i className="htfy htfy-like"></i>
                        </div>
                        <div className="mfeature-title">Quality Work</div>
                        <div className="mfeature-details">We assure quality work because we at KubixSquare believe in work and understand the priority of quality.</div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="mfeature-box">
                        <div className="mfeature-icon">
                            <i className="htfy htfy-cogwheel"></i>
                        </div>
                        <div className="mfeature-title">Best Support</div>
                        <div className="mfeature-details">We give the best support in market to satisfy the needs of our students and clients.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</body>

</div>
)
    }
}
export default Home;