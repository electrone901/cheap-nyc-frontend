/******************************************************************************
Title           : Slider.js
Description     : React component that contains all components for the carousel
******************************************************************************/

import React, { Component } from 'react';
import classnames from 'classnames';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
    }

    componentDidMount() {
        // if(authenticated) PushSubscription(/portfolio)
        fetch('https://cheapnycserver.herokuapp.com/foods', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
        return res.json();
    })
    .then(resData => {
        console.log(resData.foods);
      })
    }

    componentWillReceiveProps(nextProps) {
        // if(errors) this.setState({errors: nextProps.errors});
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.value)
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newUSer = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        fetch('https://cheapnycserver.herokuapp.com/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password2: this.state.password2
            })
        })
      .then(res => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => console.log(err));
        console.log('newUSer',newUSer)
        // send it post
        // this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const {errors}  = this.state;

        return (
            <div className="register">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 m-auto">
                      <h1 className="display-4 text-center">Sign Up</h1>
                      <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <input type="text"
                            className={classnames('form-control form-control-lg', {
                              'is-invalid': errors.name
                            })}
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange} />
                            {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                        </div>
                        <div className="form-group">
                          <input type="email"
                            className={classnames('form-control form-control-lg', {
                              'is-invalid': errors.email
                            })}
                            placeholder="Email Address"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange} />
                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                        </div>
                        <div className="form-group">
                          <input type="password"
                            className={classnames('form-control form-control-lg', {
                              'is-invalid': errors.password
                            })}
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange} />
                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                        </div>
                        <div className="form-group">
                          <input type="password"
                            className={classnames('form-control form-control-lg', {
                              'is-invalid': errors.password2
                            })}
                            placeholder="Confirm Password"
                            name="password2"
                            value={this.state.password2}
                            onChange={this.onChange} />
                            {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                      </form>
                    </div>
                  </div>
                </div>
            </div>
        )
    }


}

export default Signup;