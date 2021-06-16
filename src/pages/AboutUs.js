import React, {component} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class AboutUs extends React.Component{
    render(){
        return(
            <div>
            <Helmet>
                <title>KubixSquare - About Us</title>
            </Helmet> 
                     

<div id="header-holder" className="inner-header about-header">
    <div className="bg-custom">
        <div className="obj-gradiant1"></div>
        <div className="obj-gradiant2"></div>
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
                            <Link to="/" className="logo-holder" >
                                <div className="logo" style={{width:'165px', height:'38px'}}></div>
                            </Link>
                        </div>
                        <div style={{height:'1px'}} role="main" aria-expanded="false" className="navbar-collapse collapse"
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
    <div id="page-head" className="container-fluid inner-page">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center ">
                    <div className="icons-animation-holder">
                        <div className="aicon aicon1"><img src="assets/images/technicaltraining.svg" alt=""/></div>
                        <div className="aicon aicon2"><img src="assets/images/webdev.svg" alt=""/></div>
                        <div className="aicon aicon3"><img src="assets/images/softdev.svg" alt=""/></div>
                        <div className="aicon aicon4"><img src="assets/images/blockchain.svg" alt=""/></div>
                        <div className="aicon aicon-main">
                              <div className="aicon aicon-main"> <img src="assets/images/kubixsquarecircle.png" className="bg" />
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 company-info-holder">
                    <h4>About KubixSquare</h4>
                    <Slider>
                    {/* <div className="info-slider"> */}
                         <div className="details-holder">
                                <p>We are a team of experienced professionals who train students and corporate people on Latest technologies like Blockchain, Frontend technologies, Backend technologies, AI and ML etc. which are widely used in industry today.</p>
                            </div>
                           <div className="details-holder">
                              <p>We achieve our goals by collaborating with Institutes and by providing them Industry level training by our industry experts.We also provide a wide range of service to our clients from WebApp development with interactive analytics.</p>
                            </div>
                           <div className="details-holder">
                                <p>Blockchain Consulting to name a few, with only goal to provide Quality and Best service at a reasonable price, with our expert developers we always thrive to provide our clients with the best finished products along with best in className support.</p>
                            </div>
                    </Slider>
                        
                    
                     
                     {/* <div class="info-slider slick-initialized slick-slider slick-dotted" role="toolbar">
                        <div aria-live="polite" class="slick-list draggable">
                            <div class="slick-track" style={{width:'2160px',opacity:'1',transform:'translate3d(0px, 0px, 0px)'}} role="listbox">
                                <div class="slick-slide" data-slick-index="0" aria-hidden="true" style={{width:'720px'}} tabindex="-1" role="option" aria-describedby="slick-slide00">
                                    <div class="details-holder">
                                        <p>We are a team of experienced professionals who train students and corporate people on Latest technologies like Blockchain, Frontend technologies, Backend technologies, AI and ML etc. which are widely used in industry today.</p>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="1" aria-hidden="false" style={{width:'720px'}} tabindex="-1" role="option" aria-describedby="slick-slide01">
                                    <div class="details-holder">
                                        <p>We achieve our goals by collaborating with Institutes and by providing them Industry level training by our industry experts.We also provide a wide range of service to our clients from WebApp development with interactive analytics.</p>
                                    </div>
                                </div>
                                <div class="slick-slide" data-slick-index="2" aria-hidden="true" style={{width:'720px'}} tabindex="-1" role="option" aria-describedby="slick-slide02">
                                    <div class="details-holder">
                                        <p>Blockchain Consulting to name a few, with only goal to provide Quality and Best service at a reasonable price, with our expert developers we always thrive to provide our clients with the best finished products along with best in class support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        <ul class="slick-dots" style={{display: 'block'}} role="tablist">
                            <li class="slick-active" aria-hidden="true" role="presentation" aria-selected="true" aria-controls="navigation00" id="slick-slide00"><button type="button" data-role="none" role="button" tabindex="0">1</button></li>
                            <li aria-hidden="false" role="presentation" aria-selected="false" aria-controls="navigation01" id="slick-slide01" class=""><button type="button" data-role="none" role="button" tabindex="0">2</button></li>
                            <li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation02" id="slick-slide02" class=""><button type="button" data-role="none" role="button" tabindex="0">3</button></li>
                        </ul> */}
                        </div>    
                   </div>
                </div>
            </div>
        </div>
    
<div id="more-info" className="container-fluid">
    <div className="bg-custom"></div>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="links-holder">
                    <ul>
                        <li><div className="info-link opened" data-id="1">Our Mission</div></li>
                        <li><div className="info-link" data-id="2">Our Vision</div></li>
                        <li><div className="info-link" data-id="3">KubixSquare Commitment</div></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-8">
                <div className="info-details-holder">
                    <div className="info-details info-d1 show-details">
                        <h1>Building an aura<br/>
                        for quality education and service.</h1>
                        <p>To spread quality education by using relevant & latest industry standard technology and enhancing the business growth of our customers with creative design and development to deliver market-defining high-quality solutions that create value and reliable competitive advantage for our clients around the world and to deliver optimal solutions with quality and services at reasonable prices.</p>
                    </div>
                    <div className="info-details info-d2">
                        <h1>Be recognized<br/>
                        and preferred</h1>
                        <p>To be the most preferred and in demand provider of expert technical training and development services for business.</p>
                    </div>
                    <div className="info-details info-d3">
                        <h1>Affordable pricing<br/>
                        made easy.</h1>
                        <p>KubixSquare has a commitment to provide the quality training and business solution software services and support at a very competitive pricing in the market that fits in pocket of students and clients.</p>
                    </div>       
                </div>
            </div>
        </div>
    </div>
</div>
 <div id="team" className="container-fluid">
    {/* <!-- <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="row-title">Team</div>
                <div className="row-subtitle"></div>
            </div>
        </div>
        <div className="row team-holder">
            <div className="col-sm-6 col-md-4">
                <div className="person-box">
                    <div className="person-icon">
                        <div className="person-img"><img src="assets/images/jetso.jpg" alt="" /></div>
                    </div>
                    <div className="person-name">Jetso Analin</div>
                    <div className="person-title">Founder & CEO</div>
                    <div className="person-social">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4">
                <div className="person-box">
                    <div className="person-icon">
                        <div className="person-img"><img src="assets/images/sultan.png" alt="" /></div>
                    </div>
                    <div className="person-name">Sultan Siddiqui</div>
                    <div className="person-title">Co-Founder & COO</div>
                    <div className="person-social">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4">
                <div className="person-box">
                    <div className="person-icon">
                        <div className="person-img"><img src="assets/images/anmol.jpg" alt="" /></div>
                    </div>
                    <div className="person-name">Anmol Jayan</div>
                    <div className="person-title">Co-Founder & CFO</div>
                    <div className="person-social">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div> } */}
</div>
</div>


        )
    }
}
export default AboutUs;