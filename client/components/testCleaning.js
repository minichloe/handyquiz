import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { createApplicant, getTest } from '../store/reducer';
import { cleaningQ } from './questions';

class TestCleaning extends Component {
  state = {
    experience: 0,
    cobwebs: 0,
    kitchen: 0,
    cleaningOrder: 0,
    punctuality: 0,
    hardwood: 0,
  };

  componentDidMount() {}

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.replace('/success');
  };

  render() {
    return (
      <div className="outerBox">
        <h1>Cleaning Quiz</h1>
        <div className="innerBox">
          <form id={this.props.applicant.email} onSubmit={this.handleSubmit}>
            <label>
              <h3>What would you do about cleaning cobwebs and dusting?</h3>
            </label>
            <label key="1">
              <input type="radio" name="cobwebs" onChange={this.handleChange} value="2" />
              <p>Don't clean any cobwebs because that's too detailed, but I do some dusting</p>
            </label>
            <label key="2">
              <input type="radio" name="cobwebs" onChange={this.handleChange} value="0" />
              <p>Don't clean any cobwebs or dust because it takes too long</p>
            </label>
            <label key="3">
              <input type="radio" name="cobwebs" onChange={this.handleChange} value="4" />
              <p>Clean cobwebs I can reach, and dust all surfaces</p>
            </label>

            <label>
              <h3>What is the effect of oven cleaner on kitchen countertops?</h3>
            </label>
            <label key="1">
              <input type="radio" name="kitchen" onChange={this.handleChange} value="1" />
              <p>No effect</p>
            </label>
            <label key="2">
              <input type="radio" name="kitchen" onChange={this.handleChange} value="0" />
              <p>Enhances shine</p>
            </label>
            <label key="3">
              <input type="radio" name="kitchen" onChange={this.handleChange} value="3" />
              <p>Leaves streak marks</p>
            </label>
            <label key="4">
              <input type="radio" name="kitchen" onChange={this.handleChange} value="4" />
              <p>Stains surface</p>
            </label>

            <label>
              <h3>In what order would you clean these items in the kitchen?</h3>
            </label>
            <label key="1">
              <input type="radio" name="cleaningOrder" onChange={this.handleChange} value="1" />
              <p>Clean the floors; wash the dishes; wipe down the countertops</p>
            </label>
            <label key="2">
              <input type="radio" name="cleaningOrder" onChange={this.handleChange} value="4" />
              <p>Wash the dishes; wipe down the countertops; clean the floors</p>
            </label>
            <label key="3">
              <input type="radio" name="cleaningOrder" onChange={this.handleChange} value="2" />
              <p>Wipe down the countertops; wash the dishes; clean the floors</p>
            </label>
            <label key="4">
              <input type="radio" name="cleaningOrder" onChange={this.handleChange} value="3" />
              <p>Wash the dishes; clean the floors; wipe down the countertops</p>
            </label>

            <label>
              <h3>You have a job at 9:00am and realize you won't arrive until 9:20am. You would:</h3>
            </label>
            <label key="1">
              <input type="radio" name="punctuality" onChange={this.handleChange} value="4" />
              <p>Notify the client and Handy as soon as possible and plan to stay overtime</p>
            </label>
            <label key="2">
              <input type="radio" name="punctuality" onChange={this.handleChange} value="1" />
              <p>Notify the client and Handy after 9:00am in case you end up arriving by 9:10am</p>
            </label>
            <label key="3">
              <input type="radio" name="punctuality" onChange={this.handleChange} value="0" />
              <p>Don't notify anyone since you're only going to be 20 minutes late</p>
            </label>

            <label>
              <h3>What would you use to clean hardwood cabinets in the kitchen?</h3>
            </label>
            <label key="1">
              <input type="radio" name="hardwood" onChange={this.handleChange} value="0" />
              <p>Bleach</p>
            </label>
            <label key="2">
              <input type="radio" name="hardwood" onChange={this.handleChange} value="4" />
              <p>All purpose cleaner</p>
            </label>
            <label key="3">
              <input type="radio" name="hardwood" onChange={this.handleChange} value="1" />
              <p>Vinegar and water</p>
            </label>
            <label key="4">
              <input type="radio" name="hardwood" onChange={this.handleChange} value="3" />
              <p>Windex</p>
            </label>
            <button type="submit">Submit Your Answers</button>
          </form>
        </div>
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
