import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <div>
    <h1>
      Sorry, it seems that something went wrong. Please <Link to="/">go back</Link> and try again!
    </h1>
  </div>
);

export default Error;
