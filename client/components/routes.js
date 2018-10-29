import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import Signup from './signup';
import TestCleaning from './testCleaning';
import TestHandyman from './testHandyman';
import Admin from './admin';
import Success from './success';
import Submit from './submit';
import Error from './error';
import Login from './login';
import { getProfessionals, getAdmin } from '../store/reducer';

class Routes extends Component {
  componentDidMount() {
    this.props.getAdmin();
    this.props.getProfessionals();
  }

  // All routes
  render() {
    return (
      // Conditional rendering based on login status
      <Switch>
        {this.props.admin ? <Route exact path="/" component={Admin} /> : <Route exact path="/" component={Signup} />}
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/Success" component={Success} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/handyman" component={TestHandyman} />
        <Route exact path="/cleaner" component={TestCleaning} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={Error} />
      </Switch>
    );
  }
}

const mapState = state => ({
  admin: !!state.admin,
});

// Getting all previous applicants and checking login status
const mapDispatch = dispatch => ({
  getProfessionals: () => dispatch(getProfessionals()),
  getAdmin: () => dispatch(getAdmin()),
});

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
);
