import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  // Extract relevant data from the weatherData object
  const {
    location,
    current: {
      temp_c,
      condition: { text, icon },
      wind_kph,
      humidity,
      pressure_mb,
      feelslike_c,
      vis_km,
    },
  } = weatherData;

  return (
    <div className="weather-display">
      <h2>{location.name}, {location.country}</h2>
      <div className="weather-details">
        <div className="temperature">
          <img src={icon} alt={text} />
          <p>{temp_c}°C</p>
        </div>
        <div className="weather-condition">
          <p>{text}</p>
        </div>
      </div>
      <div className="extra-details">
        <p>Wind: {wind_kph} km/h</p>
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure_mb} mb</p>
        <p>Feels Like: {feelslike_c}°C</p>
        <p>Visibility: {vis_km} km</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
