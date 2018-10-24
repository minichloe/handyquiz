import React from 'react';
import { NavLink } from 'react-router-dom';

const Topbar = () => (
  <div id="topbar">
    <NavLink to="/">
      <h1>Main</h1>
    </NavLink>
  </div>
);

export default Topbar;
