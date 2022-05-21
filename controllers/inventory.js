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
  if (response.acknowledged) {
    console.log(response.acknowledged);
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error occurred while creating the item.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createItem
};
