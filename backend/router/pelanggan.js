// conttroler untuk model
const express = require('express');
const router = express.Router();
const pelanggan = require('../controller/page.js');

//get data pelanggan
router.get('/pelanggan', pelanggan.getpelanggan);
//post data pelanggan
router.post('/pelanggan', pelanggan.createpelanggan);
//put data pelanggan
router.put('/pelanggan/:id', pelanggan.updatepelanggan);
//delete data pelanggan
router.delete('/pelanggan/:id', pelanggan.deletepelanggan);

module.exports = router;