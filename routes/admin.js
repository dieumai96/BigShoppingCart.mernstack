const express = require('express');
const bcrypt = require('bcryptjs');
const Admin = require('./../models/admin');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const keys = require('./../config/keys');

const validateRegisterInput = require('./../validation/register');
const valiateLoginInput = require('./../validation/login');

// @route   GET api/admin/Test
// @desc    test admin
// @access  Public

router.get('/test', (req, res) => {
})

// @route   GET api/admin/Test
// @desc    test admin
// @access  Public

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Admin.findOne({ email: req.body.email }).then(admin => {
    if (admin) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const newAdmin = new Admin({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          newAdmin.password = hash;
          newAdmin
            .save()
            .then(admin => res.json(admin))
            .catch(err => console.log(err));
        });
      });
    }
  });
});


// @route   GET api/admin/login
// @desc    Login admin
// @access  Public


router.post('/login',(req,res,next)=>{
  const {errors, isValid} = valiateLoginInput(req.body);
  if(!isValid) { 
    res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  Admin.findOne({ email : req.body.email})
  .then(admin => {
    if(!admin){
      errors.email = 'Người dùng không tồn tại';
      res.status(400).json(errors);
    }
    bcrypt.compare(password,admin.password).then(isMatch => {
      if(isMatch){
        const payload = { id : admin.id, firstname : admin.firstname , lastname : admin.lastname , email : admin.email , date : Date.now};
        jwt.sign(
          payload,
          keys.secretOnKey,
          {expiresIn : 360000},
          (err, token) => {
            res.json({
              success : true,
              token : 'Bearer ' + token,
            })
          }
        )
      }else{
        errors.password = 'Mật khẩu không đúng';
        res.status(400).json(errors);
      }
    })
    
  }) 
})

router.get('/current', passport.authenticate('jwt',{session: false}), (req,res,next)=>{
  res.status(200).json({
    firstname : req.user.firstname,
    lastname : req.user.lastname,
    id : req.user.id,
    email : req.user.email,
  })
})
module.exports = router;