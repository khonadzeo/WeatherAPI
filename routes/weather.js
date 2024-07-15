
const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Weather:
 *       type: object
 *       required:
 *         - city
 *         - temperature
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the weather record
 *         city:
 *           type: string
 *           description: The city name
 *         temperature:
 *           type: number
 *           description: The temperature in the city
 *         description:
 *           type: string
 *           description: The weather description
 *       example:
 *         id: 1
 *         city: London
 *         temperature: 15
 *         description: Cloudy
 */

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: The weather managing API
 */

/**
 * @swagger
 * /weather:
 *   get:
 *     summary: Returns the list of all the weather records
 *     tags: [Weather]
 *     responses:
 *       200:
 *         description: The list of the weather records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Weather'
 */
router.get('/weather', weatherController.getWeather);

/**
 * @swagger
 * /weather:
 *   post:
 *     summary: Create a new weather record
 *     tags: [Weather]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Weather'
 *     responses:
 *       201:
 *         description: The weather record was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Weather'
 */
router.post('/weather', weatherController.createWeather);

/**
 * @swagger
 * /weather/{id}:
 *   put:
 *     summary: Update the weather record by the id
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The weather record id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Weather'
 *     responses:
 *       200:
 *         description: The weather record was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Weather'
 */
router.put('/weather/:id', weatherController.updateWeather);

/**
 * @swagger
 * /weather/{id}:
 *   delete:
 *     summary: Remove the weather record by id
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The weather record id
 *     responses:
 *       200:
 *         description: The weather record was deleted
 */
router.delete('/weather/:id', weatherController.deleteWeather);

/**
 * @swagger
 * /weather/fetch/{city}:
 *   get:
 *     summary: Fetch and store weather data for a specific city
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: The city name
 *     responses:
 *       201:
 *         description: The weather record was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Weather'
 */
router.get('/weather/fetch/:city', weatherController.fetchAndStoreWeather);

module.exports = router;
