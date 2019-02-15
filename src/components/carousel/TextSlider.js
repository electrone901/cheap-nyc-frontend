/******************************************************************************
Title           : LeftArrow.js
Description     : is the left arrow of our carousel  using font-awesome 
******************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/main.scss';

// functional component
const TextSlider = () => {
    return (
        <div className="tParent" id="tParent">
            <div className="tParent__items">
                <h1 className="">What do you love?</h1>
            </div>
            <div className="tParent__items">
                <p className="tParent__items__subTittle">
                    Do more of it with Cheap NY
                </p>
            </div>
            <div className="tParent__items">
                <Link to="/signup" className="tParent__items__sign">Sign Up</Link>
            </div>
        </div>
    )
}
export default TextSlider;


