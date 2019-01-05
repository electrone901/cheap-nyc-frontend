/******************************************************************************
Title           : Navbar.js
Description     : Navbar react component 
******************************************************************************/
import React, { Component } from 'react';

import '../../sass/main.scss';

class Navbar extends Component {
    render() {
       return (
           <nav>
               <ul className="navigation">
                    <li><a href="#">Donate</a></li>
                    <li><a href="#">How it works</a></li>
                </ul>
                <div className="buttons">
                    <a className="btn-main" href="#">Login</a>
                    <a className="btn-hot" href="#">Sign up</a>
                </div>
           </nav>
       ); 
    }
}
export default Navbar;
