// conttroler untuk model
const express = require('express');
const router = express.Router();
const testimoni = require('../controller/testimoni');

//get data pelanggan
router.get('/testimoni', testimoni.gettestimoni);
router.get('/testimoni/:id', testimoni.gettestimonibyid);
router.get('/testimonimulti', testimoni.gettestimonimultiple)


module.exports = router;