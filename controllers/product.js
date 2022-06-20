const { resetDefaultConfig } = require('eslint/lib/rule-tester/rule-tester');
const db = require('../models');
const Product = db.product;

exports.getProduct = (req, res) => {
  const productName = req.params.name;
  Product.find({ name: productName })
    .then((data) => {
      if (!data) res.status(404).send({ message: productName + ' does not exist.' });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not retrieve ' + productName,
        error: err
      });
    });
};
