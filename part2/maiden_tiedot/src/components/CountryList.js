import Country from "./Country";

const CountryList = ({ filteredCountries, setFilteredCountries }) => {
    if (filteredCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>;
    } else if (filteredCountries.length === 1) {
        return (
            <div>
                <Country filteredCountries={filteredCountries} />
            </div>
        );
    } else {
        return (
            <div>
                {filteredCountries.map(country => (
                    <p key={country.name.common}>{country.name.common}</p>
                ))}
            </div>
        );
    }
}

export default CountryList