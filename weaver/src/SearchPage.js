import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { API_KEY } from './config'; 

function Search({ onWeatherData }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=no`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log('Weather data:', response.data);
        onWeatherData(response.data); // Call the onWeatherData handler to update the state in App.js
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  const handleClear = () => {
    setQuery('');
    onWeatherData(null); // Clear the weather data in App.js by passing null
  };

  return (
    <div className="search-container">
      <br />
      <input
        className="Search-input"
        type="text"
        placeholder="Search for a place..."
        value={query}
        onChange={handleInputChange}
      />
      <br />
      <br />

      <button className="button" onClick={handleSearch}>
        Search
      </button>
      <button className="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

export default Search;
