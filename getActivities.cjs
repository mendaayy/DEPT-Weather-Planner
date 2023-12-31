const express = require('express');
const fetch = require('isomorphic-fetch');
const cors = require('cors');

const app = express();
const port = 1000;

// Enable CORS for all routes
app.use(cors());

// Endpoint
app.get('/', async (req, res) => { 
  try {
    const apiResponse = await fetch('https://dtnl-frontend-internship-case.vercel.app/api/get-activities');
    const weatherData = await apiResponse.json();
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activities data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Activities Server running on port ${port}`);
});
