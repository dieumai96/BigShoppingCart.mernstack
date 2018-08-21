const express = require('express');

const bcrypt = require('bcryptjs');
const Admin = require('./../models/admin');
const router = express.Router();


const validateRegisterInput = require('./../validation/register');
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

module.exports = router;