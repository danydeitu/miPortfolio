
const express = require ('express');
const router = express.Router();

//Enrutador 
const router = express.Router();

//Requerir mainConroller
const mainController = require('../controllers/mainController');

//Ruta Home
router.get('/', mainController.home);


//ruta app.js
module.exports = router;