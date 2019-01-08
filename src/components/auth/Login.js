/******************************************************************************
Title           : Login.js
Description     : React component for login form
******************************************************************************/

import React, { Component } from 'react';
//come back to add redux

class Login extends Component {
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
        
        const userData  = {
            email: this.state.email,
            password: this.state.password
        };

        console.log('onSubmit', userData, this.state)
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="login">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="titles">Log In</h1>

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

export default Login;