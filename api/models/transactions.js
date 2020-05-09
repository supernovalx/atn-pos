var mongoose = require( 'mongoose' );

var transactionSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    createdAt: Date,
    productIds: [
        {id:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},quantity:Number}
    ],
});

mongoose.model('Transaction', transactionSchema);
