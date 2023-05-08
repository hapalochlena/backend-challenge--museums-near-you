const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.API_KEY;

function createObject(postcodes, museumNames) {
	const result = {};
	postcodes.forEach((postcode, index) => {
		if (result[postcode]) {
			result[postcode].push(museumNames[index]); // ! works because museum name has same index as corresponding postcode, because of how I fetched them from the whole response object
		} else {
			result[postcode] = [museumNames[index]]; // ! !!!!! DIRECTLY CREATE ARRAY AS VALUE that museum names can be stored into => that's why [names[index]] instead of names[index]
		}
	});
	return result;
}

const findMuseumsNearby = (lat, lng) => {
	const numberOfMuseums = 10;
	return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/museum.json?proximity=${lng},${lat}&limit=${numberOfMuseums}&access_token=${apiKey}`)
		.then(response => {
			let postcodes = [];
			let museumNames = [];
			response.data.features.forEach(feature => { // * museum
				postcodes.push(feature.context[0].text); // * postcode
				museumNames.push(feature.text); // * museum name
			});
			console.log(createObject(postcodes, museumNames));
		})
		.catch(error => {
			console.error(error);
		});
};


module.exports = { findMuseumsNearby };
