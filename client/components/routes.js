import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import Signup from './signup';

class Routes extends Component {
  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Signup} />
      </Switch>
    );
  }
}

export default Routes;
