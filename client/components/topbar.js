import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/reducer';

const Topbar = props => (
  <div id="topbar">
    <div className="topbarSpace" />
    <div className="topbarItem">
      <Link to="/">
        <img src="/handy_logo.png" />
      </Link>
    </div>
    <div className="topbarItem">
      <a href="https://prohelp.handy.com/hc/en-us/categories/202588738-New-Prospective-Pros">Need Help?</a>
    </div>
    {props.admin && (
      <div className="topbarItem">
        <button className="logout" onClick={props.logout}>
          Logout
        </button>
      </div>
    )}
  </div>
);

const mapState = state => ({
  admin: state.admin,
});

const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapState,
  mapDispatch
)(Topbar);
