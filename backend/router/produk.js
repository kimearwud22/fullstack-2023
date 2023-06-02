const express = require('express');
const router = express.Router();
const produk = require('../controller/produk');
 
router.get('/produk', produk.getproduk);
router.get('/produk/:id', produk.getprodukbyid);
router.post('/produk', produk.postproduk);

module.exports = router;