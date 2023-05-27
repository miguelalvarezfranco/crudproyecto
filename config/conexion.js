const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.g6d6tjy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true });

module.exports = mongoose;