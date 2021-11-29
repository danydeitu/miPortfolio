
const express = require('express');
const router = express.Router();

const home = require('../controllers/mainControllers');
const about = require('../controllers/mainControllers');

router.get('/', home);
router.get('/about', about);

module.exports = router;