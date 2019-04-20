var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    //imagePath: { type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    link: {type:String,required:true},
    caste: {type: String, required:true},
    education: {type: String,required:true},
    salary: {type: Number, required: true}
});

module.exports = mongoose.model('Scholarship', schema);