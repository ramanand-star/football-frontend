import React from 'react';
import CountryList from './components/CountryList';
import LeagueList from './components/LeagueList';
import TeamList from './components/TeamList';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      <CountryList />
      <LeagueList />
      <TeamList />
    </div>
  );
};

export default App;