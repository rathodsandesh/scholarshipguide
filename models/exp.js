var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TestSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, expires: '1m', default: Date.now }
});

module.exports = mongoose.model('Exp', TestSchema);