const express = require('express');
const router = express.Router();
const admin = require('../controller/admin');

router.get('/admin', admin.getadmin);
router.get('/admin/:id', admin.getadminbyid);
router.post('/admin', admin.postadmin);
router.put('/admin/:id', admin.putadmin);
router.delete('/admin/:id', admin.deleteadmin);

module.exports = router; 