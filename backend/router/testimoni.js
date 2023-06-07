// conttroler untuk model
const express = require('express');
const router = express.Router();
const testimoni = require('../controller/testimoni');

//get data pelanggan
router.get('/testimoni', testimoni.gettestimoni);
router.get('/testimoni/:id', testimoni.gettestimonibyid);
router.get('/testimonimulti', testimoni.gettestimonimultiple);
router.post('/testimoni', testimoni.posttestimoni);
router.put('/testimoni/:id', testimoni.puttestimoni);
router.delete('/testimoni/:id', testimoni.deletetestimoni);


module.exports = router;