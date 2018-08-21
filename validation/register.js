const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.firstname = 'Họ phải lớn hơn 2 hoặc nhỏ hơn 30 ký tự';
  }

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = 'Họ không được bỏ trống';
  }
  if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = 'Tên phải lớn hơn 2 hoặc nhỏ hơn 30 ký tự';
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = 'Tên không được bỏ trống';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email không được bỏ trống';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email không đúng định dạng';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Mật khẩu không được bỏ trống';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Mật khẩu phải lớn hơn 6 ký tự';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Xác nhận mật khẩu không được bỏ trống';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Mật khẩu xác nhận không chính xác';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
