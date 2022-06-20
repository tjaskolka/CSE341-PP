const { exit } = require('process');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('user').find();
  console.log(result);
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('UPS_store').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createItem = async (req, res) => {
  const user = {
    emp_id: req.body.emp_id,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  };
  const response = await mongodb.getDb().db().collection('user').insertOne(user);
  if (response.acknowledged) {
    console.log(response.acknowledged);
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'An error occurred while creating the item.');
  }
};

const updateItem = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const user = {
    emp_id: req.body.emp_id,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  };
  const response = await mongodb.getDb().db().collection('user').replaceOne({ _id: userId }, user);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'An error occurred while updating the user information.');
  }
};

const deleteItem = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('user').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'An error occurred while deleting the user.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createItem,
  updateItem,
  deleteItem
};
