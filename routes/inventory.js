const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventory');

router.get('/', inventoryController.getAll);

router.get('/:id', inventoryController.getSingle);

router.post('/', inventoryController.createItem);

router.put('/:id', inventoryController.updateItem);

router.delete('/:id', inventoryController.deleteItem);

module.exports = router;
