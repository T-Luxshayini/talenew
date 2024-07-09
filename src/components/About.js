import React from "react";

import "/home/uki-jaffna/Documents/tale2/src/components/assets/css/animate.css";
import "/home/uki-jaffna/Documents/tale2/src/components/assets/css/flex-slider.css";
import "/home/uki-jaffna/Documents/tale2/src/components/assets/css/fontawesome.css";
import "/home/uki-jaffna/Documents/tale2/src/components/assets/css/owl.css";
import "/home/uki-jaffna/Documents/tale2/src/components/assets/css/templatemo-tale-seo-agency.css";
import { Link } from "react-router-dom";
import image5 from "./assets/images/logo.png";
import image6 from "./assets/images/services-01.jpg";
import image7 from "./assets/images/services-02.jpg";
import image8 from "./assets/images/services-03.jpg";
import image9 from "./assets/images/services-04.jpg";
import image10 from "./assets/images/left-infos.jpg";


function About(){
    return(
        <>
        {/* <!-- ***** Pre-Header Area Start ***** --> */}
  <div className="pre-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-9">
          <div className="left-info">
            <ul>
              <li><a href="#"><i className="fa fa-phone"></i>+000 1234 5678</a></li>
              <li><a href="#"><i className="fa fa-envelope"></i>infocompany@email.com</a></li>
              <li><a href="#"><i className="fa fa-map-marker"></i>St. London 54th Bull</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-3">
          <div className="social-icons">
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- ***** Pre-Header Area End ***** --> */}

  {/* <!-- ***** Header Area Start ***** --> */}
  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="index.html" className="logo">
                        <img src={image5} alt="dguohj" style={{maxWidth:'112px'}}/>
                    </a>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/faq">FAQs</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>   
                    <a className='menu-trigger'>
                    <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}

  

  <div className="services section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>We Provide <em>Different Services</em> &amp;
                  <span>Features</span> For Your Agency</h2>
                  <div className="line-dec"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src={image6} alt="discover SEO" className="templatemo-feature"/>
                </div>
                <h4>Discover More on Latest SEO Trends</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src={image7} alt="data analysis" className="templatemo-feature"/>
                </div>
                <h4>Real-Time Big Data Analysis</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src={image8} alt="precise data" className="templatemo-feature"/>
                </div>
                <h4>Precise Data Analysis &amp; Prediction</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src={image9} alt="SEO marketing" className="templatemo-feature"/>
                </div>
                <h4>SEO Marketing &amp; Social Media</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 
    

  <div className="infos section" id="infos">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="left-image">
                  <img src={image10} alt="dhjkljmlk"/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-heading">
                  <h2>More <em>About Us</em> &amp; What <span>We Offer</span></h2>
                  <div className="line-dec"></div>
                  <p>You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you.</p>
                </div>
                <div className="skills">
                  <div className="skill-slide marketing">
                    <div className="fill"></div>
                    <h6>Marketing</h6>
                    <span>90%</span>
                  </div>
                  <div className="skill-slide digital">
                    <div className="fill"></div>
                    <h6>Ditigal Media</h6>
                    <span>80%</span>
                  </div>
                  <div className="skill-slide media">
                    <div className="fill"></div>
                    <h6>Social Media Managing</h6>
                    <span>95%</span>
                  </div>
                </div>
                <p className="more-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  <footer>
    <div className="container">
      <div className="col-lg-12">
        <p>Copyright © 2036 <a href="#">Tale SEO Agency</a>. All rights reserved. 
        
        <br/>Design: <a href="https://templatemo.com" target="_blank">TemplateMo</a></p>
      </div>
    </div>
  </footer>
        </>
    );
}
export default About;