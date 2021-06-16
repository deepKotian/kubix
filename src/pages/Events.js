import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

class Events extends React.Component{
      render(){
          return(
            <div>
                <Helmet>
                <title>KubixSquare - Events</title>
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
                                            <Link to="/technicaltraining"className="unity-link">
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
                <div className="col-md-12 text-center">
                    <div className="page-title">Events</div>
                    <div id="page-icon">
                        <div className="pricing-icon">
                            <img src="assets/images/planner.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="h-info" className="container-fluid">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="info-text grey-text">Our Latest and Upcoming Events Update.</div>
            </div>
        </div>
    </div>
</div>

<div id="articles" className="container-fluid">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-md-4">
                <div className="article-summary">
                    <div className="article-img"><img src="assets/images/event1.jpg" alt="" /></div>
                    <div className="article-details">
                        <div className="article-title"><a href="#">St. Francis Institute of Technology</a></div>
                        <div className="article-text">28/09/2019 - 29/09/2019 : 2 day interactive Workshop on Blockchain and its Application with hands on Training.
                        </div><br/>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4">
                <div className="article-summary">
                    <div className="article-img"><img src="assets/images/event3.jpg" alt="" /></div>
                    <div className="article-details">
                        <div className="article-title"><a href="#">Vidyavardhini College of Engineering and Technology</a></div>
                        <div className="article-text">16/12/2019 - 20/12/2019 : 5 Days Students Development Program on Blockchain And its Application With Hands on Training.
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4">
                <div className="article-summary">
                    <div className="article-img"><img src="assets/images/event2.jpg" alt="" /></div>
                    <div className="article-details">
                        <div className="article-title"><a href="#">St. Johns College of Engineering & Management</a></div>
                        <div className="article-text">29/01/2020 : KubixSquare Team was invited as a Judge for SJCEM Megahack - Hackathon competition.
                        </div><br/>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="pagination">
                    <span className="current page-number">1</span>
                    {/* <!-- <a className="page-number" href="#">2</a> --> */}
                    <a className="next page-number" href="#"><i className="fas fa-chevron-right"></i></a>
                </div>
            </div>
        </div>  
    </div>
</div>
</div>  
          )
      }
}
export default Events;