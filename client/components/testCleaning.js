import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createApplicant, getTest } from '../store/reducer';
import { cleaningQ } from './questions';

class TestCleaning extends Component {
  state = {
    experience: '',
    cobwebs: '',
    kitchen: '',
    cleaningOrder: '',
    punctuality: '',
    hardwood: '',
  };

  componentDidMount() {}

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();
      const data = this.state;
      const applicant = this.props.applicant;
      Object.keys(data).forEach(x => (data[x] = parseInt(data[x])));
      data.type = applicant.service;
      const submittedTest = await getTest(data);
      applicant.testCleaningId = submittedTest.id;
      const submittedApplicant = await createApplicant(applicant);
      this.props.history.replace('/success');
    } catch (err) {
      this.props.history.replace('/error');
    }
  };

  render() {
    const state = this.state;
    const disabled = state.experience && state.cobwebs && state.kitchen && state.cleaningOrder && state.punctuality && state.hardwood;
    return (
      <div className="outerBox">
        <h1>Cleaning Quiz</h1>
        <div className="innerBox">
          <form id={this.props.applicant.email} onSubmit={this.handleSubmit}>
            {cleaningQ.map((x, i) => (
              <div key={i}>
                <label>
                  <h3>{x.question}</h3>
                </label>
                {x.answers.map((y, i) => (
                  <div key={i}>
                    <input type="radio" name={x.id} onChange={this.handleChange} value={y.value} />
                    {y.text}
                  </div>
                ))}
              </div>
            ))}
            <button type="submit" disabled={!disabled}>
              Submit Your Answers
            </button>
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
