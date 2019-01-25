/******************************************************************************
Title           : ItemsListPrice.js
Description     : List of items at x price.
******************************************************************************/
import React, { Component } from 'react';
import '../../sass/main.scss';
import image2 from '../../images/1.jpg';

class ItemsListPrice extends Component {
    
    constructor() {
        super();
        this.state = {
            items: [
                {
                    img:'../../images/1.jpg',
                    placeName: 'Bronx Zoo', 
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
                    price: 'Free', 
                    stars:'1', 
                    id:2,
                    reviewNumber: '12', 
                    coordinates: '190,186', 
                    description:'So you want to see the Picassos in the Museum of Modern Art, but don’t want to commit to the $25 admission fee? Lucky for you, the museum offers free admission every Friday from 4 p.m. to 8 pm. You can also visit the sculpture garden for free every morning from 9:30 to 10 am.',
                }
            ]
        }
    }

    // componentDidMount() {

    // }

    render() {
        console.log('prices', this.state.prices)
        return (
                
                <section className="container">
                    <div className="what">
                        <h1>New York, NYC </h1>
                        <h1>Search By Name</h1>
                    </div>

                    <div className="row">
                        <div className="col-2-of-3 section-1">
                            {
                                this.state.items.map((item, key) => {
                                    return (
                                        <div className="container" key={key}> 

                                            <div className="col-1-of-2">
                                                <img src={image2} alt="image" className="img-prices"/>
                                            </div>

                                            <div className="col-1-of-2 ">
                                                {item.price}<br/>
                                                {item.placeName}<br/>
                                                {item.stars}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="col-1-of-3 second">
                                <div> side menu</div>
                        </div>

                    </div>
                </section>

        )
    }
}

export default ItemsListPrice;
