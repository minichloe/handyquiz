import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitApplication } from '../store/reducer';
import { handymanQ } from './questions';

class TestHandyman extends Component {
  state = {
    experience: '',
    skills: 0,
    training: 0,
    supplies: 0,
    checked: new Set(),
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleChangeCheck = e => {
    const name = e.target.name;
    const title = e.target.title;
    let value = parseInt(this.state[name]);
    if (this.state.checked.has(title)) {
      value -= parseInt(e.target.value);
      this.state.checked.delete(title);
    } else {
      value += parseInt(e.target.value);
      this.state.checked.add(title);
    }
    this.setState({
      ...this.state,
      [e.target.name]: value,
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
    const disabled = state.experience;
    return (
      <div className="outerBox">
        <h1>Handyman Quiz</h1>
        <div className="innerBox">
          <form id="handyman" onSubmit={this.handleSubmit}>
            <div>
              {handymanQ.map((x, i) => (
                <div key={i}>
                  <label>
                    <h3>{i === 0 ? x.question : x.question + ` Check all that apply.`}</h3>
                  </label>
                  {x.answers.map((y, ci) => (
                    <div key={ci}>
                      {i === 0 ? (
                        <input type="radio" name={x.id} onChange={this.handleChange} value={y.value} />
                      ) : (
                        <input
                          type="checkbox"
                          checked={state.checked.has(y.text)}
                          title={y.text}
                          name={x.id}
                          value={y.value}
                          onChange={this.handleChangeCheck}
                        />
                      )}
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
)(TestHandyman);
