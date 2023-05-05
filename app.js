const express = require('express');
const app = express();

// * provide an endpoint which takes a GPS latitude and longitude
// * and spits out the names of museums around that location
// * grouped by their postcode as JSON

// to parse incoming json data:
app.use(express.json());

// importing routes
const endpoint = require('./router');
app.use('/museums', endpoint);

app.listen(3000, () => {
	console.log('Listening on port 3000...');
});
