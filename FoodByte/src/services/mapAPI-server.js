import express from 'express';
import axios from 'axios';
import cors from 'cors';


const app = express();
const PORT = 4000;
const API_KEY='AIzaSyAuaB6MbT4oDOC4Qc6SqnFdQ_lYUK4E_zw';

app.use(cors());

app.get('/api/grocery-stores', async (req, res) => {
  const { zipCode, radius } = req.query;
  const GEOCODING_BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
  const PLACES_BASE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

  try {
    // Get latitude and longitude for the zip code
    const geoResponse = await axios.get(`${GEOCODING_BASE_URL}?address=${zipCode}&key=${API_KEY}`);
    const { lat, lng } = geoResponse.data.results[0].geometry.location;

    // Get grocery stores using the latitude and longitude
    const placesResponse = await axios.get(`${PLACES_BASE_URL}?location=${lat},${lng}&radius=${radius}&type=grocery_or_supermarket&key=${API_KEY}`);
    res.json(placesResponse.data.results);
    console.log(placesResponse.data.results);

  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Google API' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});