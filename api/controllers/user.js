var mongoose = require('mongoose');
var User = mongoose.model('User');
var Transaction = mongoose.model('Transaction');

module.exports.getUsers = function(req, res) {
    User.find({}, (err, result) => {
        if (err) {
          console.log(err);
          handleError(res, "DB err", err.message, 400);
        } else { 
          res.status(200).json(result);
        }
      });
};

module.exports.getUserById = function(req, res) {
    User.findById(req.params.id, (err, result) => {
        if (err) {
          console.log(err);
          handleError(res, "DB err", err.message, 400);
        } else {
          res.status(200).json(result);
        }
      });
};

module.exports.getTransactionsByUserId = function(req, res) {
    Transaction.find({ userId: req.params.id }, (err, result) => {
        if (err) {
          console.log(err);
          handleError(res, "DB err", err.message, 400);
        } else {
          res.status(200).json(result);
        }
      });
};

module.exports.newUser = function(req, res) {
    if (!req.body.userName) {
        handleError(res, "Invalid user input", "Must provide a user.", 400);
      } else {
        new User(req.body).save((err, result) => {
          if (err) {
            console.log(err);
            res.error("err");
          } else {
            res.status(200).json(req.body);
          }
        });
      }
};
