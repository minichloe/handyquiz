import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../store/reducer';

// Admin login
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

  handleSubmit = async e => {
    try {
      e.preventDefault();
      await this.props.login(this.state);
      this.props.history.replace('/');
    } catch (err) {
      this.props.history.replace('/error');
    }
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
            <input className="signup" type="password" value={state.password} name="password" placeholder="Password" onChange={this.handleChange} />
          </div>
          <div className="login">
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

const mapDispatch = dispatch => ({
  login: data => dispatch(login(data)),
});

export default connect(
  null,
  mapDispatch
)(Login);
