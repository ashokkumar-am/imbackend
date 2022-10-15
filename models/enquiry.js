const mongoose = require('mongoose');

const enquirySchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    industry:{type:String},
    requirements:{type:String,required:true},
},
{
    timestamps:true,
});

module.exports = mongoose.model('Enquiry',enquirySchema);