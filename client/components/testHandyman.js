import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitApplication } from '../store/reducer';
import { cleaningQ } from './questions';

class TestCleaning extends Component {
  state = {
    experience: '',
    skills: '',
    training: '',
    supplies: '',
  };

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
      Object.keys(data).forEach(x => (data[x] = parseInt(data[x])));
      await this.props.submitTest(data);
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
          <form id="cleaning" onSubmit={this.handleSubmit}>
            <div>
              {cleaningQ.map((x, i) => (
                <div key={i}>
                  <label>
                    <h3>{x.question}</h3>
                  </label>
                  {x.answers.map((y, i) => (
                    <div className="radioAnswer" key={i}>
                      <input type="radio" name={x.id} onChange={this.handleChange} value={y.value} />
                      {y.text}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <button className="testButton" type="submit" disabled={!disabled}>
                Submit Your Answers
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  submitTest: test => dispatch(submitApplication(test)),
});

export default connect(
  null,
  mapDispatch
)(TestCleaning);
