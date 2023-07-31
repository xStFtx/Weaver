import React, { useState } from 'react';

const WeatherToggles = () => {
  const [activeToggles, setActiveToggles] = useState({
    splat: true,
    backRow: true,
    single: true,
  });

  const handleToggleClick = (toggleName) => {
    setActiveToggles((prevState) => ({
      ...prevState,
      [toggleName]: !prevState[toggleName],
    }));
    // Implement any additional logic based on the toggles here
  };

  return (
    <div className="weather-toggles">
      <div
        className={`splat-toggle toggle ${activeToggles.splat ? 'active' : ''}`}
        onClick={() => handleToggleClick('splat')}
      >
        SPLAT
      </div>
      <div
        className={`back-row-toggle toggle ${
          activeToggles.backRow ? 'active' : ''
        }`}
        onClick={() => handleToggleClick('backRow')}
      >
        BACK ROW
      </div>
      <div
        className={`single-toggle toggle ${
          activeToggles.single ? 'active' : ''
        }`}
        onClick={() => handleToggleClick('single')}
      >
        SINGLE
      </div>
    </div>
  );
};

export default WeatherToggles;
