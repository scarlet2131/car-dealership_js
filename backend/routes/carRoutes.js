const express = require('express');
const { getCars, getCarById, createCar, updateCar, deleteCar } = require('../controllers/carController');
const router = express.Router();

router.get('/cars', getCars);
router.get('/cars/:id', getCarById);
router.post('/cars', createCar);
router.put('/cars/:id', updateCar);
router.delete('/cars/:id', deleteCar);

module.exports = router;
