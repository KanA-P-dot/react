import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';

const WeatherList = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=YOUR_API_KEY&units=metric`);
      setWeatherData([response.data]);
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-list">
      {weatherData.map((weather, index) => (
        <WeatherCard key={index} weather={weather} />
      ))}
    </div>
  );
};

export default WeatherList;
