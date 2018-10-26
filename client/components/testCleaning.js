import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { createApplicant, getTest } from '../store/reducer';

class TestCleaning extends Component {
  state = {
    submit: false,
  };

  componentDidMount() {
    console.log('cleaning test');
  }

  handleChange = e => {
    const value = typeof e.target.value === 'string' ? e.target.value.trim() : e.target.value.toString().trim();
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submit: true });
  };

  render() {
    if (this.state.submit) return <Redirect to="/signup" />;

    return (
      <div className="outerBox">
        <h1>Cleaning TEST!</h1>
        <h2>Gain access to hundreds of jobs in your city and build your own schedule.</h2>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Get Started</button>
        </form>
        <NavLink to="/cleaner">Test</NavLink>
      </div>
    );
  }
}

const mapState = state => ({
  applicant: state.currApplicant,
});

const mapDispatch = dispatch => ({
  createApplicant: applicant => dispatch(createApplicant(applicant)),
  getTest: test => dispatch(getTest(test)),
});

export default connect(
  mapState,
  mapDispatch
)(TestCleaning);
