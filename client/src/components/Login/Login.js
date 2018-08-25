import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from './../../common/TextFieldGroup';
import { loginAdmin } from './../../actions/authAction';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/confirm');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onLogin = (e) => {
    e.preventDefault();
    const adminData = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.loginAdmin(adminData);
    // console.log(this.props); 
  }
  render() {
    const listInput = [
      { name: 'email', icon: "icon_profile", placeholder: 'Email', value: this.state.email, onChange: this.onChange, type: 'text' },
      { name: 'password', icon: "icon_key_alt", placeholder: 'Password', value: this.state.password, onChange: this.onChange, type: 'password' },
    ]
    let returnInputGroup = listInput.map((list, index) => {
      return (
        <TextFieldGroup key={index}
          name={list.name}
          icon={list.icon}
          placeholder={list.placeholder}
          value={list.value}
          onChange={list.onChange}
          type={list.type}
        />
      )
    })
    return (
      <div className="login-img3-body">
        <div className="container">
          <form className="login-form" onSubmit={this.onLogin}>
            <div className="login-wrap">
              <p className="login-img"><i className="icon_lock_alt"></i></p>
              {returnInputGroup}
              <label className="checkbox">
                <input type="checkbox" value="remember-me" /> Remember me
            <span className="pull-right"> <a href="#"> Forgot Password?</a></span>
              </label>
              <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
              <button className="btn btn-info btn-lg btn-block" disabled>Signup</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}
Login.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})
export default connect(mapStateToProps, { loginAdmin })(Login);