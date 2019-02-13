/******************************************************************************
Title           : LeftArrow.js
Description     : is the left arrow of our carousel  using font-awesome 
******************************************************************************/

import React from 'react';
import '../../sass/main.scss';

// functional component
const TextSlider = () => {
    return (
        <div className="tParent" id="tParent">
            <div className="tParent__items">
                <h1 className="">What do you love?</h1>
            </div>
            <div className="tParent__items">
                <p className="">
                    <span>Do more of it with Cheap NY</span>
                </p>
            </div>
            <div className="tParent__items">
                <a href="https://www.meetup.com/register/" className="button-sign text--bold">
                    <span>Sign Up</span>
                </a>
            </div>
        </div>
    )
}
export default TextSlider;


