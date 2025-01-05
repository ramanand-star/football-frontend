import React, { useState } from 'react';
import { getCountries } from '../services/api';
import LeagueList from './LeagueList';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  const fetchCountries = () => {
    getCountries()
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  };

  const handleCountryClick = (countryId) => {
    setSelectedCountryId(countryId);
  };

  return (
    <div>
      <h1 style={{ color: 'orange' }}>Countries</h1>
      <button onClick={fetchCountries}>Fetch Countries</button>
      <ul>
        {countries.map(country => (
          <li key={country.country_id} onClick={() => handleCountryClick(country.country_id)}>
            <img src={country.country_logo} alt={`${country.country_name} logo`} width="50" />
            {country.country_name}
          </li>
        ))}
      </ul>
      {selectedCountryId && <LeagueList countryId={selectedCountryId} />}
    </div>
  );
};

export default CountryList;