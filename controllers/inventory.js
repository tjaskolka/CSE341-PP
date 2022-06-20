const { exit } = require('process');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('UPS_store').find();
  console.log(result);
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const itemId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('UPS_store').find({ _id: itemId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createItem = async (req, res) => {
  const item = {
    inv_id: req.body.inv_id,
    name: req.body.name,
    description: req.body.description,
    qty: req.body.qty,
    size: req.body.size,
    color: req.body.color,
    price: req.body.price
  };
  const response = await mongodb.getDb().db().collection('UPS_store').insertOne(item);
  console.log(response);
  if (response.acknowledged) {
    console.log(response.acknowledged);
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error occurred while creating the item.');
  }
};

const updateItem = async (req, res) => {
  const itemId = new ObjectId(req.params.id);
  const item = {
    inv_id: req.body.inv_id,
    name: req.body.name,
    description: req.body.description,
    qty: req.body.qty,
    size: req.body.size,
    color: req.body.size,
    price: req.body.price
  };
  console.log(item);
  const response = await mongodb
    .getDb()
    .db()
    .collection('UPS_store')
    .replaceOne({ _id: itemId }, item);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while updating the inventory.');
  }
};

const deleteItem = async (req, res) => {
  const itemId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db()
    .collection('UPS_store')
    .deleteOne({ _id: itemId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while deleting the item.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createItem,
  updateItem,
  deleteItem
};
