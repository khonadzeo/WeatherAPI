
const express = require('express');
const { createTables } = require('./db');
const weatherRoutes = require('./routes/weather');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Swagger setup
const { swaggerUi, specs } = require('./swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Initialize tables
createTables();

// Routes
app.use( weatherRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`API documentation available at http://localhost:${port}/api-docs`);
});
