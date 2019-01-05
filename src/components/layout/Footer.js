/******************************************************************************
Title           : Footer.js
Description     : Footer react component.
******************************************************************************/

import React from 'react';
import '../../sass/main.scss';

export default() => {
    return (
        <footer className="footer">
            Copyright & copy;{new Date().getFullYear()} Cheapnyc.com  
        </footer>
    )
}