const CountrySearchForm = ({ searchCountry, setSearchCountry, handleCountrySearch }) => {
    return (
        <form>
            <div>
                Find countries <input
                    value={searchCountry}
                    onChange={handleCountrySearch}
                />
            </div>
        </form>
    );
}

export default CountrySearchForm