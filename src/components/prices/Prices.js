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
        console.log('prices', this.state.prices)
        return (
                
                <section className="container">

                    <div className="row">
                        {
                            this.state.prices.map((price, key) => {
                                return (
                                    <Link to="/itemsListPrice">
                                        <div className="col-1-of-3" key={key}>
                                            <img src={image} alt="image" className="img-prices"/><br/>
                                            {price}
                                            <br/><br/><br/>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                
                </section>

        )
    }
}

export default Prices;
