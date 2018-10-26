import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup';
import TestCleaning from './testCleaning';
import Submit from './submit';
import { getProfessionals } from '../store/reducer';

class Routes extends Component {
  componentDidMount() {
    this.props.getProfessionals();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={TestCleaning} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/cleaner" component={Signup} />
      </Switch>
    );
  }
}

const mapDispatch = dispatch => ({
  getProfessionals: () => dispatch(getProfessionals()),
});

export default connect(
  null,
  mapDispatch
)(Routes);
