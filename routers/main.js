
const express = require('express');
const router = express.Router();

const {home, about} = require('../controller/mainControllers');

router.get('/',home);
router.get('/about',about);

module.exports = routers;