/******************************************************************************
Title           : Prices.js
Description     : A file that contains prices clasification
******************************************************************************/
import React, { Component } from 'react';
import '../../sass/main.scss';
import image from '../../images/4.jpg';
import { Link } from 'react-router-dom';

class Prices extends Component {
    
    constructor() {
        super();
        this.state = {
            // THIS IS HOW CREATE REACT APP WORKS WITH IMAGES: PUT IMAGES IN PUBLIC FOLDER AND PATH= 'images/pictureName'
            images: [
                'images/1.jpg',
                'images/2.png',
                'images/3.jpg'
            ],
            data: [
                {'img':'images/free.png',  'price':'free'},
                {'img':'images/under_1.jpg',  'price':'under $ 1'},
                {'img':'images/under_5.jpg',  'price':'under $ 5'},
                {'img':'images/under_10.jpg',  'price':'under $ 10'},
                {'img':'images/under_15.jpg',  'price':'under $ 15'},
                {'img':'images/under_20.jpg',  'price':'under $ 20'},
                {'img':'images/under_30.jpg',  'price':'under $ 30'},
                {'img':'images/over_50.jpg',  'price':'over $ 50'},
                {'img':'images/bestDeals.jpg',  'price':'Best Deals'},
                {'img':'images/overrated.jpg',  'price':'Overated'},
                {'img':'images/priceles.jpg',  'price':'Priceless'}
            ],
            prices: [
                'free',
                'under $ 1',
                'under $ 5',
                'under $ 10',
                'under $ 15',
                'under $ 20',
                'over $ 20',
                'Best Deals',
                'Overated',
                'Priceless'
            ]
        }
    }

    render() {
        console.log('images', this.state.images)
        return (
                <section className="price-container">
                    <h1 className="title">Explore by category</h1>
                    <div className="parent">
                        {
                            this.state.data.map((item, key) => {
                                return (
                                    <div className="parent__items" key={key}>
                                        <Link to="/itemsListPrice">
                                            <img src={item.img} alt="image" className="parent__items__img"/><br/>
                                            {item.price}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>                
                </section>
        )
    }
}

export default Prices;




