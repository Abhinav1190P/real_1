const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

 name:{
     type: String,
     minlength: 5,
     maxlength: 20,
     required:true
 },
 lastname:{
    type: String,
    minlength: 5,
    maxlength: 20,
    required:true
 },
 email:{
type:String,
required:true,
unique:1
 }


})

const User = mongoose.model('User',userSchema);

module.exports = {
    User
}