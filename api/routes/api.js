var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var cAuth = require('../controllers/authentication');
var cUser = require('../controllers/user');
var cProduct = require('../controllers/product');
var cTransaction = require('../controllers/transaction');



router.post('/login', cAuth.login);

router.get('/users', cUser.getUsers);
router.post('/users', cUser.newUser);
router.get('/users/:id', cUser.getUserById);
router.get('/users/:id/transactions', cUser.getTransactionsByUserId);

router.get('/products',cProduct.getProducts);
router.get('/products/:id',cProduct.getProductById);

router.get('/transactions',cTransaction.getTransactions);
router.get('/transactions/:id',cTransaction.getTransactionById);
router.post('/transactions',cTransaction.newTransaction);

module.exports = router;
