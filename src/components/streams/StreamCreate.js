import React from "react";
import { reduxForm, Field } from "redux-form";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};
const renderInput = ({ input, label, meta }) => {
  console.log(meta);
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      <div>{renderError(meta)}</div>
    </div>
  );
};
const onSubmit = (formValues) => {
  console.log(formValues);
};
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
function StreamCreate(props) {
  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">Submit</button>
      <button className="ui button primary">Clear</button>
    </form>
  );
}

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
