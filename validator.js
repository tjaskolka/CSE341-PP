const { check, validationResult } = require('express-validator');

exports.validateItem = [
  check('inv_id').trim().isInt().withMessage('Please provide an integer for the inventory ID'),

  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Please provide item name.')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Name must have at least 3 characters.')
    .bail(),

  check('description').trim().isEmpty().withMessage('Please provide a description of item'),

  check('qty')
    .trim()
    .isInt({ min: 1, max: 99 })
    .withMessage('Please use a whole number between 1-99.'),

  check('price').trim(),

  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(200).json({ errors: errors.array() });
    next();
  }
];
