const express = require('express');
const router = express.Router();

const { controller } = require('./controller');

router.post('/', controller); // receive the lat + long
router.get('/results', controller); // display the museums

// router.get('/api/query', );

module.exports = router;
