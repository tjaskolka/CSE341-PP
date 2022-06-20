const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const inventoryController = require('../controllers/inventory');
const { validateItem } = require('../validator');

router.get('/', inventoryController.getAll);

router.get('/:id', inventoryController.getSingle);

router.post('/', inventoryController.createItem);

router.put('/:id', inventoryController.updateItem);

router.delete('/:id', inventoryController.deleteItem);

module.exports = router;
