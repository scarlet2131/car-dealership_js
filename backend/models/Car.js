const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    kms: { type: Number, required: true },
    vin: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    images: { type: [String], required: true }, // Array of image URLs
});

module.exports = mongoose.model('Car', carSchema);
