const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /professional
router.get('/', professionalController.get);


module.exports = router;