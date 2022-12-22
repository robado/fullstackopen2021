import { useState, useEffect } from "react";
import axios from 'axios'
import CountrySearchForm from "./components/CountrySearchForm";
import CountryList from "./components/CountryList";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [toArray, setToArray] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        setFilteredCountries(response.data)
        setToArray(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const handleCountrySearch = (event) => {
    setSearchCountry(event.target.value);
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase())));
  }

  const onShowCountryDetails = (country) => {
    setSelectedCountry(country); 
    setToArray(filteredCountries.filter(i => i.name.common.toLowerCase().includes(country.name.common.toLowerCase())));
  }

  //console.log('countries....', filteredCountries.map(kau => kau))

  return (
    <div>
      <CountrySearchForm searchCountry={searchCountry} setSearchCountry={setSearchCountry} handleCountrySearch={handleCountrySearch} />
      <CountryList filteredCountries={filteredCountries} onShowCountryDetails={(country => onShowCountryDetails(country))} />
      {selectedCountry && <Country filteredCountries={toArray}/>}
    </div>
  );
}

export default App;
