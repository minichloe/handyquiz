import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

class Admin extends Component {
  state = {
    filter: 'all',
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  componentDidMount() {
    console.log(this.props.professionals);
  }
  render() {
    const filter = this.state.filter;
    return (
      <div className="outerBox">
        <h1>Welcome!</h1>
        {/* <h2>Click on the respective service to see the applications.</h2> */}
        <div className="innerBox">
          <div className="buttons">
            <button className={`filter ${filter === 'all' ? 'active' : ''}`} onClick={() => this.changeFilter('all')}>
              All
            </button>
            <button className={`filter ${filter === 'cleaner' ? 'active' : ''}`} onClick={() => this.changeFilter('cleaner')}>
              Cleaners
            </button>
            <button className={`filter ${filter === 'handyman' ? 'active' : ''}`} onClick={() => this.changeFilter('handyman')}>
              Handymen
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  professionals: state.professionals,
});

export default connect(mapState)(Admin);
