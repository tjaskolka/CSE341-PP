const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const router = express.Router();

const userController = require('../controllers/user');
const { validateItem } = require('../validator');

router.get('/', userController.getAll);

router.get('/:id', userController.getSingle);

router.post('/', userController.createItem);

router.put('/:id', userController.updateItem);

router.delete('/:id', userController.deleteItem);

module.exports = router;
