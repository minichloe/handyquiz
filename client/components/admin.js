import React, { Component } from 'react';
import { connect } from 'react-redux';
import Applications from './applications';

// Admin component after successful login, which shows applicant info

class Admin extends Component {
  state = {
    filter: 'all',
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  render() {
    // Filter display by service type
    const filter = this.state.filter;
    return (
      <div className="outerBox">
        <h1>Welcome!</h1>
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
          <Applications professionals={this.props.professionals} filter={filter} />
        </div>
      </div>
    );
  }
}

// Arranging info in alphabetical order according to lastname
const mapState = state => ({
  professionals: state.professionals.sort((a, b) => (a.lastName.toLowerCase() >= b.lastName.toLowerCase() ? 1 : -1)),
});

export default connect(mapState)(Admin);
