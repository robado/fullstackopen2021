import { useState, useEffect } from "react";
import axios from 'axios'
import CountrySearchForm from "./components/CountrySearchForm";
import CountryList from "./components/CountryList";

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

  return (
    <div>
      <CountrySearchForm searchCountry={searchCountry} setSearchCountry={setSearchCountry} handleCountrySearch={handleCountrySearch} />
      <CountryList filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries} />
    </div>
  );
}

export default App;
