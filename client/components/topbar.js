import React from 'react';
import { NavLink } from 'react-router-dom';

const Topbar = () => (
  <div id="topbar">
    <NavLink to="/">
      <img src="/handy_logo.png" />
    </NavLink>
  </div>
);

export default Topbar;
