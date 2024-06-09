import React from 'react';
import WeatherCard from '../components/WeatherCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Weather App</h1>
        <p>Get the latest weather updates for your location</p>
      </header>
      <main>
        <div className="weather-cards-container">
          {/* Exemple de cartes météo, vous pouvez en ajouter plus */}
          <WeatherCard city="Paris" />
          <WeatherCard city="New York" />
          <WeatherCard city="Tokyo" />
        </div>
      </main>
      <footer className="home-footer">
        <p>Weather App &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Home;
