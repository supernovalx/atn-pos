var mongoose = require('mongoose');
var Transaction = mongoose.model('Transaction');

module.exports.getTransactions = function(req, res) {
    Transaction.find({}, (err, result) => {
        if (err) {
          console.log(err);
          handleError(res, "DB err", err.message, 400);
        } else {
          res.status(200).json(result);
        }
      });
};

module.exports.getTransactionById = function(req, res) {
  Transaction.findOne({ _id: req.params.id })
    .populate("productIds.id")
    .then(function(data) {
      // If we were able to successfully find an Product with the given id, send it back to the client
      res.json(data);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};

module.exports.newTransaction = function(req, res) {
    if (!req.body.userId) {
        handleError(res, "Invalid user input", "Must provide a transaction.", 400);
      } else {
        new Transaction(req.body).save((err, result) => {
          if (err) {
            console.log(err);
            res.error("err");
          } else {
            res.status(200).json(result._id);
          }
        });
      }
};
