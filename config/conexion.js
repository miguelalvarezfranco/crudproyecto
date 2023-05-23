const mongoose = require('mongoose')

const uri ="mongodb+srv://miguel:Miguel123@cluster0.g6d6tjy.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true });

module.exports = mongoose;
