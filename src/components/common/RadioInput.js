import React from 'react';

const RadioInput = ({ formik, radioOptions, name }) => {
  return (
    <div className="formControl">
      {radioOptions.map((item) => (
        <React.Fragment key={item.value}>
          <input
            type="radio"
            id={item.value}
            name={name}
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values[name] === item.value}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </React.Fragment>
      ))}
      {formik.errors[name] && formik.values[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default RadioInput;
