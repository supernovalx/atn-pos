var mongoose = require( 'mongoose' );
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: String,
  description: String
});

userSchema.methods.validPassword = function(password) {
  return this.password === password;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    userName: this.userName,
    role: this.role,
    description: this.description,
    exp: expiry.getTime() / 1000,
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

mongoose.model('User', userSchema);
