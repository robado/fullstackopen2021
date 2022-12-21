import React from 'react';

function Country({ name, capital, population }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
    </div>
  );
}

export default Country;