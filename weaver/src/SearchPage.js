import React, { useState } from 'react';
import './App.css';

function Search() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Perform the weather data fetching based on the user's query
    // You can use the 'query' state variable to get the user's input
    // and make API requests to fetch weather data for the entered location.
    // Implement the logic to fetch weather data and update the state with the results.
    console.log('Searching for:', query);
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
      
      <button className="button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
