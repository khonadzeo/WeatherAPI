
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: `
            This API allows you to fetch and manage weather data from the OpenWeatherMap API.
      
                ## Features:
                - Fetch current weather data for a specific city and store it in a local database.
                - Perform CRUD operations on the stored weather data.
                - Endpoints are documented and can be tested using Swagger UI.

                ## Endpoints:
                - \`GET /weather\`: Retrieve all weather records.
                - \`POST /weather\`: Create a new weather record.
                - \`PUT /weather/:id\`: Update an existing weather record.
                - \`DELETE /weather/:id\`: Delete a weather record.
                - \`GET /weather/fetch/:city\`: Fetch and store weather data for a specific city.
           `,
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};
