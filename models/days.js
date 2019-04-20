var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    mon: { type: Object , required: true},
});

module.exports = mongoose.model('Days', schema);