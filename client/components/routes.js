import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
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
        <Route exact path="/" component={Signup} />
        <Route exact path="/submit" component={Submit} />
        {/* <Route exact path="/handyman" component={TestHandyman} /> */}
        <Route exact path="/cleaner" component={TestCleaning} />
      </Switch>
    );
  }
}

const mapDispatch = dispatch => ({
  getProfessionals: () => dispatch(getProfessionals()),
});

export default withRouter(
  connect(
    null,
    mapDispatch
  )(Routes)
);
