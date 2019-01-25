/******************************************************************************
Title           : CreatePost.js
Description     : React component for Create a Post
******************************************************************************/

import React, { Component } from 'react';
//come back to add redux
const token = localStorage.getItem('token');

class CreatePost extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: '',
            location: '',
            description: '',
            errors: {}
        }
    }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {}

    onChange = (e) => {
        e.preventDefault();
        console.log('onChange', e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();

        fetch('https://cheapnycserver.herokuapp.com/foods', {
              method: 'POST',
              body: JSON.stringify({
                name: this.state.name,
                price: this.state.price,
                location: this.state.location,
                description: this.state.description
              }),
              headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then(resData => console.log(resData))
        .catch(err => console.log(err));

        console.log('onSubmit', this.state)
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="login center">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="titles">Add Item</h1>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange} />
                                {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                            </div>

                            <div className="form-group">
                            <input
                                type="text"
                                placeholder="Price"
                                name="price"
                                value={this.state.price}
                                onChange={this.onChange} />
                                {errors.price && (<div className="invalid-feedback">{errors.price}</div>)}
                            </div>
                            
                            <div className="form-group">
                            <input
                                type="text"
                                placeholder="Location"
                                name="location"
                                value={this.state.location}
                                onChange={this.onChange} />
                                {errors.location && (<div className="invalid-feedback">{errors.location}</div>)}
                            </div>

                            <div className="form-group">
                            <input
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange} />
                                {errors.description && (<div className="invalid-feedback">{errors.description}</div>)}
                            </div>

                            <input type="submit" className="btn btn-info btn-block mt-4" />
                      </form>

                    </div>
                </div>
            </div>
        )
    }

}

export default CreatePost;