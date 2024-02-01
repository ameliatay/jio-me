var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
});
var event = new mongoose.model('Event', schema);
module.exports = event;