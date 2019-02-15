/******************************************************************************
Title           : Footer.js
Description     : Footer react component.
******************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/main.scss';

export default() => {
    return (
        <footer>

            <section className="footer">
                
                <div className="container">

                    <div className="row">
                        <div className="col-1-of-3">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li ><Link to="/"><i className="fa fa-angle-double-right"></i>Home</Link></li>
                                <li ><Link to="/how-it-works"><i className="fa fa-angle-double-right"></i>How it works</Link></li>
                                <li ><Link to="/donate"><i className="fa fa-angle-double-right"></i>Donate</Link></li>
                                <li ><Link to="/"><i className="fa fa-angle-double-right"></i>Join Now</Link></li>
                                <li ><Link to="/how-it-works"><i className="fa fa-angle-double-right"></i>FAQ</Link></li>
                            </ul>
                        </div>

                        <div className="col-1-of-3">
                            <h5>Sponsorships</h5>
                            <ul className="list-unstyled quick-links">
                                {/* <li ><Link to="/how-it-works"><i className="fa fa-angle-double-right"></i>Lehman College</Link></li>
                                <li ><Link to="/how-it-works"><i className="fa fa-angle-double-right"></i>I love NY</Link></li>
                                <li ><Link to="/how-it-works"><i className="fa fa-angle-double-right"></i>Mex Festival Restaurant</Link></li>
                                <li ><Link to="/how-it-works"><i className="fa fa-angle-double-right"></i>Taco Mix</Link></li>
                                <li ><Link to="/how-it-works"><i className="fa fa-angle-double-right"></i></Link></li> */}

                                <li><a href="https://www.facebook.com/groups/YoAmoNuevaYork/"><i className="fa fa-angle-double-right"></i>I love New York</a></li>
                                <li><a href="https://electrone901.github.io/"><i className="fa fa-angle-double-right"></i>City Tech NY</a></li>
                                <li><a href="https://www.facebook.com/byBetoNY/"><i className="fa fa-angle-double-right"></i>Mexican Festival Restaurant</a></li>
                                <li><a href="https://tunein.com/user/iniciadorhoyos/"><i className="fa fa-angle-double-right"></i>Radio Iniciador</a></li>
                                <li><a href="http://www.elshowdemarcosflores.com/index.html"><i className="fa fa-angle-double-right"></i>Taco Mix</a></li>
                            </ul>
                        </div>

                        <div className="col-1-of-3">
                            <h5>Mobile Apps</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://www.facebook.com/groups/YoAmoNuevaYork/"><i className="fa fa-angle-double-right"></i>Iphone</a></li>
                                <li><a href="https://www.facebook.com/groups/YoAmoNuevaYork/"><i className="fa fa-angle-double-right"></i>Android</a></li>
                                <li><a href="https://www.facebook.com/groups/YoAmoNuevaYork/"><i className="fa fa-angle-double-right"></i>Windows</a></li>
                                <li><a href="https://www.facebook.com/groups/YoAmoNuevaYork/"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="social-section">
                            <ul className="social">
                                <li className="list-inline-item"><a href="https://www.facebook.com/groups/YoAmoNuevaYork/"><i className="fa fa-facebook-square fa-2x"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.facebook.com/groups/YoAmoNuevaYork/"><i className="fa fa-twitter fa-2x"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.facebook.com/groups/YoAmoNuevaYork/"><i className="fa fa-instagram fa-2x"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.facebook.com/groups/YoAmoNuevaYork/"><i className="fa fa-google-plus fa-2x"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.facebook.com/groups/YoAmoNuevaYork/"><i className="fa fa-envelope fa-2x"></i></a></li>
                            </ul>

                    </div>	


                        <div className="">
                            <p className="footerDescription">
                                Copyright & copy;{new Date().getFullYear()} Inc. NY, U.S. © All right Reversed <a className="text-green ml-2" href="https://lazona.herokuapp.com/">  Cheapnyc.com</a>
                            </p>
                        </div>
                        
                </div>
	        </section>
            
        </footer>
    )
}