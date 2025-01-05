import axios from 'axios';

const API_BASE_URL = 'http://ec2-13-233-59-97.ap-south-1.compute.amazonaws.com:8080';
//http://ec2-13-233-59-97.ap-south-1.compute.amazonaws.com

export const getCountries = () => {
  return axios.get(`${API_BASE_URL}/countries`);
};

export const getLeaguesByCountry = (countryId) => {
  return axios.get(`${API_BASE_URL}/leagues`, { params: { countryId } });
};

export const getTeamsByLeague = (leagueId) => {
  return axios.get(`${API_BASE_URL}/teams`, { params: { leagueId } });
};

export const getPlayersByName = (playerName) => {
  return axios.get(`${API_BASE_URL}/players`, { params: { playerName } });
};