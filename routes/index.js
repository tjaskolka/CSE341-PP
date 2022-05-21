const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/inventory', require('./inventory'));
router.use('/', require('./inventory'));

module.exports = router;
