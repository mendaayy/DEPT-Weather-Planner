const express = require('express');
const fetch = require('isomorphic-fetch');
const cors = require('cors');

const app = express();
const port = 8891;

// Enable CORS for all routes
app.use(cors());

// endpoint
app.get('/', async (req, res) => { 
  try {
    const apiResponse = await fetch('https://dtnl-frontend-internship-case.vercel.app/api/get-weather');
    const weatherData = await apiResponse.json();
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Weather Server running on port ${port}`);
});
