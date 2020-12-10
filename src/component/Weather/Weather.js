import React from 'react'
import './weather.css'

const Weather = ({ city, temp }) => {
    return (
        <div className='weather-container'>
            <h1>{city}</h1>
            <h2>{temp}</h2>
        </div>
    );
};

export default Weather;