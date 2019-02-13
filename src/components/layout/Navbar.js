/******************************************************************************
Title           : Navbar.js
Description     : Navbar react component 
******************************************************************************/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/logo.png';

import '../../sass/main.scss';

class Navbar extends Component {
    render() {
       return (
           <nav>
               <ul className="navigation">
                    <Link to="/">
                    <img className="navbar-brand" src={image} alt="image"/>
                    </Link>
                    <li ><Link to="/">Home</Link></li>
                    <li><Link to="/donate">Donate</Link></li>
                    <li><Link to="/how-it-works">How it works</Link></li>
                </ul>
                <div className="buttons">
                    <Link to="/login" className="btn-main">Login</Link>
                    <Link to="/signup" className="btn-hot">Sign up</Link>
                </div>
           </nav>
       ); 
    }
}
export default Navbar;
