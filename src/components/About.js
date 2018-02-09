import React from 'react';
import { PageHeader, Jumbotron } from 'react-bootstrap';

// icons
// import headshot from '../imgs/headshot.jpg';

export default class About extends React.Component {
  render() {
    return (
      <div>

      <PageHeader className='header'>
        About

        {/* <!DOCTYPE html>

        <html>

        <head>

        	<title>Orange LLC</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <!-- Favorite icon / logo settings -->
        	<!-- <link rel="icon" href="/your_path_to_image/favicon.jpg"> -->
        	<!-- <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" /> -->
        	<!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        	<link rel="manifest" href="/manifest.json">
        	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        	<meta name="theme-color" content="#ffffff"> -->
          <!-- End of Favorite icon / logo settings -->

        	<!-- Styles -->
            <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="css/compiled/bootstrap-overrides.css" type="text/css" />
            <link rel="stylesheet" type="text/css" href="css/compiled/theme.css" />

            <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css' />

            <link rel="stylesheet" href="css/compiled/about.css" type="text/css" media="screen" />
            <link rel="stylesheet" type="text/css" href="css/lib/animate.css" media="screen, projection" />
            <link rel="stylesheet" href="css/lib/flexslider.css" type="text/css" media="screen" />

            <!--[if lt IE 9]>
              <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
            <![endif]-->
        </head>

        <body>
             <div class="navbar navbar-inverse navbar-static-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

        								<a href="index.html" class="navbar-brand" target="_blank" rel="noopener noreferrer">
        									<img src='img/logo/logo_smaller.png' className='icon-footer' alt="logo" title="logo" />
        								</a>

                        <a href="index.html" class="navbar-brand"><strong>Orange LLC</strong></a>
                    </div>

                    <div class="collapse navbar-collapse navbar-ex1-collapse" role="navigation">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="index.html">HOME</a></li>
                            <li class="active"><a href="about-us.html">ABOUT US</a></li>
                            <!-- <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">PAGES <b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="features.html">Features</a></li>
                                    <li><a href="services.html">Services</a></li>
                                </ul>
                            </li> -->
                            <!-- <li><a href="pricing.html">PRICING</a></li> -->
        										<li><a href="services.html">SERVICES</a></li>
                            <!-- <li><a href="contact.html">CONTACT US</a></li> -->
                        </ul>
                    </div>
                </div>
            </div>

            <div id="aboutus">
                <div class="container">
                    <div class="section_header">
                        <h3>About Us</h3>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 intro">
                            <h6>Service Disabled Veteran Owned Small Business (SDVOSB)</h6>
                            <p>
        											Orange LLC is a Service Disabled Veteran Owned Small Business (SDVOSB) headquartered in Newbury Park, CA. Orange provides the finest Operational Professional Excellence in the forms of Training and Operational Procedures Standardization, Range Safety Standardization, and Flight Test Safety tailored to the needs of the customer.
                                <br />
        												<br />
        											Cage Code 7THU6
                                <br />
        												<br />
        											Dun & Bradstreet Number (DUNS) 080533752
        				               <br />
        											 <br />
                              NAICS codes 481219, 541330, 541611, 541690, 611512
                               <br />
        											 <br />
                        </div>

                        <div class="col-sm-6">
                            <div class="flexslider">

                                <ul class="slides">

                                    <li>
                                      <img src="img/about_us/launching_6.jpg" />
                                    </li>

                                    <li>
                                      <img src="img/about_us/drone_water_spray.jpg" />
                                    </li>

                                    <li>
        															<img src="img/about_us/orange_boat_out_of_water.jpg" />
                                      <!-- <img src="img/about_slide1.jpg" /> -->
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        		<!-- Service Option 2 -->
        		<div id="service_2">
        				<div class="container">
        						<div class="section_header">
        								<h3>Services</h3>
        						</div>
        						<div class="row perk">
        								<div class="col-sm-2 circle circle1">
        										<img src="img/service_ico1.png" alt="">
        								</div>

        								<div class="col-sm-10 description_wrapper">
        										<h5>Expertise</h5>

        										<p>
        											Operational Professional Excellence
        											Program Management
        											Aviation Safety Programs
        											Crew Resource Management
        											Operational Risk Management
        											Safety Training
        											Flight Test Operations
        											Flight Test Planning
        											Flight Test Safety
        											Range Operations
        											Range Safety
        											Range Safety Policy
        											Program Management
        											Weapons Flight Test
        											Unmanned Systems Training
        											Unmanned Systems Piloting
        											Target Training and Operational Procedures Standardization
        											Target Safety
        											Target Range Operations
        											Target Operator Training
        											Target Safety Programs
        									</p>
        								</div>
        						</div>

        						<div class="row perk">
        								<div class="col-sm-2 circle">
        										<img src="img/service_ico2.png" alt="">
        								</div>

        								<div class="col-sm-10 description_wrapper">
        										<h5>Member Qualifications</h5>
        										<p>
        												US Naval Test Pilot School
        												Aviation Safety Officer School
        												DAWIA Program Management L3, Test & Evaluation L3
        										</p>
        								</div>
        						</div>

        						<div class="row perk last">
        								<div class="col-sm-2 circle">
        										<img src="img/service_ico3.png" alt="">
        								</div>

        								<div class="col-sm-10 description_wrapper">
        										<h5>
        											Experience
        										</h5>

        										<p>
        												Combat Flight Veterans
        												Over four decades of active USN service
        												Over 3,500 hours of Airborne Surface Search, Air-to-Ground, and Air-to-Air RADAR operations
        												Over 12 years of flying Test and Training Missions on the Sea Test Range
        												Over 35 years operating multiple EO/IR and other airborne imagery systems.
        												Qualified Target Remote Control Operator (RCO)
        												Qualified Night Vision Test Experience
        												Multiple manned and unmanned platforms
        												Engineering and Business backgrounds
        												Aviation Safety Officer
        												Multiple NAWCWD tours
        												Executive Leadership
        												Diverse NAVAIR and Fleet Leadership Positions
        												Co-authored and implementation of NAVAIRINST 3710.13 Target Training and Operational Procedures Standardization
        										</p>
        								</div>
        						</div>
        				</div>
        		</div>

            <div id="team">
                <div class="container">
                    <div class="section_header">
                        <h3>Meet our Team</h3>
                    </div>

                    <div class="row people">
                        <!-- <div class="row row1"> -->
                            <!-- <div class="col-sm-6 bio_box">
                                <img src="img/ale.png" alt="">
                                <div class="info">
                                    <p class="name">Alejandra Galvan Castillo</p>
                                    <p class="area">Creative Director</p>
                                    <a href="#" class="facebook">
                                        <span class="socialicons ico1"></span>
                                        <span class="socialicons_h ico1h"></span>
                                    </a>

                                    <a href="#" class="twitter">
                                        <span class="socialicons ico2"></span>
                                        <span class="socialicons_h ico2h"></span>
                                    </a>
                                    <a href="#" class="flickr">
                                        <span class="socialicons ico4"></span>
                                        <span class="socialicons_h ico4h"></span>
                                    </a>
                                    <a href="#" class="dribble">
                                        <span class="socialicons ico6"></span>
                                        <span class="socialicons_h ico6h"></span>
                                    </a>
                                </div>
                            </div> -->

                        <!-- </div> -->

                        <div class="row row1">
                            <div class="col-sm-6 bio_box">
                                <img src="img/headshots/pm_small.png" alt="">
                                <div class="info">
                                    <p class="name">Patrick Modlin</p>
                                    <p class="area"></p>
        <!--
                                    <a href="#" class="facebook">
                                        <span class="socialicons ico1"></span>
                                        <span class="socialicons_h ico1h"></span>
                                    </a> -->
        <!--
                                    <a href="#" class="twitter">
                                        <span class="socialicons ico2"></span>
                                        <span class="socialicons_h ico2h"></span>
                                    </a> -->

        														<a href="#" class="linkedin">
                                        <span class="socialicons ico2"></span>
                                        <span class="socialicons_h ico2h"></span>
                                    </a>

                                </div>
                            </div>

                            <!-- <div class="col-sm-6 bio_box bio_boxr">
                                <img src="img/headshots/ma_small.png" alt="">
                                <div class="info">
                                    <p class="name">Firstname Lastname</p>
                                    <p class="area">Co-Founder and Partner</p>

                                    <a href="#" class="facebook">
                                        <span class="socialicons ico1"></span>
                                        <span class="socialicons_h ico1h"></span>
                                    </a>

        														<!-- <a href="https://www.linkedin.com/in/jonathanansley/" target="_blank" rel="noopener noreferrer">
        															<img src={linkedin} className='icon-footer' alt="Connect with me on LinkedIn" title="See my LinkedIn" />
        														</a> -->
        <!--
                                    <a href="#" class="twitter">
                                        <span class="socialicons ico2"></span>
                                        <span class="socialicons_h ico2h"></span>
                                    </a>

                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div id="process">
                <div class="container">
                    <div class="section_header">
                        <h3>Our Process</h3>
                    </div>

                    <div class="row services_circles">
                        <div class="col-sm-4 description">
                            <div class="text active">
                                <h4>Plan what you need.</h4>
                                <p>
                                    There are many variations of pass...</p>
                            </div>
                            <div class="text">
                                <h4>Develop your product or service.</h4>
                                <p>
                                    There are many variations of passages of this.............
        												 </p>
                            </div>
                            <div class="text">
                                <h4>Design this theme to your needs.</h4>
                                <p>
                                    There are..................
        												</p>
                            </div>
                        </div>

                        <div class="col-sm-7 areas">
                            <div class="circle active">
                                <img src="img/plan.png" />
                                <span>Plan</span>
                            </div>
                            <div class="circle">
                                <img src="img/develop.png" />
                                <span>Develop</span>
                            </div>
                            <div class="circle last_circle">
                                <img src="img/design.png" />
                                <span>Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

            <!-- starts footer -->
            <footer id="footer">
                <div class="container">
                    <div class="row info">
                        <div class="col-sm-6 residence">
                            <ul>
                                <li>4380 Via Entrada</li>
                                <li>Newbury Park, CA 91320</li>
                            </ul>
                        </div>
                        <div class="col-sm-5 touch">
                            <ul>
                                <li>773-988-3827</li>
                                <li><a href="#"> patrick.modlin@icloud.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row credits">
                        <div class="col-md-12">
                            <!-- <div class="row social">
                                <div class="col-md-12">

                                    <a href="#" class="facebook">
                                        <span class="socialicons ico1"></span>
                                        <span class="socialicons_h ico1h"></span>
                                    </a>

                                </div>
                            </div> -->
                            <div class="row copyright">
                                <div class="col-md-12">
                                    © 2018 Orange LLC. All rights reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <script src="http://code.jquery.com/jquery-latest.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/theme.js"></script>
            <script type="text/javascript" src="js/flexslider.js"></script>

        </body>

        </html> */}

      </PageHeader>

      <Jumbotron>
{/*
            <a>
              <img src={headshot} className='icon-portrait' alt="Jonathan Ansley" />
            </a> */}

            <h2>
              Welcome to Jonathan Ansley's portfolio.
            </h2>

            <span>
              Full stack web developer residing in Arlington, Virginia.
            </span>

        </Jumbotron>

        </div>

    );

  }

}
