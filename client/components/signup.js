import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createdApplicant } from '../store/reducer';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    zipcode: '',
    service: '',
    submit: false,
    emailInUse: false,
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
    if (this.props.professionals.has(this.state.email.toLowerCase())) {
      this.setState({ ...this.state, emailInUse: true });
    } else {
      const applicant = this.state;
      delete applicant.submit;
      delete applicant.emailInUse;
      this.props.pendingApplicant(applicant);
      this.setState({ ...this.state, submit: true });
    }
  };

  render() {
    const state = this.state;
    const handyman = 'handyman';
    const cleaner = 'cleaner';
    const disabled = state.firstName && state.lastName && state.email && state.zipcode && state.service;

    if (this.state.emailInUse) return <Redirect to="/submit" />;
    if (this.state.submit) return <Redirect to={`/cleaner`} />;

    return (
      <div className="outerBox">
        <h1>Start earning money this week!</h1>
        <h2>Gain access to hundreds of jobs in your city and build your own schedule.</h2>
        <form id={state.email} onSubmit={this.handleSubmit}>
          <input type="text" value={state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} />
          <input type="text" value={state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
          <input type="email" value={state.email} name="email" placeholder="Email" onChange={this.handleChange} />
          <input type="number" value={state.zipcode} name="zipcode" placeholder="ZIP Code" min="00501" max="99950" onChange={this.handleChange} />
          <select name="service" onChange={this.handleChange} value={state.service}>
            <option value="" disabled hidden>
              Select Your Service
            </option>
            <option key={cleaner} value={cleaner}>
              Cleaner
            </option>
            <option key={handyman} value={handyman}>
              Handyman
            </option>
          </select>
          <button type="submit" disabled={!disabled}>
            Get Started
          </button>
        </form>
      </div>
    );
  }
}

const mapState = state => ({
  professionals: new Set(state.professionals.map(x => x.email)),
  applicant: state.currApplicant,
});

const mapDispatch = dispatch => ({
  pendingApplicant: applicant => dispatch(createdApplicant(applicant)),
});

export default connect(
  mapState,
  mapDispatch
)(Signup);
