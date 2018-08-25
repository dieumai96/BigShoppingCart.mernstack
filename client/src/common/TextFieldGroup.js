import React from 'react'
import PropTypes from 'prop-types';
const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  type,
  onChange,
  icon
}) => {
  return (
        <div className="input-group">
            <span className="input-group-addon"><i className={icon}></i></span>
            <input 
              type = {type}
              className = "form-control"
              placeholder = { placeholder }
              onChange = {onChange}
              value = {value}
              name = {name}
            
            />
        </div>
  )
}
TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  // error: PropTypes.string, 
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
}

export default TextFieldGroup;

