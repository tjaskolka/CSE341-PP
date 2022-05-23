const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getAll);

router.get('/:id', userController.getSingle);

router.post('/', userController.createItem);

router.put('/:id', userController.updateItem);

router.delete('/:id', userController.deleteItem);

module.exports = router;
