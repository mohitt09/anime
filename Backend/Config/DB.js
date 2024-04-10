const mongoose = require('mongoose');

const db = async function db() {
    try {
         await mongoose.connect('mongodb://127.0.0.1:27017/Anime');
        console.log('Connected to MongoDB'); 
    } catch (error) {
        console.error('Error connecting to MongoDB:', error); 
    }
}

module.exports = db;