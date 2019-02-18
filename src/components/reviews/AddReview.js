/******************************************************************************
Title           : AddReview.js
Description     : React component for AddReview form
******************************************************************************/

import React, { Component } from 'react';
//come back to add redux
// const token = localStorage.getItem('token');

class AddReview extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
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
        
        // const userData  = {
        //     email: this.state.email,
        //     password: this.state.password
        // };

        fetch('https://cheapnycserver.herokuapp.com/users/login', {
            method: 'POST',
            body: JSON.stringify({
            email: 'mikethetech@mail.com',
            password: '123456'
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resData => {
        console.log(resData);
        localStorage.setItem('token', resData.token);
        })
        .catch(err => console.log(err));


        console.log('onSubmit', this.state)
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="login">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="titles">Add A Review</h1>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                            <input
                                type="text"
                                placeholder="Email Address"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange} />
                                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                            </div>
                            <div className="form-group">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange} />
                                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" />
                      </form>

                    </div>
                </div>
            </div>
        )
    }

}

export default AddReview;