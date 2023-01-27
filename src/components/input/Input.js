import PropTypes from 'prop-types';
import './Input.scss';

const Input = (props) => {
  const { name, id, type, value, className, labelText, placeholder, handleChange, style } = props;
  return (
    <div className="form-row">
      {labelText && (
        <label htmlFor={name} className="form-label">
          {labelText}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`form-input ${className}`}
        autoComplete="false"
        style={style}
      ></input>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  style: PropTypes.object
};

export default Input;
