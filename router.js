const express = require('express');
const router = express.Router();

const { postCoordinates, showMuseums } = require('./controller');

router.post('/', postCoordinates); // receive the lat + long
router.get('/results', showMuseums); // display the museums

// router.get('/api/query', );

module.exports = router;
