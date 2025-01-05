import React, { useState, useEffect } from 'react';
import { getTeamsByLeague } from '../services/api';

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [teamsPerPage, setTeamsPerPage] = useState(1);

  useEffect(() => {
    fetchTeams();
  }, [currentPage, teamsPerPage]);

  const fetchTeams = () => {
    const offset = (currentPage - 1) * teamsPerPage;
    getTeamsByLeague(302, teamsPerPage, offset)
      .then(response => {
        setTeams(response.data);
        setError(null);
      })
      .catch(error => {
        setError('Error fetching teams');
        console.error('Error fetching teams:', error);
      });
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1 style={{ color: 'blue' }}>Teams</h1>
      <button onClick={fetchTeams}>Fetch Teams</button>
      {error && <p>{error}</p>}
      <ul>
        {teams.map(team => (
          <li key={team.team_key}>
            <h2>{team.team_name}</h2>
            <img src={team.team_badge} alt={`${team.team_name} badge`} width="50" />
            <p>Country: {team.team_country}</p>
            <p>Founded: {team.team_founded}</p>
            <h3>Players:</h3>
            <ul>
              {team.players.map(player => (
                <li key={player.player_key}>
                  <img src={player.player_image} alt={`${player.player_name}`} width="30" />
                  <p>{player.player_name} - {player.player_type}</p>
                  <p>Age: {player.player_age}</p>
                  <p>Rating: {player.player_rating}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={teams.length < teamsPerPage}>Next</button>
      </div>
    </div>
  );
};

export default TeamList;