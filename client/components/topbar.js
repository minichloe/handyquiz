import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => (
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
  </div>
);

export default Topbar;
