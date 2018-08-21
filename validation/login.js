const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function valiateLoginInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email không được bỏ trống';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email không đúng định dạng';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Mật khẩu không được bỏ trống';
  }
 
  return {
    errors,
    isValid : isEmpty(errors),
  }
}