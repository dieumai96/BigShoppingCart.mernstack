const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    firstname : {
      type : String ,
      required : true,
    },
    lastname : {
      type : String ,
      required : true,
    },
    email :{
      type : String,
      required:true,
    },
    password : {
      type : String , 
      required : true,
    },
    level : {
      type : Number,
      default : 2,
    },
    date : {
      type : Date,
      default : Date.now,
    }
})
module.exports  = Admin = mongoose.model('admins', adminSchema);