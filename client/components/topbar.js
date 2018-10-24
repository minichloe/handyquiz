import React from 'react';
import { NavLink } from 'react-router-dom';

const Topbar = () => (
  <div id="topbar">
    <div className="topbarItem">
      <NavLink to="/">
        <img src="/handy_logo.png" />
      </NavLink>
    </div>
    <div className="topbarItem">
      <a href="https://prohelp.handy.com/hc/en-us/categories/202588738-New-Prospective-Pros">Need Help?</a>
    </div>
  </div>
);

export default Topbar;
