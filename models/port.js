const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const portSchema = new Schema({
    port : {
      type : Number,
      required : true,
    },
    
})
module.exports  = Port = mongoose.model('port', portSchema);