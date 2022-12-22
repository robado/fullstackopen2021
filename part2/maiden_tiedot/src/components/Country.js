import React from 'react';
import Weather from './Weather';

function Country({ filteredCountries }) {
    return (
        <div>
            <h2>{filteredCountries[0].name.common}</h2>
            <p></p>
            <p>
                Capital {filteredCountries[0].capital[0]} <br />
                Area {filteredCountries[0].area}
            </p>
            <b>Languages:</b>
            <ul>
                {Object.entries(filteredCountries[0].languages).map(([code, name]) => (
                    <li key={code}>{name} ({code})</li>
                ))}
            </ul>
            <br />
            <br />
            <img src={Object.values(filteredCountries[0].flags)[0]}></img>
            <Weather country={filteredCountries[0]}/>
        </div>
    );
}

export default Country;