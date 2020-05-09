var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports.getProducts = function(req, res) {
    Product.find({}, (err, result) => {
        if (err) {
          console.log(err);
          handleError(res, "DB err", err.message, 400);
        } else {
          res.status(200).json(result);
        }
      });
};

module.exports.getProductById = function(req, res) {
  Product.findById(req.params.id, (err, result) => {
      if (err) {
        console.log(err);
        handleError(res, "DB err", err.message, 400);
      } else {
        res.status(200).json(result);
      }
    });
};