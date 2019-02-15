import React, {Component} from 'react';

import Slider from '../carousel/Slider';
import Prices from '../prices/Prices';


class Landing extends Component{
 
  render(){
      return(
          <div className="landing">
            <div className="dark-overlay landing-inner text-light">
                <Slider />
                <Prices />
            </div>
          </div>
      );
  }
}

// Landing.propTypes = {
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

export default Landing;