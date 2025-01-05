import React, { useState } from 'react';
import { getLeaguesByCountry } from '../services/api';

const LeagueList = ({ countryId }) => {
  const [leagues, setLeagues] = useState([]);

  const fetchLeagues = () => {
    console.log('Fetch Leagues button clicked');
    if (countryId) {
      console.log('Fetching leagues for countryId:', countryId);
      getLeaguesByCountry(countryId)
        .then(response => {
          console.log('Leagues fetched successfully:', response.data);
          setLeagues(response.data);
        })
        .catch(error => {
          console.error('Error fetching leagues:', error);
        });
    } else {
      console.error('countryId is undefined');
    }
  };

  return (
    <div>
      <h1 style={{ color: 'pink' }}>Leagues</h1>
      <button onClick={fetchLeagues}>Fetch Leagues</button>
      <ul>
        {leagues.map(league => (
          <li key={league.league_id}>
            <img src={league.league_logo} alt={`${league.league_name} logo`} width="50" />
            <div>{league.league_name}</div>
            <div>{league.league_season}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeagueList;