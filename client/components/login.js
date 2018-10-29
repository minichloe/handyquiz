import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createdApplicant } from '../store/reducer';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const value = typeof e.target.value === 'string' ? e.target.value.trim() : e.target.value.toString().trim();
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const state = this.state;
    const disabled = state.email && state.password;

    return (
      <div className="outerBox">
        <h1>Are you an admin?</h1>
        <h2>Please login to access application records.</h2>
        <form id={state.email} onSubmit={this.handleSubmit}>
          <div>
            <input className="signup" type="email" value={state.email} name="email" placeholder="Email" onChange={this.handleChange} />
            <input className="signup" type="password" value={state.lastName} name="lastName" placeholder="Password" onChange={this.handleChange} />
            <input
              className="signup"
              type="number"
              value={state.zipcode}
              name="zipcode"
              placeholder="ZIP Code"
              min="00501"
              max="99950"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit" disabled={!disabled}>
              Login
            </button>
          </div>
        </form>
        <br />
        Want to become a professional for Handy? Get started <Link to="/">here!</Link>
      </div>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({
  pendingApplicant: applicant => dispatch(createdApplicant(applicant)),
});

export default connect(
  null,
  mapDispatch
)(Login);
