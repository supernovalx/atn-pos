var express = require("express");
var bodyParser = require("body-parser");
var morgan = require('morgan')
var app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());


var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:020300@atn-rt7kb.mongodb.net/atn?retryWrites=true&w=majority', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Db connected");
});

var Product = mongoose.model('Product', {
    name: String,
    price: Number,
    description: String,
});

var Transaction = mongoose.model('Transaction', {
    userId: mongoose.Schema.Types.ObjectId,
    createdAt: Date,
    productIds: Array,
});

var User = mongoose.model('User', {
    userName: String,
    password: String,
    role: String,
    description: String
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }

app.post('/api/users',(req,res)=>{
    if (!req.body.userName) {
        handleError(res, "Invalid user input", "Must provide a user.", 400);
      } else {
        new User(req.body).save((err,result)=>{
            if (err) {
                console.log(err);
                res.error('err');
              } else {
                res.status(200).json(req.body);
              }
        });
      }
    
    console.log('POST /users',req.body);
});

app.get('/api/users',(req,res)=>{
    User.find({},(err,result)=>{
        if (err) {
            console.log(err);
            handleError(res,"DB err",err.message,400);
          } else {
            res.status(200).json(result);
          }
    });
});

app.get('/api/users/:id',(req,res)=>{
    User.findById(req.params.id,(err,result)=>{
        if (err) {
            console.log(err);
            handleError(res,"DB err",err.message,400);
          } else {
            res.status(200).json(result);
          }
    });
});

app.get('/api/users/:id/transactions',(req,res)=>{
    Transaction.find({userId:req.params.id},(err,result)=>{
        if (err) {
            console.log(err);
            handleError(res,"DB err",err.message,400);
          } else {
            res.status(200).json(result);
          }
    });
});

app.get('/api/products',(req,res)=>{
    Product.find({},(err,result)=>{
        if (err) {
            console.log(err);
            handleError(res,"DB err",err.message,400);
          } else {
            res.status(200).json(result);
          }
    });
});

app.get('/api/transactions',(req,res)=>{
    Product.find({},(err,result)=>{
        if (err) {
            console.log(err);
            handleError(res,"DB err",err.message,400);
          } else {
            res.status(200).json(result);
          }
    });
});

app.post('/api/transactions',(req,res)=>{
    if (!req.body.userId) {
        handleError(res, "Invalid user input", "Must provide a transaction.", 400);
      } else {
        new Transaction(req.body).save((err,result)=>{
            if (err) {
                console.log(err);
                res.error('err');
              } else {
                res.status(200).json(req.body);
              }
        });
      }
})

