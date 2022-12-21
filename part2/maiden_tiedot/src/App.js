import { useState, useEffect } from "react";
import axios from 'axios'
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
        setFilteredCountries(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const handleCountrySearch = (event) => {
    setSearchCountry(event.target.value);
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase())));
  }

  console.log('countries....', filteredCountries.map(kau => kau))

  if (filteredCountries.length > 10) {
    return (
      <div>
        <form>
          <div>
            Find countries <input
              value={searchCountry}
              onChange={handleCountrySearch}
            />
          </div>
        </form>
        <div>Too many matches, specify another filter</div>
      </div>
    )
  } else if (filteredCountries.length === 1) {
    return (
      <div>
        <form>
          <div>
            Find countries <input
              value={searchCountry}
              onChange={handleCountrySearch}
            />
          </div>
        </form>
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
        {console.log('return statementissa...', Object.values(filteredCountries[0].flags)[0])}
        <img src={Object.values(filteredCountries[0].flags)[0]}></img>
      </div>
    )
  } else {
    return (
      <div>
        <form>
          <div>
            Find countries <input
              value={searchCountry}
              onChange={handleCountrySearch}
            />
          </div>
        </form>
        <div>
          {filteredCountries.map(country => (
            <p key={country.name.common}>{country.name.common}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
