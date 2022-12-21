import Country from "./Country";

const CountryList = ({ filteredCountries, onShowCountryDetails }) => {
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
                    <div key={country.name.common}>
                        <p>
                            {country.name.common}
                            <button onClick={() => onShowCountryDetails(country)}>Show</button>
                        </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default CountryList