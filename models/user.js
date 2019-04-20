var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    createdAt: { type: Date, expires: '1m', default: Date.now },
    uname: {type: String },
    caste : {type: String},
    education: {type: String},
    salary: {type: Number}
});

// userSchema.methods.encryptPassword = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(5, null), null);
// };

// userSchema.methods.validPassword = function(password){
//   return bcrypt.compareSync(password, this.password);
// };








module.exports = mongoose.model('User', userSchema);