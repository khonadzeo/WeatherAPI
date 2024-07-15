
const { pool } = require('../db');
const axios = require('axios');

const getWeather = async () => {
    const result = await pool.query('SELECT * FROM weather');
    return result.rows;
};

const createWeather = async (city, temperature, description) => {
    const result = await pool.query(
        'INSERT INTO weather (city, temperature, description) VALUES ($1, $2, $3) RETURNING *',
        [city, temperature, description]
    );
    return result.rows[0];
};

const updateWeather = async (id, city, temperature, description) => {
    const result = await pool.query(
        'UPDATE weather SET city = $1, temperature = $2, description = $3 WHERE id = $4 RETURNING *',
        [city, temperature, description, id]
    );
    return result.rows[0];
};

const deleteWeather = async (id) => {
    await pool.query('DELETE FROM weather WHERE id = $1', [id]);
};

const fetchAndStoreWeather = async (city) => {
    try {
        const apiKey ='c8982929e4c65b4316130b4ef3b257d2'; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const { temp } = response.data.main;
        const description = response.data.weather[0].description;

        const weatherRecord = await createWeather(city, temp, description);
        return weatherRecord;
    } catch (err) {
        console.error('Error fetching weather data:', err);
        throw err;
    }
};

module.exports = {
    getWeather,
    createWeather,
    updateWeather,
    deleteWeather,
    fetchAndStoreWeather,
};
