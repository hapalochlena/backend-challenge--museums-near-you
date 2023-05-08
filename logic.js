const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.API_KEY;

// * fetching museums around a location

// Geocoding API
// Reverse geocoding turns geographic coordinates into place names, turning -77.050, 38.889 into 2 Lincoln Memorial Circle NW.
// ! endpoint: mapbox.places
// ! poi / category ?
// Points of interest. These include restaurants, stores, concert venues, parks, museums, etc.


const getLocation = (lat, lng) => {
	const numberOfMuseums = 1;
	return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?limit=${numberOfMuseums}&access_token=${apiKey}`)
		.then(response => response.data)
		.catch(error => {
			console.error(error);
		});
};



// convert to json?

// group by postcode



// * RESULT:
// {
//   "10999": ["Werkbundarchiv – museum of things"],
//   "12043": ["Museum im Böhmischen Dorf"],
//   "10179": [
//   "Märkisches Museum",
//   "Museum Kindheit und Jugend",
//   "Historischer Hafen Berlin"
//   ],
//   "12435": ["Archenhold Observatory"]
// }



module.exports = { getLocation };
