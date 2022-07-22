const express = require('express');
const { body } = require('express-validator/check');

const User = require('../models/utilisateur');
const authController = require('../controllers/auth');

const router = express.Router();

router.put(
  '/signup',
  [
    body('login')
      .isEmail()
      .withMessage('Please enter a valid login.')
      .custom((value, { req }) => {
        return User.findOne({ login: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('Login already exists!');
          }
        });
      })
      .normalizeEmail(),
    body('password')
      .trim()
      .isLength({ min: 5 }),
    body('nom')
      .trim()
      .not()
      .isEmpty()
  ],
  authController.signup
);

router.post('/login', authController.login);

module.exports = router;
