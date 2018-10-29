import React from 'react';
import { Link } from 'react-router-dom';

// Catch all error/404 page
const Error = () => (
  <div className="outerBox">
    <h2>
      Sorry, it seems that something went wrong. Please <Link to="/">go back</Link> and try again!
    </h2>
  </div>
);

export default Error;
