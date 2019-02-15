/******************************************************************************
Title           : ItemsListPrice.js
Description     : List of items at x price.
******************************************************************************/
import React, { Component } from 'react';
import '../../sass/main.scss';
import image2 from '../../images/1.jpg';
import ad from '../../images/ads.jpg';
import { Link } from 'react-router-dom';


class ItemsListPrice extends Component {    
    constructor() {
        super();
        this.state = {
            items: [
                {
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
                {
                    img:'../../images/1.jpg',
                    placeName: 'Bronx Zoo',
                    productName: 'Tour NY', 
                    price: 'Free', 
                    stars:'1',
                    id:0, 
                    reviewNumber: '12', 
                    coordinates: '190,186', 
                    description:'So you want to see the Picassos in the Museum of Modern Art, but don’t want to commit to the $25 admission fee? Lucky for you, the museum offers free admission every Friday from 4 p.m. to 8 pm. You can also visit the sculpture garden for free every morning from 9:30 to 10 am.',
                },
                {
                    // img:'../../img/pizza.jpg',
                    placeName: 'Central Park', 
                    productName: 'Tours on foot',
                    price: 'Free', 
                    stars:'1',
                    id:1, 
                    reviewNumber: '12', 
                    coordinates: '190,186', 
                    description:'So you want to see the Picassos in the Museum of Modern Art, but don’t want to commit to the $25 admission fee? Lucky for you, the museum offers free admission every Friday from 4 p.m. to 8 pm. You can also visit the sculpture garden for free every morning from 9:30 to 10 am.',
                },
                {
                    // img:'../../img/pizza.jpg',
                    placeName: 'MOMA', 
                    productName: 'Muse Admision',
                    price: 'Free', 
                    stars:'1', 
                    id:2,
                    reviewNumber: '12', 
                    coordinates: '190,186', 
                    description:'So you want to see the Picassos in the Museum of Modern Art, but don’t want to commit to the $25 admission fee? Lucky for you, the museum offers free admission every Friday from 4 p.m. to 8 pm. You can also visit the sculpture garden for free every morning from 9:30 to 10 am.',
                }
            ],
            errors: {},
            value: 'select'
        }
    }

    componentDidMount() {
        let range = this.props.match.params.range;
        let url = "https://cheapnycserver.herokuapp.com/foods?";
        fetch(url + range)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            this.setState({data: data.foods});
        })
        .catch((err) => {
            console.log('There was a problem with your fetch request' + err.message)
        });
    }

    onChange = (e) => {
        console.log('val', e.target.value)
        this.setState({value: e.target.value})
        console.log('val', e.target.value)
    }

    render() {
        const { data } = this.state;
        let list = <div>
                {
                    this.state.data ? this.state.data.map((item, key) => {
                        return (
                            <div className="content" key={key}> 

                                <div className="content__item-1">
                                    <Link to="/productDetails">
                                        <img src={image2} alt="item details" className="content__item-1__img"/>
                                    </Link>
                                </div>

                                <div className="content__item-2">
                                    <h1>{item.name}  <span className="content__item-2__price"> $ {item.price}</span></h1>
                                    <div className="content__item-2__rating">
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

                                    <h1>Location:  <span className="price"> {item.location}</span></h1>
                                    <Link to="/productDetails" className="btn-hot">Details</Link>
                                </div>
                            </div>
                        )
                    }): console.log('wait')
                }
            </div>

        let waiting = <h1>waiting ...</h1>
        
        return (
                <section className="container">
                    <div>
                        <h1>New York, NYC </h1>
                        <div >
                            <form onSubmit={this.onSubmit} className="form">
                               
                                <div className="form__item-1">
                                    <label className="form__label">Search By Name</label>
                                    <input className="form__input-search"
                                    type="text"
                                    placeholder="Search By Name"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                                    {/* {errors && (<div className="invalid-feedback">{errors.password}</div>)} */}

                                </div>
                                <div className="form__item-2">
                                    {/* Category<select id="lang" onChange={this.change} value={this.state.value} className="form__drop"> */}
                                    Category<select id="lang"  className="form__drop">
                                        <option value="select">Select One</option>
                                        <option value="Food">Food</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Culture">Culture</option>
                                        <option value="Housing">Housing</option>
                                        <option value="Museums">Museums</option>
                                        <option value="Rideshare">Rideshare</option>
                                        <option value="Grocery">Grocery</option>
                                        <option value="Outdoor">Outdoor</option>
                                        <option value="Indoor">Indoor</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Events">Events</option>
                                    </select>
                                </div>
                                <div className="form__item-3"> 
                                    <input type="submit" className="form__submit-btn" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="content">
                        <div>
                            {
                                this.state.data ? list: waiting
                            }
                        </div>

                        <div className="content__item-3">
                            <div className="container">
                                <div>
                                    <Link to="/productDetails">
                                        <img src={ad} alt="details" className="content__item-3__img"/>
                                    </Link>
                                </div>

                                <div>
                                    <Link to="/productDetails">
                                        <img src={ad} alt="details" className="content__item-3__img"/>
                                    </Link>
                                </div>

                                <div>
                                    <Link to="/productDetails">
                                        <img src={ad} alt="details" className="content__item-3__img"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        )
    }
}

export default ItemsListPrice;
