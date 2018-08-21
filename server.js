const express = require('express');
const keys = require('./config/keys') ;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const adminRoutes = require('./routes/admin');
// monggo config 

mongoose.connect(keys.mongoURI)
.then(res => console.log('Connected MongoDB'))
.catch(err => console.log(err));



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use('/api/admin',adminRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`Server in running in port ${PORT}`);
})