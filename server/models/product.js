const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: String,
    srp: Number,
    discountedPrice: Number,
    desc: String,
    image: String
});

module.exports = mongoose.model('Product', productSchema);