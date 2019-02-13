/******************************************************************************
Title           : ProductDetails.js
Description     : A layout for Product Details.
******************************************************************************/

import React, { Component } from 'react';
import '../../sass/main.scss';
import image2 from '../../images/1.jpg';
import ad from '../../images/ads.jpg';
import { Link } from 'react-router-dom';

;
class ProductDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: {
            img:'../../images/1.jpg',
            placeName: 'Bros Pizza',
            productName: 'Cheese Pizza', 
            price: 'Free', 
            stars:'2',
            id:0, 
            reviewNumber: '12', 
            coordinates: '190,186', 
            description:'So you want to see the Picassos in the Museum of Modern Art, but don’t want to commit to the $25 admission fee? Lucky for you, the museum offers free admission every Friday from 4 p.m. to 8 pm. You can also visit the sculpture garden for free every morning from 9:30 to 10 am.',
        },
        errors: {},
    };
  }


  async componentDidMount() {

  }


  render() {
      console.log('state', this.state.data)
    return (
        <section className="container">
            
            {/* helps placing the item 1 & item-2 */}
            <div className="details">

                <div className="details__item-1">

                    <div className="flex-container">
                        <div className="flex-img">
                            <Link to="/productDetails">
                                <img src={image2} alt="image" className="details__item-1__img"/>
                            </Link>
                        </div>
                    </div>


                    <div className="details__description">
                        <div className="flex-container">
                            <div className="details__title">
                                {this.state.data.productName}  <span className="detail__price"> $ 0.00</span>
                            </div>

                            <div className="details__rating">
                                <div className="details__rating__back">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    
                                    <div className="details__rating__front" style={{width: "70%" }}>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div> 

                            <div>
                                <Link to="/productDetails" className="details__directions">Get Directions</Link>
                            </div>
                        </div>

                        <div className="details__info">
                            <h1>Company Name:  <span className="details__price"> {this.state.data.placeName}</span></h1>
                            <h1>Product Description:  <span className="details__price"> {this.state.data.description}</span></h1>

                            <h1>Location:  <span className="details__price"> 300 Broadway Ave 34 B New York, NY 10027</span></h1><br/><br/>
                        </div>

                        {/* REVIEWS TITLE */}
                        <div className="flex-container">
                            <div>
                                <h1>Reviews</h1>
                            </div>

                            <div>
                                <Link to="/productDetails" className="btn-info">+ Add Review</Link>
                            </div>
                        </div>

                        
                        {/* REVIEWERS */}
                        <div className="flex-container">    
                            <div className="reviewers"> 
                                <div className="reviewers__review">
                                    <div className="content__item-1">
                                        <Link to="/productDetails">
                                            <img src={image2} alt="image" className="reviewers__img"/>
                                        </Link>
                                    </div>


                                    <div className="content__item-1">
                                        <h1>Luis Carbajal</h1>
                                        <div className="details__rating">
                                            <div className="content__item-2__rating__back">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                
                                                <div className="content__item-2__rating__front" style={{width: "70%" }}>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div> 

                                        <h1>This places was awesome, the service excellent and the pizza even better. Wow, I couldn't belive the prices was awesome!</h1>
                                    </div>

                                </div>
                            </div>
                        
                            {/* SECOND  REVIEWERS*/}
                            <div className="reviewers"> 
                                <div className="reviewers__review">
                                    <div className="content__item-1">
                                        <Link to="/productDetails">
                                            <img src={image2} alt="image" className="reviewers__img"/>
                                        </Link>
                                    </div>


                                    <div className="content__item-1">
                                        <h1>Luis Carbajal</h1>
                                        <div className="details__rating">
                                            <div className="content__item-2__rating__back">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                
                                                <div className="content__item-2__rating__front" style={{width: "70%" }}>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div> 

                                        <h1>This places was awesome, the service excellent and the pizza even better. Wow, I couldn't belive the prices was awesome!</h1>
                                    </div>

                                </div>
                            </div>
                        
                        </div>

                    </div>
            
                </div>




                {/* ADS */}
                <div className="details__item-2">
                
                    <div className="container">
                        <div>
                            <Link to="/productDetails">
                                <img src={ad} alt="image" className="details__item-2__img"/>
                            </Link>
                        </div>

                        <div>
                            <Link to="/productDetails">
                                <img src={ad} alt="image" className="details__item-2__img"/>
                            </Link>
                        </div>

                        <div>
                            <Link to="/productDetails">
                                <img src={ad} alt="image" className="details__item-2__img"/>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        
</section>

    )
  }
}

export default ProductDetails;


