/******************************************************************************
Title           : Footer.js
Description     : Footer react component.
******************************************************************************/

import React from 'react';
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
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Casa</a></li>
                                <li><a href="/donate"><i className="fa fa-angle-double-right"></i>Como Funciona</a></li>
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Donaciones</a></li>
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Únete</a></li>
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                            </ul>
                        </div>

                        <div className="col-1-of-3">
                            <h5>Sponsorships</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Lehman College</a></li>
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Embassy Of Mexico</a></li>
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Mexican Festival Restaurant</a></li>
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Radio Iniciador</a></li>
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Taco Mix</a></li>
                            </ul>
                        </div>

                        <div className="col-1-of-3">
                            <h5>Mobile Apps</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Iphone</a></li>
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Android</a></li>
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Windows</a></li>
                                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="social-section">
                            <ul className="social">
                                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook-square fa-2x"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter fa-2x"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram fa-2x"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus fa-2x"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope fa-2x"></i></a></li>
                            </ul>

                    </div>	


                        <div className="">
                            <p className="footerDescription">
                                Copyright & copy;{new Date().getFullYear()} Inc. NY, U.S. © All right Reversed <a className="text-green ml-2" href="https://lazona.herokuapp.com/" target="_blank">  Cheapnyc.com</a>
                            </p>
                        </div>
                        
                </div>
	        </section>
            
        </footer>
    )
}