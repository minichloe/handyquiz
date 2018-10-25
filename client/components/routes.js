import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import Signup from './signup';
import { getProfessionals } from '../store/reducer';

class Routes extends Component {
  componentDidMount() {
    this.props.getProfessionals();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Signup} />
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
