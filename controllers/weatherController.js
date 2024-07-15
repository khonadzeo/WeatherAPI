
const weatherModel = require('../models/weatherModel');

const getWeather = async (req, res) => {
    try {
        const weatherData = await weatherModel.getWeather();
        res.status(200).json(weatherData);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
};

const createWeather = async (req, res) => {
    const { city, temperature, description } = req.body;
    try {
        const newWeather = await weatherModel.createWeather(city, temperature, description);
        res.status(201).json(newWeather);
    } catch (err) {
        res.status(500).json({ error: 'Error creating weather record' });
    }
};

const updateWeather = async (req, res) => {
    const { id } = req.params;
    const { city, temperature, description } = req.body;
    try {
        const updatedWeather = await weatherModel.updateWeather(id, city, temperature, description);
        res.status(200).json(updatedWeather);
    } catch (err) {
        res.status(500).json({ error: 'Error updating weather record' });
    }
};

const deleteWeather = async (req, res) => {
    const { id } = req.params;
    try {
        await weatherModel.deleteWeather(id);
        res.status(200).json({ message: 'Weather record deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting weather record' });
    }
};

const fetchAndStoreWeather = async (req, res) => {
    const { city } = req.params;
    try {
        const weatherRecord = await weatherModel.fetchAndStoreWeather(city);
        res.status(201).json(weatherRecord);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching and storing weather data' });
    }
};

module.exports = {
    getWeather,
    createWeather,
    updateWeather,
    deleteWeather,
    fetchAndStoreWeather,
};
