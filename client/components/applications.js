import React from 'react';

const Applications = ({ professionals, filter }) => {
  const info = filter === 'all' ? professionals : professionals.filter(x => x.service === filter);
  const getScore = obj =>
    Object.keys(obj).reduce((a, b) => {
      if (b !== 'id' && typeof obj[b] === 'number') a += obj[b];
      return a;
    }, 0);
  info.forEach(x => {
    if (x.hasOwnProperty('testCleaning') && x.testCleaning !== null) x.score = getScore(x.testCleaning);
    else x.score = getScore(x.testHandyman);
  });
  return (
    <>
      {info.map(x => (
        <div key={x.id} className="info">
          Name: {x.firstName} {x.lastName}
          <br />
          Email: {x.email} <br />
          Zipcode: {x.zipcode} <br />
          {filter === 'all' && (
            <>
              Service: {x.service} <br />
            </>
          )}
          Score: {x.score}
          /24
        </div>
      ))}
    </>
  );
};

export default Applications;
