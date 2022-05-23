const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/inventory', require('./inventory'));
router.use('/', require('./inventory'));
router.use('/user', require('./user'));

module.exports = router;
