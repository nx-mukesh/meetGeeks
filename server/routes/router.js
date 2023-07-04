const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');
const csvController = require('../controller/csvController');

router.get('/csv-data', csvController.getCSVData)

router.post('/login', authController.login);
router.post('/register', authController.register);

router.post('/export-csv', csvController.exportCSV)
router.post('/import-csv', csvController.importCSV)

router.put('/update-csv', csvController.updateCSV)

module.exports=router;